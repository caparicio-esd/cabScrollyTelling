<template>
  <div class="main_scroll_controller">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  data() {
    return {
      controller: {} as any,
    }
  },
  async mounted() {
    this.createController()
  },
  methods: {
    ...mapActions({
      addScene: 'main/addScene',
    }),
    createController() {
      const ScrollMagic = require('scrollmagic')
      const ScrollMagicPluginIndicator =
        require('scrollmagic-plugins').ScrollMagicPluginIndicator
      ScrollMagicPluginIndicator(ScrollMagic)

      this.controller = new ScrollMagic.Controller({ addIndicators: false })
      this.$root.$emit('controller_created', this.controller)

      this.$root.$on('scene_created', (scene: any, index: number) => {
        this.controller.addScene(scene)
        this.addScene({ scene, index })
      })
    },
  },
})
/**  TODO: Add function to go next slide "goNextSlide" method */
</script>
