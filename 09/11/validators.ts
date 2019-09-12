import { Validator, TargetControl } from './type'

export default new class ValidatorFn {
  constructor() {}

  maxLength: Validator = (params: any): TargetControl => {
    return <T>(value: T): boolean => {
      if (!value) return false
    
      if ((<any>value).length > params) return false

      return true
    }
  }

  required: Validator = (params: any): TargetControl => {
    return <T>(value: T): boolean => {
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