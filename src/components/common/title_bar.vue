<template>
  <div class="title-bar-wrap">
    <span class="title">{{titleName}}</span>
    <span class="more-btn">更多></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class TitleBar extends Vue {
  @Prop({default: 'asasdasd'})
  titleName!: string 
}
</script>

<style lang="scss" scoped>
.title-bar-wrap {
  width: 100%;
  height: 35px;
  border-bottom: 1px solid rgb(230,231,234);
  line-height: 35px;
  margin-bottom: 10px;
  .title {
    
  }
  .more-btn {
    float: right;
  }
}
</style>