<template>
  <div class="audio-wrap">
    <audio id="audio" src="" ref="audio"></audio>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component
export default class AudioWrap extends Vue {
  // 获取 audio 的对象
  get audio (): any {
    return this.$refs.audio
  }
  @Watch('$store.state.songUrl')
  onSongUrlChange(val: string, oldVal: string){
    this.audio.setAttribute('src', val)
    console.log(val);
    this.$store.commit('setPlayState', true)
    this.audio.play()
  }

  // @Watch('$store.state.playState')
  // playState(val: string, oldVal: string){
  //   // this.audio.setAttribute('src', val)
  //   console.log(val);
  // }

  @Watch('$store.state.playState')
  playState(val: string){
    if (val) {
      this.audio.play()
      console.log('播放');
      
    } else {
      this.audio.pause()
      console.log('暂停');
    }
  }
  // mounted() {
  //   this.$store.state.player = this.$refs.audio
  // }
}
</script>

<style lang="scss" scoped>
</style>