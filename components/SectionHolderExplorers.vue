<template>
  <section class="section min-h-screen bg-black text-white relative overflow-hidden">
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

export default Vue.extend({
  name: 'SectionHolderExplorers',
  components: {
    Explorers,
    ExplorerModal,
    ExplorerTimeLine,
    ExplorerModalTutorial,
  },
})
</script>
