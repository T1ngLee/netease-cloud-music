<template>
  <div class="lyric-wrap" ref="wrap">
    <div class="lyric-box" ref="box">
      <ul class="lyric-list" ref="list">
        <li class="lyric-item" v-for="(item, index) in backupLyricList"
        :key="index" :class="{active: index==showIndex}" :ref="index==showIndex?'active':''">
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
  playingSongId = -1
  mounted() {
    this.playingSongId = this.$store.state.songData.playList[this.$store.state.playIndex].id
    this.getLyric(this.playingSongId)
  }

  @Watch('$store.state.playIndex')
  getNewLyric(val: number){
    this.playingSongId = this.$store.state.songData.playList[val].id
    this.getLyric(this.playingSongId)
    this.showIndex = -1
  }

  getLyric(id: number){
    songLyric({
      id: id
    }).then((res: any) => {
      this.lyricList = this.moduleLyric(res.lrc.lyric, true)
      // this.translateLyric = this.moduleLyric(res.tlyric.lyric, false)
      // console.log(this.lyricList);
      // console.log(this.translateLyric);
      // console.log(this.backupLyricList);
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
  @Watch('$store.state.songProgress.currentTime')
  lyricAnimation(val: any){
    for (let i = 0; i <= this.lyricList.length; i++) {
      if ((this.lyricList[i] as any).time > val) {
        // console.log(this.lyricList[i].time);
        this.showIndex = --i
        break
      }
    }
    this.lyricMove()
  }

  aaa = -1
  lyricMove(){
    const d = (this.$refs.box as any).scrollTop
    const active: any = document.querySelector('.active')

    const box: any = this.$refs.box

    
    if(box.clientHeight/2 > active.offsetTop) {
      box.scrollTop = 0 
    } else {
      box.scrollTop = active.offsetTop - box.clientHeight/2
    }
  }
}
</script>

<style lang="scss" scoped>
.lyric-wrap {
  // background: royalblue;
  height: 100%;
  padding-top: 20px;
  .lyric-box{
    height: 100%;
    // height: 50%;
    overflow: auto;
    // position: relative;
    border-right: 1px solid rgb(192, 193, 194);
    .lyric-list {
    font-size: 14px;
    // transform: translateY(-200px);
    // margin-top: -200px;
    // position: absolute;
    // top: -200px;
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