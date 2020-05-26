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
    <div class="right-box">
      <song-progress/>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SongProgress from '@/components/bottom_control/song_progress.vue'
import Player from '@/player/player.ts'
@Component({
  components: {
    SongProgress
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
    if (this.$store.state.playState) {
      this.$store.commit('setPlayState', false)
    } else {
      this.$store.commit('setPlayState', true)
    }
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
  .play-btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
  .right-box {
    position: absolute;
    top: 0;
    left: 200px;
    // padding-left: 200px;
    // background: yellow;
    width: calc(100% - 200px);
    height: 100%;
  }
}
</style>