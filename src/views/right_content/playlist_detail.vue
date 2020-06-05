<template>
  <div class="playlist-wrap">
    歌单{{id}}
    <playlist-detail-top :info="info"/>
    fghjk
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PlaylistDetailTop from '@/components/playlist_detail/playlist_detail_top.vue'
import { playlistDetail } from '@/api/playList.ts'
@Component({
  components: {
    PlaylistDetailTop
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
  // info = {
  //   coverImgUrl: 'coverImgUrl',
  //   name: 'name',
  //   id: 'id',
  //   creator: 'creator',
  //   createTime: 'createTime',
  //   shareCount: 'shareCount',
  //   playCount: 'playCount',
  //   trackCount: 'trackCount',
  //   tags: 'tags',
  //   description: 'description',
  //   subscribedCount: 'subscribedCount'
  // }
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
      // (this.info = res.playlist)
      // console.log(this.info);
      
    })
  }

}
</script>