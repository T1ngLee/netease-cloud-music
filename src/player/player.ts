import axios from 'axios'
import store from '@/store'
import { getSongUrl } from '@/api/getSong.ts'
class Player {


  // 获取音乐URL
  getSongUrl(songId: number): void {
    getSongUrl({
      id: songId
    }).then((res: any) => {
      console.log(res);
    })
  }
}

export default Player