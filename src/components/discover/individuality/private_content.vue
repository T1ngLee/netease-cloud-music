<template>
  <div class="private-content-wrap">
    <title-bar :titleName="'独家放送'"/>
    <ul>
      <li class="item" v-for="item in privateData" :key="item.id">
        <img :src="item.sPicUrl">
        <span class="title">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TitleBar from '@/components/common/title_bar.vue'
import { privatecontent } from '@/api/discover/individuality.ts'
@Component({
  components: {
    TitleBar
  }
})
export default class PrivateContent extends Vue {
  privateData = []

  mounted(){
    this.getData()
  }

  getData(){
    privatecontent()
    .then((res: any) => {
      // console.log(res);
      this.privateData = res.result
      // console.log(this.privateData);
    })
    .catch((err: any) => {
      console.log(err);
    })
  }
}
</script>

<style lang="scss" scoped>
.private-content-wrap {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    .item {
      cursor: pointer;
      width: calc(100% / 3);
      img {
        width: 100%;
      }
      &:not(:last-child) {
        margin-right: 15px;
      }
      .title {
        font-size: 12px;
      }
    }
  }
}
</style>