<template>
  <div class="explorer_timeline">
    <div class="explorer_timeline_holder">timeline...</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ExplorerTimeLine',
})
</script>

<style lang="postcss" scoped>
.explorer_timeline {
  @apply absolute z-10 bottom-0 w-full left-0;
  @apply border-white border-t-2;
  @apply h-24 flex items-center px-6;
}
</style>
