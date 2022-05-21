<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/header/index.vue';
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <Header />

    <main class="my-5">
      <RouterView />
    </main>
  </div>
</template>
