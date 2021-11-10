<template>
  <div class="header_timeline" @click="goToScrollPoint">
    <div
      class="header_timeline_completed"
      :style="{ width: `${(scroll/documentTotalHeight) * 100}%` }"
    ></div>
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
      viewportHeight: (state: any) => state.main.ui.viewPort.height,
      scenesAmount: (state: any) => state.main.scenes.amount
    }),
    ...mapGetters({
      getScroll: "main/getScroll", 
      getTotalScenesDuration: "main/getTotalScenesDuration", 
      getTotalScenesDuration02: "main/getTotalScenesDuration02", 

    }),
    documentTotalHeight() {      
      return this.getTotalScenesDuration02
    },
  },
  methods: {
    goToScrollPoint(ev: any) {
      const target = ev.path.find((p:any) => p.classList.contains("header_timeline"))
      const targetWidth = target ? target.clientWidth : 0
      const clickedPosition = ev.clientX
      const clickedRelativePosition = clickedPosition * 100 / targetWidth
      const scrollPoint = this.getTotalScenesDuration02 * clickedRelativePosition / 100
      scrollTo(0, scrollPoint)
    }
  }
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
