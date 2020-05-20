<template>
  <div class="left-menu-wrap">
    <recommend-menu/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import RecommendMenu from '@/components/left_menu/recommend_menu.vue'
@Component({
  components: {
    RecommendMenu
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
}
</style>