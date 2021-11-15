<template>
  <section class="section" ref="section">
    <explorers />
    <explorer-modal />
    <explorer-modal-tutorial />
    <explorer-time-line />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Explorers from '~/components/explorers/Explorers.vue'
import ExplorerModal from '~/components/explorers/ExplorerModal.vue'
import ExplorerTimeLine from '~/components/explorers/ExplorerTimeLine.vue'
import ExplorerModalTutorial from './explorers/ExplorerModalTutorial.vue'
import { mapActions, mapState } from 'vuex'
import { getContent } from '~/lib/sectionUtils'
import Scrollable from './mixins/Scrollable'

export default Vue.extend({
  name: 'SectionHolderExplorers',
  props: ['index'],
  components: {
    Explorers,
    ExplorerModal,
    ExplorerTimeLine,
    ExplorerModalTutorial,
  },
  mixins: [Scrollable],
  data() {
    return {
      duration: 1600,
      content: {},
      progress: 0,
      lastBin: 0,
    }
  },
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.setSceneScrollable(this.$refs)
  },
  async fetch(): Promise<void> {
    this.content = await getContent(this, '03_sectionExplorers')
    this.fetchContent(this.content)
    this.addData({index: this.index, data: this.content})
  },
  computed: {
    ...mapState({
      debug: (state: any) => state.explorers.debug,
    }),
    dataLength(): number {
      return (this.content as any).data.length
    },
  },
  methods: {
    ...mapActions({
      setScrollable: 'main/setScrollable',
      fetchContent: 'explorers/fetchContent',
      setExplorerOpened: 'explorers/setExplorerOpened',
      addData: 'data/addData',
    }),
    onEnterScene(ev: any) {
      if (!this.debug) {
        this.setScrollable(false)
      }
    },
    onProgressScene(ev: any) {
      const bin = Math.max(Math.ceil(this.progress * this.dataLength) - 1, 0)
      if (this.lastBin != bin) {
        this.setExplorerOpened({
          explorerId: bin,
          activeContent: (this.content as any).data[bin],
        })
        this.lastBin = bin
      }
    },
  },
})
</script>

<style lang="postcss" scoped>
.section {
  @apply min-h-screen bg-black text-white relative overflow-hidden;
}
</style>
