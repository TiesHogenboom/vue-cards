<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'home' }"></RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>