
<template>
  <section class="section min-h-screen bg-black text-white">
    <div class="section_holder">
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
