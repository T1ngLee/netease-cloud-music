<template>
  <div class="progress-bar-wrap" ref="progressBar" @click="barClick"  :style="{width: progressBarWidth}">
    <div class="progress-bar-top" :style="{width: nowProgress}"></div>
    <div class="progress-bar-dot" :style="{left: nowProgress}">
      <div class="inner-dot"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class ProgessBar extends Vue {
  @Prop({default: '200px'})
  progressBarWidth!: string

  @Prop({default: '0%'})
  nowProgress!: string

  barClick(event: any){
    // console.log(this.$refs.progressBar.offsetWidth);
    const progressBar: any = this.$refs.progressBar
    const barClientWidth = progressBar.clientWidth
    const barOffsetLeft = progressBar.offsetLeft
    const eClientX = event.clientX || (window.event as any).clientX
    // console.dir(this.$refs.progressBar.clientWidth)
    // console.dir(this.$refs.progressBar.offsetLeft)
    // console.log(event.clientX)
    // console.log('点击滚动条上的位置：', event.clientX - this.$refs.progressBar.offsetLeft)
    // this.$refs.progressBar
    const progress = (eClientX - barOffsetLeft) / barClientWidth
    // console.log('进度等于：', (event.clientX - this.$refs.progressBar.offsetLeft)/this.$refs.progressBar.clientWidth)
    this.returnProgress(progress)
  }

  returnProgress(progress: number){
    console.log(progress)
    this.$emit('getProgress', progress)
  }
}
</script>

<style lang="scss" scoped>
.progress-bar-wrap {
  height: 4px;
  background: rgb(194,194,196);
  border-radius: 2px;
  position: relative;
  .progress-bar-top {
    background: rgb(198,47,47);
    height: 100%;
    border-radius: 2px;
  }
  .progress-bar-dot {
    cursor: pointer;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    border: 1px solid #e6e7ea;
    position: absolute;
    top: 0;
    transform: translate(-7px, -5px);
    &:hover {
      box-shadow: 0 0 2px 2px rgba($color: #000000, $alpha: .2);
    }
    .inner-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgb(198,47,47);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>