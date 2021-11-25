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
          <!-- REMS -->
          <div>{{ remsData.weather_report.terrestrial_date[0] }}</div>
          <div class="mars_place primary_color">
            Cráter Gale
          </div>
          <div class="mars_coord">
            Coordenadas.<br>5° 22′ 12″ S, 137° 48′ 36″ E  (-5.37°, 137.81°)
          </div>

          <div class="mars_sol">Sol {{ remsData.weather_report.sol[0] }}</div>
          <div class="mars_month_opacity">{{ rems.season[0] }} - {{ rems.atmo_opacity[0] }}</div>

          <div class="mars_temp">
            <ph-thermometer />
            <span class="primary_color">{{ rems.max_temp[0]}}º</span> | <span class="primary_color">{{ rems.min_temp[0]}}º</span>
          </div>

          <!-- MEDA -->
          <!-- <div>{{ formatDate(meda.terrestrial_date) }}</div> -->
          <!-- <div class="mars_place primary_color">
            Cráter Jezero
          </div>
          <div class="mars_coord">
            Coordenadas.<br> 18º 26’ 40.56” N, 77º 27’ 3.24” E (18.4446º,77.4509º)
          </div> -->
          <!-- <div class="mars_sol">Sol {{ meda.sol }}</div>
          <div class="mars_month_opacity">{{ meda.season }}</div>

          <div class="mars_temp">
            <ph-thermometer />
            <span class="primary_color">{{ meda.max_temp}}º</span> | <span class="primary_color">{{ meda.min_temp}}º</span>
          </div> -->
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
      meda: {}
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
    formatDate(date: any){
      let medaDate = new Date(date);
      return medaDate.toDateString();
    },
    // async getMeda() {
    //   const medaData = await this.$axios.$get('https://meda.cab.inta-csic.es/api/meda_weather.json')
    //   this.meda = medaData.sols[6] //coger solo el último dato
    // }


  },
  mixins: [AnimationType_01],
  props: ['refIn', 'index'],
  async fetch() {
    this.content = await getContent(this, '01_sectionWelcome')
    this.addData({index: this.index, data: this.content})
    /** Get REMS DATA */
    const xmlData = await fetch(
      'http://cab.inta-csic.es/rems/rems_weather.xml'
    ).then((res) => res.text())
    this.remsData = await this.xmlToJSON(xmlData)
    this.rems = this.remsData.weather_report.magnitudes[0]
  },
  async created(){

  },
  async mounted() {
    await this.$nextTick()
    //@ts-ignore
    this.setSceneScrollable(this.$refs)
    //@ts-ignore
    this.setUpComponent()
    //this.getMeda()
  },
})
</script>

<style lang="postcss" scoped>
.mars_data {
  font-size: 1.4em;
  padding: 2em;

  .mars_coord{
    font-size: 0.8em;
    font-style: italic;
  }
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
