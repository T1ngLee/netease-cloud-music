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
  }
}
</script>

<style lang="scss" scoped>
</style>