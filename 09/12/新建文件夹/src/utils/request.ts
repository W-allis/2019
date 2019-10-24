import axios from 'axios'

const request = axios.create({

})

request.interceptors.request.use(config => { 
  return config
})

request.interceptors.response.use(response => {
  return response
}, error => {
  return error
}) 

export default request