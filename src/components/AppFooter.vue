<template>
  <footer class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <div class="container pt-20 sm:pt-30 pb-8">
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p class="text-xl font-semibold dark:text-gray-50 mb-5">Volg mij</p>
        <div class="flex flex-col sm:flex-row gap-4 xl:gap-8">
          <a v-for="social in socials" :key="social.id" :href="social.url" :aria-label="social.name" target="_blank" rel="noreferrer noopener" class="btn-secondary text-cool-gray-400 cursor-pointer rounded-lg shadow-md transition-colors p-4">
            <i :data-feather="social.icon" class="w-6 sm:w-8 h-6 sm:h-8"></i>
          </a>
        </div>
      </div>
      <div class="flex justify-center items-center text-center">
        <div class="text-base dark:text-gray-400">
          &copy; Copyright {{ copyrightDate }}
          <a href="https://wpeters.me/" target="_blank" class="dark:text-gray-50 font-medium hover:underline">wpeters.me</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import feather from 'feather-icons';

export default {
  name: 'AppFooter',
  data() {
    return {
      copyrightDate: new Date().getFullYear(),
      socials: [
        {
          id: 1,
          name: 'GitHub',
          icon: 'github',
          url: 'https://github.com/woutpeters',
        },
        {
          id: 2,
          name: 'Twitter',
          icon: 'twitter',
          url: 'https://twitter.com/woutpeters_',
        },
        {
          id: 3,
          name: 'Instagram',
          icon: 'instagram',
          url: 'https://www.instagram.com/woutpeters/',
        },
        {
          id: 4,
          name: 'LinkedIn',
          icon: 'linkedin',
          url: 'https://www.linkedin.com/in/wout-peters-69531457',
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped></style>