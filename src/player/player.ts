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
    console.log(playIndex);
    this.playIndex = playIndex
    this.playingSong = store.state.songData.playList[this.playIndex]
    console.log(store.state.songData.playList);
    console.log(this.playingSong);
    this.getSongUrl(this.playingSong.id)
    console.log(this.playingSong);
  }
}

export default Player