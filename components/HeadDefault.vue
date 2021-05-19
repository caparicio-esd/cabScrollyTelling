<template>
  <header class="header fixed top-0 left-0 w-full text-white" ref="header">
    <div class="header_holder xl:container xl:m-auto py-2">header...</div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
        transform: 'translateY(-100%)',
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

<style></style>
