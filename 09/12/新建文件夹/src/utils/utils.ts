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

export function on(el, type = 'click', handler: Function, options: boolean = false) {
  el.addEventListener(type, handler, options)
}

export function getParams(func) {
//   const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg
//   const ARGUMENT_NAMES = /^function\s*[^\(]*\(\s*([^\)]*)\)/m
  const fnStr = func.toString()
// console.log(fnStr)
  return fnStr
    .replace(/[/][/].*$/mg,'') // strip single-line comments
    .replace(/\s+/g, '') // strip white space
    .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments  
    .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters  
    .replace(/=[^,]+/g, '') // strip any ES6 defaults  
    .split(',').filter(Boolean)
}