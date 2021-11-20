<template>
  <div class="explorer_modal_content" v-if="tab2">
    <div class="machine_title ">{{ CABInst }}</div>
      <!-- header -->
      <div class="explorer_modal_content_header">
        <div class="explorer_modal_content_agency_meta">
          <div class="explorer_modal_content_land">
            <div class="explorer_modal_content_land_picture">
              <img :src="tab2.picture_flag" :alt="`bandera de ${tab2.meta.land}`">
            </div>
            <div class="explorer_modal_content_land_name">
              {{ tab2.meta.land }}
            </div>
          </div>
          <div class="explorer_modal_content_agency">
            {{ tab2.meta.agency }}
          </div>
        </div>
      </div>
      <!-- researcher -->
      <div class="explorer_modal_content_title">
        <div class="explorer_modal_content_title_top">
          <h3 class="title">{{ tab2.meta.title }}</h3>
          <!-- <div class="explorer_modal_content_success_flag">
            {{ tab2.meta.translate }}
          </div> -->
        </div>
        <div class="explorer_modal_content_title_tagline">
          {{ tab2.meta.translate }}
        </div>
      </div>

      <!-- meta -->
      <div class="explorer_modal_content_meta">
        <!-- launch / arrival-->
        <div class="explorer_modal_content_meta_launch_arrival">
          <div
            class="explorer_modal_content_meta_launch"
            v-if="tab2.meta.head_researcher"
          >
            <span class="label">Investigador principal</span>
            <ph-dots-three :size="20" />
            <span class="content">{{ tab2.meta.head_researcher }}</span>
          </div>
        </div>
        <div
          class="explorer_modal_content_meta_activity"
          v-if="tab2.meta.activity"
        >
          <span class="label">Período actividad</span>
          <ph-dots-three :size="20" />
          <span class="content">{{ tab2.meta.activity }}</span>
        </div>
      </div>
      <!-- Goals -->
      <div class="explorer_modal_content_collapsible" v-if="tab2.goals">
        <collapsible :opened="true">
          <template v-slot:handler>Objetivos</template>
          <template v-slot:content>
            <ul>
              <li v-for="(item, i) in tab2.goals" :key="i" v-html="item"></li>
            </ul>
          </template>
        </collapsible>
      </div>
      <!-- Instruments -->
      <div
        class="explorer_modal_content_collapsible"
        v-if="tab2.instruments"
      >
        <collapsible :opened="false">
          <template v-slot:handler>Instrumentos que transporta</template>
          <template v-slot:content>
            <p v-for="(item, i) in tab2.instruments" :key="i" v-html="item"></p>
          </template>
        </collapsible>
      </div>
      <!-- Contribution -->
      <div
        class="explorer_modal_content_collapsible"
        v-if="tab2.contribution"
      >
        <collapsible :opened="false">
          <template v-slot:handler>Contribuciones</template>
          <template v-slot:content>
            <ul>
              <li v-for="(item, i) in tab2.contribution" :key="i" v-html="item"></li>
            </ul>
          </template>
        </collapsible>
      </div>

      <!-- Curiosidades -->
      <div
        class="explorer_modal_content_collapsible"
        v-if="tab2.curiosities"
      >
        <collapsible :opened="false">
          <template v-slot:handler>Curiosidades</template>
          <template v-slot:content>
            <ul>
              <li v-for="(item, i) in tab2.curiosities" :key="i" v-html="item"></li>
            </ul>
          </template>
        </collapsible>
      </div>

      <!-- more info -->
      <div v-if="tab2.moreinfo">
        <!-- extra resources -->
        <div class="resources">
          <extra-resource
            class="dark"
            v-for="(resource, i) in tab2.assets.resources"
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
  name: 'MachineModaltab2',
  components: {
    PhDotsThree,
    Collapsible,
    ExtraResource,
  },
  props: ['tab2', 'title', 'subtitle', 'CABInst'],
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
