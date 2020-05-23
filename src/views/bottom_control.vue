<template>
  <div class="bottom-control-wrap">
    bottom
    <button @click="aaa()">asdasd</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class BottomControl extends Vue {
  aaa(){
    if (this.$store.state.playState) {
      this.$store.commit('setPlayState', false)
    } else {
      this.$store.commit('setPlayState', true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../common/css/common.scss';
.bottom-control-wrap {
  height: 50px;
  width: 100vw;
  background-color: $background-colors;
  position: absolute;
  bottom: 0;
  z-index: 10;
  border-top: 1px solid rgb(230,231,234);
}
</style>