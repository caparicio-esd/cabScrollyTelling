<template>
  <section class="section min-h-screen bg-black text-white">
        <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "SectionHolderDefault"
})
</script>
