import axios from 'axios'

const service = axios.create({
  // baseURL: 'http://192.168.5.185:3000',
  baseURL: process.env.VUE_APP_API,
  timeout: 5000,
  withCredentials: true
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log('请求失败:' + error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      return Promise.reject(res)
    } else {
      return res
    }
  },
  (error: any) => {
    console.log('响应失败:' + error)
    // console.log(error.response.status)
    // if (error.response.status === 501) {
    //   return Promise.reject(501)
    // }
    return Promise.reject(error)
  }
)
export default service
