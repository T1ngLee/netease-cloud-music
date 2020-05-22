<template>
  <div class="right-content-wrap">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class RightContent extends Vue {}
</script>

<style lang="scss" scoped>
.right-content-wrap {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 250, 250);
  padding-left: 200px;
  .container {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    overflow: auto;
  }
}
</style>