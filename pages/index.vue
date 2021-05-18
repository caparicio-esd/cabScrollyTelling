<template>
  <div class="wrapper">
    <head-default />
    <main>
      <section-holder-default>
        <section-welcome-01 />
      </section-holder-default>
      <section-holder-default>cab...</section-holder-default>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionHolderDefault from '~/components/SectionHolderDefault.vue'
import HeadDefault from '~/components/HeadDefault.vue'
import SectionWelcome01 from '~/components/sections/01_sectionWelcome.vue'

export default Vue.extend({
  components: {
    SectionHolderDefault,
    HeadDefault,
    SectionWelcome01,
  },
})
</script>

<style lang="postcss">
.wrapper {
  scroll: auto;
}
</style>
