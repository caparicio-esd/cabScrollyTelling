<template>
<div>
  <div
    class="section_machines min-h-screen grid grid-cols-1 grid-rows-1"
    v-for="(machine, index) in content.data"
    :key="index"
    :ref="`section${index}`"
    >
    <div
      class="section_content_background"
      :style="{ width: `${width}px`, height: `${height}px` }"
    >
      <img :src="content.assets.backgroundIllustration" :alt="content.title" />
    </div>

    <div class="section_content_holder_8">
      <div class="section_col_a col-span-2 self-end">
        <h2 class="mb-12" v-html="n2br(content.data[index].title)" />
        <p v-for="(p, i) in content.data[index].mainText" :key="i">{{ p }}</p>
        <div class="logos flex mt-8">
          <div
            class="logo mr-1"
            v-for="(logo, i) in content.assets.logos"
            :key="i"
          >
            <img :src="logo" alt="logo" width="30" />
          </div>
        </div>
      </div>
      <div class="section_col_b col-start-3 col-span-2 self-end">
        <p v-for="(p, i) in content.data[index].secondaryText" :key="i">{{ p }}</p>
      </div>
    </div>

    <div
      class="machine_icon"
      :style="getMachinePosition(content.data[index])"
      >
      <ph-triangle :size="64" />
    </div>
  </div>

</div>
</template>

<script lang="ts">
import Vue from 'vue'
import AnimationType_03 from '../mixins/AnimationType_03'
//@ts-ignore
import { PhTriangle } from "phosphor-vue"
import { n2br, getContent } from '~/lib/sectionUtils'
import { mapState } from 'vuex'



export default Vue.extend({
  name: 'Machines',
  components: {
    PhTriangle
  },
  data(): any {
    return {
      content: {},
    }
  },
  methods: {
    n2br,
    getMachinePosition(machine: any){
      //console.log(machine)
      return {
        top: `${machine.position.lat}%`,
        left: `${machine.position.lon}%`,
      }
    },
  },

  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
      height: (state: any) => state.main.ui.viewPort.height,
    }),
  },

  mixins: [AnimationType_03],
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    for (let key in this.$refs){
      if(this.$refs.hasOwnProperty(key)){
        this.setSceneScrollable(this.$refs[key])
      }
    }
  },

  async fetch(): Promise<void> {
    this.content = await getContent(this, '04_sectionMachines')
    //this.fetchContent(this.content);
  },

})
</script>

<style lang="postcss" scoped>

  .machine_icon {

    @apply absolute rounded-full text-white;
    transform: translate(-50%, -50%);
    pointer-events: initial;
    transition: all 350ms ease;
    background-clip: padding-box;


    /* &.explorer_active {
      @apply ring-white ring-8 ring-opacity-40;
      border: 3px solid transparent;
      transition: all 350ms ease;
    }
    &.explorer_focused,
    &:hover {
      @apply ring-white ring-4 ring-opacity-40;
      border: 3px solid transparent;
      transition: all 350ms ease;
    }
    &.explorer_unfocused {
      opacity: 0.6;
      transition: all 350ms ease;
    } */
  }

</style>
