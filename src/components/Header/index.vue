<script setup lang="ts"></script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div
      class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
    >
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <span class="sr-only">Workflow</span>
          <img
            class="h-10 w-auto sm:h-10"
            src="https://pbs.twimg.com/profile_images/1348824723585708032/splbP9wU_400x400.jpg"
            alt=""
          />
        </a>
      </div>

      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a
          href="#"
          class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Sign in
        </a>
        <a
          href="#"
          class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign up
        </a>
      </div>
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
