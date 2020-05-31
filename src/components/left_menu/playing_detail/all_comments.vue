<template>
  <div class="all-comments-wrap">
    <div class="wonderful-comments">
      <div class="title">精彩评论</div>
      <ul class="commends-list">
        <li class="commend-item" v-for="item in hotComments" :key="item.commentId">
          <div class="avatar-box">
            <img class="avatar" :src="item.user.avatarUrl">
          </div>
          <div class="content-box">
            <div class="content">
              <span class="user-name">{{item.user.nickname}}</span>
              <span class="content">{{item.content}}</span>
            </div>
            <ul class="plied-list" v-if="item.beReplied.length">
              <li v-for="pliedItem in item.beReplied" :key="pliedItem.beRepliedCommentId">
                <span class="plied-user-name">{{pliedItem.user.nickname}}</span>
                <span class="plied-content">{{pliedItem.content}}</span>
              </li>
            </ul>
            <div class="other">
              <span class="time">{{item.time}}</span>
              <div class="operation-box">
                <span>点赞</span>
                <span>分享</span>
                <span>恢复</span>
              </div>
            </div> 
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { hotCommend } from '@/api/commend.ts'
@Component
export default class AllComments extends Vue {
  hotComments = []

  @Watch('$store.state.playingSong.id')
  getHotCommends(val: number){
    hotCommend({
      id: val,
      type: 0,
      limit: 10
    })
    .then((res: any) => {
      this.hotComments = res.hotComments
      console.log(this.hotComments);
      
    })
    .catch(err =>{
      console.log(err);
      
    })
  }
}
</script>

<style lang="scss" scoped>
.all-comments-wrap {
  width: 600px;
  background: violet;
  .wonderful-comments {
    .title {
      width: 100%;
      font-size: 12px;
      padding: 5px 0;
      border-bottom: 1px solid rgb(230,231,234);
    }
    .commends-list {
      .commend-item {
        padding: 10px 0;
        border-bottom: 1px solid rgb(230,231,234);
        position: relative;
        .avatar-box {
          position: absolute;
          .avatar {
            height: 30px;
            width: 30px;
            border-radius: 50%;
          }
        }
        .content-box {
          padding-left: 40px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>