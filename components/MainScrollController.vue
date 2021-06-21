<template>
  <div class="main_scroll_controller">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      controller: {},
    }
  },
  async mounted() {
    this.createController()
  },
  methods: {
    createController() {
      const ScrollMagic = require('scrollmagic')
      const ScrollMagicPluginIndicator = require('scrollmagic-plugins').ScrollMagicPluginIndicator
      ScrollMagicPluginIndicator(ScrollMagic)
      this.controller = new ScrollMagic.Controller({ addIndicators: true })
      this.$root.$emit('controller_created', this.controller)
      //@ts-ignore
      this.$root.$on('scene_created', (scene) => {
        //@ts-ignore
        this.controller.addScene(scene)
      })
    },
  },
})
</script>
