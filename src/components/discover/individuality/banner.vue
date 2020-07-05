<template>
  <div class="banner-wrap">
    <ul class="img-list" @click="itemClick()">
			<li :class="item.class" v-for="item in bannersList" @mouseover="clearInterval(timer)" 
      @mouseout="interval()" :key="item.imageUrl" :data="item.targetId || item.url">
        <img :src="item.imageUrl">
        <span class="type-title" :style="{backgroundColor: item.titleColor}">{{item.typeTitle}}</span>
      </li>
      <span class="toggle-btn before iconfont icon-xiangzuo"></span>
      <span class="toggle-btn after iconfont icon-jiantou-left"></span>
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
    this.interval()
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
  itemClick(e: any){
    e = e || window.event

    if (e.target.className.includes('item left') || e.target.className.includes('before')) {
      this.before()
    } else if (e.target.className.includes('item right') || e.target.className.includes('after')) {
      this.after()
    } else {
      console.dir(e.target.parentNode.getAttribute('data'))
      const data = e.target.parentNode.getAttribute('data')
      // console.log(/^http/.test('http://'))
      if (!/^http/.test(data)) {
        (this.$store.state as any).songData.getSongItem(data, 0)
      } else {
        console.log('进入')
        window.open(data, '_blank')
      }
    }
    // if (item.targetType === 1) {
    //   (this.$store.state as any).songData.getSongItem(item.targetId, 0)
    // } else {
    //   window.open(item.url, '_blank')
    // }
  }
}
</script>

<style lang="scss" scoped>
.banner-wrap {
  position: relative;
  width: 100%;
  height: 220px;
  margin: 30px 0;
  .img-list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    &:hover {
      .toggle-btn {
        visibility: visible;
      }
    }
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
      cursor: pointer;
      img {
        height: 100%;
        width: 100%;
      }
      .type-title {
        color: white;
        position: absolute;
        bottom: 10px;
        right: -2px;
        font-size: 12px;
        padding: 1px 5px 1px 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }
    
    .left,
    .right {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba($color: #000000, $alpha: 0.6);
      }
    }

    .left {
      background: black;
      left: 0;
      z-index: 0;
      transition: all .5s ease;
      visibility: visible;
      transform: translateX(0);
    }
    .right {
      background: black;
      left: unset;
      z-index: 1;
      transform: translateX(0);
      right: 0;
      position: absolute;
      visibility: visible;
      transition: all .5s ease;
    }
    .center {
      z-index: 9;
      transform-origin: 0 bottom;
      transform: scale(1.1) translateX(-50%);
      background: red;
      transition: all .5s ease;
      visibility: visible;
    }
    .toggle-btn {
      visibility: hidden;
      position: absolute;
      top: 50%;
      color: white;
      font-size: 25px;
      z-index: 10;
      cursor: pointer;
      &.after {
        right: 10px;
      }
      &.before {
        left: 10px;
      }
    }
  }
  .btn-list {
    display: flex;
    width: 540px;
    margin: 0 auto;
    justify-content: center;
    margin-top: 10px;
    z-index: 99999999;
    .btn {
      height: 2px;
      width: 20px;
      background: #ddd;
      margin: 0 3px;
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