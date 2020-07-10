export function stop(target, instance, descriptor) {
  // console.log(target, instance, descriptor)
  const _value = descriptor.value
  
  // do not use arrow function
  function stopPropagation(event) {
    event.stopPropagation()
    _value.call(this, event)
  }
  // debugger
  descriptor.value = stopPropagation
  return descriptor
}

export function prevent(target, instance, descriptor) {
  const _value = descriptor.value

  // do not use arrow function
  function preventDefault(event) {
    event.preventDefault()

    _value.call(this, event)
  }

  descriptor.value = preventDefault

  return descriptor
}
