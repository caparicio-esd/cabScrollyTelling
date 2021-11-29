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
            //@ts-ignore
            const duration = this.duration
            if (!dom) return false

            const background = (this.$refs.section as HTMLElement).querySelector("img");
            const quotes = dom.querySelectorAll(".quote");
            console.log(duration);

            this.animation = anime.timeline({
                delay: 100,
                endDelay: 100,
                autoplay: false,
                easing: "linear"
            })
                .add({
                    targets: quotes,
                    opacity: [0, 1, 1, 1, 0.5, 0.25, 0],
                    delay: anime.stagger((duration / 8) * 10)
                }, 0)
                .add({
                    targets: [background],
                    scale: [1, 2],
                    duration: duration * 10
                }, "-=" + duration * 10)
        },
        onProgressScene(ev: any) {
            this.animation.seek(ev.progress * this.animation.duration)
        },
        setUpComponent() {
            //@ts-ignore
            const dom = this.refDom
            if (!dom) return false
        }
    },
});
