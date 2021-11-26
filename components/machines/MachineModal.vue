<template>
  <div class="machine_modal" :class="open ? 'opened' : ''">
    <button
      class="btn_close"
      @click="$emit('toggleModal')"
    >
      <ph-x-circle :size="32" />
    </button>

    <!-- IMAGEN -->
    <div class="machine_modal_image">
      <img
        :src="tab1Active ? tab1.images360[src] : tab2.picture"
        :alt="`Imagen del ${machineData.machine}`"
        class="image_background"
      >
        <label
          for="spiner"
          id="turn_around"
        >
          360º
          <input
            type="range"
            name="spiner"
            id="spiner"
            min="0"
            max="50"
            value="0"
            v-model="value"
          >
        </label>
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
      :machine="machineData.machine"
      v-if="tab1Active"
      @toggleTab="toggleTab"
    />
    <!-- TAB 2 // CAB instrument -->
    <machine-modal-tab-2
      :tab2="tab2"
      :title="machineData.title"
      :subtitle="machineData.subtitle"
      :CABInst="machineData.cabInstrument"
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
//@ts-ignore

export default Vue.extend({
  name: 'MachineModal',
  scrollToTop: true,
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
      value: "",
      src: "0"
    }
  },
  watch: {
    value(val) {
      this.src = `${val}`;
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
  @apply absolute z-20 inset-0 m-auto flex;
  @apply text-gray-800;
  min-width: 300px;
  transition: transform 550ms ease;
  transform: translate(-120%);
  height: 70vh;
  width: 80vw;
  &.opened {
    transform: translate(0);
  }
  .btn_close{
    @apply absolute;
    top: 15px;
    right: 15px;
  }
  .machine_modal_image{
    width: 60%;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    @apply flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .image_background{
      @apply absolute;
      width: auto;
      max-width: none;
      z-index: 3;
      img{
        outline: none;
      }
    }
    #turn_around{
      position: absolute;
      bottom: 25px;
      left: 25px;
      color: white;
      display: flex;
      #spiner{
        margin-left: 10px;
      }
    }
    .cabBtn{
      @apply flex absolute rounded-full bg-gray-200 text-black px-3 py-1;
      @apply ring-black ring-0 ring-opacity-20;
      align-items: center;
      pointer-events: initial;
      transition: all 350ms ease;
      background-clip: padding-box;
      border: 3px solid white;
      bottom: 15px;
      right: 15px;
      z-index: 3;
      &:hover {
        @apply ring-black ring-4 ring-opacity-20;
        border: 3px solid transparent;
        transition: all 350ms ease;
      }
      &.active{
        background-color: #edcb0a;
      }
    }
    .icon360{
      color: white;
      z-index: 3;
      transition: all .5s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .explorer_modal_content{
    @apply p-8 bg-white;

  }

}

.slider_bar{
  position: absolute !important;
  bottom: 0 !important;
}


</style>

