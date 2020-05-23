<template>
  <div class="play-btn-wrap" ref="playBtn" :style="`transform: scale(${zoomNum})`">
    <div class="triangle"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
@Component
export default class PlayBtn extends Vue {
  @Prop({default: 1})
  zoomNum!: number
}
</script>

<style lang="scss" scoped>
.play-btn-wrap {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba($color: #000000, $alpha: 0.3);
  z-index: 2;
  text-align: center;
  bottom: 5px;
  right: 5px;
  box-shadow: 0 0 3px 3px rgba($color: #ffffff, $alpha: 0.5);
  transition: all .3s ease;
  position: absolute;
  &:hover {
    background: rgba($color: #000000, $alpha: 0.6);
    transition: all .3s ease;
  }
  .triangle {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid rgb(237,239,235);
    border-right: 15px solid transparent;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-15%, -50%);
  }
}
</style>