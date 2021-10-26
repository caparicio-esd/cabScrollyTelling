import anime, { AnimeTimelineInstance, stagger } from "animejs";
import Vue from "vue";
import Scrollable from "./Scrollable";

export default Vue.extend({
    mixins: [Scrollable],
    data() {
        return {
            refDom: null as HTMLElement | null,
            animation: {} as AnimeTimelineInstance
        }
    },
    methods: {
        onEnterScene(ev: any) {
            //const title = (this.refDom as HTMLElement).querySelector("h2")
            //const paragraphs = (this.refDom as HTMLElement).querySelectorAll("p")
            //const logos = (this.refDom as HTMLElement).querySelector(".logos")

            const title = "h2";
            const paragraphs = "p";
            const logos = ".logos";
            const btnext = ".btn_next";
            const resources = ".resource";
            const machine = ".machine_icon";

            anime.set([title, paragraphs, logos, btnext, resources], {
                opacity: 0,
                translateY: 50
            })

            this.animation = anime.timeline({
                delay: 1000,
                endDelay: 1000,
                autoplay: false
            })
            .add({
                targets: [title],
                translateY: [50, 0],
                opacity: [0, 100]
            }, "-300")
            .add({
                targets: [paragraphs],
                translateY: [50, 0],
                opacity: [0, 100],
            }, "-200")
            .add({
                targets: [logos],
                translateY: [50, 0],
                opacity: [0, 100]
            }, "-100")
            .add({
              targets: [btnext, resources, machine],
              translateY: [50, 0],
              opacity: [0, 100]
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
