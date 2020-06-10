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
    path: '/home',
    name: 'Home',
    meta: {keepAlive: false},
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '/home/discover',
        name: 'Discover',
        meta: {keepAlive: false},
        component: () => import('@/views/home/discover.vue'),
        children: [
          {
            path: '/home/discover/individuality',
            name: 'Individuality',
            meta: {keepAlive: false},
            component: () => import('@/views/home/discover/individuality.vue')
          },
          {
            path: '/home/discover/songList',
            name: 'SongList',
            component: () => import('@/views/home/discover/song_list.vue')
          },
          {
            path: '/home/discover/anchor',
            name: 'Anchor',
            component: () => import('@/views/home/discover/anchor.vue')
          },
          {
            path: '/home/discover/rankingList',
            name: 'RankingList',
            component: () => import('@/views/home/discover/ranking_list.vue')
          },
          {
            path: '/home/discover/singer',
            name: 'Singer',
            component: () => import('@/views/home/discover/singer.vue')
          },
          {
            path: '/home/discover/newSong',
            name: 'NewSong',
            component: () => import('@/views/home/discover/new_song.vue')
          }
        ],
        redirect: {
          name: 'Individuality'
        }
      },
      {
        path: '/home/privatefm',
        name: 'PrivateFm',
        component: () => import('@/views/home/private_fm.vue')
      },
      {
        path: '/home/look',
        name: 'Look',
        component: () => import('@/views/home/look.vue')
      },
      {
        path: '/home/friends',
        name: 'Friends',
        component: () => import('@/views/home/friends.vue')
      },
      {
        path: '/home/video',
        name: 'Video',
        component: () => import('@/views/home/video.vue')
      },
      {
        path: '/playlist/:id',
        name: 'Playlist',
        component: ()=> import('@/views/home/playlist_detail.vue')
      },
      {
        path: '/home/searchresult/:keyword',
        name: 'SearchResult',
        component: ()=> import('@/views/home/search_result.vue'),
        children: [
          {
            path: '/home/searchresult/:keyword/songs',
            name: 'ResultSongs',
            component: () => import('@/components/search_result/result_songs.vue')
          },
          {
            path: '/home/searchresult/:keyword/artist',
            name: 'ResultArtist',
            component: () => import('@/components/search_result/result_artist.vue')
          },
          {
            path: '/home/searchresult/:keyword/album',
            name: 'ResultAlbum',
            component: () => import('@/components/search_result/result_album.vue')
          },
          {
            path: '/home/searchresult/:keyword/anchor',
            name: 'ResultAnchor',
            component: () => import('@/components/search_result/result_anchor.vue')
          },
          {
            path: '/home/searchresult/:keyword/lyric',
            name: 'ResultLyric',
            component: () => import('@/components/search_result/result_lyric.vue')
          },
          {
            path: '/home/searchresult/:keyword/playlist',
            name: 'ResultPlaylist',
            component: () => import('@/components/search_result/result_playlist.vue')
          },
          {
            path: '/home/searchresult/:keyword/user',
            name: 'ResultUser',
            component: () => import('@/components/search_result/result_user.vue')
          },
          {
            path: '/home/searchresult/:keyword/video',
            name: 'ResultVideo',
            component: () => import('@/components/search_result/result_video.vue')
          }
        ],
        redirect: {
          name: 'ResultSongs'
        }
      }
    ]
  },
  {
    path: '/song',
    name: 'Song',
    component: () => import('@/views/song_detail.vue')
  },
  {
    path: '/',
    redirect: {
      name: 'Individuality'
    }
  },
  {
    path: '*',
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
