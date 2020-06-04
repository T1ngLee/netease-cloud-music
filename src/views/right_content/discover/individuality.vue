<template>
  <div class="individuality-wrap">
    <!-- individuality -->
    <!-- <banner/> -->
    <song-list/>
    <private-content/>
    <new-song/>
    <mv/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Banner from '@/components/discover/individuality/banner.vue'
import SongList from '@/components/discover/individuality/song_list.vue'
import NewSong from '@/components/discover/individuality/new_song.vue'
import PrivateContent from '@/components/discover/individuality/private_content.vue'
import Mv from '@/components/discover/individuality/mv.vue'
@Component({
  components: {
    Banner,
    SongList,
    NewSong,
    PrivateContent,
    Mv
  }
})
export default class Individuality extends Vue {}
</script>