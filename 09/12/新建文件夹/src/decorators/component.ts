import 'reflect-metadata'
import fe from '../fe'

declare interface ComponentOption {
  template: string,
  selector: string,
  styles?: Array<string>
}

// const paramsReg = /function\s*\w*\(([\s\S]*?)\)/

// 组装插头
export default function Component(options) {
  return target => {
    target.search = '123'
    // fe._component()
    // console.log(target)
    // const providers = Reflect.getMetadata('design:paramtypes', target)

    // const instance = Reflect.construct(target, providers.map(item => fe._providers.get(item.name)))

    // fe._events.forEach(event => {
    //   event(instance)
    // })
  }
}