import { OnInit } from "../../hooks/index"
import { Component } from "../../decorators/index"
import ApiService from "../../service/request.service"

declare interface Model {
  name: string
  password: string
}

import html from './index.html'

console.log(html)

console.log(require('./index.html'))

@Component({
  template: './index.html'
})
export default class FormComponent implements OnInit {
  
  loginModel: Model

  constructor(private api: ApiService) {
    // console.log(api.getName())
    this.loginModel = {
      name: 'wallis',
      password: '12335'
    }
  }

  ngOnInit() {

  }
}