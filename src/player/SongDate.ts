import SongItem from '@/player/SongItem.ts'
import { songInfo, songUrl } from '@/api/getSong.ts'
import Player from '@/player/player.ts'
class SongDate {
  playList: object[] = []
  constructor(){
    this.playList = this.getData()
  }
  saveData() {
    window.localStorage.setItem('playList', JSON.stringify(this.playList))
  }

  getData() {
    const localData = window.localStorage.getItem('playList')
    if (localData == null) {
      return this.playList = []
    }
    return JSON.parse(localData as any)
  }

  getSongItem(id: number | number[]){
    let idStr: number | string
    if(typeof id == 'number') {
      idStr = id
    } else {
      idStr = id.join(',')
    }
    console.log(this.playList);

    // let getplayList: Array<SongItem>
    songInfo({
      ids: idStr
    }).then((res: any) => {
      console.log(res)
      // res.songs
      if(res.songs.length === 0) {
        return new Error('没有歌曲信息')
      }
      // getplayList = res.songs.map((item: any, index: number) => {
      //   let songItem!: SongItem
      //   songItem.name = item.name
      //   songItem.id = item.id
      //   songItem.alias = item.alia
      //   songItem.artists = item.ar
      //   songItem.album = item.al
      //   songItem.time = item.dt
      //   return songItem
      // })
      // 去重
      // if (this.playList.length === 0) {
      //   this.playList = res.songs
      // } else {
      //   for (const i of this.playList) {          
          
      //   }
      // }
      const songsList = res.songs.map((item: any) => {
        item.showTime = this.handleShowTime(item.dt)
        return item
      })

      this.playList = this.playList.concat(res.songs)
      // const newArr = []
      // for(const item of this.playList) {
      //   if(newArr.indexOf())
      // }
      const player = new Player()
      player.play(res.songs[0])
      // 去重
      const newArr = new Map();
      this.playList = this.playList.filter((item) => !newArr.has((item as any).id) && newArr.set((item as any).id, 1))

      console.log(this.playList);
      // const aaa= new Player()
      // aaa.play(this.playList[1])
      this.saveData()
    }).catch((err: any) => {
      console.log(err)
    })

    
  }
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
}

export default SongDate