<template>
<div class="splash">
    <div class="loading"></div>
    <div>preparando amartizaje...</div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Splash',

})
</script>

<style lang="postcss" scoped>

.splash {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #0c0c0c;
    color: white
  }
  .loading {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    border: 6px solid rgba(56, 61, 4, 0.705);
    border-radius: 50%;
    border-top-color: #edcb0a;
    animation: spin 1s ease-in-out infinite;
    margin-bottom: 2em;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
