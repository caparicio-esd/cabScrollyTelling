<template>
  <section class="section">
    <div class="section_content" ref="section">
      <div
        class="section_content_background"
        :style="{ width: `${width}px`, height: `${height}px` }"
      >
        <img
          :src="content.assets.backgroundIllustration"
          :alt="content.title"
          :height="height"
        />
      </div>
      <div class="section_content_holder"></div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { n2br, getContent } from '~/lib/sectionUtils'
import '~/assets/styles/partials/section_content.css'
import AnimationType_02 from './mixins/AnimationType_02'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'SectionHolderTrip',
  data() {
    return {
      content: {},
      duration: 1200,
    }
  },
  mixins: [AnimationType_02],
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
      height: (state: any) => state.main.ui.viewPort.height,
    }),
  },
  methods: {
    n2br,
  },
  async fetch() {
    this.content = await getContent(this, '05_sectionTrip')
  },
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.setSceneScrollable(this.$refs)
  },
})
</script>

<style lang="postcss" scoped>
.section {
  @apply min-h-screen bg-black text-white;
}
</style>
