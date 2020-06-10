<template>
  <div class="recommend-menu-wrap">
    <div class="title">推荐</div>
    <ul class="btn-list">
      <router-link tag="li" :to="{name: 'Discover'}" class="btn discover-btn" active-class="active">
        <span class="active-show"></span>
        <i class="iconfont icon-yinle"></i>
        <span>发现音乐</span>
      </router-link>
      <router-link tag="li" :to="{name: 'PrivateFm'}" class="btn discover-btn" active-class="active">
        <span class="active-show"></span>
        <i class="iconfont icon-xinhao"></i>
        <span>私人FM</span>
      </router-link>
      <router-link tag="li" :to="{name: 'Look'}" class="btn discover-btn" active-class="active">
        <span class="active-show"></span>
        <i class="iconfont icon-zhibo"></i>
        <span>LOOK直播</span>
      </router-link>
      <router-link tag="li" :to="{name: 'Video'}" class="btn discover-btn" active-class="active">
        <span class="active-show"></span>
        <i class="iconfont icon-shipin"></i>
        <span>视频</span>
      </router-link>
      <router-link tag="li" :to="{name: 'Friends'}" class="btn discover-btn" active-class="active">
        <span class="active-show"></span>
        <i class="iconfont icon-pengyou"></i>
        <span>朋友</span>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class RecommendMenu extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../common/css/common.scss';
.recommend-menu-wrap {
  .btn-list {
    .btn {
      cursor: pointer;
      height: 30px;
      line-height: 30px;
      position: relative;
      padding: 0 15px;
      font-size: 12px;
      &.active {
        background: $active-background-colors;
      }
      &.active .active-show {
        background-color: rgb(198,47,47);
      }
      .iconfont {
        margin-right: 6px;
      }
      .active-show {
        display: inline-block;
        height: 100%;
        width: 2px;
        background-color: #f5f5f7;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>