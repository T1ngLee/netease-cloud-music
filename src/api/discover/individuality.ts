import request from '@/untils/request.ts'

// banner
export const getBanner = (params: any = ''): any => {
  return request(
    {
      url: '/banner',
      method: 'get',
      params
    }
  )
}

// 推荐歌单
export const getSongList = (params: any = ''): any => {
  return request({
    url: '/personalized',
    method: 'get',
    params
  })
}

// 新音乐
export const getNewSong = (params: any = ''): any => {
  return request({
    url: '/personalized/newsong',
    method: 'get',
    params
  })
}

// 独家放送 /personalized/privatecontent
export const privatecontent = (params: any = ''): any => {
  return request({
    url: '/personalized/privatecontent',
    method: 'get',
    params
  })
}

// 推荐mv
export const mv = (params: any = ''): any => {
  return request({
    url: '/personalized/mv',
    method: 'get',
    params
  })
}