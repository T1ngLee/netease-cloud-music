import axios from 'axios'

const service = axios.create({
  baseURL: 'http://192.168.5.159:3000',
  timeout: 5000
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
  (error) => {
    console.log('响应失败:' + error)
    return Promise.reject(error)
  }
)
export default service
