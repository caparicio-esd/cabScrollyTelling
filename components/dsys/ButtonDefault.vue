<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "ButtonDefault"
})
</script>

<style lang="postcss" scoped>
button.btn {
    @apply px-2 py-2 rounded-sm uppercase;
}
</style>