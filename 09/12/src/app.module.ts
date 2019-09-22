import { Module } from './decorators/module'
import AppComponent from './home/app.component'

@Module({
  components: {
    AppComponent
  },
  modules: {

  },
  provides: []
})
export default class AppModule{ }