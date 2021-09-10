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

  </div>

</div>
</template>

<script lang="ts">
import Vue from 'vue'
import AnimationType_03 from '../mixins/AnimationType_03'
import { n2br, getContent } from '~/lib/sectionUtils'
import { mapState } from 'vuex'


export default Vue.extend({
  name: 'Machines',
  data(): any {
    return {
      content: {},
    }
  },
  methods: {
    n2br,
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
