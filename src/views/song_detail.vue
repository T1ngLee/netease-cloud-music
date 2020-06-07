<template>
  <div class="song-detail-wrap">
    <max-detail-top :songInfo="songInfo"/>
    <max-detail-bottom/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import MaxDetailTop from '@/components/left_menu/playing_detail/max_detail_top.vue'
import MaxDetailBottom from '@/components/left_menu/playing_detail/max_detail_bottom.vue'
@Component({
  components: {
    MaxDetailTop,
    MaxDetailBottom
  }
})
export default class SongDetail extends Vue {
  get songInfo(): number{
    return this.$store.state.playingSong
  }

  beforeDestroy(){
    console.log(111111111111111);
    
  }
}
</script>

<style lang="scss" scoped>
.song-detail-wrap {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
</style>