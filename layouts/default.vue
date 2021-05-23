<template>
  <div class="root">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'assets/styles/main.css'
import { mapActions } from 'vuex'

export default Vue.extend({
  methods: {
    ...mapActions({
      setViewportSize: 'main/setViewportSize',
      setScrollLevel: 'main/setScrollLevel',
      setDocumentSize: 'main/setDocumentSize',
    }),
    setViewportSizeInComponent(): void {
      this.setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    },
    setScrollLevelInComponent(): void {
      this.setScrollLevel(scrollY)
    },
    setDocumentSizeInComponent(): void {
      this.setDocumentSize({
        width: document.body.getBoundingClientRect().width,
        height: document.body.getBoundingClientRect().height,
      })
    },
  },
  mounted(): void {
    this.setViewportSizeInComponent()
    this.setScrollLevelInComponent()
    this.setDocumentSizeInComponent()

    window.addEventListener('resize', () => {
      this.setViewportSizeInComponent()
      this.setDocumentSizeInComponent()
    })
    window.addEventListener('scroll', this.setScrollLevelInComponent)
  },
})
</script>
