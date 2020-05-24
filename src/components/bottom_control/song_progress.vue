<template>
  <div class="song-progress-wrap">
    <span class="now-time">{{progress.currentTime || '00:00'}}</span>
    <progress-bar  class="progress-bar" :progressBarWidth="'80%'" :nowProgress="progress.progress"/>
    <span class="all-time">{{progress.duration || '00:00'}}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import ProgressBar from '@/components/common/progress_bar.vue'
@Component({
  components: {
    ProgressBar
  }
})
export default class SongProgress extends Vue {
  progress = {}
  @Watch('$store.state.songProgress', {deep: true})
  changeProgress(val: object){
    console.log('正在监听')
    this.progress = val
  }
}
</script>

<style lang="scss" scoped>
.song-progress-wrap {
  font-size: 11px;
  width: 80%;
  position: absolute;
  height: 100%;
  // left: 200px;
  display: flex;
  align-items: center;
  .progress-bar {
    display: inline-block;
    margin: 0 15px;
  }
}
</style>
