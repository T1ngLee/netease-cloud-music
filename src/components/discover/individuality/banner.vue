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
}
</script>

<style lang="scss" scoped>
.item {
  height: 200px;
  width: 400px;
  background: red;
  position: absolute;
  font-size: 50px;
  background: green;
  visibility: hidden;
  top: 0;
  left: 0;
  img {
    height: 100%;
    width: 100%;
  }
}

.img-list {
  margin: 0 auto;
  height: 200px;
  width: 400px;
  position: relative;
}


// .center,
// .left,
// .right {
//   height: 200px;
//   width: 400px;
// }
.center {
  top: 0;
  // bottom: 0;
  left: 0;
  z-index: 2;
  transform-origin: bottom;
  transform: scale(1.1);
  
  background: red;
  transition: all 2s ease;
  visibility: visible;
  
}

.left {
  top: 0;
  left: -200px;
  background: yellow;
  transition: all 2s ease;
  visibility: visible;
  // transform-origin: bottom;
  // transform: scale(0.9);
}

.right {
  top: 0;
  left: 200px;
  background: blue;
  visibility: visible;
  transition: all 2s ease;
  // transform-origin: bottom;
  // transform: scale(0.9);
}
.btn-list {
  display: flex;
  width: 400px;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 20px
}
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
</style>