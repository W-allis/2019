import { Module } from './decorators/module'
import AppComponent from './home/app.component'
import AppRoutingModule from './app.routing'

import RequestService from './service/request.service'
import UserApi from './api/user'

@Module({
  components: [
    AppComponent
  ],
  modules: [
    AppRoutingModule
  ],
  provides: [RequestService, UserApi]
})
export default class AppModule{ }