// const store = {

// }

export function provide(key) {
  return (target, key) => {
    // console.log(args)
    // store[key] = target[key]
    // Reflect.get
    // console.log(Reflect.construct(target.constructor, {}))
    // console.log(target, key, target[key])
  }
}

export function inject(key) {
  return (...args) => {
    // console.log(args)
  }
}