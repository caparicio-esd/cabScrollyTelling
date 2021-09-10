import Vue from "vue";
import anime from "animejs";

export default Vue.extend({
    data() {
        return {
            animation: {},
            subscene: [],
        }
    },
    methods: {
        setSceneScrollable(ref:any) {
            const ScrollMagic = require('scrollmagic')
            //@ts-ignore
            this.animation = anime({})
            //@ts-ignore
            this.subscene[0] = new ScrollMagic.Scene({
                triggerElement: ref.constructor === Object ? ref.section : ref[0],
                duration: '100%',
                triggerHook: 'onLeave',
            })
                .setPin(ref.constructor === Object ? ref.section : ref[0])
                .addIndicators()
                .on('progress', (ev: Event) => {
                    // this.animation.seek(ev.progress * this.animation.duration)
                })

            this.$root.$emit('scene_created', this.subscene[0])
        },
    },
});
