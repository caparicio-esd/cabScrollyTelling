<template>
  <div class="explorer_modal_tutorial_step" v-if="current" :style="style" ref="step">
    <div class="explorer_modal_tutorial_step_holder">
      <div class="explorer_modal_tutorial_step_body">
        <div class="step">{{ description.step }}</div>
        <div class="content">{{ description.content }}</div>
      </div>
      <div class="explorer_modal_tutorial_step_cta">
        <button class="nobg" @click="$emit('setCurrentStep', 'none')">
          No mostrar
        </button>
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
  data() {
    return {
      style: {
        top: "0", 
        left: "0", 
        position: "static", 
        transform: "", 
      } as CSSStyleDeclaration,
    }
  },
  components: {
    PhArrowRight,
  },
  methods: {
    placeElement() {
      const left = 0 + 
        ((this.component.direction[1] == "left") ? -1 : 1 ) * 16 +
        this.component.dom?.offsetLeft + 
        ((this.component.direction[1] == "left") ? (this.$refs.step as HTMLElement)?.offsetWidth * -1 || 0 : 0) +
        ((this.component.origin[1] == "left") ? 0 : this.component.dom?.offsetWidth) 

      const top = 0 + 
        ((this.component.direction[0] == "top") ? -1 : 1 ) * 16 +
        this.component.dom?.offsetTop + 
        ((this.component.direction[0] == "top") ? (this.$refs.step as HTMLElement)?.offsetHeight * -1 || 0 : 0) +
        ((this.component.origin[0] == "top") ? 0 : this.component.dom?.offsetHeight) 
      
      this.style.position = 'absolute'     
      this.style.transform = `translate(${left}px, ${top}px)`
    },
  },
  async mounted() {
    await this.$nextTick()
    this.placeElement()
  },
  updated() {
    this.placeElement()
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
