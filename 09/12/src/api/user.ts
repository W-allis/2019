import Injectable from 'src/decorators/injectable'
import RequestService from 'src/service/request.service';

@Injectable()
export default class UserApi {
  
  constructor(private request: RequestService) {
  }

  userInfo(userId: string) {
    return this.request.post({
      method: 'get',
      url: '/api/user/info',
      data: {
        userId
      }
    })
  }
}