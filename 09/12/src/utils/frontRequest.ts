import request from './request'
import axios from 'axios'

import { $RequestConfig } from './type.d'

(<any>axios).cancel = function() {
  
}
// import AxiosInstance from 'axios/index.d'
// console.log(AxiosInstance)

class $FrontRequest {
  constructor() {
    
  }

  token() {
    const token = axios.CancelToken

    return token.source()
  }
}

function $request(options) {
  // return request(options)
}

$request.create = function(config: $RequestConfig) {
  
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