<template>
  <div class="section_content">
    <h2>{{ content.title }}</h2>
    <p>{{ content.description }}</p>  
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      content: {}
    }
  },  
  async fetch() {
    const content = await (this as any).$content('01_sectionWelcome').fetch()
    this.content = content;
  },
})
</script>
