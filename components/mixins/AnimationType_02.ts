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
            const background = (this.$refs.section as HTMLElement).querySelector("img")
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
        },
        onProgressScene(ev: any) {
            this.animation.seek(ev.progress * this.animation.duration)
        },
    },
});
