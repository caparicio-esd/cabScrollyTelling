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
        <p v-for="(p, i) in content.data.mainText" :key="i" v-html="p"></p>
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
      <div class="section_col_b col-start-4 col-span-2 self-center">
        <!-- weather from REMS -->
        <div class="mars_data">
          <div>{{ remsData.weather_report.terrestrial_date[0] }}</div>
          <div class="mars_sol">Sol {{ remsData.weather_report.sol[0] }}</div>
          <div class="mars_month_opacity">{{ rems.season[0] }} - {{ rems.atmo_opacity[0] }}</div>
          <!-- <div class="mars_sunrise_sunset">Amanecer: {{rems.sunrise[0]}} - Anochecer: {{rems.sunset[0]}}</div>-->
          <!-- gts_temp: suelo, temp: aire -->
          <div class="mars_temp">
            <ph-thermometer />
            {{ rems.max_temp[0]}}º | {{ rems.min_temp[0]}}º
          </div>
        </div>
        <!-- player -->
        <div class="players">
          <player
            v-for="(player, i) in content.assets.players"
            :key="i"
            :player="player"
          />
        </div>
      </div>
    </div>
    <button-next-screen />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { n2br, getContent } from '~/lib/sectionUtils'
import '~/assets/styles/partials/section_content.css'
import { mapState, mapActions } from 'vuex'
import AnimationType_01 from './../mixins/AnimationType_01'
import ButtonNextScreen from '~/components/ButtonNextScreen.vue'
import Player from '~/components/Player.vue'
import { PhThermometer } from 'phosphor-vue'
const xml2js = require('xml2js')

export default Vue.extend({
  data() {
    return {
      content: {},
      remsData: [] as any,
      rems: {},
    }
  },
  components: {
   ButtonNextScreen,
   Player,
   PhThermometer
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
    xmlToJSON: (str: any) => {
      return new Promise((resolve, reject) => {
        xml2js.parseString(str, (err: any, jsonObj: any) => {
          if (err) {
            return reject(err)
          }
          resolve(jsonObj)
        })
      })
    },
  },
  mixins: [AnimationType_01],
  props: ['refIn', 'index'],
  async fetch() {
    this.content = await getContent(this, '01_sectionWelcome')
    this.addData({index: this.index, data: this.content})
    const xmlData = await fetch(
      'http://cab.inta-csic.es/rems/rems_weather.xml'
    ).then((res) => res.text())

    this.remsData = await this.xmlToJSON(xmlData)
    this.rems = this.remsData.weather_report.magnitudes[0]
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
.mars_data {
  font-size: 1.4em;
  padding: 2em;
  .mars_sol {
    font-size: 2em;
  }
  .mars_temp {
    align-items: center;
    display: flex;
    font-size: 1.5em;
    svg {
      margin-right: 5px;
    }
  }
}
</style>
