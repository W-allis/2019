import 'reflect-metadata'
import fe from '../fe'

import { getParams } from '../utils/utils'

export default function Injectable() {
  return target => {
    const providers = Reflect.getMetadata('design:paramtypes', target)
    const instanceParams = getParams(target)
    const instance = Reflect.construct(target, [null])

    providers.forEach((item, index) => {
      instance[instanceParams[index]] = fe._providers.get(item.name)
    })

    fe._providers.set(target.name, instance)
  }
}