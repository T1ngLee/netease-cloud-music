<template>
  <div class="app-wrap">
    <top-bar/>
    <bottom-control/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TopBar from '@/views/top_bar.vue'
import BottomControl from '@/views/bottom_control.vue'
@Component({
  components: {
    TopBar,
    BottomControl
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>

</style>