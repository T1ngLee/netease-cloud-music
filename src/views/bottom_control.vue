<template>
  <div class="bottom-control-wrap">
    <div class="play-btn">
      <span class="before-btn iconfont icon-shangyishou" @click="before()"></span>
      <div class="center-btn-box">
        <span class="play-btn iconfont icon-bofang1" @click="changePlayState()" v-show="!$store.state.playState"></span>
        <span class="pause-btn iconfont icon-zantingtingzhi" @click="changePlayState()" v-show="$store.state.playState"></span>
      </div>
      <span class="after-btn iconfont icon-xiayishou" @click="after()"></span>
    </div>
    <!-- <button @click="aaa()">asdasd</button> -->
    <!-- <button @click="changePlayListShowState()">列表</button> -->
    <song-progress class="song-progress"/>
    <div class="right-box">
      <volume-bar/>
      <play-mode/>
      <desktop-lyric/>
      <song-list-btn/>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SongProgress from '@/components/bottom_control/song_progress.vue'
import Player from '@/player/player.ts'
import VolumeBar from '@/components/bottom_control/volume_bar.vue'
import PlayMode from '@/components/bottom_control/play_mode.vue'
import DesktopLyric from '@/components/bottom_control/desktop_lyric.vue'
import SongListBtn from '@/components/bottom_control/song_list_btn.vue'
@Component({
  components: {
    SongProgress,
    VolumeBar,
    PlayMode,
    DesktopLyric,
    SongListBtn
  }
})
export default class BottomControl extends Vue {
  player = new Player()
  before(){
    if(this.$store.state.playerMode === 2){
      this.player.randomCut()
    } else {
      this.player.before()
    }
  }

  after(){
    if(this.$store.state.playerMode === 2){
      this.player.randomCut()
    } else {
      this.player.after()
    }
  }

  changePlayState(){
    if(this.$store.state.playIndex === -1) {
      this.player.play(0)
    } else {
      this.$store.commit('setPlayState', !this.$store.state.playState)
    }

    // if (this.$store.state.playState) {
    //   this.$store.commit('setPlayState', false)
    // } else {
    //   this.$store.commit('setPlayState', true)
    // }
  }

  changePlayListShowState () {
    this.$store.commit('setPlayListShowState', !this.$store.state.playListShowState)
  }
}
</script>

<style lang="scss" scoped>
@import '../common/css/common.scss';
.bottom-control-wrap {
  height: 50px;
  width: 100vw;
  background-color: $background-colors;
  position: absolute;
  bottom: 0;
  z-index: 10;
  border-top: 1px solid rgb(230,231,234);
  display: flex;
  min-width: 960px;
  .play-btn {
    // position: absolute;
    // top: 0;
    // left: 0;
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 0 0 200px;
    .iconfont {
      font-size: 25px;
      margin-top: 17px;
      color: rgb(198,47,47);
      cursor: pointer;
    }
    .center-btn-box {
      display: inline-block;
      position: relative;
      height: 100%;
      width: 33px;
      .iconfont {
        display: block;
        width: 100%;
        position: absolute;
        font-size: 33px;
        left: 0;
        top: 0;
        margin-top: 9px;
      }
    }
  }
  .song-progress{
    flex: 1 1;
  }
  .right-box {
    padding-left: 15px;
    top: 0;
    left: 200px;
    padding-right: 20px;
    // padding-left: 200px;
    // background: yellow;
    width: calc(100% - 200px);
    height: 100%;
    flex: 0 0 300px;
    display: flex;
    justify-content: space-between;
  }
}
</style>