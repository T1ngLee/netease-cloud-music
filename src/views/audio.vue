<template>
  <div class="audio-wrap">
    <audio id="audio" src="" ref="audio"></audio>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import InitTimeFormat from '@/mixins/InitTimeFormat.ts'
import Player from '@/player/player.ts'
@Component({
  mixins: [InitTimeFormat]
})
export default class AudioWrap extends Vue {
  // 获取 audio 的对象
  timer = -1
  player = new Player()
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
      this.listenAudioTime()
    } else {
      this.audio.pause()
      console.log('暂停');
      clearInterval(this.timer)
    }
  }

  // 监听AUDIO时间
  listenAudioTime(){
    this.timer = setInterval(()=>{
      // 进度时间
      const duration = this.audio.duration
      const currentTime = this.audio.currentTime
      const songProgress: any = {}
      songProgress.progress = (currentTime / duration * 100) + '%';
      // songProgress.currentTime = (this as any).handleShowTime(currentTime)
      // songProgress.duration = (this as any).handleShowTime(duration)
      songProgress.currentTime = currentTime
      songProgress.duration = duration
      this.$store.commit('setSongProgress', songProgress)

      // 如果当前时间大于等于歌曲时长，则根据播放模式切歌，顺序，随机，单曲, 列表
      if(currentTime >= duration) {
        this.player.autoCut()
      }
    }, 1000)
  }

}
</script>

<style lang="scss" scoped>
</style>