<template>
  <div class="left-menu-wrap">
    <recommend-menu/>
    <playing-detail class="playing-detail"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import RecommendMenu from '@/components/left_menu/recommend_menu.vue'
import PlayingDetail from '@/components/left_menu/playing_detail.vue'
@Component({
  components: {
    RecommendMenu,
    PlayingDetail
  }
})
export default class LeftMenu extends Vue {}
</script>

<style lang="scss" scoped>
@import '../common/css/common.scss';
.left-menu-wrap {
  height: 100%;
  width: 200px;
  background-color: $background-colors;
  float: left;
  z-index: 5;
  position: relative;
  border-right: 1px solid rgb(230,231,234);
  .playing-detail {
    // position: absolute;
    // bottom: 0;
  }
}
</style>