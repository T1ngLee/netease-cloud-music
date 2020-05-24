<template>
  <div class="play-list-wrap">
    <div class="top-wrap">
      <div class="btn-box">
        <span class="btn play-list active">播放列表</span>
        <span class="btn history-list">历史记录</span>
      </div>
      <span class="iconfont icon-chacha"></span>
    </div>
    <play-list-content/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import PlayListContent from '@/components/right_content/play_list_content.vue'
@Component({
  components: {
    PlayListContent
  }
})
export default class PlayList extends Vue {
  
}
</script>

<style lang="scss" scoped>
.play-list-wrap {
  position: fixed;
  width: 500px;
  height: 400px;
  background-color: #fafafa;
  z-index: 5;
  right: 0;
  bottom: 50px;
  box-shadow: -1px -1px 3px 1px rgba($color: #000000, $alpha: .3);
  .top-wrap {
    height: 35px;
    width: 100%;
    background: rgba(153, 153, 153, 0.1);
    border-bottom: 1px solid rgb(230,231,234);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // font-size: 0;
    .iconfont {
      // font-size: 0;
      position: absolute;
      display: inline-block;
      right: 10px;
      // top: 50%;
      // transform: translateY(-50%);
      height: 100%;
      line-height: 35px;
    }
    .btn-box {
      font-size: 0;
      .btn {
        display: inline-block;
        cursor: pointer;
        height: 22px;
        width: 90px;
        background-color: #fafafa;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        color: rgb(124, 125, 133);
        &.active {
          color: white;
          background: rgb(124, 125, 133);
        }
      }
      .play-list {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .history-list {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
}
</style>