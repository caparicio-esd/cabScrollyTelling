<template>
  <div class="header_timeline" @click="goToScrollPoint">
    <div
      class="header_timeline_completed"
      :style="{ width: `${(scroll / documentTotalHeight) * 100}%` }"
    ></div>
    <div v-for="(dItem, i) in menuData" :key="i">
      {{ dItem.menuTitle || dItem.title }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
export default Vue.extend({
  name: 'HeaderTimeline',
  computed: {
    ...mapState({
      scroll: (state: any) => state.main.ui.viewPort.scroll,
      dataItems: (state: any) => state.data.dataItems,
    }),
    ...mapGetters({
      getScroll: 'main/getScroll',
      getTotalScenesDuration: 'main/getTotalScenesDuration',
      getTotalScenesDuration02: 'main/getTotalScenesDuration02',
      scrollOffsetLimitsByScene: 'main/scrollOffsetLimitsByScene',
    }),
    documentTotalHeight() {
      return this.getTotalScenesDuration02
    },
    menuData() {
      const data = Array.from(this.dataItems.keys())
        .map((index) => ({ index, ...this.dataItems.get(index) }))
        .map((dItem) => ({ ...dItem }))
      data.sort((a: any, b: any) => a.index - b.index)
      return data
    },
  },
  watch: {
    dataItems(o, n) {
      console.log(o, n)
    },
  },
  methods: {
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
  },
})
</script>

<style lang="postcss" scoped>
.header_timeline {
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.4);

  .header_timeline_completed {
    height: 4px;
    background-color: rgba(255, 255, 255, 0.4);
  }
}
</style>
