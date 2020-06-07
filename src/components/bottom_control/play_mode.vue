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
    const playMode = window.localStorage.getItem('playMode')
    if(playMode !== null) {
      this.$store.commit('setPlayerMode', parseInt(playMode))
    } else {
      this.$store.commit('setPlayerMode', 0)
    }
    (this.$refs.modeIcon as any).className = `iconfont ${this.modeClass[this.$store.state.playerMode]}`
  }

  changeMode(){
    const nowMode = this.$store.state.playerMode
    let newMode!: any
    if (nowMode === 3) {
      newMode = 0
    } else {
      newMode = nowMode + 1
    }
    (this.$refs.modeIcon as any).className = `iconfont ${this.modeClass[newMode]}`
    this.$store.commit('setPlayerMode', newMode)
    window.localStorage.setItem('playMode', newMode)
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