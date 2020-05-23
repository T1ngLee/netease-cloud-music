<template>
  <div class="play-list-wrap">
    <div class="top-wrap">
      <span class="btn play-list">播放列表</span>
      <span class="btn history-list">历史记录</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class PlayList extends Vue {}
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
    .btn {
      display: inline-block;
      height: 25px;
      width: 90px;
      background: rosybrown;
      font-size: 12px;
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
</style>