// used in machines modal component

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
            console.log(ref.section.id);
            const ScrollMagic = require('scrollmagic')
            //@ts-ignore
            this.animation = anime({})
            //@ts-ignore
            this.subscene[0] = new ScrollMagic.Scene({
                triggerElement: ref.constructor === Object ? ref.section : ref[0],
                offset: '325',
                duration: '100%',
                triggerHook: 0.5,
            })
                .setClassToggle(`#${ref.section.id}`, "opened") // add class to reveal
                .addIndicators()
                .on('progress', (ev: Event) => {
                    // this.animation.seek(ev.progress * this.animation.duration)
                })

            this.$root.$emit('scene_created', this.subscene[0])
        },
    },
});


