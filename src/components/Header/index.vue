<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div
    class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
  >
    <div class="flex justify-start lg:w-0 lg:flex-1">
      <router-link to="/">
        <span class="sr-only">Phase 10</span>
        <img class="h-10 w-auto sm:h-10" src="@/assets/logo.jpeg" alt="" />
      </router-link>
    </div>

    <div class="md:flex items-center justify-end md:flex-1 lg:w-0">
      <router-link
        :to="{ name: 'new-game' }"
        class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        New Game
      </router-link>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
