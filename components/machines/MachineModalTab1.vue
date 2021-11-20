<template>
  <div class="explorer_modal_content" v-if="tab1">
      <div class="machine_title ">{{ machine }}</div>
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
          <h3 class="title">{{ title }}</h3>
          <div class="explorer_modal_content_success_flag">
            {{ tab1.meta.status }}
          </div>
        </div>
        <div class="explorer_modal_content_title_tagline">
          {{ subtitle }}
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
              <li
                v-for="(item, i) in tab1.instruments"
                :key="i" v-html="item"
                @click="item.classList.contains('toTab2') ? $emit('toggleTab') : ''">
              </li>
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

      <!-- Curiosidades -->
      <div
        class="explorer_modal_content_collapsible"
        v-if="tab1.curiosities"
      >
        <collapsible :opened="false">
          <template v-slot:handler>Curiosidades</template>
          <template v-slot:content>
            <ul>
              <li v-for="(item, i) in tab1.curiosities" :key="i" v-html="item"></li>
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
</template>
<script>
import { PhDotsThree } from 'phosphor-vue'
import Collapsible from '../dsys/Collapsible.vue'
import ExtraResource from '~/components/ExtraResource.vue'

export default {
  name: 'MachineModalTab1',
  components: {
    PhDotsThree,
    Collapsible,
    ExtraResource,
  },
  props: ['tab1', 'title', 'subtitle', 'machine'],


}
</script>

<style lang="postcss" scoped>
.explorer_modal_content {
  @apply p-6 text-gray-700;
  width: 40%;
  overflow-y: scroll;
}
.machine_title{
  font-size: 1.2em;
  font-weight: bold;
  @apply mb-4;
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
  .collapsible_handle_label {
    @apply font-bold text-black;
  }
}
</style>

