<template>
  <div class="play-mode-wrap">
    <span class="iconfont" ref="modeIcon" @click="changeMode()"></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class PalyMode extends Vue {
  modeClass = ['icon-shunxubofang','icon-liebiaoxunhuan','icon-suijibofang','icon-danquxunhuan']

  mounted(){
    (this.$refs.modeIcon as any).className = `iconfont ${this.modeClass[this.$store.state.playerMode]}`
  }

  changeMode(){
    const nowMode = this.$store.state.playerMode
    let newMode!: number
    if (nowMode === 3) {
      newMode = 0
    } else {
      newMode = nowMode + 1
    }
    (this.$refs.modeIcon as any).className = `iconfont ${this.modeClass[newMode]}`
    this.$store.commit('setPlayerMode', newMode)
  }
}
</script>

<style lang="scss" scoped>
.play-mode-wrap {
  height: 100%;
  width: 20px;
  line-height: 50px;
  .iconfont {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>