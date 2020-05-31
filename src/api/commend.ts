import request from '@/untils/request.ts'

export const hotCommend = (params: any) => {
  return request ({
    url: '/comment/hot',
    method: 'get',
    params
  })
}