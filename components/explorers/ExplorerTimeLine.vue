<template>
  <div class="explorer_timeline">
    <div class="explorer_timeline_holder">
      <div class="timeline">
        <div class="timeline_line"></div>
        <div
          class="timeline_item"
          v-for="(year, i) in years"
          :key="i"
          :style="{
            right: getLeftPosition(i),
          }"
          :class="[
            `timeline_item`,
            openedId == i ? `timeline_item_active` : ``,
            focusedId == i ? `timeline_item_focused` : ``,
            focusedId != i && focusedId >= 0 ? `timeline_item_unfocused` : ``,
          ]"
          @click.stop="(ev) => openExplorerModal(year, i, ev)"
        >
          <div class="timeline_item_tooltip">
            {{ year | toYear }}
          </div>
        </div>
      </div>
      <ButtonNextScreen :position="`static`" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import * as dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

export default Vue.extend({
  name: 'ExplorerTimeLine',
  data() {
    return {
      padding: 32,
    }
  },
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
      openedId: (state: any) => state.explorers.explorer.openedId,
      focusedId: (state: any) => state.explorers.explorer.focusedId,
      activeContent: (state: any) => state.explorers.explorer.activeContent,
      content: (state: any) => state.explorers.content?.data,
      scrollable: (state: any) => state.main.ui.viewPort.scrollable,
    }),
    years(): Array<dayjs.Dayjs> {
      //@ts-ignore      
      return this.content.map((el: any) =>
        //@ts-ignore
        dayjs(el.meta.launch, 'DD.MM.YYYY - HH:mm UTC')
      )
    },
    yearsAsTimestamp(): number[] {      
      //@ts-ignore
      return this.years.map((year) => +dayjs(year).valueOf())
    },
    yearMax(): number {
      return this.yearsAsTimestamp.sort((a, b) => b - a)[0]
    },
    yearMin(): number {
      return this.yearsAsTimestamp.sort((a, b) => a - b)[0]
    },
    yearDiff(): number {      
      return this.yearMax - this.yearMin
    },
  },
  filters: {
    toYear(val: String): String {
      //@ts-ignore
      return dayjs(val, 'DD.MM.YYYY - HH:mm UTC').format('YYYY')
    },
  },
  methods: {
    ...mapActions({
      setExplorerOpened: 'explorers/setExplorerOpened',
    }),
    openExplorerModal(explorer: any, i: number, ev: Event): void {
      if (this.scrollable) {
        this.setExplorerOpened({
          explorerId: i,
          //@ts-ignore
          activeContent: this.content[i],
        })
      }
    },
    getLeftPosition(i: number): string {      
      return -((this.yearsAsTimestamp[i] - this.yearMax) / this.yearDiff) * 100 + '%'
    }
  },
})
</script>

<style lang="postcss" scoped>
.explorer_timeline {
  @apply absolute z-10 bottom-0 w-full left-0;
  @apply border-white border-t-2;
  @apply h-24 flex items-center px-6;
  pointer-events: none;
  .explorer_timeline_holder {
    @apply w-full flex;
  }
}
.timeline {
  @apply relative w-full mr-8;
  pointer-events: none;
  .timeline_line {
    @apply  absolute;
    @apply h-1 w-full bg-white opacity-60 rounded;
    top: 46%;
  }
  .timeline_item {
    @apply absolute top-1/2 w-3 h-3 rounded-full bg-white;
    @apply ring-white ring-0 ring-opacity-50;
    pointer-events: initial;
    transition: all 350ms ease;
    background-clip: padding-box;
    border: 3px solid white;
    transform: translateY(-50%);

    &.timeline_item_active {
      @apply ring-white ring-8 ring-opacity-40;
      border: 3px solid transparent;
      transition: all 350ms ease;
    }
    &.timeline_item_focused,
    &:hover {
      @apply ring-white ring-4 ring-opacity-40;
      border: 3px solid transparent;
      transition: all 350ms ease;

      .timeline_item_tooltip {
        visibility: visible;
      }
    }
    &.timeline_item_unfocused {
      opacity: 0.6;
      transition: all 350ms ease;
    }

    .timeline_item_tooltip {
      @apply px-2 py-1 text-sm rounded-full bg-white text-black font-sans;
      @apply absolute;
      bottom: calc(100% + 0.25rem);
      left: 50%;
      transform: translateX(-50%);
      visibility: hidden;

      &::after {
        content: ' ';
        width: 20px;
        height: 20px;
        transform: translate(-50%, -50%) rotate(45deg);
        @apply bg-white shadow-sm;
      }
    }
  }
}
</style>
