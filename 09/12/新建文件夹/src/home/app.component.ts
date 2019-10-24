import { Component, Event, Model, Observable } from "../decorators"

import UserApi from '../api/user'

@Component({
  selector: 'app-root',
  template: './app.component.html'
})
export default class AppComponent {
  @Observable
  private name: string = '123'

  constructor(public user: UserApi) {
    console.dir(this)
  }

  @Event({
    el: document.querySelector('.btn'),
    type: 'click'
  })
  btnClick($event) {
    console.log(this.name)
  }
}
