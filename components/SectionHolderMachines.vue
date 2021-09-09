<template>
  <section class="section" ref="section">
    <machines />

  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Machines from '~/components/machines/Machines.vue'
// import ExplorerModal from '~/components/explorers/ExplorerModal.vue'
// import ExplorerTimeLine from '~/components/explorers/ExplorerTimeLine.vue'
// import ExplorerModalTutorial from './explorers/ExplorerModalTutorial.vue'
import AnimationType_01 from './mixins/AnimationType_01'

export default Vue.extend({
  name: 'SectionHolderMachines',
  components: {
    Machines
    // ExplorerModal,
    // ExplorerTimeLine,
    // ExplorerModalTutorial,
  },
  mixins: [AnimationType_01],
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.setSceneScrollable(this.$refs)
  },
})
</script>

<style lang="postcss" scoped>
.section {
  @apply min-h-screen bg-black text-white relative overflow-hidden;
}
</style>
