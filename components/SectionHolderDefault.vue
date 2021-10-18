<template>
  <section class="section">
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SectionHolderDefault',
})
</script>

<style lang="postcss" scoped>
.section {
  @apply min-h-screen bg-black text-white;
}
</style>
