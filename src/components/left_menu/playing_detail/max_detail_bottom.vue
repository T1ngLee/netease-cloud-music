<template>
  <div class="max-detail-bottom-wrap">
    <all-comments/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AllComments from '@/components/left_menu/playing_detail/all_comments.vue'
@Component({
  components: {
    AllComments
  }
})
export default class MaxDetailBottom extends Vue {}
</script>

<style lang="scss" scoped>
.max-detail-bottom-wrap {
  width: 910px;
  // background: turquoise;
  margin: 0 auto;
}
</style>