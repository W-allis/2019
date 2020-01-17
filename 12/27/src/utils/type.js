function getType(value) {
  return Object.prototype.call(value).toString().slice(8, -1)
}

export function isArray(value) {
  return getType(value) === 'array'
}

export function isFunction(value) {
  return getType(value) === 'function'
}

export function isObject(value) {
  return getType(value) === 'object'
}

export function isNull(value) {
  return getType(value) === 'null'
}

export function isNaN(value) {
  return isNaN(value)
}