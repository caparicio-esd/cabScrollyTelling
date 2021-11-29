<template>
  <header class="header" ref="header" :class="[{ hidden: shouldHide, lightTheme: mustBeLight }]">
    <header-brand />
    <header-timeline :goToScrollPoint="goToScrollPoint" :mustBeLight="mustBeLight" />
    <header-menu :goToScrollIndex="goToScrollIndex" :mustBeLight="mustBeLight" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderBrand from '@/components/header/HeaderBrand.vue'
import HeaderTimeline from '@/components/header/HeaderTimeline.vue'
import HeaderMenu from '@/components/header/HeaderMenu.vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  components: { HeaderBrand, HeaderTimeline, HeaderMenu },
  name: 'HeadDefault',
  data() {
    return {
      scrollBehaviour: {
        lastScroll: -1,
      },
    }
  },
  computed: {
    ...mapState({
      height: (state: any) => state.main.ui.viewPort.height,
      dataItems: (state: any) => state.data.dataItems,
    }),
    ...mapGetters({
      getTotalScenesDuration02: 'main/getTotalScenesDuration02',
      scrollOffsetLimitsByScene: 'main/scrollOffsetLimitsByScene',
      inWhichSceneIAm: 'main/inWhichSceneIAm',
    }),
    shouldHide() {
      const dItem = this.dataItems.get(this.inWhichSceneIAm)
      return dItem.showMenu === false
    },
    mustBeLight() {
      return this.inWhichSceneIAm == 10 || this.inWhichSceneIAm == 11
    }
  },
  methods: {
    initHeaderScrollBehaviour() {
      const w = window
      window.addEventListener('scroll', () => {
        // if (scrollY > this.scrollBehaviour.lastScroll) this.hideHeader()
        // else this.showHeader()
        // this.scrollBehaviour.lastScroll = scrollY
      })
    },
    hideHeader() {
      if (this.$refs.header) {
        Object.assign((this.$refs.header as HTMLElement).style, {
          transform: 'translateY(calc(-100% + 8px))',
          transition: 'transform 300ms ease',
        })
      }
    },
    showHeader() {
      if (this.$refs.header) {
        Object.assign((this.$refs.header as HTMLElement).style, {
          transform: '',
          transition: 'transform 300ms ease',
        })
      }
    },
    goToScrollPoint(ev: any) {
      const target = ev.path.find((p: any) =>
        p.classList.contains('header_timeline')
      )
      const targetWidth = target ? target.clientWidth : 0
      const clickedPosition = ev.clientX
      const clickedRelativePosition = (clickedPosition * 100) / targetWidth
      const scrollPoint =
        (this.getTotalScenesDuration02 * clickedRelativePosition) / 100
      scrollTo(0, scrollPoint)
    },
    goToScrollIndex(currScene: number) {
      const sLimits = this.scrollOffsetLimitsByScene(currScene)
      scrollTo(0, sLimits[0] + this.height)
    },
  },
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.initHeaderScrollBehaviour()
  },
})
</script>

<style lang="postcss" scoped>
.header {
  @apply fixed top-0 left-0 w-full z-50 text-white;
  &.lightTheme {
    @apply text-gray-600;
  }
}
</style>
