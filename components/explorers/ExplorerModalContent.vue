<template>
  <div
    class="explorer_modal_content"
    v-if="activeContent.meta"
    ref="explorer_modal"
  >
    <div class="explorer_modal_content_header">
      <div class="explorer_modal_content_picture">
        <img :src="activeContent.picture" :alt="activeContent.title" />
      </div>
      <div class="explorer_modal_content_agency_meta">
        <div class="explorer_modal_content_land">
          <div class="explorer_modal_content_land_picture">
            <img
              :src="activeContent.picture_flag"
              :alt="`bandera de ${activeContent.meta.land}`"
            />
          </div>
          <div class="explorer_modal_content_land_name">
            {{ activeContent.meta.land }}
          </div>
        </div>
        <div class="explorer_modal_content_agency">
          {{ activeContent.meta.agency }}
        </div>
      </div>
    </div>
    <div class="explorer_modal_content_title">
      <div class="explorer_modal_content_title_top">
        <h3 class="title">{{ activeContent.title }}</h3>
        <div class="explorer_modal_content_success_flag">
          {{ activeContent.meta.status }}
        </div>
      </div>
      <div class="explorer_modal_content_title_tagline">
        {{ activeContent.subtitle }}
      </div>
    </div>
    <div class="explorer_modal_content_meta">
      <div class="explorer_modal_content_meta_launch_arrival">
        <div
          class="explorer_modal_content_meta_launch"
          v-if="activeContent.meta.launch"
        >
          <span class="label">Lanzamiento</span>
          <ph-dots-three :size="20" />
          <span class="content">{{ activeContent.meta.launch }}</span>
        </div>
        <div
          class="explorer_modal_content_meta_arrival"
          v-if="activeContent.meta.arrival"
        >
          <span class="label">Llegada</span>
          <ph-dots-three :size="20" />
          <span class="content">{{ activeContent.meta.arrival }}</span>
        </div>
      </div>
      <div
        class="explorer_modal_content_meta_place"
        v-if="activeContent.meta.place"
      >
        <span class="label">Lugar</span>
        <ph-dots-three :size="20" />
        <span class="content">{{ activeContent.meta.place }}</span>
      </div>
      <div
        class="explorer_modal_content_meta_activity"
        v-if="activeContent.meta.activity"
      >
        <span class="label">Período de actividad</span>
        <ph-dots-three :size="20" />
        <span class="content">{{ activeContent.meta.activity }}</span>
      </div>
    </div>
    <div class="explorer_modal_content_collapsible" v-if="activeContent.goals">
      <collapsible :opened="true">
        <template v-slot:handler>Objetivos</template>
        <template v-slot:content>
          <ul>
            <li v-for="(item, i) in n2Array(activeContent.goals)" :key="i">
              {{ item }}
            </li>
          </ul>
        </template>
      </collapsible>
    </div>
    <div
      class="explorer_modal_content_collapsible"
      v-if="activeContent.instruments"
    >
      <collapsible :opened="false">
        <template v-slot:handler>Instrumentos que transporta</template>
        <template v-slot:content>
          <ul>
            <li
              v-for="(item, i) in n2Array(activeContent.instruments)"
              :key="i"
            >
              {{ item }}
            </li>
          </ul>
        </template>
      </collapsible>
    </div>
    <div
      class="explorer_modal_content_collapsible"
      v-if="activeContent.curiosities"
    >
      <collapsible :opened="false">
        <template v-slot:handler>Curiosidades</template>
        <template v-slot:content>
          <ul>
            <li
              v-for="(item, i) in n2Array(activeContent.curiosities)"
              :key="i"
            >
              {{ item }}
            </li>
          </ul>
        </template>
      </collapsible>
    </div>
    <div
      class="explorer_modal_content_collapsible"
      v-if="activeContent.contribution"
    >
      <collapsible :opened="false">
        <template v-slot:handler>Contribución</template>
        <template v-slot:content>
          <ul>
            <li
              v-for="(item, i) in n2Array(activeContent.contribution)"
              :key="i"
            >
              {{ item }}
            </li>
          </ul>
        </template>
      </collapsible>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Collapsible from '../dsys/Collapsible.vue'
//@ts-ignore
import { PhDotsThree } from 'phosphor-vue'
import { n2Array } from './../../lib/sectionUtils'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'ExplorerModalContent',
  components: {
    Collapsible,
    PhDotsThree,
  },
  computed: {
    ...mapState({
      explorerId: (state: any) => state.explorers.explorer.openedId,
    }),
  },
  props: ['activeContent'],
  methods: {
    n2Array(textIn: string): string[] {
      return n2Array(textIn)
    },
  },
  watch: {
    explorerId(nv, ov) {
      if (this.$refs.explorer_modal) {
        //@ts-ignore
        this.$refs.explorer_modal.parentNode.scrollTo(0, 0)
        console.log(this.$children.filter((ch: any) => ch.opened !== undefined))
        this.$children
          .filter((ch: any) => ch.opened !== undefined)
          .slice(1)
          .forEach((vNode: Vue) => {            
            //@ts-ignore
            vNode.toggled = false
          })
      }
    },
  },
})
</script>
<style lang="postcss" scoped>
.explorer_modal_content {
  @apply p-6 text-gray-700;
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
        img {
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
