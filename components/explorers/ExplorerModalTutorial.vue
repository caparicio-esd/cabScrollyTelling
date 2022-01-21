<template>
  <div class="explorer_modal_tutorial" v-if="tutorial">
    <div class="overlay"></div>
    <div class="steps">
      <explorer-modal-tutorial-step
        v-for="(step, i) in steps"
        :current="currentStep == i"
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
      currentStep: 0,
      steps: steps,
      tutorialThreeshold: 0.3,
      innerProgress: 0,
    }
  },
  computed: {
    ...mapGetters({
      scrollOffsetLimitsByScene: 'main/scrollOffsetLimitsByScene',
      getViewportSizes: 'main/getViewportSizes',
      getScroll: 'main/getScroll',
    }),
    ...mapState({
      tutorial: (state) => state.main.scenes.tutorial,
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
        this.setStepDomElements()
        this.$parent.duration = this.$parent.duration + 400
      } else {
        this.setTutorial(false)
      }
    },
    setCurrentStep(direction) {
      const index = this.$parent.index
      const viewPort = this.getViewportSizes.height
      const bounds = this.scrollOffsetLimitsByScene(index)
      const diff = (bounds[1] - bounds[0]) * this.tutorialThreeshold
      const cBounds = [
        bounds[0] + viewPort * 2,
        bounds[0] + viewPort * 2 + diff,
      ]
      const cDiff = cBounds[1] - cBounds[0]
      const diffBounds = [...Array(this.steps.length).keys()].map(
        (i) => i * cDiff + cBounds[0]
      )
      const viz =
        bounds[1] -
        (bounds[1] - (bounds[0] + viewPort)) * this.tutorialThreeshold

      // navigation
      if (
        direction == 'next' &&
        this.currentStep >= 0 &&
        this.currentStep <= this.steps.length
      ) {
        this.currentStep++
        this.setTutorial(true)
        scrollBy(0, cDiff / this.steps.length + 1)
      } else {
        this.currentStep = -1
        this.setTutorial(false)
        scrollTo(0, viz)
      }
      // localstorage
      if (direction == 'none') {
        this.setTutorial(false)
        this.$parent.duration = this.$parent.duration - 400
        scrollTo(0, viz)
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
    if (this.tutorial) {
      this.initTutorial()
    }
  },
  watch: {
    getScroll() {
      const index = this.$parent.index
      const viewPort = this.getViewportSizes.height
      const bounds = this.scrollOffsetLimitsByScene(index)
      const diff = (bounds[1] - bounds[0]) * this.tutorialThreeshold
      const cBounds = [
        bounds[0] + viewPort * 2,
        bounds[0] + viewPort * 2 + diff,
      ]
      const progress = (this.getScroll - cBounds[0]) / (cBounds[1] - cBounds[0])
      this.innerProgress = progress
    },
    innerProgress(progress) {
      const whereTo = Math.floor(progress * this.steps.length)
      if (whereTo <= this.steps.length - 1) {
        this.currentStep = Math.floor(progress * this.steps.length)
        this.setTutorial(true)
      } else {
        this.currentStep = -1
        this.setTutorial(false)
      }
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
