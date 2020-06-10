<template>
  <div class="individuality-wrap">
    <!-- individuality -->
    <banner/>
    <song-list/>
    <private-content/>
    <new-song/>
    <mv/>
    <!-- <dj-program/> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Banner from '@/components/discover/individuality/banner.vue'
import SongList from '@/components/discover/individuality/song_list.vue'
import NewSong from '@/components/discover/individuality/new_song.vue'
import PrivateContent from '@/components/discover/individuality/private_content.vue'
import Mv from '@/components/discover/individuality/mv.vue'
import DjProgram from '@/components/discover/individuality/dj_program.vue'
@Component({
  components: {
    Banner,
    SongList,
    NewSong,
    PrivateContent,
    Mv,
    DjProgram
  }
})
export default class Individuality extends Vue {
  actived(){
    console.log('keepAlive')
  }
}
</script>