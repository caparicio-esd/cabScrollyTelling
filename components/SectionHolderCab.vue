<template>
  <section class="section">
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SectionHolderCab',
})
</script>

<style lang="postcss" scoped>
.section {
  @apply min-h-screen bg-gray-200 text-gray-900;
}
</style>
