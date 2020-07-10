// import { log } from '../decorate/log'

// @log({
//   type: 'I/O'  
// })
export function login (params) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve({
      message: 'success'
    }))
  })
}