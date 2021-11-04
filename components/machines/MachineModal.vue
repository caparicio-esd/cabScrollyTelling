<template>
  <div class="machine_modal">
    <span>hola...</span>
    
    <!-- <CThemeProvider>
      <c-box w="100%">
        <c-tabs>
          <c-tab-list>
            <c-tab
              v-for="(tab, index) in data.tabs"
              :key="index">{{tab.title}}</c-tab>
          </c-tab-list>
          <c-tab-panels class="tabPanels">
            <c-tab-panel
              class="tabPanel"
              v-for="(tab, index) in data.tabs"
              :key="index">
              <div class="flex">
                <img :src="tab.illustration" alt="">
                <div>
                  <p>{{tab.content}}</p>

                  <table v-if="index == 'mision'">
                    <tr>
                      <th>Nacionalidad</th>
                      <td>{{tab.nationality}}</td>
                    </tr>
                    <tr>
                      <th>Agencia espacial</th>
                      <td>{{tab.agency}}</td>
                    </tr>
                    <tr>
                      <th>Fecha / hora Lanzamiento</th>
                      <td>{{tab.dateHourLaunch}}</td>
                    </tr>
                    <tr>
                      <th>Fecha / hora Aterrizaje</th>
                      <td>{{tab.dateHourLanding}}</td>
                    </tr>
                  </table>
                </div>

              </div>

            </c-tab-panel>

          </c-tab-panels>
        </c-tabs>
      </c-box>
    </CThemeProvider> -->

    <div class="btn_close">x</div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import AnimationType_04 from '../mixins/AnimationType_04'
import {
  CThemeProvider,
  CTabs,
  CTabList,
  CTabPanels,
  CTab,
  CTabPanel } from '@chakra-ui/vue'

export default Vue.extend({
  name: 'MachineModal',
  components: {
    CThemeProvider,
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
  CTabPanel
  },
  props: ['data'],
  computed: {
    ...mapState({
      width: (state: any) => state.main.ui.viewPort.width,
    }),
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
  @apply absolute z-20 inset-0 m-12;
  @apply bg-white px-4 py-4 text-gray-800;
  min-width: 300px;
  transition: transform 350ms ease;
  transform: translate(-120%);
  &.opened {
    transform: translate(0);
  }
  .btn_close{
    @apply absolute rounded-full bg-white text-black p-2;
    @apply ring-white ring-0 ring-opacity-50;
    transform: translate(-50%, -50%);
    pointer-events: initial;
    transition: all 350ms ease;
    background-clip: padding-box;
    border: 3px solid white;
    right: 0;
  }
  .tabPanels{
    @apply p-4;
    .tabPanel{
      img{

        height: 350px;
        margin: 4em;
      }
      p{
        @apply p-6 m-12;
      }
    }
  }
}
</style>
