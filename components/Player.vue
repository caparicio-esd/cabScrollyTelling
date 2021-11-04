<template>
  <a class="player" target="_blank" :href="player.url">
    <ph-play-circle :size="32" />
    <div class="txt_box">
      <div class="title">{{player.title}}</div>
      <div class="author">{{player.author}}</div>
    </div>
  </a>
</template>

<script>
import Vue from 'vue'
//@ts-ignore
import { PhPlayCircle } from 'phosphor-vue'
export default {
  components: {
    PhPlayCircle
  },
  props: ['player']
}
</script>

<style lang="postcss" scoped>
.player{
  @apply p-2 m-2 rounded-md flex box-border;
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
