declare interface TargetControl {
  <T>(value: T): boolean
}

declare interface Validator {
  (params?: any): TargetControl
}

const validatorFn = new class ValidatorFn {
  constructor() {}

  maxLength: Validator = (params: any): TargetControl => {
    return <T>(value: T): boolean => {
      if (!value) return false
    
      if ((<any>value).length > params) return false

      return true
    }
  }

  required: Validator = (required: boolean): TargetControl => {
    return <T>(value: T): boolean => {
      if (!required) return true

      if (!value) return false
    
      return true
    }
  }

  max: Validator = (params: any): TargetControl => {
    return <T>(value: T): boolean => {
      if (!value) return false

      if (value > params) return false

      return true
    }
  }
}

declare interface Rule {
  required?: boolean
  type?: string
  pattern?: RegExp
  validator?: TargetControl
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  message?: string 
}

class FormControl {

  public value: any = undefined

  public error: string = ''

  // public validators: { message: string, handler: TargetControl }[] = []
  public validators: Array<{ message: string, handler: TargetControl }> = []

  constructor(value: any, rules: Rule[] | Rule) {
    this.value = value
    
    !(rules instanceof Array) && (rules = [rules])

    rules.forEach(rule => {
      if (rule.hasOwnProperty('required')) {
        this.validators.push({
          message: <string>rule.message,
          handler: validatorFn.required(rule.required)
        })
      }

      if (rule.hasOwnProperty('max')) {
        this.validators.push({
          message: <string>rule.message,
          handler: validatorFn.max(rule.max)
        })
      }

      if (rule.hasOwnProperty('maxLength')) {
        this.validators.push({
          message: <string>rule.message,
          handler: validatorFn.maxLength(rule.maxLength)
        })
      }

      if (rule.hasOwnProperty('validator')) {
        this.validators.push({
          message: <string>rule.message,
          handler: <TargetControl>rule.validator
        })
      }
    })

  }

  validate(): boolean {
    let i: number = 0, curr: { message: string, handler: TargetControl }
    
    while(curr = this.validators[i++]) {
      if (!curr.handler(this.value)) {
        this.error = curr.message
        // this.error = 
        return false
      }
    }
    return true
  }

}

class FormGroup {

  public validators: { [key: string]: FormControl } = { }

  public errors: {} = {}

  constructor(validators: { [key: string]: FormControl }) {
    this.validators = validators
  }

  public validate(callback: Function) {

    const valid = Object.keys(this.validators).every((key: string): boolean => this.validators[key].validate())

    // 收集错误日志逻辑需更新
    this.errors = Object.keys(this.validators).reduce((total: { [key: string]: string }, curr: string) => (total[curr] = this.validators[curr].error, total), {})

    callback(valid)
  }

  public validateField() {

  }

  public resetForm() {

  }
}

interface Model {
  name: any
  password: string
}

const loginModel = {
  name: 12,
  password: '321'
}

const loginForm = new FormGroup({
  name: new FormControl(loginModel.name, [{
    required: false,
    message: '用户名不能为空'
  }, {
    max: 10,
    message: '用户名不能大于10'
  }]),
  password: new FormControl(loginModel.password, {
    required: true,
    message: '密码不能为空'
  })
})

loginForm.validate((valid: boolean) => {
  console.log(valid)
})

console.log(loginForm)

class Foo<T> {
  value: T
  
  bar: (x: T, y: T) => T
  
  constructor() {

  }
}

const foo = new Foo<number>()

foo.value = 1

foo.bar = (x: number, y: number) => x * y
