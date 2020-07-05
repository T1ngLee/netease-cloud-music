<template>
  <div class="toggle-page-wrap">
    <button class="up" ref="up" @click="getSongList(--activePage)" disabled>&lt;</button>
    <button v-for="i in pageCount" :key="i" class="item" @click="getSongList(i)" :class="{active: activePage===i}">{{ i }}</button>
    <button class="down" ref="down" @click="getSongList(++activePage)">&gt;</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
@Component
export default class TogglePage extends Vue {
  @Prop({default: 0})
  count!: number
  activePage = 1
  get pageCount(): number{
    if (this.count >= 500) {
      return 5
    }
    return Math.ceil(this.count / 100)
  }

  getSongList(offset: number){
    this.activePage = offset
    const dom = document.querySelector('.container');
    (dom as any).scrollTo(0,0)
    this.$emit('getSongList', offset - 1)
  }

  @Watch('activePage')
  disabled(newVal: number){
    if(newVal === 1) {
      (this.$refs.up as any).disabled = true;
      (this.$refs.down as any).disabled = false
    } else if (newVal === this.pageCount) {
      (this.$refs.up as any).disabled = false;
      (this.$refs.down as any).disabled = true
    } else {
      (this.$refs.up as any).disabled = false;
      (this.$refs.down as any).disabled = false
    }
  }

}
</script>

<style lang="scss" scoped>
.toggle-page-wrap{
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: center;
  button {
    outline: none;
    border: 0;
    background: none;
    height: 20px;
    width: 20px;
    cursor: pointer;
    &:hover {
      background: #eeeeee;
    }
    &[disabled] {
      background: none;
      cursor: auto;
    }
  }
  .up,
  .down {
    border: 1px solid #eeeeee;
    margin: 0 2px;
  }
  .item {
    margin: 0 2px;
  }
  .active {
    color: red;
  }
}
</style>