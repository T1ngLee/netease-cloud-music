<template>
  <div class="individuality-wrap">
    <!-- individuality -->
    <banner/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Banner from '@/components/discover/individuality/banner.vue'
@Component({
  components: {
    Banner
  }
})
export default class Individuality extends Vue {}
</script>