<template>
  <div class="mv-wrap">
    <title-bar :titleName="'推荐MV'"/>
    <ul>
      <li class="item" v-for="item in mvData" :key="item.id">
        <img :src="item.picUrl">
        <div class="info">
          <span class="name">{{item.name}}</span>
          <span class="artist">{{item.artistName}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TitleBar from '@/components/common/title_bar.vue'
import { mv } from '@/api/discover/individuality.ts'
@Component({
  components: {
    TitleBar
  }
})
export default class Mv extends Vue {
  mvData = []

  mounted(){
    this.getData()
  }

  getData(){
    mv()
    .then((res: any) => {
      this.mvData = res.result
      console.log(res);
      
    })
    .catch((err: any) => {
      console.log(err);
      
    })
  }
}
</script>

<style lang="scss" scoped>
.mv-wrap {
  margin-bottom: 40px;
  ul {
    @media (max-width: 1049px) {
      .item {
        &:nth-child(-n+2) {
          margin-right: 15px;
        }
        &:last-child {
          display: none;
        }
        width: calc(100% / 3);
      }
    }
    @media (min-width: 1050px) {
      .item {
        &:not(:last-child) {
          margin-right: 15px;
        }
        width: calc(100% / 4);
      }
    }
    display: flex;
    .item {
      cursor: pointer;
      img {
        width: 100%;
      }
      font-size: 12px;
    }
  }
}
</style>