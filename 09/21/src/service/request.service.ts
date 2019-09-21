import axios from 'axios'

console.log(axios)

const request = axios.create({

})

request.interceptors.request.use((config: any) => {
    return config
})

request.interceptors.response.use((response: any) => {
    return response
}, (error: any) => {

    console.error(error)

    return new Error(error)
})

export default request
