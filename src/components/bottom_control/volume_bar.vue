<template>
  <div class="volume-bar-wrap">
    <div class="volume-logo">
      <span class="iconfont icon-yinliang" v-show="true"></span>
      <span class="iconfont icon-yinliang1" v-show="false"></span>
    </div>
    <progess-bar class="progress-bar" :progressBarWidth="'100%'" :nowProgress="0"/>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProgessBar from '@/components/common/progress_bar.vue'
@Component({
  components: {
    ProgessBar
  }
})
export default class VolumeBar extends Vue {
}
</script>

<style lang="scss" scoped>
.volume-bar-wrap {
  height: 100%;
  width: 150px;
  display: flex;
  align-items: center;
  padding-right: 15px;
  .volume-logo {
    position: relative;
    width: 20px;
    margin-right: 15px;
    flex: 0 0 20px;
    .iconfont {
      font-size: 15px;
      position: absolute;
      left: 0;
      margin-top: -7px;
    }
  }
  .progress-bar {
    flex: 1 1;
  }
}
</style>