<template>
  <section class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <div class="container flex flex-col sm:justify-between items-center py-32">
      <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
        <img v-if="theme === 'light'" src="@/assets/images/designer.svg" class="object-cover object-center rounded" alt="hero">
        <img v-else src="@/assets/images/designer-dark.svg" class="object-cover object-center rounded" alt="hero">
      </div>
      <div class="bg-hero-home bg-cover w-full"></div>
      <div class="w-full sm:w-1/3">
        <h1 class="text-3xl sm:text-4xl dark:text-gray-50 mb-2 text-center font-semibold">Hallo, ik ben Wout 👋</h1>
        <p class="sm:text-xl text-gray-500 dark:text-gray-400 mb-16 text-center leading-relaxed">Front-end Developer & Designer</p>
        <div class="flex justify-center gap-4">
          <router-link class="btn btn-primary text-lg" :to="{name: 'projects'}">Bekijk projecten</router-link>
          <router-link class="btn btn-secondary text-lg" :to="{name: 'contact'}">Contact</router-link>
        </div>
      </div>
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