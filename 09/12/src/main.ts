// import './utils/frontRequest'

import AppModule from './app.module'

// import './utils/anelyze'
import { Component, Event, Model, Observable } from './decorators'
import UserApi from './api/user'

@Component({
  name: 'login'
})
class NameModule {
  // @Model({
  //   el: document.querySelector('.btn'),
  //   props: ['class'] 
  // })
  @Observable
  private name: string = '123'

  constructor(user: UserApi) {
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
