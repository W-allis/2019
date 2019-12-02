import { Injectable } from '../decorators'

@Injectable()
export default class RequestService {

  baseUri: string = 'http://www.baidu.com'

  constructor() {}

  post(AjaxOptions) {
    
  }
}