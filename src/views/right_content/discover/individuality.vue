<template>
  <div class="individuality-wrap">
    <!-- individuality -->
    <!-- <banner/> -->
    <song-list/>
    <new-song/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Banner from '@/components/discover/individuality/banner.vue'
import SongList from '@/components/discover/individuality/song_list.vue'
import NewSong from '@/components/discover/individuality/new_song.vue'
@Component({
  components: {
    Banner,
    SongList,
    NewSong
  }
})
export default class Individuality extends Vue {}
</script>