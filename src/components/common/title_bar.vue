<template>
  <div class="title-bar-wrap">
    <span class="title">{{titleName}}</span>
    <router-link tag="span" class="more-btn" :to="{name: pathName}">更多></router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class TitleBar extends Vue {
  @Prop({default: '标题名称'})
  titleName!: string 

  @Prop({default: '/'})
  pathName!: string
}
</script>

<style lang="scss" scoped>
.title-bar-wrap {
  width: 100%;
  height: 35px;
  border-bottom: 1px solid rgb(230,231,234);
  line-height: 35px;
  margin-bottom: 10px;
  .more-btn {
    float: right;
  }
}
</style>