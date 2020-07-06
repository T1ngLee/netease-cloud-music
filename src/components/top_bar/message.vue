<template>
  <div class="message-wrap">
    <i class="iconfont icon-icon03-copy"></i>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Message extends Vue {}
</script>

<style lang="scss" scoped>
.icon-icon03-copy {
  margin-top: 10px;
}
</style>