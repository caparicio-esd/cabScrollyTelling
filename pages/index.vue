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

        <section-holder-default>
          <section-intro-explorers-03 />
        </section-holder-default>
        <!-- <section-machine /> -->
        <!-- </section-holder-machines> -->
        <!--  -->
        <!-- ============================== -->
        <!-- sección volviendo a la tierra -->
        <!-- ============================== -->
        <section-holder-trip />

        <!-- ============================== -->
        <!-- sección en el CAB -->
        <!-- ============================== -->
        <section-holder-cab>
          <section-cab-01 />
          <section-cab-02 />
        </section-holder-cab>
        <!-- ============================== -->
        <!-- sección créditos y links -->
        <!-- ============================== -->
        <section-holder-default>
          <section-credits />
        </section-holder-default>
        <section-holder-default>
          <section-foot />
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
import SectionHolderTrip from '~/components/SectionHolderTrip.vue'
import HeadDefault from '~/components/HeadDefault.vue'
import SectionWelcome01 from '~/components/sections/01_sectionWelcome.vue'
import SectionMisions02 from '~/components/sections/02_sectionIntroMisions.vue'
import SectionIntroExplorers03 from '~/components/sections/03_sectionExplorersHome.vue'
import SectionIntroMachines04 from '~/components/sections/04_sectionIntroMachines.vue'
import SectionCab01 from '~/components/sections/05_sectionCab_01.vue'
import SectionCab02 from '~/components/sections/05_sectionCab_02.vue'
import SectionCredits from '~/components/sections/06_sectionCredits.vue'
import SectionFoot from '~/components/sections/07_sectionFoot.vue'
import MainScrollController from '~/components/MainScrollController.vue'
import SectionHolderCab from '~/components/SectionHolderCab.vue'

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
    SectionHolderTrip,
    SectionHolderCab,
    SectionCab01,
    SectionCab02,
    SectionCredits,
    SectionFoot,
  },
})
</script>
