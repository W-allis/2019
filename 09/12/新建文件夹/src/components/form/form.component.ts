import { OnInit } from "../../hooks/index"
import { Component } from "../../decorators"
import ApiService from "../../service/request.service"

declare interface Model {
  name: string
  password: string
}

@Component({
  selector: 'fe-form',
  template: `<form></form>`
})
export default class FormComponent implements OnInit {
  
  loginModel: Model

  constructor(private api: ApiService, private test) {
    // console.log(api.getName())
    this.loginModel = {
      name: 'wallis',
      password: '12335'
    }
  }

  ngOnInit() {

  }
}