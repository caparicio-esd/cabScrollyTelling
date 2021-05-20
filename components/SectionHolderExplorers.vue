
<template>
  <section class="section min-h-screen bg-gray-800 text-white">
    <div class="section_holder xl:container xl:m-auto min-h-screen py-20 ">
        <explorers />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Explorers from '~/components/explorers/Explorers.vue'

export default Vue.extend({
    name: "SectionHolderExplorers", 
    components: {
      Explorers,
    }
})
</script>

<style lang="postcss">
.section {
  background-image: url("/img/000010 1.webp");
  background-size: cover;
  background-position: center center;
}
</style>
