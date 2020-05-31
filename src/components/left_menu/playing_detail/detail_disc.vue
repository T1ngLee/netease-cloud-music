<template>
  <div class="detail-disc-wrap">
    <div class="pointer-box" :class="{playing: $store.state.playState}">
      <div class="pointer">
        <img src="../../../assets/pointer.png">
      </div>
    </div>
    <div class="disc-box" :class="{paused: !$store.state.playState}" ref="discBox">
      <img class="cover" :src="$store.state.playingSong.al.picUrl">
      <img class="disc" src="../../../assets/disc.png">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component
export default class DetailDisc extends Vue {
}
</script>

<style lang="scss" scoped>
.detail-disc-wrap {
  height: 100%;
  width: 330px;
  position: relative;
  z-index: 5;
  .pointer-box {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%) rotate(0);
    transform-origin: 15px 15px;
    z-index: 1;
    transition: all 0.5s ease;
    &.playing {
      transform: translate(-50%, -50%) rotate(38deg);
      transition: all 0.5s ease;
    }
    .pointer {
      position: absolute;
      transform: scale(0.50) rotate(-11deg);
      top: -69px;
      left: -78px;
    }
  }
  
  .disc-box {
    width: 320px;
    height: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgba($color: #ffffff, $alpha: .3);
    // &.playing {
      animation: rotate 5s linear infinite;
    // }
    &.paused {
      animation-play-state:paused;
    }
    img {
      position: absolute;
    }
    .cover {
      width: 65%;
      height: 65%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .disc {
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      
    }
  }
  @keyframes rotate {
    0%{
      transform: translate(-50%, -50%) rotate(0);
    }
    100% {
      transform: translate(-50%, -50%) rotate(359deg);
    }
  }
}
</style>