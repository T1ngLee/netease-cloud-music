<template>
  <div class="app-wrap">
    <!-- <audio src="http://m7.music.126.net/20200520204148/690d680b336c3776fe049d683acefa76/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2585012073/9c43/5b38/5503/484bc8813effa5d9e450ccc70bbf4f90.mp3"></audio> -->
    <audio-wrap />
    <LoginOrSignIN v-if="loginBoxShow"/>
    <top-bar/>
    <div class="center-box">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      <!-- <left-menu/>
      <right-content/> -->
      <!-- <home/> -->
    </div>
    <bottom-control/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TopBar from '@/views/top_bar.vue'
import BottomControl from '@/views/bottom_control.vue'
// import LeftMenu from '@/views/left_menu.vue'
// import RightContent from '@/views/right_content.vue'
import AudioWrap from '@/views/audio.vue'
import LoginOrSignIN from '@/components/common/login_or_signin.vue'
import LoginInfo from '@/mixins/LoginInfo.ts'
// import Home from '@/views/home.vue'
@Component({
  components: {
    TopBar,
    BottomControl,
    // LeftMenu,
    // RightContent,
    AudioWrap,
    LoginOrSignIN,
    // Home
  },
  mixins: [LoginInfo]
})
export default class App extends Vue {
  get loginBoxShow(): boolean {
    if(!this.$store.state.loginState && this.$store.state.loginBoxShow) {
      return true
    }
    return false
  }

}
</script>

<style lang="scss" scoped>
.app-wrap {
  .center-box {
    height: calc(100vh - 100px);
    width: 100vw;
    // background: yellow;
  }
}
</style>