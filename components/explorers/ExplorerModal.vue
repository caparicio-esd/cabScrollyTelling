<template>
  <div class="explorer_modals">
    <div :class="[`overlay`, explorerId >= 0 && `opened`]"></div>
    <div :class="getClasses(`left`)">
      <explorer-modal-content :activeContent="activeContent" />
    </div>
    <div :class="getClasses(`right`)">
      <explorer-modal-content :activeContent="activeContent" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import ExplorerModalContent from './ExplorerModalContent.vue'
import ExploreModalClasses, { ExplorerModalDirection } from './ModalTypes'

export default Vue.extend({
  name: 'ExplorerModal',
  scrollToTop: true,
  components: {
    ExplorerModalContent,
  },
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
      explorerId: (state: any) => state.explorers.explorer.openedId,
      activeContent: (state: any) => state.explorers.explorer.activeContent,
    }),
  },
  methods: {
    getClasses(dir: ExplorerModalDirection): ExploreModalClasses {
      return {
        explorer_modal: true,
        explorer_modal_left: dir == 'left',
        explorer_modal_right: dir == 'right',
        opened:
          dir == 'right'
            ? this.activeContent?.position?.lon < 50
            : this.activeContent?.position?.lon >= 50,
      }
    },
  },
})
</script>

<style lang="postcss" scoped>
.overlay {
  @apply absolute z-10 top-0 h-full w-full bg-black opacity-0;
  pointer-events: none;
  transition: opacity 350ms ease;
  &.opened {
    @apply opacity-20;
  }
}
.explorer_modal {
  @apply absolute z-20 top-0;
  @apply bg-white px-4 py-4 text-gray-800;
  @apply overflow-y-auto;
  width: calc(100% * 2 / 7);
  min-width: 550px;
  transition: transform 350ms ease;
  height: calc(100% - 6rem);
  &.explorer_modal_left {
    @apply absolute left-0;
    transform: translate(-100%);
  }
  &.explorer_modal_right {
    @apply absolute right-0;
    transform: translate(100%);
  }
  &.opened {
    transform: translate(0);
  }
}
</style>
