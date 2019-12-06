export function stop(stop) {
  return (...args) => {
    console.log(args)
  }
}