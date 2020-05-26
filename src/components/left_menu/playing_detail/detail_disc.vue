<template>
  <div class="detail-disc-wrap">
    <div class="pointer playing">
      <img src="../../../assets/pointer.png">
      
    </div>
    <div class="disc-box playing">
      <img class="cover" src="https://p1.music.126.net/2Vka20mvOC7MLZcrBsbnUA==/109951165001127531.jpg?param=400y400">
      <img class="disc" src="../../../assets/disc.png">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class DetailDisc extends Vue {}
</script>

<style lang="scss" scoped>
.detail-disc-wrap {
  height: 100%;
  width: 330px;
  background: olivedrab;
  position: relative;
  .pointer {
    position: absolute;
    transform: scale(0.43) rotate(-11deg) translateX(-100px);
    transform-origin: 20px 20px;
    transition: all 0.5s ease;
    top: -25px;
    left: 50%;
    z-index: 1;
    // transform: ;
    // rotate: ;
    &.playing {
      transform: scale(0.43) rotate(20deg) translateX(-50px);
      transition: all 0.5s ease;
    }
  }
  .disc-box {
    width: 320px;
    height: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background: orange;
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgba($color: #ffffff, $alpha: .3);
    &.playing {
      // transform: rotate(360deg) translate(-50%, -50%);
      // transition: rotate 5s ease infinite;
      animation: rotate 5s linear infinite;
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