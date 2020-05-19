<template>
  <div class="nav-btn-wrap">
    <span class="retreat-btn">
      <i class="iconfont icon-xiangzuo"></i>
    </span>
    <span class="advance-btn">
      <i class="iconfont icon-jiantou-left"></i>
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class NavBtn extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../common/css/common.scss';
.nav-btn-wrap {
  span {
    display: inline-block;
    border: 1px solid #888;
    font-size: 0;
    width: 25px;
    height: 20px;
    text-align: center;
    line-height: 25px;
    &.retreat-btn {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &.advance-btn {
      border-left: 0;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    .iconfont {
      font-size: 15px;
      color: rgb(209, 88, 88);
      margin-top: 2px;
      display: inline-block;
    }
  }
}
</style>