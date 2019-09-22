import request from './request'
import axios from 'axios'
console.dir(axios)
import { $RequestConfig } from './type.d'

// (<any>axios).cancel = function() {
  
// }
// import AxiosInstance from 'axios/index.d'
// console.log(AxiosInstance)

class $FrontRequest {

  private source: any

  constructor(config: $RequestConfig) {
    this.source = this.token()
  }

  private init() {
    
  }

  token() {
    const token = axios.CancelToken

    return token.source()
  }

  cancel() {
    this.source.cancel()
  }
}

function $request(options) {
  // return request(options)
  return new $FrontRequest(options)
}

$request.create = function(config: $RequestConfig) {
  // if (typeof config !== 'number' || typeof config !== 'function') return new Error()

  return $request
}


// const row = {
//   code: 'a.b.c.d.e',
//   parentId: ''
// }

// const projectWbs = [
//   {
//     children: [

//     ]
//   }
// ]

// var result = (function(value: number, parentId) {
//   const max: number = Math.max(...projectWbs[0].children.filter(item => item.id === parentId).map(item => item.children)[0].map(item => item.split('.')[2]))

//   if (value < max) {
//     return false
//   }

// })(Number(row.code.split('.')[2]), row.parentId)