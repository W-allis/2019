import parse5 from 'parse5'

import html from '../../index.html'

function _module(modules: Function[]) {

}

export default class Platform {
  constructor() {}

  static init(_module) {
    // console.dir(document.body)
    const app = new _module()

  }
}

function analyze(html) {
  let node = parse5.parse(html)
  


  return filterBody(node)
}

function filterBody(...node) {
  // let result = null

  // for (let item of node) {
    
  //   if (item.childNodes) {
  //     filterBody()
  //   }
  // }

  // return result
}

console.log(analyze(html))