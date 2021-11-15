<template>
  <client-only>
    <div class="header_menu">
      <div
        class="header_menu_tick_area"
        v-for="(dItem, i) in menuData"
        :key="`a` + dItem.index"
        :style="{ ...setPosition(dItem) }"
        @mouseenter="setVisible(true, i)"
        @mouseleave="setVisible(false, i)"
        @click="goToScrollIndex(dItem.index)"
      ></div>
      <div
        class="header_menu_ticks"
        v-for="(dItem, i) in menuData"
        :key="`b` + dItem.index"
        :style="{ ...setPosition(dItem) }"
        :class="[{ active: hovered == i }]"
      ></div>
      <div
        class="header_menu_items"
        v-for="(dItem, i) in menuData"
        :key="`c` + dItem.index"
        :style="{ ...setPosition(dItem), ...getVisible(i) }"
        @click.stop="goToScrollPointById(dItem)"
      >
        <div v-if="dItem.index > 0">
          {{ dItem.menuTitle || dItem.title }}
        </div>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'HeaderMenu',
  props: ['goToScrollIndex'],
  data() {
    return {
      hovered: -1,
    }
  },
  computed: {
    ...mapState({
      dataItems: (state: any) => state.data.dataItems,
      scenes: (state: any) => state.main.scenes.scenes,
    }),
    ...mapGetters({
      scrollOffsetLimitsByScene: 'main/scrollOffsetLimitsByScene',
      getViewportSizes: 'main/getViewportSizes',
      getTotalScenesDuration02: 'main/getTotalScenesDuration02',
    }),
    menuData() {
      const data = Array.from(this.dataItems.keys())
        .map((index) => ({ index, ...this.dataItems.get(index) }))
        .map((dItem) => ({ ...dItem }))
      data.sort((a: any, b: any) => a.index - b.index)
      return data
    },
  },
  methods: {
    goToScrollPointById(dItem: any) {
      scrollTo(
        0,
        this.scrollOffsetLimitsByScene(dItem.index)[0] +
          this.getViewportSizes.height
      )
    },
    setPosition(dItem: any): any {
      if (dItem.index == 0) return false
      const soffset = this.scrollOffsetLimitsByScene(dItem.index)[0]
      const relativeOffset = soffset / this.getTotalScenesDuration02
      return {
        top: 'calc(100% + 8px)',
        left: `${relativeOffset * 100}%`,
      }
    },
    setVisible(visible: boolean, order: number): void {
      //@ts-ignore
      this.hovered = visible ? order : -1
    },
    getVisible(order: number): any {
      return {
        //@ts-ignore
        visibility: order == this.hovered ? 'visible' : 'hidden',
        //@ts-ignore
        opacity: order == this.hovered ? 1 : 0,
      }
    },
  },
})
</script>

<style lang="postcss" scoped>
.header_menu {
  .header_menu_tick_area {
    @apply absolute;
    width: 50px;
    height: 50px;
    transform: translateX(-50%);
    top: calc(100% - 1rem) !important;
  }
  .header_menu_ticks {
    width: 3px;
    height: 8px;
    @apply absolute bg-white opacity-20;
    top: calc(100% - 0.25rem) !important;
    pointer-events: none;
    &.active {
      @apply opacity-40;
    }
  }
  .header_menu_items {
    @apply absolute;
    @apply font-sans text-sm uppercase text-center;
    transform: translateX(-50%);
    max-width: 15ch;
    transition: all 350ms ease;
    cursor: pointer;
    pointer-events: none;
  }
}
</style>
