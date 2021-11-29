<template>
  <div
    class="header_timeline"
    @click="goToScrollPoint"
    :class="[{ lightTheme: mustBeLight }]"
  >
    <div
      class="header_timeline_completed"
      :style="{ width: `${(getScroll / documentTotalHeight) * 100}%` }"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'HeaderTimeline',
  props: ['goToScrollPoint', 'mustBeLight'],
  computed: {
    ...mapGetters({
      getScroll: 'main/getScroll',
      getTotalScenesDuration02: 'main/getTotalScenesDuration02',
    }),
    documentTotalHeight() {
      return this.getTotalScenesDuration02
    },
  },
})
</script>

<style lang="postcss" scoped>
.header_timeline {
  @apply font-sans text-sm uppercase;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.4);

  .header_timeline_completed {
    height: 4px;
    background-color: rgba(255, 255, 255, 0.4);
  }

  &.lightTheme {
    background-color: rgba(0, 0, 0, 0.15);
    .header_timeline_completed {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
