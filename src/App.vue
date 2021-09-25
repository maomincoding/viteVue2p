<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world name="Vue 2 + TypeScript + Vite + Composition-api" @update="onUpdate" />
    <async-component />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from '@vue/composition-api'

import HelloWorld from './components/HelloWorld.vue'

const AsyncComponent = defineAsyncComponent(() => import('./components/Async.vue'))

function onUpdate(e: any) {
  console.log(e)
}
</script>
<script lang="ts">
export default {
  name: 'App',
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>