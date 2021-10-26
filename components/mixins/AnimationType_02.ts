import anime, { AnimeTimelineInstance, stagger } from "animejs";
import Vue from "vue";
import Scrollable from "./Scrollable";

export default Vue.extend({
    mixins: [Scrollable],
    data() {
      return {
          animation: {} as AnimeTimelineInstance
      }
    },

    methods: {
      onEnterScene(ev: any) {


          const background = ".section_content .section_content_background img";

          anime.set([background], {
              height: '100%'
          })

          this.animation = anime.timeline({
              delay: 1000,
              endDelay: 1000,
              autoplay: false
          })
          .add({
              targets: [background],
              height: {
                value: '+=90%',
                easing: 'easeInOutSine'
              },
          }, "0")
      },
      onProgressScene(ev: any) {
          this.animation.seek(ev.progress * this.animation.duration)
      },
  },
  async mounted() {
      //await this.$nextTick()

  }



});
