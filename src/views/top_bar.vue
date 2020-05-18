<template>
  <div class="top-bar-wrap">
    top
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class TopBar extends Vue {}
</script>

<style lang="scss" scoped>
@import '../common/css/common.scss';
.top-bar-wrap {
  width: 100vw;
  height: 50px;
  background-color: $theme-colors;
  position: absolute;
  top: 0;
}
</style>
