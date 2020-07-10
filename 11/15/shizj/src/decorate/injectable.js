// const store = {

// }

// const store = {

// }

// 发布订阅，实例初始化属性
export function provide(someOptions) {
  return (target, key, descriptor) => {

    // console.log(target)
    const _constructor = target.constructor // eslint-disable-line
    // console.log(target, descriptor)
    
    // Object.set
    // target.isTest = true
    // target.prototype.constructor = function () {
    //   console.log('----------')
    //   console.log(key)
    //   _constructor()
    // }
    // console.log(target)
    // target.constructor = function () {
    //   _constructor()
    //   console.log(key)
    //   console.log('----------')
    // }
    // console.log(target)
    // store[key] = target[key]
    // Reflect.get
    // store[key] = Reflect.construct(target.constructor, {}) 
    // console.log(Reflect.construct(target.constructor, {}))
    // console.log(target, key, target[key])

    return
  }
}

export function inject(key) {

  // console.log(store[key])

  return (target, key, descriptor) => {
    // console.log(args)
    console.log(descriptor)
    // Object.defineProperty(descriptor, 'value', {
    //   get() {
    //     return 1234
    //   }
    // })
    target[key] = 1223
    descriptor.value = 1234
    console.log(descriptor)
    return descriptor
    // target.isTest = true
  }
}