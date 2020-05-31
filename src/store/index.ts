import Vue from 'vue'
import Vuex from 'vuex'
import SongDate from '@/player/SongDate.ts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songUrl: '',
    player: '',
    playingSong: {},
    playState: false,
    songData: new SongDate(),
    playIndex: 2,
    playListShowState: false,
    songProgress: {
      currentTime: '00:00',
      duration: '00:00',
      progress: '0'
    },
    playerMode: 2,
    newProgress: 0,
    loginState: false,
    loginBoxShow: false,
    userInfo: {}
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
      state.playingSong = argument[2]
    },
    setSongProgress(state, obj) {
      state.songProgress = obj
    },
    setPlayerMode (state, val) {
      state.playerMode = val
    },
    setNewProgress(state, val){
      state.newProgress = val
    },
    setLoginState(state, val){
      state.loginState = val
    },
    setLoginBoxShow(state, val) {
      state.loginBoxShow = val
    },
    setUserInfo(state, val) {
      state.userInfo = val
    }
  },
  actions: {
  },
  modules: {
  }
})
