<template>
  <div class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <nav id="nav" class="container">
      <div class="z-10 block sm:flex sm:items-center py-8 transition-all">
        <div class="flex items-center px-0">
          <div>
            <router-link class="block" to="/">
              <img v-if="theme === 'light'" src="@/assets/images/logo-dark.svg" class="w-36" alt="Dark logo">
              <img v-else src="@/assets/images/logo-light.svg" class="w-36" alt="Light logo">
            </router-link>
          </div>
          <theme-switcher :theme="theme" @themeChanged="updateTheme" class="block sm:hidden ml-auto btn btn-secondary dark:btn-secondary-dark cursor-pointer" />
          <div class="sm:hidden">
            <button @click="isOpen = !isOpen" type="button" class="bg-white dark:btn-primary shadow-md rounded-lg ml-4 p-2 text-cool-gray-600 dark:text-cool-gray-50 focus:ouline-none">
              <span v-if="isOpen" class="h-7 w-7 flex justify-center items-center"><i data-feather="x"></i></span>
              <span v-if="!isOpen" class="h-7 w-7 flex justify-center items-center"><i data-feather="menu"></i></span>
            </button>
          </div>
        </div>
        <div :class="isOpen ? 'block' : 'hidden'" class="bg-white sm:bg-transparent dark:bg-blue-gray-700 sm:dark:bg-transparent m-0 sm:ml-auto mt-8 sm:mt-0 sm:flex flex-col sm:flex-row p-4 sm:p-0 justify-center items-center shadow sm:shadow-none rounded-lg">
          <router-link to="/projects" class="block w-full sm:w-auto sm:text-lg text-cool-gray-600 dark:text-cool-gray-50 hover:text-teal-500 dark:hover:text-teal-500 transition-colors sm:mx-2 mb-2 sm:mb-0 sm:py-2 sm:px-2">Projecten</router-link>
          <router-link to="/about" class="block w-full sm:w-auto sm:text-lg text-cool-gray-600 dark:text-cool-gray-50 hover:text-teal-500 dark:hover:text-teal-500 transition-colors sm:mx-2 mb-2 sm:mb-0 sm:py-2 sm:px-2 border-t-2 border-cool-gray-50 dark:border-blue-gray-800 pt-3 sm:pt-2 sm:border-t-0">Over mij</router-link>
          <router-link to="/contact" class="block w-full sm:w-auto sm:text-lg text-cool-gray-600 dark:text-cool-gray-50 hover:text-teal-500 dark:hover:text-teal-500 transition-colors sm:mx-2 mb-2 sm:mb-0 sm:py-2 sm:px-2 border-t-2 border-cool-gray-50 dark:border-blue-gray-800 pt-3 sm:pt-2 sm:border-t-0">Contact</router-link>
        </div>
        <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <theme-switcher :theme="theme" @themeChanged="updateTheme" class="ml-10 md:ml-16 btn btn-secondary dark:btn-secondary-dark cursor-pointer" />
        </div>
      </div>
    </nav>
  </div>
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
	@apply text-teal-500;
	@apply dark:text-teal-500;
}
</style>
