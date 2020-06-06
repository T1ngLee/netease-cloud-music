<template>
  <div class="playlist-wrap">
    <!-- 歌单{{id}} -->
    <playlist-detail-top :info="info" :tranksIdList="tranksIdList"/>
    <playlist-content :tranks="tranks"/>
    <!-- fghjk -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PlaylistDetailTop from '@/components/playlist_detail/playlist_detail_top.vue'
import { playlistDetail } from '@/api/playList.ts'
import PlaylistContent from '@/components/playlist_detail/playlist_detail_content.vue'
@Component({
  components: {
    PlaylistDetailTop,
    PlaylistContent
  }
})
export default class PlaylistDetail extends Vue {
  id!: any
  info = {
    coverImgUrl: '',
    name: '',
    id: 0,
    creator: {},
    createTime: 0,
    shareCount: 0,
    playCount: 0,
    trackCount: 0,
    tags: [],
    description: '',
    subscribedCount: 0
  }
  tranks = []
  tranksIdList = []
  created(){
    this.id = this.$route.params.id
    this.getDetail(this.id)
  }

  getDetail(id: any){
    playlistDetail({
      id
    })
    .then((res: any) => {
      console.log(res);

      ({coverImgUrl: this.info.coverImgUrl,
        name: this.info.name,
        id: this.info.id,
        creator: this.info.creator,
        createTime: this.info.createTime,
        shareCount: this.info.shareCount,
        playCount: this.info.playCount,
        trackCount: this.info.trackCount,
        tags: this.info.tags,
        description: this.info.description,
        subscribedCount: this.info.subscribedCount
      } = res.playlist)

      this.tranksIdList = res.playlist.trackIds.map((item: any) =>{
        return item.id
      })

      if (res.playlist.tracks.length === res.playlist.trackCount) {
        this.tranks = res.playlist.tracks
      }
      console.log(this.tranks);
      
    })
  }

}
</script>