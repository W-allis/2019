import 'reflect-metadata'

import './utils/frontRequest'

import AppModule from './app.module'

import './utils/anelyze'

class NameModule {

  private name: string = '123'

  constructor() {

  }

  @Event({
    el: document.querySelector('.btn'),
    type: 'click'
  })
  btnClick() {
    console.log(this)
    console.log(123)
  }

}

interface EventInterface {
  el: Element
  type?: string
  catch?: boolean
}

function Event(options: EventInterface) {
  return (target, propertyKey, descriptor) => {
    // console.log(target, propertyKey, descriptor)
    const _construst = Reflect.construct(target, null)
    options.el.addEventListener(options.type || 'click', target[propertyKey].bind(_construst), options.catch || false)
  }
}