<template>
  <div class="lyric-wrap" ref="wrap">
    <div class="lyric-box">
      <ul class="lyric-list" ref="list">
        <li class="lyric-item" v-for="(item, index) in backupLyricList" :key="index" :class="{active: index==showIndex}">
          <!-- <div class="lyric">歌词</div>
          <div class="tlyric">翻译歌词</div> -->
          <span>{{item.time}} | {{item.str}}</span>
          <!-- <span>{{}}</span> -->
        </li>
        <!-- {{lyricStr}} -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import DeepCopy from '@/mixins/DeepCopy.ts'
import { songLyric } from '@/api/getSong.ts'
@Component({
  mixins: [DeepCopy]
})
export default class Lyric extends Vue {
  translateLyric: object[] = []
  lyricList: object[] = []
  backupLyricList: object[] = []
  mounted() {
    this.getLyric()
  }

  getLyric(){
    songLyric({
      id: this.$store.state.songData.playList[this.$store.state.playIndex].id
    }).then((res: any) => {
      this.lyricList = this.moduleLyric(res.lrc.lyric, true)
      this.translateLyric = this.moduleLyric(res.tlyric.lyric, false)
      console.log(this.lyricList);
      console.log(this.translateLyric);
      console.log(this.backupLyricList);
      
    })
  }

  moduleLyric(lyricStr: string, isBackup: boolean): any{
    const arr = lyricStr.split('[')
    arr.shift()
    const newList = arr.map(element => {
      const aaa = element.split(']')
      return {
        time: this.moduleTime(aaa[0]),
        str: aaa[1]
      }
    });

    if (isBackup) {
      this.backupLyricList = (this as any).deepCopy(newList)      
    }  
    return newList
  }

  // 将分:秒.毫秒转化为 秒.毫秒
  moduleTime(timeStr: string): number{
    // console.log(timeStr)
    const timeList = timeStr.split(':')
    const minute = parseInt(timeList[0]) * 60
    const second = parseFloat(timeList[1])
    return minute + second
  }
  showIndex = -1
  // nowTime = 0
  @Watch('$store.state.songProgress.currentTime')
  lyricAnimation(val: any){
    // console.log(typeof val);
    if(val >= (this.lyricList[0] as any).time){
      // this.nowTime = 
      this.showIndex ++
      this.lyricList.shift()
    } 
    // console.log(this.lyricMove);
    this.lyricMove()
    
  }

  lyricMove(){
    // if()
    const a = (this.$refs.wrap as any).offsetHeight
    const b = (this.$refs.list as any).offsetHeight
    const c = (this.$refs.list as any).getBoundingClientRect().top
    // const d = (this.$refs.list as any).scrollTop
    const d = (this.$refs.wrap as any).scrollTop
    console.log(a, b, c,d);
    
  }
}
</script>

<style lang="scss" scoped>
.lyric-wrap {
  background: royalblue;
  height: 100%;
  padding-top: 20px;
  .lyric-box{
    height: 100%;
    overflow: auto;
    .lyric-list {
    font-size: 14px;
    // transform: translateY(-200px);
    top: 200px;
    .lyric-item {
      padding-bottom: 8px;
      height: 30px;
      line-height: 22px;
      &.active {
        color: red;
      }
      .tlyric {
        font-size: 12px;
      }
    }
  }
  }
}
</style>