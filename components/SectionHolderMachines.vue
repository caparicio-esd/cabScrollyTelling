<template>
  <section class="section" ref="section">
    <machines />

  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Machines from '~/components/machines/Machines.vue'
import AnimationType_01 from './mixins/AnimationType_01'

export default Vue.extend({
  name: 'SectionHolderMachines',
  components: {
    Machines,

  },
  mixins: [AnimationType_01],
})
</script>

<style lang="postcss" scoped>
.section {
  @apply min-h-screen bg-black text-white relative overflow-hidden;
}
</style>
