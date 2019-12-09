export function stop(stop) {
  return (target, eventHandler) => {
    // console.log(args)
    return (...props) => {
      eventHandler.call(target, ...props)
    }
  }
}