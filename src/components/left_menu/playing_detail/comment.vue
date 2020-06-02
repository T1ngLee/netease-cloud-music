<template>
  <li class="comment-wrap">
    <div class="avatar-box">
      <img class="avatar" :src="item.user.avatarUrl">
    </div>
    <div class="content-box">
      <div class="content">
        <span class="user-name">{{item.user.nickname}}：</span>
        <span class="content">{{item.content}}</span>
      </div>
      <ul class="plied-list" v-if="item.beReplied.length">
        <li v-for="pliedItem in item.beReplied" :key="pliedItem.beRepliedCommentId">
          <span class="user-name">{{pliedItem.user.nickname}}：</span>
          <span class="content">{{pliedItem.content}}</span>
        </li>
      </ul>
      <div class="other">
        <span class="time">{{item.time | moduleTime}}</span>
        <div class="operation-box">
          <span @click="likeClick()">
            <i class="iconfont icon-zan" ref="zan" :class="{liked: item.liked}"></i>
            ({{item.likedCount}})</span>
          <span>|</span>
          <span>分享</span>
          <span>|</span>
          <span>回复</span>
        </div>
      </div> 
    </div>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { likeComment } from '@/api/commend.ts'
@Component({
  filters: {
    moduleTime(time: number){
      const newTime = new Date(time)
      const year = newTime.getFullYear()
      const month = newTime.getMonth() + 1
      const day = newTime.getDate()
      const hour = newTime.getHours()
      const minute = newTime.getMinutes()

      return `${year}年${month}月${day}日 ${hour}:${minute}`
    }
  }
})
export default class Comment extends Vue {
  @Prop() 
  item: any

  @Prop()
  songId: any

  // likeComment({
  //   cid: this.item.commentId,
  //   t: 1,
  //   type: 0
  // })
  // .then()

  likeClick(){
    const zan: any = this.$refs.zan
    // console.dir(zan.className.indexOf('liked'))
    if(zan.className.indexOf('liked') > -1) {
      // 取消点赞
      likeComment({
        id: this.songId,
        cid: this.item.commentId,
        t: 0,
        type: 0
      })
      .then(err => {
        zan.classList.remove('liked')
        this.item.likedCount--
      })
    } else {
      likeComment({
        id: this.songId,
        cid: this.item.commentId,
        t: 1,
        type: 0
      })
      .then(err => {
        zan.classList.add('liked')
        this.item.likedCount++
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-wrap {
  padding: 20px 0;
  border-bottom: 1px solid rgb(230,231,234);
  position: relative;
  .avatar-box {
    position: absolute;
    .avatar {
      height: 35px;
      width: 35px;
      border-radius: 50%;
    }
  }
  .content-box {
    padding-left: 50px;
    font-size: 12px;
    .user-name {
      color: rgb(66, 105, 206);
    }
    .content {
      margin-bottom: 5px;
    }
    .plied-list {
      padding: 5px;
      margin-bottom: 5px;
      background: rgb(241, 241, 244);
      .content {
        color: rgb(133, 133, 133);
      }
    }
    .other {
      display: flex;
      justify-content: space-between;
      color: rgb(153, 153, 153);
      // font-size: 0;
      height: 12px;
      .operation-box {
        // font-size: 12px;
        span {
          margin-left: 10px;
          &:hover{
            color: rgb(110, 110, 110);
          }
          cursor: pointer;
          .iconfont {
            font-size: 13px;
            font-weight: 700;
          }
          .iconfont.liked {
            color: rgb(198,47,47);
          }
        }
      }
    }
  }
}
</style>