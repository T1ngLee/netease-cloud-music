<template>
  <div class="play-list-content-wrap">
    <div class="top-count padding-box">
      <span class="count">44</span>
      <div class="btn-box">
        <span class="star-all btn">收藏全部</span>
        <span class="clear btn">清空</span>
      </div>
    </div>
    <div class="list-container">
      <ul class="list">
        <li class="item padding-box" v-for="(item, index) in playList" :key="index">
          <div class="name-box">
            <span class="name">{{item.name}}</span>
          </div>
          <div class="artist">艺术家</div>
          <div class="source">源</div>
          <div class="time">{{item.showTime}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component
export default class PlayListContent extends Vue {
  playList = this.$store.state.songData.playList

  @Watch('$store.state.songData.playList')
  playListChange(val: any) {
    this.playList = val
  }
}
</script>

<style lang="scss" scoped>
.padding-box {
  padding: 4px 20px;
}
.play-list-content-wrap {
  height: calc(100% - 35px);
  font-size: 12px;
  .top-count {
    border-bottom: 1px solid rgb(230,231,234);
    display: flex;
    justify-content: space-between;
    .btn-box {
      .btn {
        cursor: pointer;
      }
    }
  }
  .list-container {
    height: calc(100% - 25px);
    overflow: auto;
    .list {
      .item {
        display: flex;
        &:nth-child(2n+0) {
          background: rgba($color: #999999, $alpha: .1);
        }
        &:hover {
          background: rgba($color: #999999, $alpha: .3);
        }
        .name-box {
          width: 65%;
        }
        .artist {
          width: 20%;
        }
        .source {
          width: 5%;
        }
        .time {
          text-align: right;
          width: 10%;
        }
      }
    }
  }
}
</style>