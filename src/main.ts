import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/common/css/base.scss'
import player from '@/player/player.ts'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const ppp = new player()
ppp.getSongUrl(1449406576)