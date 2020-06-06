import request from '@/untils/request.ts'

// 默认搜索关键词
export const searchDefault = (params: any = '') => {
  return request(
    {
      url: '/search/default',
      method: 'get',
      params
    }
  )
}

// 热搜
export const hotSearch = (params: any = '') => {
  return request(
    {
      url: '/search/hot/detail',
      method: 'get',
      params
    }
  )
}

// 搜索建议
export const searchSuggest = (params: any = '') => {
  return request(
    {
      url: '/search/suggest',
      method: 'get',
      params
    }
  )
}

// 搜索多重匹配
export const searchMultimatch = (params: any = '') => {
  return request(
    {
      url: '/search/multimatch',
      method: 'get',
      params
    }
  )
}

// 搜索结果
export const searchResult = (params: any = '') => {
  return request(
    {
      url: '/search',
      method: 'get',
      params
    }
  )
}