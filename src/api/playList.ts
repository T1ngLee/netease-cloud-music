import request from '@/untils/request.ts'

export const playlistDetail = (params: any = '') => {
  return request(
    {
      url: '/playlist/detail',
      method: 'get',
      params
    }
  )
}