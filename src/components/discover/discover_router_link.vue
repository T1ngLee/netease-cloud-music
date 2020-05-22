<template>
  <div class="discover-router-link-wrap">
    <ul class="link-list">
      <router-link tag="li" to="/discover/individuality" class="link individuality" active-class="active">
        个性推荐
      </router-link>
      <router-link tag="li" to="/discover/aa" class="link song-list" active-class="active">
        歌单
      </router-link>
      <router-link tag="li" to="/discover/aa" class="link transceiver" active-class="active">
        主播电台
      </router-link>
      <router-link tag="li" to="/discover/aa" class="link ranking-list" active-class="active">
        排行榜
      </router-link>
      <router-link tag="li" to="/discover/aa" class="link singer" active-class="active">
        歌手
      </router-link>
      <router-link tag="li" to="/discover/aa" class="link new-song" active-class="active">
        最新音乐
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class DiscoverRouterLink extends Vue {}
</script>

<style lang="scss" scoped>
.discover-router-link-wrap {
  border-bottom: 1px solid rgb(230,231,234);
  height: 40px;
  .link-list {
    height: 100%;
    line-height: 40px;
    margin: 0 auto;
    display: flex;
    width: 500px;
    justify-content: space-between;
    font-size: 13px;
    .link {
      cursor: pointer;
      height: 100%;
      width: 52px;
      text-align: center;
      &.active {
        border-bottom: 2px solid rgb(198,47,47);
        color: rgb(198,47,47);
      }
    }
  }
}
</style>