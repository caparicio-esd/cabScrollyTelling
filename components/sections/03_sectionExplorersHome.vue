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
        <div class="logos flex mt-8">
          <div
            class="logo mr-1"
            v-for="(logo, i) in content.assets.logos"
            :key="i"
          >
            <img :src="logo" alt="logo" width="30" />
          </div>
        </div>
      </div>
      <div class="section_col_b col-start-4 col-span-2 self-center">
        <p v-for="(p, i) in content.data.secondaryText" :key="i" v-html="p"></p>
        <!-- extra resources -->
        <div class="resources">
          <extra-resource
            v-for="(resource, i) in content.assets.resources"
            :key="i"
            :resource="resource"
          />
        </div>
      </div>
    </div>
    <button-next-screen />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { n2br, getContent } from '~/lib/sectionUtils'
import '~/assets/styles/partials/section_content.css'
import { mapState, mapActions } from 'vuex'
import AnimationType_01 from '../mixins/AnimationType_01'
import ButtonNextScreen from '~/components/ButtonNextScreen.vue'

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
  components: {
    ButtonNextScreen,
  },
  methods: {
    ...mapActions({
      addData: 'data/addData',
    }),
    n2br,
  },
  mixins: [AnimationType_01],
  async fetch() {
    this.content = await getContent(this, '03_sectionExplorersHome')
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
