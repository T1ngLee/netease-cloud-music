<template>
  <div class="result-user-wrap">
    <ul class="list">
      <li class="item" v-for="item in result" :key="item.userId">
        <img class="avatar" :src="item.avatarUrl">
        <span class="name">{{item.nickname}}</span>
        <!-- <span v-show="item.gender !== 0"> -->
        <i class="iconfont" v-show="item.gender !== 0" :class="item.gender === 1 ? 'icon-nan' : 'icon-nv'"></i>
        <!-- </span> -->
        <!-- <span class="dj"></span> -->
        <span class="description">{{ item.description || item.signature}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { searchResult } from '@/api/search.ts'
@Component({
})
export default class ResultUser extends Vue {
  searchWord!: any
  result = []
  created(){
    this.searchWord = this.$route.params.keyword
    this.getUserList(this.searchWord)
  }

  getUserList(searchWord: any){
    searchResult({
      limit: 30,
      type: 1002,
      offset: 0,
      keywords: searchWord
    })
    .then((res: any) => {
      // this.countStr = res.result.songCount + '首单曲'
      this.$emit('getCountStr', res.result.userprofileCount + '位用户')
      console.log(res);
      this.result = res.result.userprofiles
    })
  }
}
</script>

<style lang="scss" scoped>
.result-user-wrap {
  .list {
    .item {
      display: flex;
      align-items: center;
      position: relative;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 13px;
      &:nth-child(2n+2) {
        background: rgb(236, 236, 236);
      }
      &:hover {
        background: rgb(194, 194, 194);
      }
      .avatar {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .description {
        // float: right;
        position: absolute;
        width: 300px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        right: 0;
        text-align: right;
        color: slategray;
      }
      .iconfont {
        font-size: 19px;
        font-weight: 600;
        margin-top: 8px;
        margin-left: 5px;
        &.icon-nan {
          color: skyblue;
        }
        &.icon-nv {
          color: rgb(216, 25, 121);
        }
      }
    }
  }
}
</style>