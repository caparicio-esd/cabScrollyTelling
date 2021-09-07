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
          component: null,
        },
        {
          description: {
            step: '2/3',
            content:
              'Puedes viajar a diferentes años consultando la línea de tiempo',
          },
          component: null,
        },
        {
          description: {
            step: '3/3',
            content:
              'Puedes saltarte esta sección e ir directamente a ver las misiones donde está el CAB participando',
          },
          component: null,
        },
      ],
    }
  },
  methods: {
    setCurrentStep(direction: string): void {
      if (direction == 'next' && this.state.current < this.steps.length-1) {
        this.state.current++
      } else {
        this.state.current = -1
        this.state.opened = false
      }
    },
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
