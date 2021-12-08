<template>
  <section class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <img src="@/assets/images/bg-header.png" class="w-screen absolute" alt="Header Backgroud">
    <div class="container relative flex flex-col items-center py-16 sm:py-32">
      <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
        <img src="@/assets/images/artwork/hero-home.png" class="object-cover object-center" alt="Hero home">
      </div>
      <div class="text-center">
        <h1 class="text-3xl sm:text-4xl text-cool-gray-600 dark:text-cool-gray-50 mb-2 font-semibold">Hallo, ik ben Wout 👋</h1>
        <p class="sm:text-xl text-cool-gray-400 mb-16 leading-relaxed">Front-end Developer & Designer</p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button @click="scrollToElement({behavior: 'smooth'})" class="btn btn-primary text-lg">Bekijk projecten</button>
          <router-link class="btn btn-secondary dark:btn-secondary-dark text-lg" :to="{name: 'contact'}">Contact</router-link>
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
  },
  methods: {
		scrollToElement(options) {
      const el = document.getElementById('intro');
      if (el) {
        el.scrollIntoView(options);
      }
		}
	},
};
</script>

<style scoped></style>