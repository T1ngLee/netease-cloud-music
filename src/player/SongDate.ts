import SongItem from '@/player/SongItem.ts'
import { songInfo, songUrl } from '@/api/getSong.ts'
import Player from '@/player/player.ts'
import store from '@/store'
class SongDate {
  playList: object[]
  

  constructor(){
    this.playList = this.getData()
  }
  saveData() {
    // console.log(this.playList);
    
    window.localStorage.setItem('playList', JSON.stringify(this.playList))
    // console.log(this.playList ,'SAVE完成');
    
  }

  getData() {
    const localData = window.localStorage.getItem('playList')
    if (localData == null) {
      return this.playList = []
    }
    return JSON.parse(localData as any)
  }

  /**
   * 将音乐加入播放列表
   * @param id 歌曲id，可以是number类型，也可以是数组
   * @param mode 模式，0：单曲，1：播放歌单，2：添加歌单
   */
  getSongItem(id: number | number[], mode: number){
    let idStr: number | string
    if(typeof id == 'number') {
      idStr = id
    } else {
      idStr = id.join(',')
    }
    // console.log(this.playList);

    // let getplayList: Array<SongItem>
    songInfo({
      ids: idStr
    }).then((res: any) => {
      console.log(res)
      // res.songs
      if(res.songs.length === 0) {
        return new Error('没有歌曲信息')
      }

      // 格式化要显示的时间
      const songsList = res.songs.map((item: any) => {
        item.showTime = this.handleShowTime(item.dt)
        item.artistStr = this.handleArtists(item.ar)
        return item
      })

      const playIndex = store.state.playIndex
      let newPlayIndex = -1

      console.log(this.playList)
      if (this.playList.length === 0 || mode === 1) {
        this.playList = songsList
        newPlayIndex = 0
        console.log(newPlayIndex)
        console.log('进入akjsgdjakshdjak');
      } else {
        console.log('进入else');
        
        if (mode === 0) {
          const index = this.playList.findIndex((item: any) => {
            return item.id === songsList[0].id
          })
          console.log('index', index);
          
          if(index !== -1) {
            newPlayIndex = index
          } else {
            const rightArr = this.playList.splice(playIndex + 1, this.playList.length - playIndex + 1)
            newPlayIndex = this.playList.length
            this.playList = this.playList.concat(songsList, rightArr)
          }
        } else if (mode === 2) {
          const rightArr = this.playList.splice(playIndex + 1, this.playList.length - playIndex + 1)
          newPlayIndex = this.playList.length - 1
          this.playList = this.playList.concat(songsList, rightArr)
        }
      }

      console.log(this.playList);
      this.saveData()
      const player = new Player()
      player.play(newPlayIndex)

      // this.saveData()
    }).catch((err: any) => {
      console.log(err)
    })

    
  }
  // 将要显示在页面上的时间格式化
  handleShowTime (time: number): string {
    const a = time / 1000 / 60
    let minute: any = Math.floor(a)
    let second: any = Math.floor(60 * parseFloat(0 + '.' + a.toString().split('.')[1]))
    if (minute < 10) {
      minute = '0' + minute
    }

    if (second < 10) {
      second = '0' + second
    }
    return minute + ':' + second
  }

  // 处理艺术家
  handleArtists(artists: any): string {
    if (artists.length === 1) {
      return artists[0].name
    }
    let artistString = ''
    for(const item of artists) {
      artistString = artistString + item.name + ' / '
    }
    return artistString.substring(0, artistString.length-3)
  }
}

export default SongDate