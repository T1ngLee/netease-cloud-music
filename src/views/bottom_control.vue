<template>
  <div class="bottom-control-wrap">
    bottom
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class BottomControl extends Vue {}
</script>

<style lang="scss" scoped>
@import '../common/css/common.scss';
.bottom-control-wrap {
  height: 50px;
  width: 100vw;
  background-color: $background-colors;
  position: absolute;
  bottom: 0;
}
</style>