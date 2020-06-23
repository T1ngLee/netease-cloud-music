<template>
  <div class="search-bar-wrap">
    <div class="input-box">
      <input type="text" class="search-input" :placeholder="isFocus ? '' : '搜索音乐，视频，歌词，电台'"
      @focus="isFocus = true" @blur="isFocus = false" autocomplete="off" spellcheck="false" v-model="keyword" @keydown.enter="search()">
      <i class="iconfont icon-fangdajing" :class="{'focused': isFocus}"></i>
    </div>
    <div class="search-tip" v-show="isFocus">
      <div class="triangle"></div>
      <div class="search-content">
        <div class="search-history">
          <div class="title">搜索历史
            <i class="iconfont icon-shanchu"></i>
          </div>
        </div>
        <hot-search/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HotSearch from '@/components/top_bar/hot_search.vue'
import axios from 'axios'
@Component({
  components: {
    HotSearch
  }
})
export default class SearchBar extends Vue {
  isFocus = false
  keyword!: any

  search(keyword: any){
    this.$router.push({name: 'SearchResult', params: {keyword: this.keyword}})
  }
}
</script>

<style lang="scss" scoped>
.search-bar-wrap {
  height: 100%;
  width: 250px;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 20px;
  .input-box {
    width: 100%;
    height: 20px;
    background-color: rgb(168, 40, 40);
    border-radius: 10px;
    padding: 0 7px;
    position: relative;
    .search-input {
      height: 100%;
      width: 100%;
      outline: none;
      border: 0;
      vertical-align: top;
      background-color: rgb(168, 40, 40);
      color: white;
      font-size: 12px;
      padding-right: 20px;
      &::-webkit-input-placeholder {
        color: rgb(199, 155, 155);
      }
    }
    .iconfont {
      position: absolute;
      right: 7px;
      color: rgb(202, 125, 125);
      &.focused {
        color: white;
      }
    }
  }
  .search-tip {
    position: absolute;
    width: 400px;
    min-height: 100px;
    max-height: 500px;
    background-color: rgb(250, 250, 250);
    top: 100%;
    display:flex;
    box-shadow: 0 1px 8px 3px rgba($color: #000000, $alpha: 0.1);
    .triangle {
      position: absolute;
      height: 0;
      width: 0;
      border: 8px solid rgb(250, 250, 250);
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      top: -16px;
      left: 16px;
    }
    .search-content {
      overflow: auto;
      max-height: 100%;
      width: 100%;
    }
  }
}
</style>