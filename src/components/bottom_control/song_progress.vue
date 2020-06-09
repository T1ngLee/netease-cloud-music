<template>
  <div class="song-progress-wrap">
    <span class="now-time">{{progress.currentTime | handleShowTime}}</span>
    <progress-bar  class="progress-bar" :progressBarWidth="'100%'" :nowProgress="progress.progress" @getProgress="getProgress"/>
    <span class="all-time">{{progress.duration | handleShowTime}}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import ProgressBar from '@/components/common/progress_bar.vue'
@Component({
  components: {
    ProgressBar
  },
  filters: {
    handleShowTime (time: number): string {
      const a = time / 60
      let minute: any = Math.floor(a)
      let second: any = Math.floor(60 * parseFloat(0 + '.' + a.toString().split('.')[1]))
      if (minute < 10) {
        minute = '0' + minute
      }

      if (second < 10) {
        second = '0' + second
      }
      return minute + ':' + second
    }
  }
})
export default class SongProgress extends Vue {
  // progress = {}
  // @Watch('$store.state.songProgress', {deep: true})
  // changeProgress(val: object){
  //   console.log('正在监听')
  //   this.progress = val
  // }

  get progress() {
    return this.$store.state.songProgress
  }

  getProgress(progress: number){
    console.log('father: ', progress)
    
    this.$store.commit('setNewProgress', progress)
  }

  created(){
    const played = window.localStorage.getItem('played')
    console.log(JSON.parse(played as any));
    
    if(played == null || played == '{}') {
      this.$store.commit('setPlayingSongs', ['',-1,{}])
    } else {
      const playedObj = JSON.parse(played as any)
      const playedArr = Object.values(playedObj)
      this.$store.commit('setPlayingSongs', playedArr)
    }

    window.addEventListener('unload', this.savePlayed)
  }

  // destroyed(){
  //   const store = this.$store.state
  //   const played = {
  //     songUrl: store.songUrl,
  //     playIndex: store.playIndex,
  //     playingSong: store.playingSong
  //   }
  //   window.localStorage.setItem('played', JSON.stringify(played))
  // }

  savePlayed(){
    const store = this.$store.state
    const played = {
      songUrl: store.songUrl,
      playIndex: store.playIndex,
      playingSong: store.playingSong
    }
    window.localStorage.setItem('played', JSON.stringify(played))
  }
}
</script>

<style lang="scss" scoped>
.song-progress-wrap {
  font-size: 11px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .progress-bar {
    margin: 0 15px;
  }
}
</style>
