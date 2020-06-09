<template>
  <div class="song-list-wrap">
    <title-bar :titleName="'推荐歌单'" :pathName="'SongList'"/>
    <ul class="song-list-container">
      <li class="item tody-discover-song">
        <div class="img-box">
          <div class="tip">根据你的音乐口味生成每日更新</div>
          <div class="tody-content">
            <span class="week-day">{{weekDay}}</span>
            <span class="date">{{date}}</span>
          </div>
        </div>
        <div class="item-name">每日歌曲推荐</div>
      </li>
      <router-link tag="li" :to="{name: 'Playlist', params: {id: item.id}}" class="item" v-for="item in songList" :key="item.id">
        <div class="img-box">
          <div class="tip">{{item.copywriter}}</div>
          <div class="play-count">
            <i class="iconfont icon-erji"></i>
            <span>{{item.playCount | calcPlayCount}} 万</span>
          </div>
          <div class="play-btn" @click.stop="playAll(item.id)">
            <i class="iconfont icon-bofang"></i>
          </div>
          <img :src="item.picUrl">
        </div>
        <div class="item-name">{{item.name}}</div>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TitleBar from '@/components/common/title_bar.vue'
import { getSongList } from '@/api/discover/individuality.ts'
import { playlistDetail } from '@/api/playList.ts'
@Component({
  name: 'SongList',
  filters: {
    calcPlayCount: (playCount: number) => {
      return Math.floor(playCount / 10000)
    }
  },
  components: {
    TitleBar
  }
})
export default class SongList extends Vue {
  // data
  weekDay = ''
  date = 0
  songList = []

  created() {
    getSongList({
      limit: 9
    }).then((res: any) => {
      console.log(res);
      this.songList = res.result
    })
  }

  // 播放歌单
  playAll(id: number){
    console.log(id)
    let tranksIdList: any = []
    playlistDetail({
      id: id
    })
    .then((res: any) => {
      console.log(res);

      tranksIdList = res.playlist.trackIds.map((item: any) =>{
        return item.id
      })
      this.$store.state.songData.getSongItem(tranksIdList, 1)
    })
  }

  mounted() {
    this.getDate()
  }

  // 获取当天的日期和星期
  getDate (): void {
    const today = new Date()   
    const getDay = today.getDay()
    this.date = today.getDate()
    switch(getDay) {
      case 1:
        this.weekDay = '星期一';
        break;
      case 2:
        this.weekDay = '星期二';
        break;
      case 3:
        this.weekDay = '星期三';
        break;
      case 4:
        this.weekDay = '星期四';
        break;
      case 5:
        this.weekDay = '星期五';
        break;
      case 6:
        this.weekDay = '星期六';
        break;
      case 7:
        this.weekDay = '星期日';
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
.song-list-wrap {
  width: 100%;
  .song-list-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .tody-discover-song {
      .tody-content{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        border: 1px solid rgb(230,231,234);
        .week-day {
          font-size: 18px;
          margin-bottom: -10px;
        }
        .date {
          font-size: 65px;
          color: rgb(198,47,47);
        }
      }
    }
    .item{
      position: relative;
      width: calc((100% - 60px) / 5);
      margin: 0 15px 60px 0;
      cursor: pointer;
      &:nth-child(5n+0) {
        margin-right: 0;
      }
      .img-box {
        padding-bottom: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
        &:hover {
          .play-count {
            opacity: 0;
            transition-delay: 1s;
          }
          .tip {
            transform: translateY(0);
            transition: all .3s ease 1s;
          }
          .play-btn {
            opacity: 1;
            transition: all .3s ease;
          }
        }
        img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        .tip {
          font-size: 10px;
          color: white;
          position: absolute;
          z-index: 2;
          background: rgba($color: #000000, $alpha: 0.4);
          padding: 4px;
          line-height: 15px;
          width: 100%;
          transform: translateY(-100%);
          transition: all .3s ease;
        }
        .play-count {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
          height: 16px;
          font-size: 10px;
          width: 50%;
          background-image: linear-gradient(to right, rgba(255,255,255,.1), rgba(0,0,0,.5));
          text-align: right;
          padding-right: 3px;
          color: white;
          line-height: 16px;
          .iconfont {
            font-size: 11px;
            margin-right: 3px;
          }
        }
        .play-btn {
          position: absolute;
          width: 25px;
          height: 25px;
          background: rgba($color: #000000, $alpha: 0.3);
          z-index: 2;
          text-align: center;
          border-radius: 50%;
          bottom: 5px;
          right: 5px;
          box-shadow: 0 0 3px 3px rgba($color: #ffffff, $alpha: 0.5);
          opacity: 0;
          transition: all .3s ease;
          &:hover {
            background: rgba($color: #000000, $alpha: 0.6);
            transition: all .3s ease;
          }
          .iconfont {
            margin-left: 2px;
            color: white;
            font-size: 12px;
          }
        }
      }
      .item-name {
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
        padding-top: 5px;
        font-size: 12px;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>