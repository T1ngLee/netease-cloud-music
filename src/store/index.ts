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
    playIndex: -1,
    playListShowState: false,
    songProgress: {
      currentTime: 0,
      duration: 0,
      progress: '0'
    },
    playerMode: 2,
    newProgress: 0,
    loginState: false,
    loginBoxShow: false,
    userInfo: {},
    volume: 0,
    muted: false
  },
  mutations: {
    setPlayState(state, val){
      state.playState = val
    },
    setPlayListShowState(state, val){
      state.playListShowState = val
    },
    setPlayingSongs(state, argument){
      console.log(argument);
      
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
    },
    setVolume(state, val) {
      state.volume = val
    },
    setMuted(state, val) {
      state.muted = val
    }
  },
  actions: {
  },
  modules: {
  }
})