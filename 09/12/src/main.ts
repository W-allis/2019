// import './utils/frontRequest'

import AppModule from './app.module'

// import './utils/anelyze'
import { Component, Event } from './decorators'
import UserApi from './api/user'

@Component({
  name: 'login'
})
class NameModule {

  private name: string = '123'

  constructor(uesr: UserApi) {
    console.dir(this)
  }

  @Event({
    el: document.querySelector('.btn'),
    type: 'click'
  })
  btnClick($event) {
    console.log(this)
  }

}
