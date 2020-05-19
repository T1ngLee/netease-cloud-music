<template>
  <div class="top-bar-wrap">
    <h1 class="logo">网易云音乐
      <img src="../assets/top_bar_logo.png">
    </h1>
    <nav-btn class="nav-btn"/>
    <search-bar/>
    <div class="top-bar-right">
      <user-info/>
      <div>开通VIP</div>
      <skin/>
      <message class="message"/>
      <div class="setting-btn">
        <i class="iconfont icon-chilun"></i>
      </div>
      <div class="vertical-line"></div>
      <div class="mini-mode-btn">
        <i class="iconfont icon-suoxiao1"></i>
      </div>
      <div class="minimum-btn">
        <i class="iconfont icon-zuixiaohua"></i>
      </div>
      <div class="restore-down-btn">
        <i class="iconfont icon-zuidahua"></i>
      </div>
      <div class="close-btn">
        <i class="iconfont icon-chacha"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavBtn from '@/components/top_bar/nav_btn.vue'
import SearchBar from '@/components/top_bar/search_bar.vue'
import UserInfo from '@/components/top_bar/user_info.vue'
import Skin from '@/components/top_bar/skin.vue'
import Message from '@/components/top_bar/message.vue'
@Component({
  components: {
    NavBtn,
    SearchBar,
    UserInfo,
    Skin,
    Message
  }
})
export default class TopBar extends Vue {}
</script>

<style lang="scss" scoped>
@import '../common/css/common.scss';
.top-bar-wrap {
  width: 100vw;
  height: 50px;
  background-color: $theme-colors;
  padding: 0 10px;
  display: flex;
  align-items: center;
  position: relative;
  h1 {
    font-size: 0;
    height: 25px;
    img {
      height: 100%;
    }
  }
  .nav-btn {
    margin: 0 10px 0 40px;
  }
  .top-bar-right {
    display: flex;
    position: absolute;
    right: 10px;
    font-size: 12px;
    color: rgb(238, 193, 193);
    & > * {
      padding: 0 5px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
    .iconfont {
      display: inline-block;
      line-height: 16px;
      // vertical-align: 10px;
      margin-top: 10px;
      &.icon-suoxiao1 {
        font-size: 14px;
      }
      &.icon-chilun {
        font-size: 14px;
      }
      &.icon-zuidahua {
        font-size: 18px;
      }
    }
    .message {
      padding: 0 10px;
    }
    .vertical-line {
      // height: 100%;
      width: 1px;
      border-left: 1px solid #666;
      padding: 0;
      margin: 0 10px;
      cursor: auto;
    }
  }
}
</style>
