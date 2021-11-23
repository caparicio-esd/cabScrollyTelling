<template>
  <a class="resource" :href="resource.url" :target="resource.target ? '_blank' : '_self'">
    <ph-file-pdf class="primary_color" :size="32" v-if="resource.icon == 'file-pdf'"/>
    <ph-file class="primary_color" :size="32" v-if="resource.icon == 'file'"/>
    <ph-link class="primary_color" :size="32" v-if="resource.icon == 'link'"/>
    <ph-youtube-logo class="primary_color" :size="32" v-if="resource.icon == 'video'" />
    <div class="txt_box">
      <div class="title">{{resource.title}}</div>
      <div class="author">{{resource.author}}</div>
    </div>
  </a>
</template>

<script>
import Vue from 'vue'
//@ts-ignore
import { PhFile, PhFilePdf, PhLink, PhYoutubeLogo } from 'phosphor-vue'
export default {
  components: {
    PhFile,
    PhFilePdf,
    PhLink,
    PhYoutubeLogo
  },
  props: ['resource']
}
</script>

<style lang="postcss" scoped>
.resource{
  @apply p-2 m-4 rounded-md flex box-border;
  background: rgba(255,255,255,0.2);
  transition: all 350ms ease;
  &:hover {
    @apply ring-white ring-4 ring-opacity-40;
    //border: 3px solid transparent;
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
