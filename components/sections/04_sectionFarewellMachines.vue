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
        <p v-for="(p, i) in content.data.mainText" :key="i">{{ p }}</p>
      </div>
      <div class="section_col_b col-start-3 col-span-2 self-center">
        <!-- <img
          class="graph"
          src="img/temperatureGraph/graph_tempG.gif"
          alt="Gráfico con la evolución de las temperaturas en Marte"
        > -->

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
    this.content = await getContent(this, '04_sectionFarewellMachines')
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
  .graph{
    max-width: none;
    width: 150%;
  }
</style>
