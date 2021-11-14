<template>
  <div class="machine_modal" :class="open ? 'opened' : ''">
    <button
      class="btn_close"
      @click="$emit('toggleModal')"
    >
      <ph-x-circle :size="32" />
    </button>
    <div class="machine_modal_image">
      <img :src="tab1Active ? tab1.picture : tab2.picture" :alt="`Imagen del ${machineData.machine}`">
      <div class="machine_title">{{ machineData.machine }}</div>
      <button
        class="cabBtn"
        :class="tab2Active ? 'active' : ''"
        @click="toggleTab"
      >
        {{ machineData.cabInstrument }}
      </button>
    </div>

    <!-- TAB 1 // machine -->
    <machine-modal-tab-1
      :tab1="tab1"
      :title="machineData.title"
      :subtitle="machineData.subtitle"
      v-if="tab1Active"
      @toggleTab="toggleTab"
    />
    <!-- TAB 2 // CAB instrument -->
    <machine-modal-tab-2
      :tab2="tab2"
      :title="machineData.title"
      :subtitle="machineData.subtitle"
      v-if="tab2Active"
    />
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import AnimationType_04 from '../mixins/AnimationType_04'
import MachineModalTab1 from '~/components/machines/MachineModalTab1.vue'
import MachineModalTab2 from '~/components/machines/MachineModalTab2.vue'
import { PhXCircle } from 'phosphor-vue'

export default Vue.extend({
  name: 'MachineModal',
  components: {
    MachineModalTab1,
    MachineModalTab2,
    PhXCircle
  },
  data() {
    return {
      tab1: this.machineData.tabs[0],
      tab2: this.machineData.tabs[1],
      tab1Active: true,
      tab2Active: false,
    }
  },
  props: ['machineData', 'open'],
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
    }),
  },
  methods: {
    toggleTab(){
      this.tab1Active = !this.tab1Active;
      this.tab2Active = !this.tab2Active;
    }

  },
  mixins: [AnimationType_04],
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    // this.setSceneScrollable(this.$refs)
  },
})
</script>


<style lang="postcss" scoped>

.machine_modal {
  @apply absolute z-20 inset-0 m-12 flex;
  @apply bg-white px-4 py-4 text-gray-800;
  min-width: 300px;
  transition: transform 550ms ease;
  transform: translate(-120%);
  &.opened {
    transform: translate(0);
  }
  .btn_close{
    @apply absolute;
    top: 15px;
    right: 15px;
  }

}

/** explorer modal */
.machine_modal_image{
  width: 60%;
  height: 100%;
  @apply bg-gray-200 flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .cabBtn{
    @apply flex absolute rounded-full bg-white text-black px-4 py-2;
    @apply ring-white ring-0 ring-opacity-50;
    align-items: center;
    //transform: translate(-50%, -50%);
    pointer-events: initial;
    transition: all 350ms ease;
    background-clip: padding-box;
    border: 3px solid white;
    top: 15px;
    right: 15px;
    &:hover {
      @apply ring-white ring-4 ring-opacity-40;
      border: 3px solid transparent;
      transition: all 350ms ease;
    }
    &.active{
      background-color: #1188fc;
      color: white;
    }
  }
  .machine_title{
    @apply absolute text-black;
    top: 20px;
    left: 20px;
    font-size: 1.2em;
    font-weight: bold;
  }
}

</style>

