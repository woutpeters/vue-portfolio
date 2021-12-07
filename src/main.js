import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';

createApp(App).use(router).use(BackToTop).mount('#app')

const appTheme = localStorage.getItem('theme');

// Check what is the active theme
if (appTheme === 'dark' && document.querySelector('body').classList.contains('app-theme')) {
  document.querySelector('body').classList.add('bg-blue-gray-800');
} else {
  document.querySelector('body').classList.add('bg-cool-gray-50');
}