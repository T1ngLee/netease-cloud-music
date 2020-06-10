<template>
  <div class="search-result-wrap">
    <span class="tip">搜索"{{searchWord}}"，找到{{countStr}}</span>
    <ul class="btn-box">
      <router-link tag="li" class="btn" v-for="item in btnList" :key="item.name"
      active-class="active" :to="{name: item.pathName}">{{item.name}}</router-link>
    </ul>
    <router-view @getCountStr="getCountStr"></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class SearchResult extends Vue {
  countStr = ''
  btnList = [
    {
      name: '单曲',
      pathName: 'ResultSongs'
    },
    {
      name: '歌手',
      pathName: 'ResultArtist'
    },
    {
      name: '专辑',
      pathName: 'ResultAlbum'
    },
    {
      name: '视频',
      pathName: 'ResultVideo'
    },
    {
      name: '歌单',
      pathName: 'ResultPlaylist'
    },
    {
      name: '歌词',
      pathName: 'ResultLyric'
    },
    {
      name: '主播电台',
      pathName: 'ResultAnchor'
    },
    {
      name: '用户',
      pathName: 'ResultUser'
    }
  ]
  searchWord!: any
  created(){
    this.searchWord = this.$route.params.keyword
    console.log(this.searchWord);
  }

  getCountStr(val: string){
    this.countStr = val
  }
}
</script>

<style lang="scss" scoped>
.search-result-wrap {
  .btn-box {
    display: flex;
    .btn {
      cursor: pointer;
      margin-left: 40px;
      padding: 10px 0 6px 0;
      box-sizing: border-box;
      &.active {
        color: rgb(198,47,47);
        border-bottom: 4px solid rgb(198,47,47);
      }
    }
  }
}
</style>