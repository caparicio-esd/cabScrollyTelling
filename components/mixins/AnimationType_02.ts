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

            //@ts-ignore
            const dom = this.refDom
            if (!dom) return false

            const background = (this.$refs.section as HTMLElement).querySelector("img");
            const paragraphs = dom.querySelectorAll("p");

            if (ev.scrollDirection == "FORWARD") {
              anime.set([paragraphs], {
                  opacity: 0,
                  translateY: 50
              })
            }

            this.animation = anime.timeline({
                delay: 0,
                endDelay: 0,
                autoplay: false,
                easing: "linear"
            })
                .add({
                    targets: [background],
                    scale: [1, 2]
                }, "0")
                .add({
                  targets: [paragraphs],
                  translateY: [50, 0],
                  opacity: [0, 100]
              }, "-300")
        },
        onProgressScene(ev: any) {
            this.animation.seek(ev.progress * this.animation.duration)
        },
        setUpComponent() {
          //@ts-ignore
          const dom = this.refDom
          if (!dom) return false

          const paragraphs = dom.querySelectorAll("p");

          anime.set([...paragraphs], {
              opacity: 0,
              translateY: 50
          })
      }
    },
});
