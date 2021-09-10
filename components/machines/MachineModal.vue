<template>
  <div class="machine_modal" ref="section">

    modal example
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import AnimationType_04 from '../mixins/AnimationType_04'
//import ExplorerModalContent from './ExplorerModalContent.vue'
//import { ExploreModalClasses, ExplorerModalDirection } from './ModalTypes'

export default Vue.extend({
  name: 'MachineModal',
  // components: {
  //   ExplorerModalContent,
  // },
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
      //explorerId: (state: any) => state.explorers.explorer.openedId,
      //activeContent: (state: any) => state.explorers.explorer.activeContent,
    }),
  },
  methods: {
    // getClasses(dir: ExplorerModalDirection): ExploreModalClasses {
    //   return {
    //     explorer_modal: true,
    //     explorer_modal_left: dir == 'left',
    //     explorer_modal_right: dir == 'right',
    //     opened:
    //       dir == 'right'
    //         ? this.activeContent?.position?.lon < 50
    //         : this.activeContent?.position?.lon >= 50,
    //   }
    // },
  },
  mixins: [AnimationType_04],
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.setSceneScrollable(this.$refs)
  },
})
</script>


<style lang="postcss" scoped>

.machine_modal {
  @apply absolute z-20 inset-0 m-12;
  @apply bg-white px-4 py-4 text-gray-800;
  min-width: 300px;
  transition: transform 350ms ease;
  transform: translate(-120%);
  &.opened {

    transform: translate(0);
  }
}
</style>
