// import axios from 'axios'
import store from '@/store'
import { songUrl } from '@/api/getSong.ts'
class Player {
  playingSong!: any
  playIndex = -1
  // constructor(songInfo: object) {
  //   this.playingSong = songInfo
  //   this.playingSong.url = this.getSongUrl(this.playingSong.id)
  // }
  // 获取音乐URL
  getSongUrl(songId: number): void {
    songUrl({
      id: songId
    }).then((res: any) => {
      console.log(res);
      
      this.playingSong.url = res.data[0].url
      // store.state.songUrl = this.playingSong.url;
      store.commit('setPlayingSongs', [this.playingSong.url, this.playIndex])
      // store.commit('setPlayState', true)
    })
  }

  play(playIndex: number) {
    // console.log(playIndex);
    this.playIndex = playIndex
    this.playingSong = store.state.songData.playList[this.playIndex]
    // console.log(store.state.songData.playList);
    // console.log(this.playingSong);
    this.getSongUrl(this.playingSong.id)
    // console.log(this.playingSong);
  }
  // 自动切歌
  autoCut () {
    switch(store.state.playerMode){
      case 0:
        this.before()
        break;
      case 1:
        this.before()
        break;
      case 2:
        this.randomCut()
        break;
      case 3:
        this.play(store.state.playIndex)
        break;
    }
  }

  before(){
    if(store.state.playIndex === 0) {
      this.play(store.state.songData.playList.length-1)
    } else {
      this.play(store.state.playIndex-1)
    }
  }

  after(){
    if(store.state.playIndex >= store.state.songData.playList.length-1) {
      this.play(0)
    } else {
      this.play(store.state.playIndex+1)
    }
  }

  randomCut(): any{
    const randomNum = parseInt((Math.random()*store.state.songData.playList.length) as any)
    if(randomNum === store.state.playIndex) {
      return this.randomCut()
    }
    console.log(randomNum);
    
    this.play(randomNum)
  }
}

export default Player