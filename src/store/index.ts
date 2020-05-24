import Vue from 'vue'
import Vuex from 'vuex'
import SongDate from '@/player/SongDate.ts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songUrl: '',
    player: '',
    playState: false,
    songData: new SongDate(),
    playIndex: 2,
    playListShowState: false,
    songProgress: {
      currentTime: '00:00',
      duration: '00:00',
      progress: '0%'
    }
  },
  mutations: {
    setPlayState(state, val){
      state.playState = val
    },
    setPlayListShowState(state, val){
      state.playListShowState = val
    },
    setPlayingSongs(state, argument){
      state.songUrl = argument[0]
      state.playIndex = argument[1]
    },
    setSongProgress(state, obj) {
      state.songProgress = obj
    }
  },
  actions: {
  },
  modules: {
  }
})
