<template>
  <div class="dj-program-wrap"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { djprogram, recommend } from '@/api/discover/individuality.ts'
@Component
export default class DjProgram extends Vue {
  // mounted(){
  //   djprogram().then(res =>{
  //     console.log(res);
      
  //   })

  //   recommend().then(res =>{
  //     console.log(res);
      
  //   })
  // }
}
</script>