<template>
  <div class="playlist-detail-content-wrap">
    <div class="tab-btn-box">
      <div class="tab-btn list" @click="showIndex = 1" :class="{active: showIndex === 1}">歌曲列表</div>
      <div class="tab-btn comment" @click="showIndex = 2" :class="{active: showIndex === 2}">评论</div>
      <div class="tab-btn subscribe" @click="showIndex = 3" :class="{active: showIndex === 3}">收藏者</div>
    </div>
    <div class="content">
      <!-- <div v-show="showIndex === 1">1</div> -->
      <playlist-list v-show="showIndex === 1" :tranks="tranks"/>
      <div v-show="showIndex === 2">2</div>
      <div v-show="showIndex === 3">3</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import PlaylistList from '@/components/playlist_detail/playlist_list.vue'
@Component({
  components: {
    PlaylistList
  }
})
export default class PlaylistContent extends Vue {
  showIndex = 1
  @Prop() tranks: any
}
</script>

<style lang="scss" scoped>
.playlist-detail-content-wrap {
  margin-top: 40px;
  margin-bottom: 40px;
  .tab-btn-box {
    display: flex;
    .tab-btn {
      cursor: pointer;
      margin-left: 40px;
      font-size: 14px;
      padding: 6px 2px;
      &.active {
        color: rgb(198,47,47);
        border-bottom: 4px solid rgb(198,47,47);
      }
    }
  }
}
</style>