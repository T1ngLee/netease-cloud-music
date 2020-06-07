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
  // volume = 0
  // songProgress: any = {}
  get audio (): any {
    return this.$refs.audio
  }
  @Watch('$store.state.songUrl')
  onSongUrlChange(val: string, oldVal: string){
    this.audio.src = val
    console.log(val);
    // this.$store.commit('setPlayState', true)
    // this.audio.play()
  }

  // @Watch('$store.state.playIndex')
  // onSongUrlChange(val: string, oldVal: string){
  //   this.audio.src = this.$store.state.songUrl
  //   // console.log(val);
  //   this.$store.commit('setPlayState', true)
  //   this.audio.play()
  // }

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
      songProgress.currentTime = currentTime
      songProgress.duration = duration
      this.$store.commit('setSongProgress', songProgress)

      // 如果当前时间大于等于歌曲时长，则根据播放模式切歌，顺序，随机，单曲, 列表
      if(currentTime >= duration) {
        this.player.autoCut()
      }
    }, 1000)
  }

  // 监听进度条设置的进度
  @Watch('$store.state.newProgress')
  listenNewProgress(val: number) {
    const duration = this.audio.duration
    const newCurrentTime = duration * val
    // 第一时间将新进度传给vuex，防止进度条变化延迟
    const songProgress: any = {}
    songProgress.progress = (val * 100) + '%';
    songProgress.currentTime = newCurrentTime
    songProgress.duration = duration
    this.$store.commit('setSongProgress', songProgress)
    this.audio.currentTime = newCurrentTime
    // this.$store.commit('setSongProgress', songProgress)
  }

  mounted(){
    if(localStorage.getItem('volume') != null) {
      this.$store.commit('setVolume', localStorage.getItem('volume'))
    } else {
      this.$store.commit('setVolume', this.audio.volume)
      this.saveVolume(this.audio.volume)
    }
  }

  // 将当前音量保存在localStorage
  saveVolume(volume: any){
    localStorage.setItem('volume', volume)
  }

  // 监听音量
  @Watch('$store.state.volume')
  listenVolume(val: number){
    this.audio.volume = val
    this.saveVolume(val)
  }

  // 监听静音
  @Watch('$store.state.muted')
  listenMuted(val: number){
    this.audio.muted = val
  }
}
</script>

<style lang="scss" scoped>
</style>