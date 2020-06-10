// import axios from 'axios'
import store from '@/store'
import { songUrl } from '@/api/getSong.ts'
class Player {
  playingSong!: any
  playIndex = -1

  // 获取音乐URL
  getSongUrl(songId: number): void {
    songUrl({
      id: songId
    }).then((res: any) => {
      this.playingSong.url = res.data[0].url

      store.commit('setPlayingSongs', [this.playingSong.url, this.playIndex, this.playingSong])
      store.commit('setPlayState', true)

      if (this.playingSong.url == null) {
        return this.after()
      }
    })
  }

  play(playIndex: number) {
    this.playIndex = playIndex
    this.playingSong = store.state.songData.playList[this.playIndex]
    this.getSongUrl(this.playingSong.id)
  }
  // 自动切歌
  autoCut () {
    switch(store.state.playerMode){
      case 0: // 顺序播放
        this.before()
        break;
      case 1: // 列表循环
        this.before()
        break;
      case 2: // 随机播放
        this.randomCut()
        break;
      case 3: // 单曲循环？？？？？？？？？？？？？？？？？

        this.play(store.state.playIndex)
        break;
    }
  }
  // 上一首
  before(){
    if(store.state.playIndex <= 0) {
      this.play(store.state.songData.playList.length-1)
    } else {
      this.play(store.state.playIndex-1)
    }
  }
  // 下一首
  after(){
    if(store.state.playIndex >= store.state.songData.playList.length-1) {
      this.play(0)
    } else {
      this.play(store.state.playIndex+1)
    }
  }
  // 随机切
  randomCut(): any{
    const randomNum = parseInt((Math.random()*store.state.songData.playList.length) as any)
    if(randomNum === store.state.playIndex) {
      return this.randomCut()
    }
    this.play(randomNum)
  }
}

export default Player