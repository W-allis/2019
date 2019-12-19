export function validate(rules, callback) {
  return (target, eventHandler) => {
    // console.log(args)
    return (...props) => {
      eventHandler.call(target, ...props)
    }
  }
}