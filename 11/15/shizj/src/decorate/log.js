export function log () {
  return (target, key, descriptor) => {
    console.log(target, key, descriptor)
  }
}
