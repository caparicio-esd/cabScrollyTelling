<template>
  <section class="section">
    <!-- <machines /> -->
    <div>
      <machine
        v-for="(content, i) in content.data"
        :key="i"
        :content="content"
        :index="index+i"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
// import Machines from '~/components/machines/Machines.vue'
import Machine from '~/components/machines/Machine.vue'
import { getContent } from '~/lib/sectionUtils'

export default Vue.extend({
  name: 'SectionHolderMachines',
  props: ['index'],
  components: {
    Machine,
  },
  data(): any {
    return {
      content: {},
    }
  },
  async fetch(): Promise<void> {
    this.content = await getContent(this, '04_sectionMachines')
  },
})
</script>

<style lang="postcss" scoped>
.section {
  @apply min-h-screen bg-black text-white relative overflow-hidden;
}
</style>
