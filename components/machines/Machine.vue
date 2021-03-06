<template>
  <div
    class="section_machines min-h-screen grid grid-cols-1 grid-rows-1"
    ref="section"
  >
    <div
      class="section_content_background"

      :style="{ width: `${width}px`, height: `${height}px` }"
    >
      <img :src="content.assets.backgroundIllustration" :alt="content.title" />
    </div>

    <div class="section_content_holder_8 relative">
      <div class="section_col_a col-span-3 self-center">
        <h2 class="primary_color mb-12" v-html="n2br(content.title)" />
        <p v-for="(p, i) in content.mainText" :key="i" v-html="p"></p>
      </div>

      <div class="machine_icon"
        :style="getMachinePosition(content)"
        @click="toggleModal"
      >
        <ph-rocket :size="64" />
        {{content.machine}}
      </div>
      <machine-modal
        :id="`modal${index}`"
        :machineData="content"
        :open="openedModal"
        @toggleModal="toggleModal"
      />
      <button-next-screen />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AnimationType_01 from '../mixins/AnimationType_01'

//@ts-ignore
import { PhTriangle, PhRocket } from 'phosphor-vue'
import { mapState, mapActions } from 'vuex'
import MachineModal from '~/components/machines/MachineModal.vue'
import ButtonNextScreen from '~/components/ButtonNextScreen.vue'
import { n2br } from '~/lib/sectionUtils'

export default Vue.extend({
  name: 'Machine',
  components: {
    PhTriangle,
    PhRocket,
    MachineModal,
    ButtonNextScreen,
  },
  data() {
    return {
      openedModal: false
    }
  },
  props: ['content', 'index'],
  mixins: [AnimationType_01],
  methods: {
    ...mapActions({
      addData: "data/addData"
    }),
    n2br,
    getMachinePosition(machine: any) {
      return {
        top: `${machine.position.lat}%`,
        left: `${machine.position.lon}%`,
      }
    },
    toggleModal(){
      this.openedModal = !this.openedModal;
    }
  },
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
      height: (state: any) => state.main.ui.viewPort.height,
    }),
  },
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.setSceneScrollable(this.$refs)
    //@ts-ignore
    this.addData({index: this.index, data: this.content})
    //@ts-ignore
    this.setUpComponent()
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
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all .5s ease;
  &:hover{
    transform: scale(1.1) !important;
  }
}
</style>
