<template>
  <div class="play-list-content-wrap">
    <div class="top-count padding-box">
      <span class="count">总{{playList.length}}首</span>
      <div class="btn-box">
        <span class="star-all btn">
          <i class="iconfont icon-wenjianjia"></i>
          收藏全部</span>
        <span class="clear btn">
          <i class="iconfont icon-shanchu"></i>
          清空</span>
      </div>
    </div>
    <div class="list-container">
      <ul class="list">
        <li class="item padding-box" v-for="(item, index) in playList" @dblclick="player.play(index)" :key="item.id" :class="{active: $store.state.playIndex === index}">
          <span class="icon">
            <i class="iconfont icon-yinliang" v-show="!$store.state.playState"></i>
            <i class="iconfont icon-yinliang1" v-show="$store.state.playState"></i>
          </span>
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
import Player from '@/player/player.ts'
@Component
export default class PlayListContent extends Vue {
  player = new Player()
  get playList(){
    return this.$store.state.songData.playList
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
    height: 25px;
    .btn-box {
      display: flex;
      align-items: center;
      .btn {
        cursor: pointer;
        padding: 0 10px;
        height: 12px;
        .iconfont {
          font-size: 14px;
          vertical-align: bottom;
        }
        &:first-child {
          border-right: 1px solid #dddddd;
        }
      }
    }
  }
  .list-container {
    height: calc(100% - 25px);
    overflow: auto;
    .list {
      .item {
        display: flex;
        position: relative;
        // line-height: 20px;
        &:nth-child(2n+0) {
          background: rgba($color: #999999, $alpha: .1);
        }
        &:hover {
          background: rgba($color: #999999, $alpha: .3);
        }
        .icon {
          .iconfont {
            font-size: 12px;
            position: absolute;
            left: 2px;
            margin-top: 3px;
            color: brown;
          }
          display: none;
        }
        &.active {
          background: rgba($color: #999999, $alpha: .3);
          .icon {
            display: block;
          }
        }
        .name-box {
          width: 65%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .artist {
          width: 20%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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