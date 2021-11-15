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
      <div class="section_content_holder">
        <div class="section_col_a col-span-2 self-center">
          <p v-for="(p, i) in content.data[0].mainText" :key="i" v-html="p"></p>
          <p class="author" v-html="content.data[0].author"></p>
          <p class="position" v-html="content.data[0].position"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { n2br, getContent } from '~/lib/sectionUtils'
import '~/assets/styles/partials/section_content.css'
import AnimationType_02 from './mixins/AnimationType_02'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'SectionHolderTrip',
  props: ['index'],
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
    ...mapActions({
      addData: 'data/addData',
    }),
    n2br,
  },
  async fetch() {
    this.content = await getContent(this, '05_sectionTrip')
    this.addData({ index: this.index, data: this.content })
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
  .author {
    margin-top: 40px;
    font-weight: bold;
  }
  .position {
    font-style: italic;
  }
}
</style>
