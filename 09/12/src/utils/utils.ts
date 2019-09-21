export function merge(target: { [key: string]: any }, resource: { [key: string]: any }) {
  Object.keys(resource).forEach(key => {

    if (typeof target[key] === 'object' && typeof resource[key] === 'object' ) {
      target[key] = merge(target[key], resource[key])
    } else {
      target[key] = resource[key]
    }
  })

  return target
}