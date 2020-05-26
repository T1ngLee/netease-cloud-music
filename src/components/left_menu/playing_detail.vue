<template>
  <div class="playing-detail-wrap" :class="{max: isMax}">
    <div class="mini-detail">
      <img src="" alt="" @click="isMax = !isMax">
      <div class="info">
        <div class="top">
          <span class="song-name">歌名</span>
          <span class="iconfont icon-xihuan"></span>
        </div>
        <div class="bottom">
          <span class="artist-name">歌手名</span>
          <span class="iconfont icon-fenxiang"></span>
        </div>
      </div>
    </div>
    <div class="max-detail">
      <max-detail-top/>
      <button @click="isMax = !isMax">asdasd</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MaxDetailTop from '@/components/left_menu/playing_detail/max_detail_top.vue'
@Component({
  components: {
    MaxDetailTop
  }
})
export default class PlayingDetail extends Vue {
  isMax = false
}
</script>

<style lang="scss" scoped>
.playing-detail-wrap{
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
  &.max {
    height: 100%;
    width: 100vw;
    background-color: #fafafa;
    transition: all .1s ease;
    .mini-detail {
      visibility: hidden;
      // height: 0;
      // width: 0;
      display: none;
    }
  }
}
</style>