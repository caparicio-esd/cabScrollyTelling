<template>
  <div class="explorer_modal_tutorial_step" v-if="current">
    <div class="explorer_modal_tutorial_step_holder">
      <div class="explorer_modal_tutorial_step_body">
        <div class="step">{{ description.step }}</div>
        <div class="content">{{ description.content }}</div>
      </div>
      <div class="explorer_modal_tutorial_step_cta">
        <button class="nobg" @click="$emit('setCurrentStep', 'none')">No mostrar</button>
        <button @click="$emit('setCurrentStep', 'next')">
          <span>OK</span>
          <ph-arrow-right :size="20" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
//@ts-ignore
import { PhArrowRight } from 'phosphor-vue'

export default Vue.extend({
  name: 'ExplorerModalTutorialStep',
  props: ['description', 'component', 'current'],
  components: {
    PhArrowRight,
  },
})
</script>

<style lang="postcss" scoped>
.explorer_modal_tutorial_step {
  @apply absolute z-20 bg-gray-200 border-l-2 border-gray-400 p-8;
  @apply font-sans text-gray-900;
  max-width: 400px;

  .explorer_modal_tutorial_step_holder {
    .explorer_modal_tutorial_step_body {
      @apply mb-4;
      .step {
        @apply font-bold text-gray-500 mb-2;
      }
      .content {
        @apply font-bold;
      }
    }
    .explorer_modal_tutorial_step_cta {
      @apply flex items-center justify-end;

      button {
        @apply flex items-center py-2 px-4 bg-gray-400;
        svg {
          @apply ml-2;
        }
      }
      button.nobg {
        @apply bg-transparent text-gray-500;
      }
    }
  }
}
</style>
