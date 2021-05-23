<template>
  <div class="header_timeline">
    <div
      class="header_timeline_completed"
      :style="{ width: `${(scroll / documentHeight) * 100}%` }"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'HeaderTimeline',
  computed: {
    ...mapState({
      scroll: (state: any) => state.main.ui.viewPort.scroll,
      documentHeight: (state: any) => state.main.ui.document.height,
    }),
  },
})
</script>

<style lang="postcss" scoped>
.header_timeline {
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.4);

  .header_timeline_completed {
    height: 8px;
    background-color: rgba(255, 255, 255, 0.4);
  }
}
</style>
