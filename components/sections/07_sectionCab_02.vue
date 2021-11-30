<template>
  <div class="section_cab" ref="section">
    <div
      class="section_content_background"
      :style="{ width: `${width}px`, height: `${height}px` }"
    ></div>
    <div class="section_content_holder">
      <div class="section_col_a col-span-2 self-center">
        <h2>
          {{ content.data.title }}
        </h2>
        <p v-for="(p, i) in content.data.mainText" :key="i" v-html="p"></p>
        <div class="pic">
          <img
            :src="content.assets.pictures[3]"
            alt="dibujo de las instalaciones del CAB"
          />
        </div>
      </div>
      <!-- <div class="col_02">
          <div class="pic pic_large">
            <img :src="content.assets.pictures[0]" alt="dibujo de las instalaciones del CAB">
          </div>
        </div> -->

      <div class="section_col_b col-start-4 col-span-2 self-center">
        <div class="pic">
          <img
            :src="content.assets.pictures[2]"
            alt="dibujo de las instalaciones del CAB"
          />
        </div>
        <p v-for="(p, i) in content.data.secondaryText" :key="i" v-html="p"></p>
        <!-- extra resources -->
        <div class="resources">
          <extra-resource
            class="dark"
            v-for="(resource, i) in content.assets.resources"
            :key="i"
            :resource="resource"
            :mustBeLight="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { n2br, getContent } from '~/lib/sectionUtils'
import '~/assets/styles/partials/section_content.css'
import { mapState, mapActions } from 'vuex'
import Scrollable from '../mixins/Scrollable'

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
  methods: {
    ...mapActions({
      addData: 'data/addData',
    }),
    n2br,
  },
  mixins: [Scrollable],
  async fetch() {
    this.content = await getContent(this, '07_SectionCab02')
    this.addData({ index: this.index, data: this.content })
  },
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.setSceneScrollable(this.$refs)
    //@ts-ignore
    this.setUpComponent()
  },
})
</script>

<style lang="postcss" scoped>
.section_content_holder {
  background-color: transparent !important;
}
.grid_holder {
  @apply w-full grid;
  grid-gap: 2.5rem;
  grid-template-columns: 4fr 4fr;
  grid-area: 1 / 1 / -1 / -1;

  > div {
    align-self: stretch;
  }
}
.pic {
  @apply my-6;
  height: 20rem;
  overflow: hidden;
  img {
  }
}
.pic_large {
  height: 100%;
  img {
    object-fit: cover;
    height: 100%;
  }
}
</style>
