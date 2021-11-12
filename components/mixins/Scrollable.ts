import Vue from "vue";
import anime from "animejs";

export default Vue.extend({
    data() {
        return {
            animation: {},
            subscene: [] as any[],
            refDom: null as HTMLElement | null,
            duration: 200,
            progress: 0
        }
    },
    methods: {
        setSceneScrollable(ref: any) {
            this.animation = anime({})
            this.setContainerScene(ref)
        },
        setContainerScene(ref: any) {
            const ScrollMagic = require('scrollmagic')
            this.subscene[0] = new ScrollMagic.Scene({
                triggerElement: ref.constructor === Object ? ref.section : ref[0],
                duration: this.duration + '%',
                triggerHook: 'onLeave',
            })
            this.subscene[0].setPin(ref.constructor === Object ? ref.section : ref[0])
            this.refDom = ref.constructor === Object ? ref.section : ref[0]
            this.$root.$emit('scene_created', this.subscene[0])
            

            this.subscene[0].on("start", (ev: any) => {
                this.onStartScene(ev);
            })
            this.subscene[0].on("end", (ev: any) => {
                this.onEndScene(ev);
            })
            this.subscene[0].on("enter", (ev: any) => {                
                this.onEnterScene(ev);
            })
            this.subscene[0].on("leave", (ev: any) => {
                this.onLeaveScene(ev);
            })
            this.subscene[0].on("progress", (ev: any) => {
                this.progress = ev.progress
                this.onProgressScene(ev);
            })
        },
        onEnterScene(ev: any) {

        },
        onLeaveScene(ev: any) {

        },
        onProgressScene(ev: any) {

        },
        onStartScene(ev: any) {

        },
        onEndScene(ev: any) {

        },
        setUpComponent() {

        }

        // addSubAnimations(scene: ScrollMagic.Scene) {
        //     this.subscene.push(scene)
        // }
    },
});
