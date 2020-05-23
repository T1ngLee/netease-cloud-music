import Vue from 'vue'
import Vuex from 'vuex'
import SongDate from '@/player/SongDate.ts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songUrl: '',
    player: '',
    playState: false,
    songData: new SongDate()
  },
  mutations: {
    setPlayState(state, val){
      state.playState = val
    }
  },
  actions: {
  },
  modules: {
  }
})
