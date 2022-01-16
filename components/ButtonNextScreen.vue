<template>
  <button
    class="btn_nxt"
    :style="[{ position: position || '' }]"
    @click="goToNextSlide"
  >
    <span class="caret"></span>
    <span class="txt">SCROLL</span>

    <!-- <ph-arrow-down :size="20" /> -->
  </button>
</template>

<script>
import Vue from 'vue'
//@ts-ignore
import { PhArrowDown } from 'phosphor-vue'
import { mapGetters, mapState } from 'vuex'
import anime from 'animejs'

export default {
  components: {
    PhArrowDown,
  },
  props: ['position'],
  computed: {
    ...mapGetters({
      inWhichSceneIAm: 'main/inWhichSceneIAm',
      scrollOffsetLimitsByScene: 'main/scrollOffsetLimitsByScene',
      getSceneScrollOffset: 'main/getSceneScrollOffset',
    }),
    ...mapState({
      height: (state) => state.main.ui.viewPort.height,
    }),
  },
  methods: {
    goToNextSlide() {
      const currScene = this.inWhichSceneIAm
      const sLimits = this.scrollOffsetLimitsByScene(currScene + 1)
      anime({
        targets: { y: window.pageYOffset },
        y: sLimits[0] + this.height * 2,
        duration: 2500,
        easing: 'easeInOutCubic',
        update: ({ animations }) => {
          scrollTo(0, animations[0].currentValue)
        },
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
/* button.btn_primary {
  @apply font-sans;
  pointer-events: initial;
} */

button.btn_nxt {
  position: absolute;
  bottom: 70px;
  left: 50%;
  .caret {
    position: absolute;
    left: 50%;
    top: 20px;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb05 1.5s infinite;
    animation: sdb05 1.5s infinite;
    box-sizing: border-box;
  }

}

@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}

</style>
