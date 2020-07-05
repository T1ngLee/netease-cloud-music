<template>
  <div class="new-song-wrap">
    <title-bar :titleName="'最新音乐'" :pathName="'NewSong'"/>
    <div class="new-song-container">
      <ul class="new-song-left">
        <li class="item" v-for="(item, index) in leftSong" :key="item.id">
          <span class="index-num">{{ index + 1 | formatIndex }}</span>
          <div class="content">
            <div class="img-box" @click="clickPlayBtn(item.id)">
              <play-btn class="play-btn" :zoomNum="0.5"/>
              <img :src="item.picUrl">
            </div>
            <div class="info">
              <div class="song-name">
                <span class="name">{{item.name}}</span>
                <span class="alias" v-show="item.alias">({{item.alias}})</span>
              </div>
              <div class="other">
                <span class="artist">{{item.artists}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul class="new-song-right">
        <li class="item" v-for="(item, index) in rightSong" :key="item.id">
          <span class="index-num">{{ index + oneRowCount + 1 | formatIndex }}</span>
          <div class="content">
            <div class="img-box" @click="clickPlayBtn(item.id)">
              <play-btn class="play-btn" :zoomNum="0.5"/>
              <img :src="item.picUrl">
            </div>
            <div class="info">
              <div class="song-name">
                <span class="name">{{item.name}}</span>
                <span class="alias" v-show="item.alias">({{item.alias}})</span>
              </div>
              <div class="other">
                <span class="artist">{{item.artists}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TitleBar from '@/components/common/title_bar.vue'
import PlayBtn from '@/components/common/play_btn.vue'
import { getNewSong } from '@/api/discover/individuality.ts'
@Component({
  components: {
    TitleBar,
    PlayBtn
  },
  filters: {
    formatIndex: (index: number) => {
      return index < 10 ? '0' + index : index
    }
  }
})
export default class NewSong extends Vue {
  newSongLsit = []
  oneRowCount = 0 //一列的长度
  leftSong = [] //左列的内容
  rightSong = [] //右列的内容
  // showSongList= [[],[]]
  
  created() {
    getNewSong().then((res: any) => {
      console.log(res);
      this.newSongLsit = this.handleSongList(res.result)
      console.log(this.newSongLsit);
      this.oneRowCount = this.newSongLsit.length / 2
      this.leftSong = this.newSongLsit.slice(0, this.oneRowCount)
      this.rightSong = this.newSongLsit.slice(this.oneRowCount)
    })
  }
  // 处理
  handleSongList(list: any): any {
    return list.map((item: any) => {
      const songObj = {
        id: item.id,
        name: item.name,
        picUrl: item.picUrl,
        alias: item.song.alias.length ? item.song.alias[0] : item.song.transName,
        artists: this.handleArtists(item.song.artists)
      }
      return songObj
    })
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
  // 点击播放按钮
  clickPlayBtn (id: number) {
    this.$store.state.songData.getSongItem(id, 0)
  }
}
</script>

<style lang="scss" scoped>
.new-song-wrap {
  width: 100%;
  margin-bottom: 40px;
  .new-song-container {
    width: 100%;
    display: flex;
    border: 1px solid rgb(230,231,234);
    .new-song-left,
    .new-song-right {
      width: 50%;
      .item {
        padding: 10px 30px;
        position: relative;
        .index-num {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 12px;
          color: #999;
        }
        .content {
          display: flex;
          align-items: center;
          .img-box {
            cursor: pointer;
            height: 40px;
            width: 40px;
            margin-right: 10px;
            position: relative;
            .play-btn {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) scale(0.4) !important;
              z-index: 2;
              opacity: 1;
            }
            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }
          .info {
            width: calc(100% - 50px);
            .song-name {
              font-size: 13px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              .name {
                color: black;
              }
              .alias {
                color: #999;
                margin-left: 4px;
              }
            }
            .other {
              .artist {
                font-size: 11px;
                color: #999;
              }
            }
          }
        }
        &:nth-child(2n+0) {
          background: rgba($color: #999999, $alpha: .1);
        }
        &:hover {
          background: rgba($color: #999999, $alpha: .3);
        }
      }
      
    }
    .new-song-left {
      border-right: 1px solid rgb(230,231,234)
    }
  }
}
</style>