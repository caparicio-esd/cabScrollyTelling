<template>
  <div
    class="section_content_background"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <img :src="background" :alt="title" :height="height" />
    <img class="noise" src="~/static/img/noise.gif" alt="jarl..." />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['width', 'height', 'title', 'background'],
})
</script>

<style lang="postcss" scoped></style>
