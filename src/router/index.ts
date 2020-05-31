import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
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
