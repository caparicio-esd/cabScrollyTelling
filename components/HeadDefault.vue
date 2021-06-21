<template>
  <header class="header" ref="header">
    <header-brand />
    <header-timeline />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderBrand from '@/components/header/HeaderBrand.vue'
import HeaderTimeline from '@/components/header/HeaderTimeline.vue'

export default Vue.extend({
  components: { HeaderBrand, HeaderTimeline },
  name: 'HeadDefault',
  data() {
    return {
      scrollBehaviour: {
        lastScroll: -1,
      },
    }
  },
  methods: {
    initHeaderScrollBehaviour() {
      const w = window
      window.addEventListener('scroll', () => {
        if (scrollY > this.scrollBehaviour.lastScroll) this.hideHeader()
        else this.showHeader()
        this.scrollBehaviour.lastScroll = scrollY
      })
    },
    hideHeader() {
      Object.assign((this.$refs.header as HTMLElement).style, {
        transform: 'translateY(calc(-100% + 8px))',
        transition: 'transform 300ms ease',
      })
    },
    showHeader() {
      Object.assign((this.$refs.header as HTMLElement).style, {
        transform: '',
        transition: 'transform 300ms ease',
      })
    },
  },
  async mounted() {
    await setTimeout(() => {}, 1)
    this.initHeaderScrollBehaviour()
  },
})
</script>

<style lang="postcss" scoped>
.header {
  @apply fixed top-0 left-0 w-full z-50 text-white;
}
</style>
