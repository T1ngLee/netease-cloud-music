import request from '@/untils/request.ts'

export const hotCommend = (params: any) => {
  return request ({
    url: '/comment/hot',
    method: 'get',
    params
  })
}

export const musicComment = (params: any) => {
  return request ({
    url: '/comment/music',
    method: 'get',
    params
  })
}

export const likeComment = (params: any) => {
  return request ({
    url: '/comment/like',
    method: 'get',
    params
  })
}