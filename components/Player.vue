<template>
  <div class="player">
    <ph-play-circle :size="32" v-show="!isPlaying" @click="play(audio)"/>
    <ph-pause-circle :size="32" v-show="isPlaying" @click="pause(audio)" />
    <div class="txt_box">
      <div class="title">{{player.title}}</div>
      <div class="author">{{player.author}}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
//@ts-ignore
import { PhPlayCircle, PhPauseCircle } from 'phosphor-vue'
export default {
  data() {
    return {
      audio: '',
      isPlaying: false
    }
  },
  components: {
    PhPlayCircle,
    PhPauseCircle
  },
  props: ['player'],
  methods: {
    play (audio) {
      this.isPlaying = true;
      audio.play();
    },
    pause (audio) {
      this.isPlaying = false;
      audio.pause();
    }
  },
  mounted() {
    this.audio = new Audio(this.player.url);
  }
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
