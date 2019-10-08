import Injectable from 'src/decorators/injectable'
import RequestService from 'src/service/request.service';


@Injectable()
export default class UserApi {
  
  constructor(private request: RequestService) {
    // console.log(this)
  }

  userInfo(userId: string) {
    return this.request({
      method: 'get',
      url: '/api/user/info',
      data: {
        userId
      }
    })
  }
}