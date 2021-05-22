<template>
  <div class="section_explorers min-h-screen grid grid-cols-1 grid-rows-1">
    <div
      class="section_content_background col-span-full row-span-full"
      :style="{ width: `${width}px`, height: `${height}px` }"
    >
      <img
        :src="content.assets.backgroundIllustration"
        :alt="content.title"
      />
    </div>
    <div class="explorers col-span-full row-span-full">
      <div class="explorer" v-for="(explorer, i) in content.data" :key="i">
        <ph-arrow-left />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
//@ts-ignore
import { PhArrowLeft } from 'phosphor-vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'Explorers',
  components: {
    PhArrowLeft,
  },
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
      height: (state: any) => state.main.ui.viewPort.height,
    }),
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
