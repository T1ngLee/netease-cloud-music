<template>
  <div class="playlist-list-content">
    <table>
      <tr>
        <th>序号</th>
        <th>操作</th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
      <tr v-for="(item, index) in tranks" :key="item.id" @dblclick="playOneMusic(item.id)" :class="{playing: playingId == item.id}">
        <td>
          <span class="id">{{index+1 >= 10 ? index+1 : '0'+(index+1)}}</span>
          <span class="icon">
            <i class="iconfont icon-yinliang" v-show="!$store.state.playState"></i>
            <i class="iconfont icon-yinliang1" v-show="$store.state.playState"></i>
          </span>
        </td>
        <td>操作</td>
        <td>{{item.name}}</td>
        <td>{{item.ar[0].name}}</td>
        <td>{{item.al.name}}</td>
        <td>{{item.dt | handleShowTime}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
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
  }
})
export default class PlaylistList extends Vue {
  @Prop() tranks: any
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
.playlist-list-content {
  table {
    border-collapse:collapse;
    width: 100%;
    table-layout: fixed;
    tr {
      font-size: 13px;
      overflow: hidden;
      .id {
        display: block;
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
        .id {
          display: none;
        }
        .icon {
          display: block;
        }
      }
      &:nth-child(2n+3) {
        background: rgb(243, 243, 243);
      }
      &:hover {
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