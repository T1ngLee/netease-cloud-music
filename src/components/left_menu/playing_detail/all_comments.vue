<template>
  <div class="all-comments-wrap">
    <div class="wonderful-comments">
      <div class="title">精彩评论</div>
      <ul class="commends-list">
        <comment v-for="item in hotComments" :key="item.commentId" :songId="songId" :item="item"/>
      </ul>
    </div>
    <div class="new-comments">
      <div class="title">最新评论({{newComments.total}})</div>
      <ul class="commends-list">
        <comment v-for="item in newComments.comments" :key="item.commentId" :songId="songId" :item="item"/>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { hotCommend, musicComment } from '@/api/commend.ts'
import Comment from '@/components/left_menu/playing_detail/comment.vue'
@Component({
  components: {
    Comment
  }
})
export default class AllComments extends Vue {
  hotComments = []
  newComments = {}
  songId = this.$store.state.playingSong.id

  mounted(){
    this.getComments(this.songId)
  }

  @Watch('$store.state.playingSong.id')
  getHotCommends(val: number){
    this.songId = val
    this.getComments(val)
  }

  getComments(val: number){
    console.log(val);
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
  
    musicComment({
      id: val,
      limit: 20
    })
    .then((err: any) => {
      this.newComments = err
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>

<style lang="scss" scoped>
.all-comments-wrap {
  width: 600px;
  // background: violet;
  .wonderful-comments {
    .title {
      width: 100%;
      font-size: 12px;
      padding: 5px 0;
      border-bottom: 1px solid rgb(230,231,234);
    }
  }
  .new-comments{
    .title {
      width: 100%;
      font-size: 12px;
      padding: 5px 0;
      border-bottom: 1px solid rgb(230,231,234);
    }
  }
}
</style>