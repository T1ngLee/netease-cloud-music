<template>
  <div class="result-song-wrap">
    <table>
      <tr>
        <th>序号</th>
        <th>操作</th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
      <tr v-for="(item) in result" :key="item.id" @dblclick="playOneMusic(item.id)" :class="{playing: playingId == item.id}">
        <td>
          <span class="index">{{item.index}}</span>
          <span class="icon">
            <i class="iconfont icon-yinliang" v-show="!$store.state.playState"></i>
            <i class="iconfont icon-yinliang1" v-show="$store.state.playState"></i>
          </span>
        </td>
        <td>操作</td>
        <td v-html="item.name"></td>
        <td v-html="item.artists[0].name"></td>
        <td v-html="item.album.name"></td>
        <td>{{item.duration | handleShowTime}}</td>
      </tr>
    </table>
    <toggle-page :count="songCount" @getSongList="getSongList"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { searchResult } from '@/api/search.ts'
import TogglePage from '@/components/common/toggle_page.vue'
@Component({
  filters: {
    handleShowTime (time: number): string {
      const a = time / 1000 / 60
      let minute: any = Math.floor(a)
      let second: any = Math.floor(60 * parseFloat(0 + '.' + a.toString().split('.')[1]))
      if (minute < 10) {
        minute = '0' + minute
      }

      if (second < 10) {
        second = '0' + second
      }
      return minute + ':' + second
    }
  },
  components: {
    TogglePage
  }
})
export default class ResultSongs extends Vue {
  searchWord!: any
  result = []
  songCount = 0
  created(){
    this.searchWord = this.$route.params.keyword
    this.getSongList()
  }

  getSongList(offset = 0){
    searchResult({
      limit: 100,
      type: 1,
      offset: offset * 100,
      keywords: this.searchWord
    })
    .then((res: any) => {
      this.songCount = res.result.songCount
      this.$emit('getCountStr', this.songCount + ' 首单曲')
      this.result = res.result.songs.map((item: any, index: number) => {
        index = (index + 1) + (offset * 100)
        item.index = index >= 10 ? index : '0' + index

        item.name = this.brightKeyword(item.name)
        item.artists[0].name = this.brightKeyword(item.artists[0].name)
        item.album.name = this.brightKeyword(item.album.name)
        return item
      })
    })
  }
  
  brightKeyword(val: any){
    const keyword = this.searchWord
    if (val.indexOf(keyword) !== -1) {
      return val.replace(keyword, `<font color='#42cccc'>${keyword}</font>`)
    } else {
      return val
    }
  }
  

  playingId = this.$store.state.playingSong.id

  playOneMusic(id: number){
    this.$store.state.songData.getSongItem(id, 0)
  }

  @Watch('$store.state.playingSong', {deep: true})
  run(val: any){
    this.playingId = val.id
  }
}
</script>

<style lang="scss" scoped>
.result-song-wrap {
  margin-bottom: 40px;
  table {
    border-collapse:collapse;
    width: 100%;
    table-layout: fixed;
    tr {
      font-size: 13px;
      overflow: hidden;
      .index {
        display: block;
        font-size: 11px;
      }
      .icon {
        display: none;
        height: 12px;
        margin-top: -5px;
        .iconfont {
          font-size: 12px;
          color: rgb(198,47,47);
        }
      }
      &.playing {
        .index {
          display: none;
        }
        .icon {
          display: block;
        }
      }
      &:nth-child(2n+3) {
        background: rgb(243, 243, 243);
      }
      &:not(:first-child):hover {
        background: rgb(230,231,234);
      }
      th {
        border: 1px solid rgb(230,231,234);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
        padding: 5px;
        text-align: left;
        &:nth-child(1) {
          width: 40px;
          border-left: none;
        }
        &:nth-child(2) {
          width: 60px;
        }
        &:nth-child(3) {
          width: 40%;
        }
        &:nth-child(4) {
          width: 30%;
        }
        &:nth-child(5) {
          width: 20%;
        }
        &:nth-child(6) {
          width: 10%;
          border-right: none;
        }
      }
      td {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 5px;
      }
    }
  }
}
</style>