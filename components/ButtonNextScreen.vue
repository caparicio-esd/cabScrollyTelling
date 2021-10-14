<template>
  <button
    @click="$emit('goNextSlide')"
    class="btn_primary btn_next">
          <span>CONTINUAR</span>
          <ph-arrow-down :size="20" />
        </button>
</template>

<script>
import Vue from 'vue'
//@ts-ignore
import { PhArrowDown } from 'phosphor-vue'
export default {
  components: {
    PhArrowDown
  },
}
</script>

