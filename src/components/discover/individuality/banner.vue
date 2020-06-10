<template>
  <div class="banner-wrap">
    <ul class="img-list">
			<div class="after-btn" @click="after()"></div>
			<li :class="item.class" v-for="item in bannersList" @mouseover="clearInterval(timer)" 
      @mouseout="interval()" :key="item.imageUrl">
        <img :src="item.imageUrl">
      </li>
			<div class="before-btn" @click="before()"></div>
		</ul>
		<ul class="btn-list">
			<li class="btn" :class="({active: index == active})" v-for="(item, index) in bannersList" 
      @mouseenter="btnClick(index)" :key="index"></li>
		</ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getBanner } from '@/api/discover/individuality.ts'
@Component
export default class Banner extends Vue {
  bannersList: any = []
  active = 0
  timer: any = null
  created() {
    getBanner().then((res: any) => {
      console.log(res.banners)
      this.bannersList = res.banners.map((item: any, index: number, arr: any) => {
        if(index === 0) {
          item.class = 'item center'
        } else if (index === 1) {
          item.class = 'item right'
        } else if (index === arr.length-1) {
          item.class = 'item left'
        } else {
          item.class = 'item'
        }
        return item
      })
      console.log(this.bannersList)
    })
  }
  mounted() {
    // this.interval()
  }
  handleClass() {
    for(let i=0;i<this.bannersList.length;i++){
      this.bannersList[i].class = 'item'
    }
    if (this.active == 0) {
      this.bannersList[this.active].class = 'item center'
      this.bannersList[this.active + 1].class = 'item right'
      this.bannersList[this.bannersList.length-1].class = 'item left'
    } else if (this.active == this.bannersList.length-1) {
      this.bannersList[this.active].class = 'item center'
      this.bannersList[0].class = 'item right'
      this.bannersList[this.active - 1].class = 'item left'
    } else {
      this.bannersList[this.active].class = 'item center'
      this.bannersList[this.active + 1].class = 'item right'
      this.bannersList[this.active - 1].class = 'item left'
    }
  }
  before() {
    if (this.active < this.bannersList.length - 1) {
      this.active++
    } else {
      this.active = 0
    }
    this.handleClass()
  }
  after() {
    if (this.active > 0) {
      this.active--
    } else {
      this.active = this.bannersList.length-1
    }
    this.handleClass()
  }
  interval() {
    this.timer = setInterval(()=>{
      this.before()
    }, 6000)
  }
  clearInterval(timer: any) {
    clearInterval(timer)
  }
  btnClick(index: number) {
    this.clearInterval(this.timer)
    this.active = index
    this.handleClass()
    this.interval()
  }
}
</script>

<style lang="scss" scoped>
.banner-wrap {
  position: relative;
  width: 100%;
  // background: chartreuse;
  height: 300px;
  overflow-x: hidden;
  .img-list {
    // margin: 0 auto;
    // height: 200;
    width: 100%;
    height: 100%;
    position: relative;
    .item {
      height: 200px;
      width: 540px;
      background: red;
      position: absolute;
      background: green;
      visibility: hidden;
      bottom: 0;
      left: 50%;
      transition: all .5s ease;
      z-index: 0;
      transform: translateX(-50%);
      img {
        height: 100%;
        width: 100%;
      }
    }
    
    .left {
      // bottom: 0;
      background: black;
      left: 0;
      z-index: 0;
      // background: yellow;
      transition: all .5s ease;
      visibility: visible;
      transform: translateX(0);
      opacity: .5;
      // position: relative;
      &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background: rgba($color: #000000, $alpha: .2);
        background: black;
      }
    }
    .right {
      // bottom: 0;
      background: black;
      left: unset;
      z-index: 1;
      transform: translateX(0);
      right: 0;
      position: absolute;
      // background: blue;
      visibility: visible;
      transition: all .5s ease;
      opacity: .5;
    }
    .center {
      z-index: 999;
      transform-origin: 0 bottom;
      transform: scale(1.1) translateX(-50%);
      background: red;
      transition: all .5s ease;
      visibility: visible;
    }
  }
  .btn-list {
    display: flex;
    width: 540px;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 20px;
    .btn {
      height: 5px;
      width: 20px;
      border: 1px solid #000;
    }
    .btn.active {
      background: red;
    }
    .after-btn,
    .before-btn {
      position: absolute;
      height: 100%;
      width: 200px;
      background: rgba(0,0,0,.2);
    }
    .after-btn{
      left: -200px;
      z-index: 1;
    }
    .before-btn{
      left: 400px;
      z-index: 1;
    }
  }
}
</style>