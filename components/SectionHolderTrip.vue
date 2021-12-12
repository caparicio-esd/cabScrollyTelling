<template>
  <section class="section">
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
        <div class="section_col_a h-full col-span-2 self-center">
          <div class="quotes h-full relative">
            <div
              class="quote absolute top-1/4 -translate-y-1/2 opacity-0"
              v-for="quote in content.data"
              :key="quote.id"
            >
              <div class="quote_content">
                {{ quote.mainText }}
              </div>
              <div class="quote_footer">
                <div class="author primary_color">
                  {{ quote.author }}
                </div>
                <div class="position">
                  {{ quote.position }}
                </div>

                <!-- extra resources -->
                <div class="resources" v-if="quote.showSource">
                  <extra-resource
                    v-for="(resource, i) in quote.resources"
                    :key="i"
                    :resource="resource"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { n2br, getContent } from '~/lib/sectionUtils'
import '~/assets/styles/partials/section_content.css'
import AnimationType_02 from './mixins/AnimationType_02'
import { mapState, mapActions } from 'vuex'
import ExtraResource from './ExtraResource.vue'

export default Vue.extend({
  name: 'SectionHolderTrip',
  props: ['index'],
  components: {
    ExtraResource,
  },
  data() {
    return {
      content: {},
      duration: 1200,
    }
  },
  mixins: [AnimationType_02],
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
  async fetch() {
    this.content = await getContent(this, '05_sectionTrip')
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
.section {
  @apply min-h-screen bg-black text-white;
  .section_content_background {
    overflow: hidden;
    img {
      filter: hue-rotate(185deg) saturate(0.2);
    }
  }
  .quotes {
    .quote {
      /* @apply text-lg; */
      .quote_content {
      }
      .quote_footer {
        @apply mt-4;
        .author {
        }
        .position {
          @apply text-sm opacity-70 mt-2;
        }
        .source {
          @apply mt-6;
        }
      }
    }
  }
}
</style>
