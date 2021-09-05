<template>
  <div class="wrapper">
    <head-default />
    <main-scroll-controller>
      <main>
        <!-- ============================== -->
        <!-- 01 section welcome -->
        <!-- ============================== -->
        <section-holder-default>
          <section-welcome-01 />
        </section-holder-default>

        <!-- ============================== -->
        <!-- 02 section intro misions -->
        <!-- ============================== -->
        <section-holder-default>
          <section-misions-02 />
        </section-holder-default>

        <!-- ============================== -->
        <!-- 03 section Histórico de misiones -->
        <!-- ============================== -->
        <section-holder-default>
          <section-intro-explorers-03 />
        </section-holder-default>
        <!-- ============================== -->
        <!-- 03 section navegador histórico de misiones -->
        <!-- ============================== -->
        <section-holder-explorers />

        <!-- ============================== -->
        <!-- 04 section Las máquinas son los nuevos exploradores -->
        <!-- ============================== -->
        <section-holder-default>
          <section-intro-machines-04 />
        </section-holder-default>
        <!-- ============================== -->
        <!-- section máquinas CAB -->
        <!-- ============================== -->
        <!--  -->
        <section-holder-machines />
        <!-- <section-machine /> -->
        <!-- </section-holder-machines> -->
        <!--  -->
        <!-- ============================== -->
        <!-- sección volviendo a la tierra -->
        <!-- ============================== -->
        <section-holder-default>
          <section-intro-explorers-03 />
          <section-intro-explorers-03 />
          <section-intro-explorers-03 />
        </section-holder-default>
        <!-- ============================== -->
        <!-- sección en el CAB -->
        <!-- ============================== -->
        <section-holder-default>
          <section-intro-explorers-03 />
          <section-intro-explorers-03 />
        </section-holder-default>
        <!-- ============================== -->
        <!-- sección créditos y links -->
        <!-- ============================== -->
        <section-holder-default>
          <section-intro-explorers-03 />
        </section-holder-default>
        <section-holder-default>
          <section-intro-explorers-03 />
        </section-holder-default>
      </main>
    </main-scroll-controller>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionHolderDefault from '~/components/SectionHolderDefault.vue'
import SectionHolderExplorers from '~/components/SectionHolderExplorers.vue'
import SectionHolderMachines from '~/components/SectionHolderMachines.vue'
import HeadDefault from '~/components/HeadDefault.vue'
import SectionWelcome01 from '~/components/sections/01_sectionWelcome.vue'
import SectionMisions02 from '~/components/sections/02_sectionIntroMisions.vue'
import SectionIntroExplorers03 from '~/components/sections/03_sectionExplorersHome.vue'
import SectionIntroMachines04 from '~/components/sections/04_sectionIntroMachines.vue'
import MainScrollController from '~/components/MainScrollController.vue'

export default Vue.extend({
  components: {
    SectionHolderDefault,
    SectionHolderExplorers,
    SectionHolderMachines,
    HeadDefault,
    SectionWelcome01,
    SectionMisions02,
    SectionIntroExplorers03,
    SectionIntroMachines04,
    MainScrollController,
  },
})
</script>
