<template>
  <div :class="appTheme">
    <AppHeader />
    <router-view :theme="appTheme" />
    <back-to-top visibleoffset="600" bottom="40px" right="30px" class="p-2 sm:p-4 bg-blue-500 hover:blue-blue-600 text-white rounded-lg shadow-md"><i data-feather="arrow-up"></i></back-to-top>
    <AppFooter />
  </div>
</template>

<script>
import feather from 'feather-icons';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'App',
	components: {
		AppHeader,
    AppFooter
	},
  data: () => {
		return {
			appTheme: localStorage.getItem('theme'),
		};
	},
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
}
</script>

<style scoped></style>