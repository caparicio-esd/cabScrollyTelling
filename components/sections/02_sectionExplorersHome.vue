
<template>
  <div class="section_content">
    <div class="section_col_a">
      <h2>{{ content.data.title }}</h2>
      <p v-for="(p, i) in content.data.mainText" :key="i">{{ p }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      content: {},
    }
  },
  async fetch() {
    const content = await (this as any).$content('02_sectionExplorersHome').fetch()
    this.content = content
  },
})
</script>
