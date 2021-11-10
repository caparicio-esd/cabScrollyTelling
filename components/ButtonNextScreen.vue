<template>
  <button class="btn_primary btn_next" @click="goToNextSlide">
    <span>CONTINUAR</span>
    <ph-arrow-down :size="20" />
  </button>
</template>

<script>
import Vue from 'vue'
//@ts-ignore
import { PhArrowDown } from 'phosphor-vue'
import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    PhArrowDown,
  },
  computed: {
    ...mapGetters({
      inWhichSceneIAm: 'main/inWhichSceneIAm',
      scrollOffsetLimitsByScene: 'main/scrollOffsetLimitsByScene',
      getSceneScrollOffset: 'main/getSceneScrollOffset',
    }),
    ...mapState({
      height: (state) => state.main.ui.viewPort.height
    })
  },
  methods: {
    goToNextSlide() {
      const currScene = this.inWhichSceneIAm
      const sLimits = this.scrollOffsetLimitsByScene(currScene + 1)
      const sDuration = this.getSceneScrollOffset(currScene + 1)
      scrollTo(0, sLimits[0] + this.height * 2)
    },
  },
}
</script>
