<template>
  <div class="wrapper">
    <head-default />
    <main>
      <!-- ============================== -->
      <!-- section welcome -->
      <!-- ============================== -->
      <section-holder-default>
        <section-welcome-01 />
      </section-holder-default>
      <!-- ============================== -->
      <!-- section exploradores son las nuevas máquinas -->
      <!-- ============================== -->
      <section-holder-default>
        <section-welcome-02 />
      </section-holder-default>
      <!-- ============================== -->
      <!-- section navegador histórico de máquinas -->
      <!-- ============================== -->
      <section-holder-explorers>...cab...</section-holder-explorers>
      <!-- ============================== -->
      <!-- section final exploradores -->
      <!-- ============================== -->
      <section-holder-default>
        <section-welcome-02 />
      </section-holder-default>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionHolderDefault from '~/components/SectionHolderDefault.vue'
import SectionHolderExplorers from '~/components/SectionHolderExplorers.vue'
import HeadDefault from '~/components/HeadDefault.vue'
import SectionWelcome01 from '~/components/sections/01_sectionWelcome.vue'
import SectionWelcome02 from '~/components/sections/02_sectionExplorersHome.vue'

export default Vue.extend({
  components: {
    SectionHolderDefault,
    SectionHolderExplorers,
    HeadDefault,
    SectionWelcome01,
    SectionWelcome02,
  },
})
</script>
