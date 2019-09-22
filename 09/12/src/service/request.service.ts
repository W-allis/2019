import { Injectable } from 'src/decorators/injectable'

@Injectable()
export default class ApiService {
  constructor() {}

  getName() {
    return 'wallis'
  }
}