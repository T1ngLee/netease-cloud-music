<template>
  <div class="song-list-btn-wrap">
    <span class="iconfont icon-bofangliebiao" @click="isShow = !isShow"></span>
    <play-list class="play-list" @close="close" v-show="isShow"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import PlayList from '@/components/bottom_control/song_list/play_list.vue'
@Component({
  components: {
    PlayList
  }
})
export default class SongListBtn extends Vue {
  isShow = false

  close(){
    this.isShow = false
  }
  isClick () {
    const state = this.$store.state.playListShowState
    this.$store.commit('setPlayListShowState', !state)
  }

  /**
   * 点击播放列表以外的区域关闭播放列表
   */
  @Watch('isShow')
  bodyClick(newVal: boolean){
    if (newVal) {
      const dom = document.querySelector('.play-list-content-wrap')
      const btn = document.querySelector('.icon-bofangliebiao')
      document.body.onclick = (e) => {
        e = e || window.event;
        const target = e.target || e.srcElement;
        if(target != dom && target != btn){
          this.close()
        }
      }
    } else {
      document.body.onclick = null
    }
  }
}
</script>

<style lang="scss" scoped>
.song-list-btn-wrap {
  width: 20px;
  height: 100%;
  // line-height: 50px;
  margin-top: 14px;
  .icon-bofangliebiao {
    font-size: 17px;
  }
}
</style>