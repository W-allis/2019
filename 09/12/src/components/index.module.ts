// import FormComponent from './form/index'
import { Module } from '../decorators/module'

import FormComponent from './form/form.component'
import ApiService from '../service/request.service'

@Module({
  components: {
    FormComponent
  },
  provides: [ApiService]
})
export default class ComponentsModule { }
// console.dir(FormComponent)
