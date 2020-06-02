<template>
  <div class="max-detail-top-wrap">
    <div class="bg" ref="bg" :style="{background: `url(${bgUrl})`}"></div>
    <div class="box">
      <detail-disc :picUrl="bgUrl"/>
      <song-info/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import DetailDisc from '@/components/left_menu/playing_detail/detail_disc.vue'
import SongInfo from '@/components/left_menu/playing_detail/song_info.vue'
@Component({
  components: {
    DetailDisc,
    SongInfo
  }
})
export default class MaxDetailTop extends Vue {
  bgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591116300048&di=ab41c4613b9eaab653679871227e33e3&imgtype=0&src=http%3A%2F%2Fimage.codes51.com%2Farticle%2Fimage%2F20170407%2F20170407100716_7758.jpg'

  @Watch('$store.state.playingSong.al.picUrl')
  getBgUrl(val: any){
    this.bgUrl = val
  }
}
</script>

<style lang="scss" scoped>
.max-detail-top-wrap {
  width: 100vw;
  height: 480px;
  overflow: hidden;
  position: relative;
  .bg{
    // content: '';
    position: absolute;
    // background: url('https://p1.music.126.net/2Vka20mvOC7MLZcrBsbnUA==/109951165001127531.jpg?param=400y400');
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