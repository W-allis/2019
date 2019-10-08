import 'reflect-metadata'
import fe from '../fe'

declare interface ComponentOption {
  template: string,
  selector: string,
  styles?: Array<string>
}

// const paramsReg = /function\s*\w*\(([\s\S]*?)\)/

// html引入问题
// providers供应商问题
export default function Component(options) {
  return target => {
    // console.log(target)
    const instance = Reflect.construct(target, [null])

    fe._events.forEach(event => {
      event(instance)
    })
  }
}