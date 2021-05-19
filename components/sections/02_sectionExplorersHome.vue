
<template>
  <div class="section_content">
    <div class="section_content_background">
      <img :src="content.assets.backgroundIllustration" :alt="content.title" />
    </div>
    <div class="section_content_holder">
      <div class="section_col_a col-span-2 self-end">
        <h2 class="mb-12" v-html="n2br(content.data.title)" />
        <p v-for="(p, i) in content.data.mainText" :key="i">{{ p }}</p>
        <div class="logos flex mt-8">
          <div
            class="logo mr-1"
            v-for="(logo, i) in content.assets.logos"
            :key="i"
          >
            <img :src="logo" alt="logo" width="30" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { n2br, getContent } from '~/lib/sectionUtils'
import '~/assets/styles/partials/section_content.css'

export default Vue.extend({
  data() {
    return {
      content: {},
    }
  },
  methods: {
    n2br,
  },
  async fetch() {
    this.content = await getContent(this, '02_sectionExplorersHome')
  },
})
</script>
