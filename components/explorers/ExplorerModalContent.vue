<template>
  <div class="explorer_modal_content">
    <div class="explorer_modal_content_header">
      <div class="explorer_modal_content_picture"></div>
      <div class="explorer_modal_content_agency_meta">
        <div class="explorer_modal_content_land">
          <div class="explorer_modal_content_land_picture"></div>
          <div class="explorer_modal_content_land_name"></div>
        </div>
        <div class="explorer_modal_content_agency"></div>
      </div>
    </div>
    <div class="explorer_modal_content_title">
      <div class="explorer_modal_content_title_top">
        <h3 class="title">{{ activeContent.title }}</h3>
        <div class="explorer_modal_content_success_flag"></div>
      </div>
      <div class="explorer_modal_content_title_tagline"></div>
    </div>
    <div class="explorer_modal_content_meta">
      <div class="explorer_modal_content_meta_launch_arrival">
        <div class="explorer_modal_content_meta_launch">
          <span class="label"></span>
          <span class="content"></span>
        </div>
        <div class="explorer_modal_content_meta_arrival">
          <span class="label"></span>
          <span class="content"></span>
        </div>
      </div>
      <div class="explorer_modal_content_meta_place">
        <span class="label"></span>
        <span class="content"></span>
      </div>
      <div class="explorer_modal_content_meta_activity">
        <span class="label"></span>
        <span class="content"></span>
      </div>
    </div>
    <div class="explorer_modal_content_collapsible">
      <collapsible :opened="false">
        <template v-slot:handler>handler</template>
        <template v-slot:content>content</template>
      </collapsible>
    </div>
    <div class="explorer_modal_content_collapsible">
      <collapsible :opened="false">
        <template v-slot:handler>handler</template>
        <template v-slot:content>content</template>
      </collapsible>
    </div>
    <div class="explorer_modal_content_collapsible">
      <collapsible :opened="false">
        <template v-slot:handler>handler</template>
        <template v-slot:content>content</template>
      </collapsible>
    </div>
    <div class="explorer_modal_content_collapsible">
      <collapsible :opened="false">
        <template v-slot:handler>handler</template>
        <template v-slot:content>content</template>
      </collapsible>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Collapsible from '../dsys/Collapsible.vue'
export default Vue.extend({
  name: 'ExplorerModalContent',
  components: {
    Collapsible,
  },
  props: ['activeContent'],
})
</script>
<style lang="postcss" scoped></style>
