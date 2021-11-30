<template>
  <div
    class="tick_area"
    @click.stop="clickHndlr"
    :style="{ ...style_ }"
  >
    <div
      :class="[
        `tick_item`,
        openedId == index ? `tick_item_active` : ``,
        focusedId == index ? `tick_item_focused` : ``,
        focusedId != index && focusedId >= 0 ? `tick_item_unfocused` : ``,
        mustBeLight ? 'lightTheme' : '',
        index == 0 ? 'inicio' : ''
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Tick',
  props: [
    'active',
    'focusedId',
    'index',
    'openedId',
    'style_',
    'clickHndlr',
    'mustBeLight',
  ],
})
</script>

<style lang="postcss" scoped>
.tick_area {
  @apply absolute top-1/2 w-8 h-8 cursor-pointer;
  pointer-events: initial;
  &:hover {
    .tick_item {
      @apply ring-white ring-4 ring-opacity-40;
      border: 3px solid transparent;
      transition: all 350ms ease;
    }
  }
}
.tick_item {
  @apply absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white;
  @apply ring-white ring-0 ring-opacity-50;
  pointer-events: initial;
  transition: all 350ms ease;
  background-clip: padding-box;
  border: 3px solid white;
  transform: translate(-50%, -50%);

  &.tick_item_active {
    @apply ring-white ring-8 ring-opacity-40;
    border: 3px solid transparent;
    transition: all 350ms ease;
  }
  &.tick_item_focused,
  &:hover {
    @apply ring-white ring-4 ring-opacity-40;
    border: 3px solid transparent;
    transition: all 350ms ease;
  }
  &.tick_item_unfocused {
    background-color: rgba(255, 255, 255, 0.6);
    border: 3px solid rgba(255, 255, 255, 0.6);
    transition: all 350ms ease;
  }

  &.lightTheme {
    @apply bg-gray-700 ring-gray-500;
    &.tick_item_active {
      @apply ring-gray-500;
      opacity: .8;
    }
    &.tick_item_focused,
    &:hover {
      @apply ring-gray-500;
      opacity: .8;
    }
    &.tick_item_unfocused {
      background-color: rgba(0, 0, 0, 0.2);
      border: 3px solid rgba(0, 0, 0, 0.2);
    }
  }
  &.inicio{
    left: 10px;
  }
}
</style>
