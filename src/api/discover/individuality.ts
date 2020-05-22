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