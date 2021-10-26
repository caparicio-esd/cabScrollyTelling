<template>
  <a class="resource" :href="resource.url">
    <ph-file :size="32" />
    <div class="txt_box">
      <div class="title">{{resource.title}}</div>
      <div class="author">{{resource.author}}</div>
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
  props: ['resource']
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
