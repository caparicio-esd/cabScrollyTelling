<template>
  <div class="root">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'assets/styles/main.css'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      scrollable: (state: any) => state.main.ui.viewPort.scrollable
    })
  },
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
    setScrollLevelInComponent(ev: Event = {} as Event): void {
      if (this.scrollable) { 
        this.setScrollLevel(scrollY)
      } else {
        ev.preventDefault()
      }
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
