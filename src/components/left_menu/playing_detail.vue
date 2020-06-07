<template>
  <div class="playing-detail-wrap" :class="{max: isMax}">
    <router-link class="mini-detail" :to="{name: 'Song'}">
      <img :src="songInfo.al.picUrl">
      <!-- @click="isMax = !isMax" -->
      <div class="info">
        <div class="top">
          <span class="song-name text">{{songInfo.name}}</span>
          <span class="iconfont icon-xihuan"></span>
        </div>
        <div class="bottom">
          <span class="artist-name text">{{songInfo.artistStr}}</span>
          <span class="iconfont icon-fenxiang"></span>
        </div>
      </div>
    </router-link>
    <!-- <div class="max-detail">
      <max-detail-top/>
      <button @click="isMax = !isMax">asdasd</button>
      <max-detail-bottom/>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import MaxDetailTop from '@/components/left_menu/playing_detail/max_detail_top.vue'
import MaxDetailBottom from '@/components/left_menu/playing_detail/max_detail_bottom.vue'
@Component({
  components: {
    MaxDetailTop,
    MaxDetailBottom
  }
})
export default class PlayingDetail extends Vue {
  isMax = false
  // songInfo = {
  //   name: '歌名',
  //   artistStr: '歌手名',
  //   al: {
  //     picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591116300048&di=ab41c4613b9eaab653679871227e33e3&imgtype=0&src=http%3A%2F%2Fimage.codes51.com%2Farticle%2Fimage%2F20170407%2F20170407100716_7758.jpg'
  //   }
  // }

  // @Watch('$store.state.playingSong', {deep: true})
  // getSongInfo(val: any){
  //   this.songInfo = val
  // }

  get songInfo(){
    if(JSON.stringify(this.$store.state.playingSong) == '{}' || !this.$store.state.playingSong) {
      return {
        name: '歌名',
        artistStr: '歌手名',
        al: {
          picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591116300048&di=ab41c4613b9eaab653679871227e33e3&imgtype=0&src=http%3A%2F%2Fimage.codes51.com%2Farticle%2Fimage%2F20170407%2F20170407100716_7758.jpg'
        }
      }
    } else {
      return this.$store.state.playingSong
    }
  }
}
</script>

<style lang="scss" scoped>
.playing-detail-wrap{
  overflow: hidden;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 60px;
  transition: all .3s ease;
  .mini-detail {
    border-top: 1px solid rgb(230,231,234);
    height: 60px;
    width: 100%;
    padding: 7px;
    display: flex;
    font-size: 12px;
    position: relative;
    img {
      display: block;
      height: 100%;
      width: 46px;
      background: blue;
      z-index: 1;
      cursor: pointer;
      // position: absolute;
    }
    .info {
      padding-left: 62px;
      padding-right: 7px;
      width: 100%;
      position: absolute;
      right: 0;
      .top,
      .bottom{
        display: flex;
        justify-content: space-between;
        .iconfont {
          font-size: 12px;
        }
        .text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .top {
        // margin-bottom: 6px;
        margin-top: 4px;
        .iconfont {
          font-size: 14px;
        }
      }
      .bottom {
        .iconfont {
          font-size: 11px;
        }
      }
    }
  }
  .max-detail {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  &.max {
    height: 100%;
    width: 100vw;
    background-color: #fafafa;
    transition: all .1s ease;
    .mini-detail {
      visibility: hidden;
      display: none;
    }
  }
}
</style>