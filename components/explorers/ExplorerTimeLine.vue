<template>
  <div class="explorer_timeline">
    <div class="explorer_timeline_holder">
      <div class="timeline">
        <div class="timeline_line"></div>
        <tick
          v-for="(year, i) in years"
          :key="i"
          :style_="{
            right: `${getLeftPosition(i, year)}%`,
          }"
          :openedId="openedId"
          :focusedId="focusedId"
          :index="i"
          :clickHndlr="(ev) => openExplorerModal(year, i, ev)"
        >
          <div class="timeline_item_tooltip">
            {{ year | toYear }}
          </div>
        </tick>
      </div>
      <button-next-screen :position="`static`" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tick from './../dsys/Ticks.vue'
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
  components: {
    Tick,
  },
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
      openedId: (state: any) => state.explorers.explorer.openedId,
      focusedId: (state: any) => state.explorers.explorer.focusedId,
      activeContent: (state: any) => state.explorers.explorer.activeContent,
      content: (state: any) => state.explorers.content?.data,
      scrollable: (state: any) => state.main.ui.viewPort.scrollable
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
    getLeftPosition(i: number, year: any): number{
      let pos = -((this.yearsAsTimestamp[i] - this.yearMax) / this.yearDiff) * 100;
      if((year['$y'] == 1975 && year['$M'] == 7) ||
      (year['$y'] == 2003 && year['$M'] == 5) ){
        pos = pos + 1.5;
      }
      return(pos)
    },
  },
})
</script>

<style lang="postcss">
.tick_area {
  transform: translate(50%, -50%);
  &:hover {
    .timeline_item_tooltip {
      visibility: visible;
    }
  }
}
.tick_item {
  &.tick_item_active {
    .timeline_item_tooltip {
      visibility: visible;
    }
  }
  .timeline_item_tooltip {
    @apply px-2 py-1 text-sm rounded-full bg-white text-black font-sans;
    @apply absolute;
    bottom: calc(100% + 0.75rem);
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
</style>
<style lang="postcss" scoped>
.explorer_timeline {
  @apply absolute z-10 bottom-0 w-full left-0;
  @apply border-white border-t-2;
  @apply h-24 flex items-center px-5;
  pointer-events: none;
  .explorer_timeline_holder {
    @apply w-full flex;
  }
}
.timeline {
  @apply relative w-full mr-8;
  pointer-events: none;
  .timeline_line {
    @apply absolute;
    @apply h-1 w-full bg-white opacity-60 rounded;
    top: 46%;
  }
}
</style>
