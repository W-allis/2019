import request from '../utils/request'

export function userInfo(userId: string) {
  return request({
    method: 'get',
    url: '/api/user/info',
    data: {
      userId
    }
  })
}