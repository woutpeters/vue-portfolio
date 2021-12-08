<template>
  <div :class="appTheme">
    <AppHeader />
    <router-view v-slot="{ Component, appTheme, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.name" :theme="appTheme">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
    <back-to-top visibleoffset="600" bottom="40px" right="30px" class="p-2 sm:p-4 btn-primary text-cool-gray-50 rounded-lg shadow-md transition-colors"><i class="w-6 sm:w-8 h-6 sm:h-8" data-feather="arrow-up"></i></back-to-top>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transform: translateX(0);
  transition: all .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-1rem);
}
</style>