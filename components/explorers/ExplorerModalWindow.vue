<template>
    <div class="explorer_modal_window">
        modal...
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "ExplorerModalWindow", 
})
</script>

<style lang="postcss" scoped>
.explorer_modal_window {
    @apply absolute z-10 top-0 h-full left-0;
}
</style>
