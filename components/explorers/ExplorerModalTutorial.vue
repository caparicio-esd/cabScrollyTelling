<template>
  <div class="explorer_modal_tutorial" v-if="state.opened">
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
import { mapActions } from 'vuex'
import ExplorerModalTutorialStep from './ExplorerModalTutorialStep.vue'

export default Vue.extend({
  components: { ExplorerModalTutorialStep },
  name: 'ExplorerModalTutorial',
  data() {
    return {
      state: {
        current: 0,
        opened: true,
      },
      steps: [
        {
          description: {
            step: '1/3',
            content:
              'Puedes navegar entre las diferentes misiones, haciendo click en los iconos, simplemente, haciendo scroll hacia abajo.',
          },
          component: {
            dom: null as Element | null,
            origin: ["top", "left"],
            direction: ["bottom", "right"]
          },
        },
        {
          description: {
            step: '2/3',
            content:
              'Puedes viajar a diferentes años consultando la línea de tiempo',
          },
          component: {
            dom: null as Element | null,
            origin: ["top", "left"],
            direction: ["bottom", "right"]
          },
        },
        {
          description: {
            step: '3/3',
            content:
              'Puedes saltarte esta sección e ir directamente a ver las misiones donde está el CAB participando',
          },
          component: {
            dom: null as Element | null,
            origin: ["top", "left"],
            direction: ["top", "right"]
          },
        },
      ],
    }
  },
  methods: {
    ...mapActions({
      setTutorial: 'main/setTutorial', 
      setScrollable: 'main/setScrollable'
    }),
    setCurrentStep(direction: string): void {
      if (direction == 'next' && this.state.current < this.steps.length - 1) {
        this.state.current++
      } else {
        this.state.current = -1
        this.state.opened = false
        this.setTutorial(false)
        this.setScrollable(true)
        document.body.style.overflow = ""
      }
    },
    setStepDomElements() {
      const overlay = document.querySelector(
        '.explorer_modal_tutorial .overlay'
      )
      const firstExplorer = document.querySelector('.explorers .explorer')
      const timeLine = document.querySelector('.explorer_timeline')

      this.steps[0].component.dom = overlay
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
