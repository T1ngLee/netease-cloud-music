<template>
  <div class="song-info-wrap">
    <div class="close" @click="$router.go(-1)">
      <i class="iconfont icon-suoxiao"></i>
    </div>
    <div class="info-top" ref="infoTop">
      <h3 class="song-name">{{songInfo.name}}</h3>
      <div class="alias">{{songInfo.alia[0]}}</div>
      <div class="other">
        <span class="album">
          专辑: {{songInfo.al.name}}
        </span>
        <span class="artists">
          歌手: {{songInfo.artistStr}}
        </span>
        <span class="source">
          来源: 来源
        </span>
      </div>
    </div>
    <lyric :style="{height: lyricHeight}"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import Lyric from '@/components/left_menu/playing_detail/lyric.vue'
@Component({
  components: {
    Lyric
  }
})
export default class SongInfo extends Vue {
  // lll = '一起走过的日子'
  lyricHeight = '0px'
  // songInfo: any = {
  //   name: '歌名',
  //   alia: [],
  //   al: {
  //     name: '专辑名'
  //   },
  //   artistStr: '歌手名'
  // }

  @Prop() songInfo!: any
  // @Watch('$store.state.playingSong', {deep: true})
  // getsongInfo(val: object){
  //   this.songInfo = val
  // }

  mounted(){
    this.getLyricHeight()
  }

  getLyricHeight () {
    // this.infoTopHeight = this.$refs.infoTop.clientHeight
    // console.log(this.$refs.infoTop.clientHeight) 
    // console.dir(this.$refs.lyric)
    this.lyricHeight = (480 - (this.$refs.infoTop as any).clientHeight) + 'px'
    console.dir(this.lyricHeight)
  }
}
</script>

<style lang="scss" scoped>
.song-info-wrap {
  width: 480px;
  height: 100%;
  margin-left: 100px;
  z-index: 5;
  position: relative;
  overflow: visible;
  .info-top {
    padding-top: 25px;
    .song-name {
      padding: 0;
      margin: 0;
      font-size: 23px;
    }
    .alias {
      font-size: 14px;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .other {
      font-size: 12px;
      margin-top: 8px;
      span {
        display: inline-block;
        margin-right: 5px;
        width: 30%;
      }
      // .album {
      //   width: 30%;
      // }
      // .artists {
      //   width: 30%;
      // }
      .source {
        width: auto;
        max-width: 30%;
        float: right;
        margin-right: 15px;
      }
    }
  }
  .close {
    position: fixed;
    margin-top: 20px;
    margin-left: 500px;
    border: 1px solid rgb(230,231,234);
    height: 27px;
    padding: 0 5px;
    border-radius: 5px;
    background: rgb(233, 233, 235);
    cursor: pointer;
    .iconfont{
      font-size: 25px;
    }
  }
}
</style>