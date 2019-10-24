import Router from './router'
import AppComponent from './home/app.component'

const routes = [
  { path: '/', component: AppComponent }
]

@Router({
  routes
})
export default class AppRoutingModule { }