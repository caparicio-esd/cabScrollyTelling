<template>
  <div class="explorer_timeline">
    <div class="explorer_timeline_holder">
      <div class="timeline">
        <div class="timeline_line"></div>
        <div
          class="timeline_item"
          v-for="(year, i) in years"
          :key="i"
          :style="{ left: (yearsAsTimestamp[i] - yearMin) / yearDiff * 100 + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
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
      explorerId: (state: any) => state.explorers.explorer.openedId,
      activeContent: (state: any) => state.explorers.explorer.activeContent,
      content: (state: any) => state.explorers.content?.data,
    }),
    years(): Array<dayjs.Dayjs> {
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
})
</script>

<style lang="postcss" scoped>
.explorer_timeline {
  @apply absolute z-10 bottom-0 w-full left-0;
  @apply border-white border-t-2;
  @apply h-24 flex items-center px-6;
  .explorer_timeline_holder {
    @apply w-full;
  }
}
.timeline {
  @apply relative w-full;
  .timeline_line {
    @apply top-1/2 -translate-x-1/2;
    @apply h-1 w-full bg-white opacity-60 rounded;
  }
  .timeline_item {
    @apply absolute top-1/2 w-3 h-3 rounded-full bg-white;
    transform: translateY(-50%);
  }
}
</style>
