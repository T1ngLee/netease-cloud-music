<template>
  <div class="discover-wrap">
    <discover-router-link/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DiscoverRouterLink from '@/components/discover/discover_router_link.vue'
@Component({
  components: {
    DiscoverRouterLink
  }
})
export default class Discover extends Vue {}
</script>

