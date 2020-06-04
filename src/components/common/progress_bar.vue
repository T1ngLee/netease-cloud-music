<template>
  <div class="progress-bar-wrap" ref="bar" @click="barClick"  :style="{width: progressBarWidth}">
    <div class="progress-bar-top" ref="top" :style="{width: nowProgress}"></div>
    <div class="progress-bar-dot"  @click.stop @mousedown="dotMouseDown" ref="dot" :style="{left: nowProgress}">
      <div class="inner-dot"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  directives: {
    drag: {
      bind: function(el, binding){
        // let progress = 0
        // // 鼠标在小圆点按下
        // el.onmousedown = (event) => {
        //   const e = event || window.event;

        //   const bar: any = document.querySelector('.progress-bar-wrap')
        //   const top: any = document.querySelector('.progress-bar-top')
        //   const a = bar.clientWidth // 进度条长度
        //   const b = el.offsetLeft // 圆点在bar里的原始位置

        //   const left = e.clientX + (7 - e.offsetX) // 获得圆点中心距离浏览器左边的位置
          
        //   document.onmousemove = (event) => {
        //     const e = event || window.event;
        //     const dotleft = e.clientX - left + b
            
        //     if (dotleft >= 0 && dotleft + 1 <= a) {
        //       el.style.left = dotleft + 'px'
        //       top.style.width = dotleft + 'px'
        //       progress = dotleft / a
        //       console.log(dotleft, a, progress);
              
        //     }
            // window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            // 松开鼠标，清除鼠标move、up事件
            document.onmouseup = (event) => {
              document.onmousemove = null
              // binding.value(progress)
              document.onmouseup = null
            }
          // }
        // }
        document.onmouseup = (event) => {
          console.log('释放鼠标');
          
              document.onmousemove = null
              // binding.value(progress)
              // document.onmouseup = null
            }
      }
    }
  }
})
export default class ProgessBar extends Vue {
  @Prop({default: '200px'})
  progressBarWidth!: string

  @Prop({default: '0%'})
  nowProgress!: string

  run = true
  // 点击进度条
  barClick(event: any){
    const bar: any = this.$refs.bar
    const dot: any = this.$refs.dot
    const a = bar.clientWidth // 进度条总长度
    const b = bar.offsetLeft // 进度条离浏览器左边的距离
    const c = event.clientX || (window.event as any).clientX // 鼠标点击x轴的位置 
    const progress = (c - b) / a

    this.returnProgress(progress)
  }

  // 拖动进度条
  dotMouseDown(event: any){
    let progress = 0
    const e = event || window.event;
    const bar: any = this.$refs.bar
    const top: any = this.$refs.top
    const dot: any = this.$refs.dot
    const a = bar.clientWidth // 进度条长度
    const b = dot.offsetLeft // 圆点在bar里的原始位置

    const left = e.clientX + (7 - e.offsetX) // 获得圆点中心距离浏览器左边的位置
    
    document.onmousemove = (event) => {
      const e = event || window.event;
      const dotleft = e.clientX - left + b
      
      if (dotleft >= 0 && dotleft + 1 <= a) {
        dot.style.left = dotleft + 'px'
        top.style.width = dotleft + 'px'
        progress = dotleft / a
      }

      // window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
      // 松开鼠标，清除鼠标move、up事件
      
    }
    document.onmouseup = (event) => {
        console.log('释放鼠标');
        document.onmousemove = null
        // binding.value(progress)
        this.returnProgress(progress)
        document.onmouseup = null
      }
  }

  returnProgress(progress: number){
    this.$emit('getProgress', progress)   
  }
}
</script>

<style lang="scss" scoped>
.progress-bar-wrap {
  height: 4px;
  background: rgb(194,194,196);
  border-radius: 2px;
  position: relative;
  .progress-bar-top {
    background: rgb(198,47,47);
    height: 100%;
    border-radius: 2px;
  }
  .progress-bar-dot {
    cursor: pointer;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    border: 1px solid #e6e7ea;
    position: absolute;
    top: 0;
    transform: translate(-7px, -5px);
    // opacity: .3;
    &:hover {
      box-shadow: 0 0 2px 2px rgba($color: #000000, $alpha: .2);
    }
    .inner-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgb(198,47,47);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>