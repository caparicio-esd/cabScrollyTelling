import anime, { AnimeTimelineInstance, stagger } from "animejs";
import Vue from "vue";
import Scrollable from "./Scrollable";

export default Vue.extend({
    mixins: [Scrollable],
    data() {
        return {
            // refDom: null as HTMLElement | null,
            animation: {} as AnimeTimelineInstance
        }
    },
    methods: {
        onEnterScene(ev: any) {
            //@ts-ignore
            const dom = this.refDom
            if (!dom) return false

            const title = dom.querySelectorAll("h2");
            const paragraphs = dom.querySelectorAll("p, .with-ul");
            const logos = dom.querySelectorAll(".logos");
            const btnext = dom.querySelectorAll(".btn_next");
            const resources = dom.querySelectorAll(".resource");
            const machineIcon = dom.querySelectorAll(".machine_icon");
            const machine = dom.querySelectorAll(".machine");

            if (ev.scrollDirection == "FORWARD") {                
                anime.set([title, paragraphs, logos, btnext, resources], {
                    opacity: 0,
                    translateY: 50
                })
            } 

            this.animation = anime.timeline({
                delay: 500,
                endDelay: 500,
                autoplay: false, 
                direction: ev.scrollDirection !== "REVERSE" ? "normal" : "reverse", 
                easing: "easeInOutCubic"
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
                    targets: [btnext, resources, machine, machineIcon],
                    translateY: [50, 0],
                    opacity: [0, 100]
                }, "0")


        },
        onLeaveScene(ev: any) {
            this.animation.pause()
            this.animation = {} as AnimeTimelineInstance
        },
        onProgressScene(ev: any) {
            this.animation.seek(ev.progress * this.animation.duration)
        },
        setUpComponent() {
            //@ts-ignore
            const dom = this.refDom            
            if (!dom) return false
            
            const title = dom.querySelectorAll("h2");
            const paragraphs = dom.querySelectorAll("p, .with-ul");
            const logos = dom.querySelectorAll(".logos");
            const btnext = dom.querySelectorAll(".btn_next");
            const resources = dom.querySelectorAll(".resource");
            const machineIcon = dom.querySelectorAll(".machine_icon");
            const machine = dom.querySelectorAll(".machine");

            anime.set([...title, ...paragraphs, ...logos, ...btnext, ...resources], {
                opacity: 0,
                translateY: 50
            })
        }
    },
    async mounted() {
        await this.$nextTick()
    }
});
