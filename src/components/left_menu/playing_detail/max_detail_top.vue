<template>
  <div class="max-detail-top-wrap">
    <div class="box">
      <detail-disc/>
      <song-info/>
    </div>
    <!-- <detail-disc/>
    <song-info/> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DetailDisc from '@/components/left_menu/playing_detail/detail_disc.vue'
import SongInfo from '@/components/left_menu/playing_detail/song_info.vue'
@Component({
  components: {
    DetailDisc,
    SongInfo
  }
})
export default class MaxDetailTop extends Vue {}
</script>

<style lang="scss" scoped>
.max-detail-top-wrap {
  width: 100vw;
  height: 480px;
  // background: cadetblue;
  .box {
    width: 910px;
    display: flex;
    margin: 0 auto;
    height: 100%;
  }
}
</style>