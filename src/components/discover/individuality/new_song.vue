<template>
  <div class="new-song-wrap">
    <title-bar :titleName="'最新音乐'"/>
    <div class="new-song-container">
      <ul class="new-song-left">
        <li class="item" v-for="(item, index) in leftSong" :key="index">
          <span class="index-num">{{ index + 1 | formatIndex }}</span>
          <div class="content">
            <img :src="item.picUrl">
          </div>
        </li>
      </ul>
      <ul class="new-song-right">
        <li class="item" v-for="(item, index) in rightSong" :key="index">
          <span class="index-num">{{ index + oneRowCount + 1 | formatIndex }}</span>
          <div class="content">
            <img :src="item.picUrl">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TitleBar from '@/components/common/title_bar.vue'
import { getNewSong } from '@/api/discover/individuality.ts'
@Component({
  components: {
    TitleBar
  },
  filters: {
    formatIndex: (index: number) => {
      return index < 10 ? '0' + index : index
    }
  }
})
export default class NewSong extends Vue {
  newSongLsit = []
  oneRowCount = 0
  leftSong = []
  rightSong = []
  
  created() {
    getNewSong().then((res: any) => {
      console.log(res);
      this.newSongLsit = res.result
      this.oneRowCount = this.newSongLsit.length / 2
      this.leftSong = this.newSongLsit.slice(0, this.oneRowCount)
      this.rightSong = this.newSongLsit.slice(this.oneRowCount)
    })
  }
  
}
</script>

<style lang="scss" scoped>
.new-song-wrap {
  width: 100%;
  .new-song-container {
    width: 100%;
    display: flex;
    border: 1px solid rgb(230,231,234);
    .new-song-left,
    .new-song-right {
      width: 50%;
      .item {
        padding: 5px 30px;
        position: relative;
        .index-num {
          position: absolute;
          left: 10px;
        }
        .content {
          img {
            height: 40px;
            width: 40px;
          }
        }
      }
      .item:nth-child(2n+0) {
        background: #999;
      }
    }
    .new-song-left {
      border-right: 1px solid rgb(230,231,234)
    }
  }
}
</style>