<template>
  <div class="right-content-wrap">
    <div class="container">
      <div class="container-width">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" :key="key"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" :key="key"></router-view>
      </div>
      <!-- <play-list v-show="$store.state.playListShowState"/> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import PlayList from '@/components/right_content/play_list.vue'
@Component({
  name: 'rightContent',
  components: {
    // PlayList
  }
})
export default class RightContent extends Vue {
  get key(){
    return this.$route.path + Math.random()
  }
}
</script>

<style lang="scss" scoped>
.right-content-wrap {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 250, 250);
  padding-left: 200px;
  // position: relative;
  .container {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    overflow: auto;
    // max-width: 720px;
    // position: relative;
    .container-width {
      width: 100%;
      max-width: 1080px;
      margin: 0 auto;
      min-width: 720px;
    }
  }
}
</style>