import axios from 'axios'

const request = axios.create({
    timeout: 60000
})

request.interceptors.request.use(config => {
    return config
}, error => {

})

request.interceptors.response.use(res => {
    return res
}, error => {

})

export default request
