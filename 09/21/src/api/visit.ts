import request from '../service/request.service'

export function result(data: Object) {
    return request({
        url: '',
        type: 'post',
        data
    })
}