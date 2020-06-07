<template>
  <div class="home-wrap">
    <!-- <keep-alive> -->
      <left-menu/>
      <right-content/>
    <!-- </keep-alive> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LeftMenu from '@/views/left_menu.vue'
import RightContent from '@/views/right_content.vue'
@Component({
  name: 'home',
  components: {
    LeftMenu,
    RightContent
  }
})
export default class HomeWrap extends Vue {}
</script>

<style lang="scss" scoped>
.home-wrap {
  height: 100%;
}
</style>