<template>
  <div class="desktop-lyric-wrap">
    <div class="lyric-btn">
      <span class="iconfont icon-diaozhenggeci1" v-show="isShow" @click="isShow = !isShow"></span>
      <span class="iconfont icon-diaozhenggeci" v-show="!isShow" @click="isShow = !isShow"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class DesktopLyric extends Vue {
  isShow = false
}
</script>

<style lang="scss" scoped>
.desktop-lyric-wrap {
  height: 100%;
  width: 20px;
  line-height: 50px;
  .lyric-btn {
    position: relative;
    height: 100%;
    .iconfont {
      position: absolute;
      left: 0;
      font-size: 21px;
      margin-top: 3px;
    }
  }
}
</style>