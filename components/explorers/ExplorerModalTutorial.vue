<template>
  <div class="explorer_modal_tutorial" v-if="state.opened && showingTutorial">
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

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import ExplorerModalTutorialStep from './ExplorerModalTutorialStep.vue'
import steps from './ExploreModalTutorial.model'

export default {
  props: ['progress'],
  components: { ExplorerModalTutorialStep },
  name: 'ExplorerModalTutorial',
  data() {
    return {
      state: {
        current: 0,
        opened: true,
      },
      steps: steps,
      tutorialThreeshold: 0.5,
      showingTutorial: false,
    }
  },
  computed: {
    ...mapGetters({
      scrollOffsetLimitsByScene: 'main/scrollOffsetLimitsByScene',
    }),
  },
  methods: {
    ...mapActions({
      setTutorial: 'main/setTutorial',
      setScrollable: 'main/setScrollable',
    }),
    initTutorial() {
      const doNotShowTutorial = localStorage.getItem('cab_doNotShowTutorial')
      if (doNotShowTutorial == null || doNotShowTutorial == false) {
        this.showingTutorial = true
        this.setStepDomElements()
        this.$parent.duration = this.$parent.duration + 200
      }
    },
    setCurrentStep(direction) {
      const index = this.$parent.index
      const bounds = this.scrollOffsetLimitsByScene(index)
      const diff =
        ((bounds[1] - bounds[0]) * this.tutorialThreeshold) / this.steps.length
      const diffBounds = [...Array(this.steps.length).keys()].map(
        (i) => i * diff + bounds[0]
      )
      const viz = bounds[1] - (bounds[1] - bounds[0]) * this.tutorialThreeshold

      // navigation
      if (direction == 'next' && this.state.current < this.steps.length - 1) {
        this.state.current = this.state.current + 1
        scrollTo(0, diffBounds[this.state.current])
      } else {
        this.state.current = -1
        this.state.opened = false
        scrollTo(0, viz)
      }
      // localstorage
      if (direction == 'none') {
        this.showingTutorial = false
        localStorage.setItem('cab_doNotShowTutorial', true)
      }
    },
    setStepDomElements() {
      const header = document.querySelector('.header')
      const firstExplorer = document.querySelectorAll('.explorers .explorer')[1]
      const timeLine = document.querySelector('.explorer_timeline')
      this.steps[0].component.dom = header
      this.steps[1].component.dom = firstExplorer
      this.steps[2].component.dom = timeLine
    },
  },
  async mounted() {
    await this.$nextTick()
    this.initTutorial()
  },
  watch: {
    progress(currentProgress) {
      this.state.opened = currentProgress < this.tutorialThreeshold
      this.state.current = Math.floor(
        this.steps.length -
          (Math.max((this.tutorialThreeshold - currentProgress) * 200, 0) /
            100) *
            this.steps.length
      )
    },
  },
}
</script>

<style lang="postcss" scoped>
.explorer_modal_tutorial {
  @apply absolute z-10 top-0 h-full w-full left-0;
  .overlay {
    @apply absolute z-10 top-0 h-full w-full left-0 bg-black opacity-90;
  }
}
</style>
