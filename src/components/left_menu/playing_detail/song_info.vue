<template>
  <div class="song-info-wrap">
    <div class="info-top" ref="infoTop">
      <h3 class="song-name">{{$store.state.playingSong.name}}</h3>
      <div class="alias">{{$store.state.playingSong.alia[0]}}</div>
      <div class="other">
        <span class="album">
          专辑: {{$store.state.playingSong.al.name}}
        </span>
        <span class="artists">
          歌手: {{$store.state.playingSong.artistStr}}
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
import { Vue, Component } from 'vue-property-decorator'
import Lyric from '@/components/left_menu/playing_detail/lyric.vue'
@Component({
  components: {
    Lyric
  }
})
export default class SongInfo extends Vue {
  // lll = '一起走过的日子'
  lyricHeight = '0px'
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
  // background: salmon;
  margin-left: 100px;
  z-index: 5;
  // over
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
}
</style>