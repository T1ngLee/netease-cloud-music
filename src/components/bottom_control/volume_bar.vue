<template>
  <div class="volume-bar-wrap">
    <div class="volume-logo" @click="iconClick">
      <span class="iconfont icon-yinliang" v-show="progress === '0%'"></span>
      <span class="iconfont icon-yinliang1" v-show="progress !== '0%'"></span>
    </div>
    <progess-bar class="progress-bar" :progressBarWidth="'100%'" :nowProgress="progress" @getProgress="getProgress"/>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import ProgessBar from '@/components/common/progress_bar.vue'
@Component({
  components: {
    ProgessBar
  }
})
export default class VolumeBar extends Vue {
  get progress(): string{
    const state = this.$store.state
    if (!state.muted) {    
      return state.volume * 100 + '%'
    } else {
      return '0%'
    }
  }

  iconClick(){
    const state = this.$store.state
    if (state.volume && !state.muted) {
      // 有音量未静音，点击后静音
      this.$store.commit('setMuted', true)
    } else if (state.volume && state.muted) {
      // 有音量已静音，点击解除静音
      this.$store.commit('setMuted', false)
    } else {
      this.getProgress(0.1)
      this.$store.commit('setMuted', false)
    }
  }

  getProgress(progress: number){
    this.$store.commit('setVolume', progress)
  }
}
</script>

<style lang="scss" scoped>
.volume-bar-wrap {
  height: 100%;
  width: 150px;
  display: flex;
  align-items: center;
  padding-right: 15px;
  .volume-logo {
    position: relative;
    width: 20px;
    margin-right: 15px;
    flex: 0 0 20px;
    .iconfont {
      font-size: 15px;
      position: absolute;
      left: 0;
      margin-top: -7px;
    }
  }
  .progress-bar {
    flex: 1 1;
  }
}
</style>