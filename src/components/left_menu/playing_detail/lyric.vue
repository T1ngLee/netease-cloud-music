<template>
  <div class="lyric-wrap">
    <ul class="lyric-list">
      <li class="lyric-item" v-for="i in lyricList" :key="i">
        <!-- <div class="lyric">歌词</div>
        <div class="tlyric">翻译歌词</div> -->
        {{i.time}} | {{i.str}}
      </li>
      <!-- {{lyricStr}} -->
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { songLyric } from '@/api/getSong.ts'
@Component
export default class Lyric extends Vue {
  lyricStr = ''
  translateLyricStr = ''
  lyricList: object[] = []
  mounted() {
    this.getLyric()
  }

  getLyric(){
    songLyric({
      id: this.$store.state.songData.playList[this.$store.state.playIndex].id
    }).then((res: any) => {
      this.lyricStr = res.lrc.lyric
      this.translateLyricStr = res.tlyric.lyric
      console.log(this.lyricStr,this.translateLyricStr)
      this.moduleLyric()
    })
  }

  moduleLyric(){
    const newa = this.lyricStr.split('[')
    newa.shift()
    console.log(newa);
    this.lyricList = newa.map(element => {
      const aaa = element.split(']')
      // aaa.shift()
      return {
        time: this.moduleTime(aaa[0]),
        str: aaa[1]
      }
    });
    console.log(this.lyricList);
    
  }

  // 将分:秒.毫秒转化为毫秒
  moduleTime(timeStr: string): number{
    // console.log(timeStr)
    const timeList = timeStr.split(':')
    const minute = parseInt(timeList[0]) * 60
    const second = parseFloat(timeList[1])
    return minute + second
  }
  // @Watch('$store.state.currentTime')
  // run(val: any){

  // }
}
</script>

<style lang="scss" scoped>
.lyric-wrap {
  background: royalblue;
  height: 100%;
  padding-top: 20px;
  .lyric-list {
    height: 100%;
    overflow: auto;
    font-size: 14px;
    .lyric-item {
      margin-bottom: 8px;
      &.active {
        color: red;
      }
      .tlyric {
        font-size: 12px;
      }
    }
  }
}
</style>