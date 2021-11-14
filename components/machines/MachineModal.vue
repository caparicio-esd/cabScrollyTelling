<template>
  <div class="machine_modal" :class="open ? 'opened' : ''">
    <div class="machine_modal_image">
      <img :src="tab1.picture" :alt="`Imagen del ${machineData.machine}`">
      <button class="cabBtn">
      {{ machineData.cabInstrument }}
      </button>
    </div>

    <!-- TAB 1 - TODO: create new component-->
    <div class="explorer_modal_content" v-if="tab1">
      <!-- header -->
      <div class="explorer_modal_content_header">
        <div class="explorer_modal_content_agency_meta">
          <div class="explorer_modal_content_land">
            <div class="explorer_modal_content_land_picture">
              <img :src="tab1.picture_flag" :alt="`bandera de ${tab1.meta.land}`">
            </div>
            <div class="explorer_modal_content_land_name">
              {{ tab1.meta.land }}
            </div>
          </div>
          <div class="explorer_modal_content_agency">
            {{ tab1.meta.agency }}
          </div>
        </div>
      </div>
      <!-- title -->
      <div class="explorer_modal_content_title">
        <div class="explorer_modal_content_title_top">
          <h3 class="title">{{ machineData.title }}</h3>
          <div class="explorer_modal_content_success_flag">
            {{ tab1.meta.status }}
          </div>
        </div>
        <div class="explorer_modal_content_title_tagline">
          {{ machineData.subtitle }}
        </div>
      </div>
      <!-- meta -->
      <div class="explorer_modal_content_meta">
        <!-- launch / arrival-->
        <div class="explorer_modal_content_meta_launch_arrival">
          <div
            class="explorer_modal_content_meta_launch"
            v-if="tab1.meta.launch"
          >
            <span class="label">Lanzamiento</span>
            <ph-dots-three :size="20" />
            <span class="content">{{ tab1.meta.launch }}</span>
          </div>
          <div
            class="explorer_modal_content_meta_arrival"
            v-if="tab1.meta.arrival"
          >
            <span class="label">Llegada</span>
            <ph-dots-three :size="20" />
            <span class="content">{{ tab1.meta.arrival }}</span>
          </div>
        </div>
        <!-- place -->
        <div
          class="explorer_modal_content_meta_place"
          v-if="tab1.meta.place"
        >
          <span class="label">Lugar</span>
          <ph-dots-three :size="20" />
          <span class="content">{{ tab1.meta.place }}</span>
        </div>
        <!-- activity -->
        <div
          class="explorer_modal_content_meta_activity"
          v-if="tab1.meta.activity"
        >
          <span class="label">Período de actividad</span>
          <ph-dots-three :size="20" />
          <span class="content">{{ tab1.meta.activity }}</span>
        </div>
      </div>
      <!-- Goals -->
      <div class="explorer_modal_content_collapsible" v-if="tab1.goals">
        <collapsible :opened="false">
          <template v-slot:handler>Objetivos</template>
          <template v-slot:content>
            <ul>
              <li v-for="(item, i) in tab1.goals" :key="i" v-html="item"></li>
            </ul>
          </template>
        </collapsible>
      </div>
      <!-- Instruments -->
      <div
        class="explorer_modal_content_collapsible"
        v-if="tab1.instruments"
      >
        <collapsible :opened="true">
          <template v-slot:handler>Instrumentos que transporta</template>
          <template v-slot:content>
            <ul>
              <li v-for="(item, i) in tab1.instruments" :key="i" v-html="item"></li>
            </ul>
          </template>
        </collapsible>
      </div>
      <!-- Contribution -->
      <div
        class="explorer_modal_content_collapsible"
        v-if="tab1.contribution"
      >
        <collapsible :opened="false">
          <template v-slot:handler>Contribución</template>
          <template v-slot:content>
            <ul>
              <li v-for="(item, i) in tab1.contribution" :key="i" v-html="item"></li>
            </ul>
          </template>
        </collapsible>
      </div>
      <!-- more info -->
      <div v-if="tab1.moreinfo">
        <!-- extra resources -->
        <div class="resources">
          <extra-resource
            class="dark"
            v-for="(resource, i) in tab1.assets.resources"
            :key="i"
            :resource="resource"
          />
        </div>
      </div>
    </div>


  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import AnimationType_04 from '../mixins/AnimationType_04'
import { PhDotsThree } from 'phosphor-vue'
import Collapsible from '../dsys/Collapsible.vue'
import ExtraResource from '~/components/ExtraResource.vue'
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
    PhDotsThree,
    Collapsible,
    ExtraResource,
    CThemeProvider,
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
    CTabPanel
  },
  data() {
    return {
      tab1: this.machineData.tabs[0],
    }
  },
  props: ['machineData', 'open'],
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
  @apply absolute z-20 inset-0 m-12 flex;
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

/** explorer modal */
.machine_modal_image{
  width: 60%;
  height: 100%;
  @apply bg-gray-200 flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .cabBtn{
    @apply flex absolute rounded-full bg-white text-black p-2;
    @apply ring-white ring-0 ring-opacity-50;
    align-items: center;
    //transform: translate(-50%, -50%);
    pointer-events: initial;
    transition: all 350ms ease;
    background-clip: padding-box;
    border: 3px solid white;
    top: 15px;
    right: 15px;
  }
}
.explorer_modal_content {
  @apply p-6 text-gray-700;
  width: 40%;
  overflow-y: scroll;
}
.explorer_modal_content_header {
  @apply flex justify-between items-end mb-4;
  .explorer_modal_content_picture {
    @apply bg-gray-200 flex-1 h-60 mr-4;
    overflow: hidden;
  }
  .explorer_modal_content_agency_meta {
    max-width: 20ch;
    .explorer_modal_content_land {
      @apply flex items-center;
      .explorer_modal_content_land_picture {
        @apply bg-gray-200 w-8 h-8 rounded-full mr-2;
        overflow: hidden;
        img{
          height: 100%;
        }
      }
      .explorer_modal_content_land_name {
        @apply my-1 font-bold text-black;
      }
    }
  }
  .explorer_modal_content_agency {
    @apply text-sm;
  }
}
.explorer_modal_content_title {
  .explorer_modal_content_title_top {
    @apply flex justify-between items-baseline;
    .title {
      @apply mr-8 font-bold text-black;
    }
    .explorer_modal_content_success_flag {
      @apply text-sm;
    }
  }
  .explorer_modal_content_title_tagline {
    @apply text-sm;
  }
}
.explorer_modal_content_meta {
  @apply my-4 py-4;
  @apply border-t border-gray-400 border-b border-solid;
  .explorer_modal_content_meta_launch,
  .explorer_modal_content_meta_arrival,
  .explorer_modal_content_meta_place,
  .explorer_modal_content_meta_activity {
    @apply flex items-center;
    .label {
      @apply mr-2 font-bold text-black;
    }
    .content {
      @apply ml-2;
    }
  }
}
.explorer_modal_content_collapsible {
  @apply my-4;
}
</style>
<style lang="postcss">
.collapsible_handle_label {
  @apply font-bold text-black;
}
</style>

