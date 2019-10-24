import 'reflect-metadata'
import fe from '../fe'

import { getParams } from '../utils/utils'

export default function Injectable() {
  return target => {
    const providers = Reflect.getMetadata('design:paramtypes', target)

    const instance = Reflect.construct(target, providers.map(item => fe._providers.get(item.name)))

    fe._providers.set(target.name, instance)
  }
}