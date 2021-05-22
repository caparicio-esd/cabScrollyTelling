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
    }),
    setViewportSizeInComponent() {
      this.setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    },
    setScrollLevelInComponent() {
      this.setScrollLevel(scrollY)
    },
  },
  mounted(): void {
    this.setViewportSizeInComponent()
    this.setScrollLevelInComponent()

    window.addEventListener('resize', this.setViewportSizeInComponent)
    window.addEventListener('scroll', this.setScrollLevelInComponent)
  },
})
</script>
