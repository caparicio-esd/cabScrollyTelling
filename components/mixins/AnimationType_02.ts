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
            const quotes = dom.querySelectorAll(".quote") as HTMLElement[];
            anime.set(quotes, {
                visibility: "hidden"
            })
            anime.set(background, {
                filter: "filter: saturate(0.2)"
            })
            this.animation = anime.timeline({
                delay: 200,
                endDelay: 200,
                autoplay: false,
                easing: "linear"
            })
            quotes.forEach((quote: HTMLElement, i: number) => {
                this.animation.add({
                    targets: [quote],
                    opacity: [0, 1, 0],
                    easing: "easeInOutCirc",
                    duration: (duration / quotes.length) * 100,
                    begin() {
                        anime.set(quote, {
                            visibility: "visible"
                        })
                    },
                    complete() {
                        anime.set(quote, {
                            visibility: "hidden"
                        })
                    }
                }, "+=20")
            });
            this.animation.add({
                targets: [background],
                scale: [1, 2],
                duration: duration * 100,
                update(anim) {
                    background!.style.filter = `saturate(${0.2 + anim.progress / 90})`
                }
            }, "-=" + duration * 100)

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
