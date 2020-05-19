<template>
  <div class="user-info-wrap">
    <div class="head-photo">
      <!-- <img src=""> -->
      <i class="iconfont icon-weidenglu1"></i>
    </div>
    <div class="not-login btn">
      未登录
      <span class="triangle"></span>
    </div>
    <div class="logged btn" v-show="isLogged">
      <span class="triangle"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class UserInfo extends Vue {
  isLogged = false
}
</script>

<style lang="scss" scoped>
@import '../../common/css/common.scss';
.user-info-wrap {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(238, 193, 193);
  height: 25px;
  .head-photo {
    cursor: pointer;
    height: 25px;
    width: 25px;
    .iconfont {
      color: rgb(238, 193, 193);
      font-size: 25px;
    }
  }
  .btn {
    height: 100%;
    cursor: pointer;
    padding-left: 5px;
    display: flex;
    align-items: center;
    .triangle {
      display: inline-block;
      height: 0;
      width: 0;
      border: 4px solid;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      margin-top: 4px;
      margin-left: 4px;
      // vertical-align: -2px;
    }
  }
}
</style>