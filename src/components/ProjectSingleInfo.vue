<template>
  <div class="flex flex-col sm:flex-row mt-10">
    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
      <div class="flex flex-col items-center text-center justify-center">
        <h2 class="font-semibold title-font mt-4 dark:text-gray-50 text-lg">{{singleProjectInfo.author}}</h2>
        <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
        <p class="inline-flex items-center text-sm text-gray-500 dark:text-gray-400"><i data-feather="tag" class="w-4 h-4 mr-1"></i>{{singleProjectInfo.category}}</p>
      </div>
    </div>
    <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l-2 sm:border-t-0 border-t-2 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
      <p class="text-xl dark:text-gray-50 font-semibold mb-2">{{singleProjectInfo.title}}</p>
      <p class="leading-relaxed mb-4 text-gray-500 dark:text-gray-400">{{singleProjectInfo.desc}}</p>
      <a class="text-blue-500 hover:text-blue-600 inline-flex items-center" v-if="singleProjectInfo.externalLink" :href="singleProjectInfo.externalLink" target="_blank" ref="noreferrer noopener">Bekijk website
        <i data-feather="external-link" class="w-4 h-4 ml-1"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProjectInfo',
  props: ['singleProjectInfo'],
};
</script>

<style scoped></style>