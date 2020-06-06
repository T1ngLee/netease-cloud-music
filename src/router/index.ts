import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: any) {
  return (routerPush.call(this, location) as any).catch((error: any)=> error)
}
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/discover',
    name: 'Discover',
    component: () => import('@/views/right_content/discover.vue'),
    children: [
      {
        path: '/discover/individuality',
        name: 'Individuality',
        component: () => import('@/views/right_content/discover/individuality.vue')
      },
      {
        path: '/discover/songList',
        name: 'SongList',
        component: () => import('@/views/right_content/discover/song_list.vue')
      },
      {
        path: '/discover/anchor',
        name: 'Anchor',
        component: () => import('@/views/right_content/discover/anchor.vue')
      },
      {
        path: '/discover/rankingList',
        name: 'RankingList',
        component: () => import('@/views/right_content/discover/ranking_list.vue')
      },
      {
        path: '/discover/singer',
        name: 'Singer',
        component: () => import('@/views/right_content/discover/singer.vue')
      },
      {
        path: '/discover/newSong',
        name: 'NewSong',
        component: () => import('@/views/right_content/discover/new_song.vue')
      }
    ],
    redirect: {
      name: 'Individuality'
    }
  },
  {
    path: '/playlist/:id',
    name: 'Playlist',
    component: ()=> import('@/views/right_content/playlist_detail.vue')
  },
  {
    path: '/searchresult/:keyword',
    name: 'SearchResult',
    component: ()=> import('@/views/right_content/search_result.vue'),
    children: [
      {
        path: '/searchresult/:keyword/songs',
        name: 'ResultSongs',
        component: () => import('@/components/search_result/result_songs.vue')
      },
      {
        path: '/searchresult/:keyword/artist',
        name: 'ResultArtist',
        component: () => import('@/components/search_result/result_artist.vue')
      },
      {
        path: '/searchresult/:keyword/album',
        name: 'ResultAlbum',
        component: () => import('@/components/search_result/result_album.vue')
      },
      {
        path: '/searchresult/:keyword/anchor',
        name: 'ResultAnchor',
        component: () => import('@/components/search_result/result_anchor.vue')
      },
      {
        path: '/searchresult/:keyword/lyric',
        name: 'ResultLyric',
        component: () => import('@/components/search_result/result_lyric.vue')
      },
      {
        path: '/searchresult/:keyword/playlist',
        name: 'ResultPlaylist',
        component: () => import('@/components/search_result/result_playlist.vue')
      },
      {
        path: '/searchresult/:keyword/user',
        name: 'ResultUser',
        component: () => import('@/components/search_result/result_user.vue')
      },
      {
        path: '/searchresult/:keyword/video',
        name: 'ResultVideo',
        component: () => import('@/components/search_result/result_video.vue')
      }
    ],
    redirect: {
      name: 'ResultSongs'
    }
  },
  // {
  //   path: '/searchresult',
  //   name: 'SearchResult',
  //   component: ()=> import('@/views/right_content/search_result.vue')
  // },
  {
    path: '/',
    redirect: {
      name: 'Individuality'
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
