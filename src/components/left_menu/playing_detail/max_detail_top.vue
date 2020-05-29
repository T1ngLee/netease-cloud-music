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
  overflow: hidden;
  // background: cadetblue;
  // background: url('https://p1.music.126.net/2Vka20mvOC7MLZcrBsbnUA==/109951165001127531.jpg?param=400y400');
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
  position: relative;
  // filter: blur(20px);
  &::before{
    content: '';
    position: absolute;
    background: url('https://p1.music.126.net/2Vka20mvOC7MLZcrBsbnUA==/109951165001127531.jpg?param=400y400');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    filter: blur(10px);
    // z-index: -1;
  }
  &::after{
    content: '';
    position: absolute;
    background: linear-gradient(90deg,rgba(255,255,255,.9), rgba(255,255,255,.8), rgba(255,255,255,.4), rgba(255,255,255,.8), rgba(255,255,255,.9));
    filter: blur(10px);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .box {
    width: 910px;
    display: flex;
    margin: 0 auto;
    height: 100%;
  }
}
</style>