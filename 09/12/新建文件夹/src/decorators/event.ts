import { on } from '../utils/utils'

import fe from '../fe'

interface EventInterface {
  el: Element
  type?: string
  catch?: boolean
}

export default function Event(options: EventInterface) {
  return (target, propertyKey, descriptor) => {
    console.log(descriptor)
    
    function wrap(_target) {
      // bind?
      on(options.el, options.type, function($event) {
        descriptor.value.call(_target, $event)
      }, options.catch)
    }

    fe._events.push(wrap)
  }
}