<template>
  <div class="explorer_modal_content">
    <div class="explorer_modal_content_header">
      <div class="explorer_modal_content_picture">pic</div>
      <div class="explorer_modal_content_agency_meta">
        <div class="explorer_modal_content_land">
          <div class="explorer_modal_content_land_picture">pic</div>
          <div class="explorer_modal_content_land_name">USSR</div>
        </div>
        <div class="explorer_modal_content_agency">
          Agencia espacial de la Union soviética
        </div>
      </div>
    </div>
    <div class="explorer_modal_content_title">
      <div class="explorer_modal_content_title_top">
        <h3 class="title">{{ activeContent.title }}</h3>
        <div class="explorer_modal_content_success_flag">Éxito parcial</div>
      </div>
      <div class="explorer_modal_content_title_tagline">
        Primer amartizaje controlado.
      </div>
    </div>
    <div class="explorer_modal_content_meta">
      <div class="explorer_modal_content_meta_launch_arrival">
        <div class="explorer_modal_content_meta_launch">
          <span class="label">Lanzamiento</span>
          <ph-dots-three :size="20" />
          <span class="content">28.03.1971 - 15:26 UTC</span>
        </div>
        <div class="explorer_modal_content_meta_arrival">
          <span class="label">Llegada</span>
          <ph-dots-three :size="20" />
          <span class="content">02.12.1971 - 13.50 UTC</span>
        </div>
      </div>
      <div class="explorer_modal_content_meta_place">
        <span class="label">Lugar</span>
        <ph-dots-three :size="20" />
        <span class="content">Cráter Ptolomeo (Terra Sirenum)</span>
      </div>
      <div class="explorer_modal_content_meta_activity">
        <span class="label">Período de actividad</span>
        <ph-dots-three :size="20" />
        <span class="content">2 minutos (Orbitador 452 días)</span>
      </div>
    </div>
    <div class="explorer_modal_content_collapsible">
      <collapsible :opened="false">
        <template v-slot:handler>Objetivos</template>
        <template v-slot:content>
          <ul>
            <li>Realizar un amartizaje suave en Marte</li>
            <li>Devolver fotografías de la superficie</li>
            <li>
              Enviar datos de las condiciones meteorológicas, de la composición
              atmosférica y de las propiedades mecánicas y químicas del suelo.
            </li>
          </ul>
        </template>
      </collapsible>
    </div>
    <div class="explorer_modal_content_collapsible">
      <collapsible :opened="false">
        <template v-slot:handler>Instrumentos que transporta</template>
        <template v-slot:content>
          <ul>
            <li>Realizar un amartizaje suave en Marte</li>
            <li>Devolver fotografías de la superficie</li>
            <li>
              Enviar datos de las condiciones meteorológicas, de la composición
              atmosférica y de las propiedades mecánicas y químicas del suelo.
            </li>
          </ul>
        </template>
      </collapsible>
    </div>
    <div class="explorer_modal_content_collapsible">
      <collapsible :opened="false">
        <template v-slot:handler>Curiosidades</template>
        <template v-slot:content>
          <ul>
            <li>Realizar un amartizaje suave en Marte</li>
            <li>Devolver fotografías de la superficie</li>
            <li>
              Enviar datos de las condiciones meteorológicas, de la composición
              atmosférica y de las propiedades mecánicas y químicas del suelo.
            </li>
          </ul>
        </template>
      </collapsible>
    </div>
    <div class="explorer_modal_content_collapsible">
      <collapsible :opened="false">
        <template v-slot:handler>Contribución</template>
        <template v-slot:content>
          <ul>
            <li>Realizar un amartizaje suave en Marte</li>
            <li>Devolver fotografías de la superficie</li>
            <li>
              Enviar datos de las condiciones meteorológicas, de la composición
              atmosférica y de las propiedades mecánicas y químicas del suelo.
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

export default Vue.extend({
  name: 'ExplorerModalContent',
  components: {
    Collapsible,
    PhDotsThree,
  },
  props: ['activeContent'],
})
</script>
<style lang="postcss" scoped>
.explorer_modal_content {
  @apply p-6 text-gray-700;
}
.explorer_modal_content_header {
  @apply flex justify-between items-end mb-4;
  .explorer_modal_content_picture {
    @apply bg-gray-200 flex-1 h-52 mr-4;
  }
  .explorer_modal_content_agency_meta {
    max-width: 20ch;
    .explorer_modal_content_land {
      @apply flex items-center;
      .explorer_modal_content_land_picture {
        @apply bg-gray-200 w-8 h-8 rounded-full mr-2;
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
