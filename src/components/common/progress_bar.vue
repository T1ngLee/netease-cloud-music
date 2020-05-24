<template>
  <div class="progress-bar-wrap" :style="{width: progressBarWidth}">
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
}
</script>

<style lang="scss" scoped>
.progress-bar-wrap {
  // width: 100%;
  height: 4px;
  background: rgb(194,194,196);
  border-radius: 2px;
  position: relative;
  .progress-bar-top {
    background: rgb(198,47,47);
    // width: 50%;
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
    // left: 50%;
    // opacity: 0.5;
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