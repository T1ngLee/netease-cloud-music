<template>
  <div class="search-bar-wrap">
    <div class="input-box">
      <input type="text" class="search-input" :placeholder="isFocus ? '' : '搜索音乐，视频，歌词，电台'"
      @focus="isFocus = true" @blur="isFocus = false">
      <i class="iconfont icon-fangdajing" :class="{'focused': isFocus}"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class SearchBar extends Vue {
  isFocus = false
}
</script>

<style lang="scss" scoped>
.search-bar-wrap {
  height: 100%;
  width: 200px;
  display: flex;
  align-items: center;
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
}
</style>