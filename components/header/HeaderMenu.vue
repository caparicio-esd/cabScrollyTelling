<template>
  <client-only>
    <div class="header_menu">
      <ticks
        v-for="(dItem, i) in menuData"
        :key="`b` + dItem.index"
        :style_="setPosition(dItem)"
        :clickHndlr="(ev) => goToScrollIndex(dItem.index)"
        :openedId="inWhichSceneIAm"
        :index="i"
        :focusedId="999"
        :mustBeLight="mustBeLight"
      >
        <!-- <div class="header_menu_item" v-if="dItem.index > 0"> -->
        <div class="header_menu_item">
          {{ dItem.menuTitle || dItem.title }}
        </div>
      </ticks>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import Ticks from '../dsys/Ticks.vue'

export default Vue.extend({
  components: { Ticks },
  name: 'HeaderMenu',
  props: ['goToScrollIndex', 'mustBeLight'],
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
      inWhichSceneIAm: 'main/inWhichSceneIAm',
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
      //if (dItem.index == 0) return false
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

<style lang="postcss">
.header_menu {
  .tick_area {
    transform: translate(50%, -50%);
    &:hover {
      .header_menu_item {
        visibility: visible;
      }
    }
  }
  .tick_item {
    top: 20%;
    left: 0;
    &.tick_item_active {
      .timeline_item_tooltip {
        visibility: visible;
      }
    }
    .header_menu_item {
      @apply absolute;
      @apply font-sans text-sm uppercase text-center;
      transform: translateX(-50%);
      top: 1rem;
      width: 12ch;
      transition: all 350ms ease;
      cursor: pointer;
      pointer-events: none;
      visibility: hidden;
    }

  }
}
</style>
