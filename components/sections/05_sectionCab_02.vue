<template>
  <div class="section_cab" ref="section">
    <div
      class="section_content_background"
      :style="{ width: `${width}px`, height: `${height}px` }"
    ></div>
    <div class="section_content_holder">
      <div class="grid_holder">
        <div class="col_01">
          <div class="pic">pic</div>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aperiam neque, fuga assumenda ullam blanditiis eaque?
          </h2>
          <p>
            Aliquam consectetur aliquam leo. Nulla tempus euismod orci et
            ornare. Proin id hendrerit nibh, in vulputate eros. Ut ut dignissim
            leo. Donec hendrerit, tellus eget pretium feugiat, nulla nunc
            pretium nisl, et fermentum elit sem vel tortor. Maecenas posuere,
            purus et sagittis ultricies, odio odio aliquet erat, eget sodales
            velit augue quis augue.
          </p>
          <p>
            Nam vestibulum orci vitae enim ultrices tempor. Suspendisse
            porttitor, ipsum vel posuere egestas, elit arcu placerat ligula, et
            laoreet massa lorem nec nunc. Cras consequat euismod est, sed
            feugiat ante tempor eu. Curabitur egestas vehicula porta.
          </p>
        </div>
        <div class="col_02">
          <div class="pic">pic</div>
          <div class="pic">pic</div>
          <div class="pic">pic</div>
        </div>
        <div class="col_03">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aperiam neque, fuga assumenda ullam blanditiis eaque?
          </h2>
          <p>
            Nulla tempus euismod orci et ornare. Proin id hendrerit nibh, in
            vulputate eros. Ut ut dignissim leo. Donec hendrerit, tellus eget
            pretium feugiat, nulla nunc pretium nisl, et fermentum elit sem vel
            tortor. Maecenas posuere, purus et sagittis ultricies, odio odio
            aliquet erat, eget sodales velit augue quis augue.
          </p>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Fusce posuere libero eu dolor molestie
            ultricies. Duis tortor leo, interdum ac metus at, varius posuere
            dui. Proin eget feugiat nulla.
          </p>
          <div class="pic">pic</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { n2br, getContent } from '~/lib/sectionUtils'
import '~/assets/styles/partials/section_content.css'
import { mapState } from 'vuex'
import Scrollable from '../mixins/Scrollable'

export default Vue.extend({
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
    n2br,
  },
  mixins: [Scrollable],
  async fetch() {
    this.content = await getContent(this, '04_sectionIntroMachines')
  },
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.setSceneScrollable(this.$refs)
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
  grid-template-columns: 4fr 2fr 4fr;
  grid-area: 1 / 1 / -1 / -1;

  > div {
    align-self: stretch;
  }

  .col_01 {
  }
  .col_02 {
  }
  .col_03 {
  }

  .pic {
    @apply bg-gray-400 h-36 my-4;
    img {
    }
  }
}
</style>
