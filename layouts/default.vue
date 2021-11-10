<template>
  <div class="root">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'assets/styles/main.css'
import { mapActions, mapState, mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      scrollable: (state: any) => state.main.ui.viewPort.scrollable,
      debug: (state: any) => state.explorers.debug,
    }),
    ...mapGetters({
      inWhichSceneIAm: 'main/inWhichSceneIAm',
    }),
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
    setScrollLevelInComponent(ev: Event = {} as Event): void | false {
      if (this.scrollable) {
        this.setScrollLevel(scrollY)
        console.log('scroll: ' + scrollY)
        console.log('scene:  ' + this.inWhichSceneIAm)
      } else {
        if (!this.debug) {
          document.body.style.overflow = 'hidden'
        }
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

    if (process.browser) {
      //@ts-ignore
      window.onNuxtReady((app) => {
        console.log('Nuxt ready!')
      })
    }
  },
})
</script>
