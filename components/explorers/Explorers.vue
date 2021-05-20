<template>
  <div class="section_explorers min-h-screen grid grid-cols-1 grid-rows-1">
    <div class="explorers col-span-full row-span-full">
      <div
        class="explorer"
        v-for="(explorer, i) in content.data"
        :key="i"
      ><ph-arrow-left /></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
//@ts-ignore
import { PhArrowLeft } from 'phosphor-vue'

export default Vue.extend({
  name: 'Explorers',
  components: {
    PhArrowLeft
  },
  data() {
    return {
      content: {},
    }
  },
  async fetch() {
    this.content = await (this as any).$content('03_sectionExplorers').fetch()
  },
})
</script>
