<template>
  <div class="audio-wrap">
    <audio id="audio" src="" ref="audio"></audio>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import InitTimeFormat from '@/mixins/InitTimeFormat.ts'
@Component({
  mixins: [InitTimeFormat]
})
export default class AudioWrap extends Vue {
  // 获取 audio 的对象
  timer = -1
  get audio (): any {
    return this.$refs.audio
  }
  @Watch('$store.state.songUrl')
  onSongUrlChange(val: string, oldVal: string){
    this.audio.src = val
    console.log(val);
    this.$store.commit('setPlayState', true)
    this.audio.play()
  }

  @Watch('$store.state.playState')
  playState(val: string){
    if (val) {
      this.audio.play()
      console.log('播放');
      this.listenAudio()
    } else {
      this.audio.pause()
      console.log('暂停');
      clearInterval(this.timer)
    }
  }

  listenAudio(){
    // const duration = this.audio.duration
    this.timer = setInterval(()=>{
      // 进度时间
      const duration = this.audio.duration
      const songProgress: any = {}
      songProgress.progress = (this.audio.currentTime / duration * 100) + '%';
      songProgress.currentTime = (this as any).handleShowTime(this.audio.currentTime)
      songProgress.duration = (this as any).handleShowTime(duration)
      
      this.$store.commit('setSongProgress', songProgress)
    }, 1000)
  }


  // mounted() {
  //   this.$store.state.player = this.$refs.audio
  // }
}
</script>

<style lang="scss" scoped>
</style>