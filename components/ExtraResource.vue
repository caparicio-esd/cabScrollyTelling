<template>
  <a class="resource" :href="resource.url" :target="resource.target ? '_blank' : '_self'">
    <ph-file-pdf :size="32" v-if="resource.icon == 'file-pdf'"/>
    <ph-file :size="32" v-if="resource.icon == 'file'"/>
    <ph-link :size="32" v-if="resource.icon == 'link'"/>
    <div class="txt_box">
      <div class="title">{{resource.title}}</div>
      <div class="author">{{resource.author}}</div>
    </div>
  </a>
</template>

<script>
import Vue from 'vue'
//@ts-ignore
import { PhFile, PhFilePdf, PhLink } from 'phosphor-vue'
export default {
  components: {
    PhFile,
    PhFilePdf,
    PhLink
  },
  props: ['resource']
}
</script>

<style lang="postcss" scoped>
.resource{
  @apply p-2 m-2 rounded-md flex box-border;
  transition: all 350ms ease;
  &:hover {
    @apply ring-white ring-4 ring-opacity-40;
    border: 3px solid transparent;
  }
  &.dark:hover{
    @apply ring-black ring-opacity-40;
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
