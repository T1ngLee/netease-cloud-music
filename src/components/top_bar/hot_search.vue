<template>
  <div class="hot-search-wrap">
    <span class="title">热搜榜</span>
    <ul class="list">
      <li class="item" v-for="(item, index) in hotList" :key="item.searchWord" @mousedown="search(item.searchWord)">
        <span class="index">{{index+1}}</span>
        <div class="info">
          <div class="search-word">
            <span class="word">{{item.searchWord}}</span>
            <span class="score">{{item.score}}</span>
            <img :src="item.iconUrl">
          </div>
          <span class="content">{{item.content}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { hotSearch } from '@/api/search.ts'
@Component
export default class HotSearch extends Vue {
  hotList = []

  mounted(){
    this.getHotSearch()
  }

  search(keyword: any){
    
    
    this.$router.push({name: 'SearchResult', params: {keyword: keyword}})
    console.log(keyword);
  }

  getHotSearch(){
    hotSearch()
    .then((res: any) => {
      
      this.hotList = res.data
      console.log(res);
    })
  }
}
</script>

<style lang="scss" scoped>
.hot-search-wrap {
  .title {
    padding: 10px 20px;
    display: block;
  }
  .list {
    .item {
      position: relative;
      cursor: pointer;
      padding: 8px 0;
      &:hover {
        background: rgb(236, 236, 236);
      }
      .index {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 14px;
        color: rgb(153, 153, 153);
      }
      .info {
        margin-left: 40px;
        .search-word {
          .word {
            font-size: 14px;
          }
          .score {
            font-size: 11px;
            margin-left: 10px;
            color: rgb(153, 153, 153);
          }
          img {
            height: 13px;
            transform-origin: 0 100%;
            margin-left: 10px;
          }
        }
        .content {
          font-size: 13px;
          color: rgb(153, 153, 153);
        }
      }
      &:nth-child(-n+3) {
        .index{
          color: red;
        }
        .info {
          .search-word {
            .word {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>