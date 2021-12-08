import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';
import VueScrollTo from 'vue-scrollto';

createApp(App).use(router).use(BackToTop).use(VueScrollTo).mount('#app')