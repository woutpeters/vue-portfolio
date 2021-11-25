<template>
  <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-2">
    <div class="w-full sm:w-1/3 text-left">
      <h1 class="text-3xl sm:text-4xl text-ternary-dark dark:text-gray-50 mb-3 text-center sm:text-left font-semibold">Hallo, ik ben Wout 👋</h1>
      <p class="text-gray-500 dark:text-gray-400 mb-8 text-center sm:text-left leading-relaxed">Front-end Developer & Designer</p>
      <div class="flex justify-center sm:justify-start mb-4 sm:mb-0">
        <router-link class="inline-flex text-gray-700 bg-gray-100 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition-colors" :to="{name: 'contact'}">Contact</router-link>
      </div>
    </div>
    <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6 sm:ml-3">
      <img v-if="theme === 'light'" src="@/assets/images/designer.svg" class="object-cover object-center rounded" alt="hero">
      <img v-else src="@/assets/images/designer-dark.svg" class="object-cover object-center rounded" alt="hero">
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppBanner',
  data: () => {
    return {
      theme: '',
    };
  },
  created() {
    this.theme = localStorage.getItem('theme') || 'light';
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'light';
  }
};
</script>

<style scoped></style>