<script setup>
import { RouterView } from 'vue-router'
import WebSidebar from './components/WebSidebar.vue'
</script>

<template >
  <div class ="page">
    <WebSidebar />
    <RouterView />
  </div>

</template>

<style>
* {
font-family: 'Lato', sans-serif;
padding: 0;
margin: 0;
}

.page {
  display: flex;
}
</style>