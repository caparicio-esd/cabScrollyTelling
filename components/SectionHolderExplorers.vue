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
import AnimationType_02 from './mixins/AnimationType_02'
import { mapActions, mapState } from 'vuex'
import { getContent } from '~/lib/sectionUtils'

export default Vue.extend({
  name: 'SectionHolderExplorers',
  components: {
    Explorers,
    ExplorerModal,
    ExplorerTimeLine,
    ExplorerModalTutorial,
  },
  mixins: [AnimationType_02],
  data() {
    return {
      duration: 1600,
      content: {},
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
  },
  computed: {
    ...mapState({
      tutorial: (state: any) => state.main.scenes.tutorial,
    }),
  },
  methods: {
    ...mapActions({
      setScrollable: 'main/setScrollable',
      fetchContent: 'explorers/fetchContent',
      setExplorerOpened: 'explorers/setExplorerOpened',
    }),
    onEnterScene(ev: any) {
      if (this.tutorial) {
        this.setScrollable(false)
      }
    },
    onProgressScene(ev: any) {
      // TODO: refactorizable into animationType
      // TODO: create cross bind function, and launch index
      const id = () => {
        throw new Error("not implemented method...")
      }
      this.setExplorerOpened({
        explorerId: id, 
        //@ts-ignore
        activeContent: this.content.data[id]
      })
      console.log(ev)
    },
  },
})
</script>

<style lang="postcss" scoped>
.section {
  @apply min-h-screen bg-black text-white relative overflow-hidden;
}
</style>


