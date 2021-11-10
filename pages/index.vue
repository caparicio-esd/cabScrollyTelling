<template>
  <div class="wrapper">
    <head-default />
    <main-scroll-controller>
      <main>
        <!-- ============================== -->
        <!-- 01 section welcome -->
        <!-- ============================== -->
        <section-holder-default>
          <section-welcome-01 :index="0" />
        </section-holder-default>

        <!-- ============================== -->
        <!-- 02 section intro misions -->
        <!-- ============================== -->
        <section-holder-default>
          <section-misions-02 :index="1" />
        </section-holder-default>

        <!-- ============================== -->
        <!-- 03 section Histórico de misiones -->
        <!-- ============================== -->
        <section-holder-default>
          <section-intro-explorers-03 :index="2" />
        </section-holder-default>
        <!-- ============================== -->
        <!-- 03 section navegador histórico de misiones -->
        <!-- ============================== -->
        <section-holder-explorers :index="3" />

        <!-- ============================== -->
        <!-- 04 section Las máquinas son los nuevos exploradores -->
        <!-- ============================== -->
        <section-holder-default>
          <section-intro-machines-04 :index="4" />
        </section-holder-default>
        <!-- ============================== -->
        <!-- section máquinas CAB -->
        <!-- ============================== -->
        <!--  -->
        <section-holder-machines  />

        <!-- ============================== -->
        <!-- 04 section despedida máquinas, hola viaje a la tierra -->
        <!-- ============================== -->

        <section-holder-default>
          <section-farewell-machines-04 :index="8" />
        </section-holder-default>

        <!-- ============================== -->
        <!-- 05 sección volviendo a la tierra -->
        <!-- ============================== -->
        <section-holder-trip :index="9" />

        <!-- ============================== -->
        <!-- 06, 07 sección en el CAB -->
        <!-- ============================== -->
        <section-holder-cab>
          <section-cab-01 :index="10" />
          <section-cab-02 :index="11" />
        </section-holder-cab>
        <!-- ============================== -->
        <!-- 08, 09 sección créditos y links -->
        <!-- ============================== -->
        <section-holder-default>
          <section-credits :index="12" />
        </section-holder-default>
        <section-holder-default>
          <section-foot :index="13" />
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
import SectionFarewellMachines04 from '~/components/sections/04_sectionFarewellMachines.vue'
import SectionCab01 from '~/components/sections/06_sectionCab_01.vue'
import SectionCab02 from '~/components/sections/07_sectionCab_02.vue'
import SectionCredits from '~/components/sections/08_sectionEsd.vue'
import SectionFoot from '~/components/sections/09_sectionFoot.vue'
import MainScrollController from '~/components/MainScrollController.vue'
import SectionHolderCab from '~/components/SectionHolderCab.vue'

export default Vue.extend({
  components: {
    MainScrollController,
    HeadDefault,
    SectionHolderDefault,
    SectionHolderExplorers,
    SectionHolderMachines,
    SectionWelcome01,
    SectionMisions02,
    SectionIntroExplorers03,
    SectionIntroMachines04,
    SectionFarewellMachines04,
    SectionHolderTrip,
    SectionHolderCab,
    SectionCab01,
    SectionCab02,
    SectionCredits,
    SectionFoot,
  },
})
</script>
