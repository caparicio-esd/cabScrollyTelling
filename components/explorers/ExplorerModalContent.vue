<template>
    <div class="explorer_modal_content">
        <h3>{{activeContent.title}}</h3>
        <p>{{activeContent.year}}</p>
        {{activeContent.position}}
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'ExplorerModalContent', 
    props: ['activeContent']    
})
</script>
<style lang="postcss" scoped>

</style>