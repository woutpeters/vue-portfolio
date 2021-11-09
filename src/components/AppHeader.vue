<template>
  <nav id="nav" class="container mx-auto">
    <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-7 sm:py-6">
      <div class="flex justify-between items-center px-0">
        <div>
          <router-link class="block" to="/">
            <img v-if="theme === 'light'" src="@/assets/images/logo-dark.svg" class="w-36" alt="Dark logo">
            <img v-else src="@/assets/images/logo-light.svg" class="w-36" alt="Light logo">
          </router-link>
        </div>
        <theme-switcher :theme="theme" @themeChanged="updateTheme" class="block sm:hidden ml-10 text-gray-400 hover:text-blue-400 bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 px-2.5 py-2 rounded-lg shadow" />
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" class="focus:ouline-none">
            <span v-if="isOpen" class="h-7 w-7 text-secondary-dark dark:text-ternary-light"><i data-feather="x"></i></span>
            <span v-if="!isOpen" class="h-7 w-7 text-secondary-dark dark:text-ternary-light"><i data-feather="menu"></i></span>
          </button>
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="m-0 sm:ml-4 mt-5 sm:mt-0 sm:flex p-5 sm:p-0 justify-center items-center shadow sm:shadow-none">
        <router-link to="/projects" class="block text-left sm:text-lg font-medium text-primary-dark hover:text-blue-400 dark:text-gray-50 dark:hover:text-blue-400 sm:mx-4 mb-2 sm:mb-0 sm:py-2">Projecten</router-link>
        <router-link to="/about" class="block text-left sm:text-lg font-medium text-primary-dark hover:text-blue-400 dark:text-gray-50 dark:hover:text-blue-400 sm:mx-4 mb-2 sm:mb-0 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">Over mij</router-link>
        <router-link to="/contact" class="block text-left sm:text-lg font-medium text-primary-dark hover:text-blue-400 dark:text-gray-50 dark:hover:text-blue-400 sm:mx-4 mb-2 sm:mb-0 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">Contact</router-link>
      </div>
      <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
        <theme-switcher :theme="theme" @themeChanged="updateTheme" class="ml-8 text-gray-400 hover:text-blue-400 bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 px-2.5 py-2 rounded-lg shadow cursor-pointer" />
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher';
import feather from 'feather-icons';

export default {
  name: 'AppHeader',
  components: {
    ThemeSwitcher
  },
  data() {
    return {
      isOpen: false,
      theme: '',
      modal: false,
    };
  },
  created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		}
	},
  updated() {
		feather.replace();
	},
}
</script>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-blue-500;
	@apply dark:text-blue-400;
}
</style>
