<template>
  <div class="section_explorers min-h-screen grid grid-cols-1 grid-rows-1">
    <div
      class="section_content_background col-span-full row-span-full"
      :style="{ width: `${width}px`, height: `${height}px` }"
      @click="closeExplorer"
    >
      <img :src="content.assets.backgroundIllustration" :alt="content.title" />
    </div>
    <div class="explorers">
      <div
        v-for="(explorer, i) in content.data"
        :key="i"
        :style="getExplorerStyle(explorer, i)"
        @click.stop="(ev) => openExplorerModal(explorer, i, ev)"
        :class="[
          `explorer`,
          openedId == i ? `explorer_active` : ``,
          focusedId == i ? `explorer_focused` : ``,
          focusedId != i && focusedId >= 0 ? `explorer_unfocused` : ``,
        ]"
      >
        <ph-rocket />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getContent } from '~/lib/sectionUtils'
import { PhArrowLeft, PhRocket } from 'phosphor-vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'Explorers',
  components: {
    PhArrowLeft,
    PhRocket
  },
  data(): any {
    return {
      content: {},
    }
  },
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
      height: (state: any) => state.main.ui.viewPort.height,
      focusedId: (state: any) => state.explorers.explorer.focusedId,
      openedId: (state: any) => state.explorers.explorer.openedId,
    }),
  },
  methods: {
    ...mapActions({
      setExplorerFocused: 'explorers/setExplorerFocused',
      setExplorerOpened: 'explorers/setExplorerOpened',
      blurExplorer: 'explorers/blurExplorer',
      closeExplorer: 'explorers/closeExplorer',
      fetchContent: 'explorers/fetchContent'
    }),
    getExplorerStyle(explorer: any, i: number): object {
      return {
        top: `${explorer.position.lat}%`,
        left: `${explorer.position.lon}%`,
      }
    },
    openExplorerModal(explorer: any, i: number, ev: Event): void {
      this.setExplorerOpened({
        explorerId: i,
        //@ts-ignore
        activeContent: this.content.data[i],
      })
    },
  },
  async fetch(): Promise<void> {
    this.content = await getContent(this, '03_sectionExplorers')
    this.fetchContent(this.content);
  },
})
</script>

<style lang="postcss" scoped>
.explorers {
  @apply col-span-full row-span-full relative;
  pointer-events: none;
  .explorer {
    @apply absolute rounded-full bg-white text-black p-2;
    @apply ring-white ring-0 ring-opacity-50;
    transform: translate(-50%, -50%);
    pointer-events: initial;
    transition: all 350ms ease;
    background-clip: padding-box;
    border: 3px solid white;

    &.explorer_active {
      @apply ring-white ring-8 ring-opacity-40;
      border: 3px solid transparent;
      transition: all 350ms ease;
    }
    &.explorer_focused,
    &:hover {
      @apply ring-white ring-4 ring-opacity-40;
      border: 3px solid transparent;
      transition: all 350ms ease;
    }
    &.explorer_unfocused {
      opacity: 0.6;
      transition: all 350ms ease;
    }
  }
}
</style>
