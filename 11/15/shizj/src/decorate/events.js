export function stop(target, instance, descriptor) {
  // console.log(target, instance, descriptor)
  const _value = descriptor.value
  
  // do not use arrow function
  function stopPropagation(event) {
    event.stopPropagation()
    _value.call(this, event)
  }

  descriptor.value = stopPropagation
  return descriptor
}