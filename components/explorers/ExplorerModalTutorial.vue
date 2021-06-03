<template>
    <div class="explorer_modal_tutorial" v-if="2>3">
        modal...
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "ExplorerModalTutorial", 
})
</script>

<style lang="postcss" scoped>
.explorer_modal_tutorial {
    @apply absolute z-10 top-0 h-full left-0;
}
</style>
