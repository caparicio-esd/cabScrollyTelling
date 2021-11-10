<template>
  <div class="explorer_modal_tutorial" v-if="state.opened && !debug">
    <div class="overlay"></div>
    <div class="steps">
      <explorer-modal-tutorial-step
        v-for="(step, i) in steps"
        :current="state.current == i"
        :key="i"
        :description="step.description"
        :component="step.component"
        v-on:setCurrentStep="setCurrentStep"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import ExplorerModalTutorialStep from './ExplorerModalTutorialStep.vue'
import steps from './ExploreModalTutorial.model'

export default Vue.extend({
  components: { ExplorerModalTutorialStep },
  name: 'ExplorerModalTutorial',
  data() {
    return {
      state: {
        current: 0,
        opened: true,
      },
      steps: steps,
    }
  },
  computed: {
    ...mapState({
      debug: (state: any) => state.explorers.debug,
    }),
  },
  methods: {
    ...mapActions({
      setTutorial: 'main/setTutorial',
      setScrollable: 'main/setScrollable',
    }),
    setCurrentStep(direction: string): void {
      if (!this.debug) {
        if (direction == 'next' && this.state.current < this.steps.length - 1) {
          this.state.current++
        } else {
          this.state.current = -1
          this.state.opened = false
          this.setTutorial(false)
          this.setScrollable(true)
          document.body.style.overflow = ''
        }
      }
    },
    setStepDomElements() {
      const header = document.querySelector('.header')
      const firstExplorer = document.querySelector('.explorers .explorer')
      const timeLine = document.querySelector('.explorer_timeline')
      this.steps[0].component.dom = header
      this.steps[1].component.dom = firstExplorer
      this.steps[2].component.dom = timeLine
    },
  },
  async mounted() {
    await this.$nextTick()
    this.setStepDomElements()
  },
})
</script>

<style lang="postcss" scoped>
.explorer_modal_tutorial {
  @apply absolute z-10 top-0 h-full w-full left-0;
  .overlay {
    @apply absolute z-10 top-0 h-full w-full left-0 bg-black opacity-90;
  }
}
</style>
