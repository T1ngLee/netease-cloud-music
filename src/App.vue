<template>
  <div class="app-wrap">
    <top-bar/>
    <div class="center-box">
      <left-menu/>
      <right-content/>
    </div>
    <bottom-control/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TopBar from '@/views/top_bar.vue'
import BottomControl from '@/views/bottom_control.vue'
import LeftMenu from '@/views/left_menu.vue'
import RightContent from '@/views/right_content.vue'
@Component({
  components: {
    TopBar,
    BottomControl,
    LeftMenu,
    RightContent
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.app-wrap {
  .center-box {
    height: calc(100vh - 100px);
    width: 100vw;
    background: yellow;
  }
}
</style>