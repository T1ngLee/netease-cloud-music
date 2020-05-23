import request from '@/untils/request.ts'

export const songInfo = (params: any): any => {
  return request(
    {
      url: '/song/detail',
      method: 'get',
      params
    }
  )
}

export const songUrl = (params: any): any => {
  return request(
    {
      url: '/song/url',
      method: 'get',
      params
    }
  )
}