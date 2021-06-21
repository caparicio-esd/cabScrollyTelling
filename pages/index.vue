<template>
  <div class="wrapper">
    <head-default />
    <main-scroll-controller>
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
        <section-holder-explorers />
        <!-- ============================== -->
        <!-- section final exploradores -->
        <!-- ============================== -->
        <section-holder-default>
          <section-welcome-02 />
        </section-holder-default>
        <!-- ============================== -->
        <!-- section máquinas CAB -->
        <!-- ============================== -->
        <!--  -->
        <!-- <section-holder-machines> -->
        <!-- <section-machine /> -->
        <!-- </section-holder-machines> -->
        <!--  -->
        <!-- ============================== -->
        <!-- sección volviendo a la tierra -->
        <!-- ============================== -->
        <section-holder-default>
          <section-welcome-02 />
          <section-welcome-02 />
          <section-welcome-02 />
        </section-holder-default>
        <!-- ============================== -->
        <!-- sección en el CAB -->
        <!-- ============================== -->
        <section-holder-default>
          <section-welcome-02 />
          <section-welcome-02 />
        </section-holder-default>
        <!-- ============================== -->
        <!-- sección créditos y links -->
        <!-- ============================== -->
        <section-holder-default>
          <section-welcome-02 />
        </section-holder-default>
        <section-holder-default>
          <section-welcome-02 />
        </section-holder-default>
      </main>
    </main-scroll-controller>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionHolderDefault from '~/components/SectionHolderDefault.vue'
import SectionHolderExplorers from '~/components/SectionHolderExplorers.vue'
import HeadDefault from '~/components/HeadDefault.vue'
import SectionWelcome01 from '~/components/sections/01_sectionWelcome.vue'
import SectionWelcome02 from '~/components/sections/02_sectionExplorersHome.vue'
import MainScrollController from '~/components/MainScrollController.vue'

export default Vue.extend({
  components: {
    SectionHolderDefault,
    SectionHolderExplorers,
    HeadDefault,
    SectionWelcome01,
    SectionWelcome02,
    MainScrollController,
  },
})
</script>
