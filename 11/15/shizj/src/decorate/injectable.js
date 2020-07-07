// const store = {

// }

const store = {

}

export function provide() {
  return (target, key, descriptor) => {
    console.log(target)
    // store[key] = target[key]
    // Reflect.get
    store[key] = Reflect.construct(target.constructor, {}) 
    // console.log(Reflect.construct(target.constructor, {}))
    // console.log(target, key, target[key])

    return descriptor
  }
}

export function inject(key) {

  console.log(store[key])

  return (...args) => {
    // console.log(args)
  }
}