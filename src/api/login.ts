import request from '@/untils/request.ts'

export const loginByPhone = (params: any) => {
  return request(
    {
      url: '/login/cellphone',
      method: 'post',
      params
    }
  )
}