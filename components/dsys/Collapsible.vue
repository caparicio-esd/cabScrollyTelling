<template>
  <div class="collapsible">
    <div class="collapsible_handle">
      <div class="collapsible_handle_icon"></div>
      <div class="collapsible_handle_label">
        <slot name="handler" />
      </div>
    </div>
    <div class="collapsible_content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Collapsible',
  props: ['opened'],
})
</script>

<style lang="postcss" scoped>
.collapsible {
}
</style>
