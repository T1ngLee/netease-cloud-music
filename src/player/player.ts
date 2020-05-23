// import axios from 'axios'
import store from '@/store'
import { songUrl } from '@/api/getSong.ts'
class Player {
  playingSong!: any
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
      store.state.songUrl = this.playingSong.url;
      // store.commit('setPlayState', true)
    })
  }

  play(songInfo: any) {
    this.playingSong = songInfo
    // this.playingSong.url = this.getSongUrl(this.playingSong.id)
    this.getSongUrl(this.playingSong.id)
    console.log(this.playingSong);
    
    // store.state.songUrl = this.playingSong.url;
    // (store.state.player as any).play()
  }
}

export default Player