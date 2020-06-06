<template>
  <div class="playlist-detail-top-wrap" :class="{hidden: isHidden}">
    <div class="count">
      <div class="song-count">
        <span>歌曲数</span>
        <span>{{info.trackCount}}</span>
      </div>
      <div class="play-count">
        <span>播放数</span>
        <span>{{Math.ceil(info.playCount / 10000)}}万</span>
      </div>
    </div>
    <div class="hidden-btn" @click="isHidden = !isHidden">
      <span class="iconfont icon-arrow-up" v-show="isHidden"></span>
      <span class="iconfont icon-arrow-down" v-show="!isHidden"></span>
    </div>
    <img class="cover" :src="info.coverImgUrl">
    <div class="info">
      <h3 class="name">{{info.name}}</h3>
      <div class="creator">
        <img class="avatar" :src="info.creator.avatarUrl">
        <span class="creator-name">{{info.creator.nickname}}</span>
        <span class="create-time">{{info.createTime | initTime}}创建</span>
      </div>
      <div class="btn-box">
        <div class="btn play">
          <button class="play-all" @click="playAll()">
            <i class="iconfont icon-bofang"></i>
            <span>播放全部</span>
          </button>
          <button class="add-list" @click="addPlaylist()">
            <i class="iconfont icon-jia"></i>
          </button>
        </div>
        <button class="btn subscribe">
          <i class="iconfont icon-wenjianjia"></i>
          <span>收藏({{info.subscribedCount}})</span>
        </button>
        <button class="btn share">
          <i class="iconfont icon-fenxiang"></i>
          <span>分享({{info.shareCount}})</span>
        </button>
        <button class="btn download">
          <i class="iconfont icon-xiazai"></i>
          <span>下载全部</span>
        </button>
      </div>
      <div class="tags">
        <span>标签：</span>
        <ul class="tag-list">
          <li class="tag" v-for="(item, index) in info.tags" :key="index">
            <span>/</span>
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="description" :class="{hidden: isHidden}">
        <span>简介：</span>
        <span v-html="initDescription"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  filters: {
    initTime(time: number): string{
      const t = new Date(time)    
      const year = t.getFullYear()
      const month = t.getMonth() + 1 >= 10 ? t.getMonth() + 1  : '0' + (t.getMonth() + 1) 
      const date = t.getDate() >= 10 ? t.getDate() : '0' + t.getDate()
      return `${year}-${month}-${date}`
    }
  }
})
export default class PlaylistDetailTop extends Vue {
  @Prop() info: any
  @Prop() tranksIdList: any

  isHidden = true
  
  get initDescription(){
    return this.info.description.replace(/\n/g,"<br/>")
  }

  // 播放歌单
  playAll(){
    this.$store.state.songData.getSongItem(this.tranksIdList, 1)
  }

  addPlaylist(){
    this.$store.state.songData.getSongItem(this.tranksIdList, 2)
  }
}
</script>

<style lang="scss" scoped>
.playlist-detail-top-wrap {
  margin-top: 20px;
  display: flex;
  position: relative;
  &.hidden {
    height: 180px;
    overflow: hidden;
    
    .ellipsis {
      position: absolute;
      bottom: 0;
    }
  }
  .count {
    position: absolute;
    right: 0;
    display: flex;
    font-size: 12px;
    div {
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      align-items: flex-end;
      &:first-child {
        border-right: 1px solid rgb(230,231,234);
      }
    }
  }
  .hidden-btn {
    position: absolute;
    right: 0;
    top: 160px;
    cursor: pointer;
    .iconfont {
      font-size: 20px;
      font-weight: 700;
    }
  }
  .cover {
    height: 180px;
    width: 180px;
    margin-right: 20px;
  }
  .info {
    .name {
      margin: 0;
      font-weight: 400;
    }
    .creator {
      line-height: 30px;
      margin: 10px 0;
      .avatar {
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
      .creator-name {
        font-size: 14px;
        vertical-align: top;
        margin-left: 5px;
      }
      .create-time {
        font-size: 12px;
        color: rgb(138, 138, 138);
        margin-left: 20px;
        vertical-align: top;
      }
    }
    button {
      border-radius: 0;
      outline: none;
      cursor: pointer;
      height: 25px;
      padding: 5px 10px;
      font-size: 12px;
      line-height: 15px;
      background: white;
      border: 1px solid rgb(230,231,234);
      .iconfont {
        font-size: 14px;
        margin-right: 8px;
        // margin-top: 2px;
      }
      &:hover {
        background: rgb(239, 239, 240);
      }
    }
    .btn-box {
      display: flex;
      & > * {
        border-radius: 5px;
        overflow: hidden;
        display: inline-block;
        margin-right: 10px;
      }
      .play {
        button {
          vertical-align: top;
          background: rgb(198, 47, 47);
          color: white;
          border: 0;
          &:hover {
            background: rgb(155, 40, 40);
          }
        }
        .add-list {
          // vertical-align: top;
          .iconfont {
            margin-right: 0;
          }
        }
      }
    }
    .tags {
      display: flex;
      .tag-list {
        display: flex;
        .tag {
          span {
            &:first-child {
              margin: 0 5px;
            }
          }
          &:first-child{
            span {
              &:first-child {
                display: none;
              }
            }
          }
        }
      }
    }
    .description {
      font-size: 12px;
      margin-right: 50px;
      &.hidden {
        overflow:hidden;  //超出文本隐藏      
        text-overflow:ellipsis;  ///超出部分省略号显示      
        display:-webkit-box;  //弹性盒模型 
        -webkit-box-orient:vertical;  //上下垂直      
        -webkit-line-clamp:2;  //自定义行数
      }
    }
    .tags {
      font-size: 12px;
      margin-top: 20px;
      margin-bottom: 5px;
    }
  }
}
</style>