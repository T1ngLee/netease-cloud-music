<template>
  <div class="song-list-btn-wrap">
    <span class="iconfont icon-bofangliebiao" @click="isClick()"></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class SongListBtn extends Vue {
  isClick () {
    const state = this.$store.state.playListShowState
    this.$store.commit('setPlayListShowState', !state)
  }
}
</script>

<style lang="scss" scoped>
.song-list-btn-wrap {
  width: 20px;
  height: 100%;
  line-height: 50px;
  .iconfont {
    font-size: 17px;
  }
}
</style>