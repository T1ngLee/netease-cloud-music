import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/common/css/base.scss'
import SongDate from '@/player/SongDate.ts'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const ppp = new SongDate()
ppp.getSongItem([405998841,33894312,1447967459])
// ppp.saveData()