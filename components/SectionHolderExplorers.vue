<template>
  <section class="section min-h-screen bg-black text-white border relative">
    <explorers />
    <explorer-modal />
    <explorer-modal-window />
    <explorer-time-line />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Explorers from '~/components/explorers/Explorers.vue'
import ExplorerModal from '~/components/explorers/ExplorerModal.vue'
import ExplorerModalWindow from '~/components/explorers/ExplorerModalWindow.vue'
import ExplorerTimeLine from '~/components/explorers/ExplorerModalWindow.vue'

export default Vue.extend({
  name: 'SectionHolderExplorers',
  components: {
    Explorers,
    ExplorerModal,
    ExplorerModalWindow,
    ExplorerTimeLine,
  },
})
</script>
