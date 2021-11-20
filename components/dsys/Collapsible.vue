<template>
  <div :class="['collapsible', { collapsible_closed: !blockOpened }]">

    <div class="collapsible_handle" @click="toggleCollapsible">
      <div class="collapsible_handle_icon">
        <ph-caret-right :size="20" :weight="'bold'" />
      </div>
      <div class="collapsible_handle_label">
        <slot name="handler" />
      </div>
    </div>

    <div
      class="collapsible_content"
      ref="content"
      :style="{ height: `${height}px` }"
    >
      <div class="collapsible_content_holder">
        <slot name="content" />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
//@ts-ignore
import { PhCaretRight } from 'phosphor-vue'
import Vue from 'vue'
export default Vue.extend({
  components: { PhCaretRight },
  name: 'Collapsible',
  props: ['opened'],
  data() {
    return {
      toggled: false,
      height: 0,
    }
  },
  methods: {
    toggleCollapsible() {
      (this as any).toggled = !(this as any).toggled;
    },
    calculateHeight() {
      const contentBlock = this.$refs.content
      const contentHolder = (contentBlock as HTMLElement).querySelector(
        '.collapsible_content_holder'
      )
      const size: number | undefined =
        contentHolder?.getBoundingClientRect().height
      ;(this as any).height = (this as any).blockOpened ? size : 0
    },
  },
  computed: {
    blockOpened() {
      return !(this as any).toggled ? this.opened : !this.opened
    },
  },
  updated() {
    ;(this as any).calculateHeight()
  },
  mounted() {
    ;(this as any).calculateHeight()
  },
})
</script>

<style lang="postcss" scoped>
.collapsible {
  .collapsible_handle {
    @apply flex items-center font-bold py-2 cursor-pointer;
    margin-left: -0.25rem;
    .collapsible_handle_icon {
      @apply mr-2;
    }
    .collapsible_handle_label {
    }
  }
  .collapsible_content {
    @apply transition-all px-6;
    display: block;
    ul {
      list-style: initial;
      margin: initial;
      padding: initial;
    }
  }
  &.collapsible_closed {
    .collapsible_content {
      @apply h-0 transition-all;
      display: none;
    }
  }
}
</style>
