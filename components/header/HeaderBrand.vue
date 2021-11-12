<template>
  <div class="header_brand">
    <div class="header_holder xl:container xl:m-auto py-2">
      {{ getTitleByScene(inWhichSceneIAm) }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'HeaderBrand',
  computed: {
    ...mapGetters({
      inWhichSceneIAm: 'main/inWhichSceneIAm',
      getTitleByScene: 'data/getTitleByScene',
    }),
  },
})
</script>

<style lang="postcss" scoped>
.header_brand {
}
</style>
