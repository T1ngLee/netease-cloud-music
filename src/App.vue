<template>
  <div class="app-wrap">
    <!-- <audio src="http://m7.music.126.net/20200520204148/690d680b336c3776fe049d683acefa76/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2585012073/9c43/5b38/5503/484bc8813effa5d9e450ccc70bbf4f90.mp3"></audio> -->
    <audio-wrap />
    <LoginOrSignIN/>
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
import AudioWrap from '@/views/audio.vue'
import LoginOrSignIN from '@/components/common/login_or_signin.vue'
@Component({
  components: {
    TopBar,
    BottomControl,
    LeftMenu,
    RightContent,
    AudioWrap,
    LoginOrSignIN
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