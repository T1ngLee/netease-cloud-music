import request from '@/untils/request.ts'

export const getSongUrl = (params: any): any => {
  return request(
    {
      url: '/song/url',
      method: 'get',
      params
    }
  )
}