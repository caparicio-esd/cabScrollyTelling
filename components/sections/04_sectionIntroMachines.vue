<template>
  <div class="section_content" ref="section">
    <div
      class="section_content_background"
      :style="{ width: `${width}px`, height: `${height}px` }"
    >
      <img
        :src="content.assets.backgroundIllustration"
        :alt="content.title"
        :height="height"
      />
    </div>

    <div class="section_content_holder">
      <div class="section_col_a col-span-2 self-center">
        <h2 class="mb-12" v-html="n2br(content.data.title)" />
        <div class="with-ul" v-for="(p, i) in content.data.mainText" :key="i" v-html="p"></div>
      </div>
    </div>
    <button-next-screen />
    <!-- explorers-->
    <div class="machines">
      <div
        v-for="(explorer, i) in content.data.explorers"
        :key="i"
        :style="getExplorerStyle(explorer, i)"
        class="machine"
      >
        <ph-rocket />
        {{ explorer.name }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { n2br, getContent } from '~/lib/sectionUtils'
import '~/assets/styles/partials/section_content.css'
import { mapState, mapActions } from 'vuex'
import AnimationType_01 from '../mixins/AnimationType_01'
import ButtonNextScreen from '~/components/ButtonNextScreen.vue'
import { PhRocket } from 'phosphor-vue'

export default Vue.extend({
  props: ['index'],

  data() {
    return {
      content: {},
    }
  },
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
      height: (state: any) => state.main.ui.viewPort.height,
    }),
  },
  components: {
    ButtonNextScreen,
    PhRocket
  },
  methods: {
    ...mapActions({
      addData: 'data/addData',
    }),
    n2br,
    getExplorerStyle(explorer: any, i: number): object {
      return {
        top: `${explorer.position.lat}%`,
        left: `${explorer.position.lon}%`,
      }
    },
  },
  mixins: [AnimationType_01],
  async fetch() {
    this.content = await getContent(this, '04_sectionIntroMachines')
    this.addData({ index: this.index, data: this.content })
  },
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.setSceneScrollable(this.$refs)
  },
})
</script>

<style lang="postcss" scoped>
.section_content_holder p.with-ul ul{
  list-style: circle;
}
.machines {
  @apply col-span-full row-span-full relative;
  pointer-events: none;
  cursor: pointer;
  .machine {
    @apply flex absolute rounded-full bg-white text-black p-2;
    @apply ring-white ring-0 ring-opacity-50;
    align-items: center;
    transform: translate(-50%, -50%);
    pointer-events: initial;
    transition: all 350ms ease;
    background-clip: padding-box;
    border: 3px solid white;
    svg{
      @apply mr-1;
    }
    &.explorer_active {
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
    }
  }

}

</style>
