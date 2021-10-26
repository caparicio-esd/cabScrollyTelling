<template>
  <a class="resource" href="/docs/El_murmullo_de_Marte_Ricardo_Horcajada.docx">
    <ph-file :size="32" />
    <div class="txt_box">
      <div class="title">El murmullo de marte</div>
      <div class="author">Ricardo Horcajada</div>
    </div>
  </a>
</template>

<script>
import Vue from 'vue'
//@ts-ignore
import { PhFile } from 'phosphor-vue'
export default {
  components: {
    PhFile
  },
}
</script>

<style lang="postcss" scoped>
.resource{
  @apply flex p-2 m-2 rounded-md block box-border;
  transition: all 350ms ease;
  &:hover {
    @apply ring-white ring-4 ring-opacity-40;
    border: 3px solid transparent;
  }
  .txt_box{
    @apply mx-2;
    .title{
      font-weight: bold;
      font-style: italic;
    }
    .author{
      font-size: 0.9em;
    }
  }

}

</style>
