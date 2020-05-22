import request from '@/untils/request.ts'

export const getBanner = (params: any = ''): any => {
  return request(
    {
      url: '/banner',
      method: 'get',
      params
    }
  )
}