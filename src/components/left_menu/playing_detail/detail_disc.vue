<template>
  <div class="detail-disc-wrap">
    <div class="pointer-box" :class="{playing: playing}">
      <div class="pointer">
        <img src="../../../assets/pointer.png">
      </div>
    </div>
    <div class="disc-box" :class="playing ? 'playing' : 'paused'" ref="discBox">
      <img class="cover" src="https://p1.music.126.net/2Vka20mvOC7MLZcrBsbnUA==/109951165001127531.jpg?param=400y400">
      <img class="disc" src="../../../assets/disc.png">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component
export default class DetailDisc extends Vue {
  playing = false
  aaa = 0
  @Watch('$store.state.playState')
  isPlaying(val: boolean){
    this.playing = val
    // console.dir(this.$refs.discBox);
    const  el = this.$refs.discBox
    const  st = window.getComputedStyle(el as any, null);
    const  tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "FAIL";

    // console.log('Matrix: ' + tr);
    const  values = tr.split('(')[1].split(')')[0].split(',');
    const  a: any = values[0];
    const  b: any = values[1];
    const  c: any = values[2];
    const  d: any = values[3];
    const  scale = Math.sqrt(a * a + b * b);
    // console.log('Scale: ' + scale);
    // arc sin, convert from radians to degrees, round
    const  sin = b / scale;
    // next line works for 30deg but not 130deg (returns 50);
    // const angle = Math.round(Math.asin(sin) * (180/Math.PI));
    let  angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    if(angle < 0) {
      angle = 180 + angle + 180
    }
    console.log('Rotate: ' + angle + 'deg');
    this.aaa = angle

    // console.log(document.styleSheets);
    // const style = document.styleSheets[0];
    // style.insertRule("@keyframes rotate{from{ transform: translate(0%,0%); }to{ transform: translate(0%,-"+param +"%);}}",9)
    
  }
}
</script>

<style lang="scss" scoped>
.detail-disc-wrap {
  height: 100%;
  width: 330px;
  position: relative;
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
    &.playing {
      animation: rotate 5s linear infinite;
    }
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