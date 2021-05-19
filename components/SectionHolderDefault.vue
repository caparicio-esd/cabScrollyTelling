<template>
  <section class="section min-h-screen bg-gray-800 text-white">
        <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "SectionHolderDefault"
})
</script>
