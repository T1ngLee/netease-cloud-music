import request from '@/untils/request.ts'

export const userDetail = (params: any) => {
  return request(
    {
      url: '/user/detail',
      method: 'get',
      params
    }
  )
}