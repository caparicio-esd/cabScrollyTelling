<template>
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
        <h2 class="mb-12" v-html="n2br(content.data.title)" />
        <p v-for="(p, i) in content.data.mainText" :key="i" v-html="p"></p>
        <!-- <div class="logos flex mt-8">
          <div
            class="logo mr-2"
            v-for="(logo, i) in content.assets.logos"
            :key="i"
          >
            <img :src="logo" alt="logo" width="40" />
          </div>
        </div> -->
      </div>
      <div class="section_col_b col-start-4 col-span-2 self-center">
        <p v-for="(p, i) in content.data.secondaryText" :key="i" v-html="p"></p>
      </div>
    </div>

    <div class="logo_bar">
      <div
        class="logo"
        v-for="(logo, i) in content.assets.logos"
        :key="i"
      >
        <a :href="logo.url" target="_blank">
          <img :src="logo.src" :alt="logo.alt" width="40" />
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { n2br, getContent } from '~/lib/sectionUtils'
import '~/assets/styles/partials/section_content.css'
import { mapState, mapActions } from 'vuex'
import AnimationType_01 from '../mixins/AnimationType_01'

export default Vue.extend({
  props: ['index'],
  data() {
    return {
      content: {},
    }
  },
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
  mixins: [AnimationType_01],
  async fetch() {
    this.content = await getContent(this, '09_sectionFoot')
    this.addData({ index: this.index, data: this.content })

  },
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.setSceneScrollable(this.$refs)
     //@ts-ignore
    this.setUpComponent()
  },
})
</script>

<style lang="postcss" scoped>
.logo_bar{
  @apply flex bg-white;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  .logo{
    @apply mx-4;
    height: 40px;
    img{
      height: 100%;
      width: auto;
    }
  }
}
</style>
