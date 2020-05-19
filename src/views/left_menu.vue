<template>
  <div class="left-menu-wrap">
    菜单区
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class LeftMenu extends Vue {}
</script>

<style lang="scss" scoped>
@import '../common/css/common.scss';
.left-menu-wrap {
  height: 100%;
  width: 200px;
  background-color: $background-colors;
  float: left;
}
</style>