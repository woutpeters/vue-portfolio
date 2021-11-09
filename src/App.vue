<template>
  <div :class="appTheme">
    <AppHeader />
    <router-view :theme="appTheme" />
    <AppFooter />
  </div>
</template>

<script>
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
	}
}
</script>

<style scoped></style>