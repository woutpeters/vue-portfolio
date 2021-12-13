<template>
  <section class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <div class="container">
      <div class="text-left sm:w-3/4">
        <h2 class="text-3xl sm:text-4xl text-cool-gray-600 dark:text-cool-gray-50 mb-2 font-semibold">{{project.title}}</h2>
        <p class="flex items-center text-cool-gray-400 mb-3 leading-relaxed"><i data-feather="tag" class="w-4 h-4 mr-1"></i>{{project.category}}</p>
      </div>
      <div class="w-12 h-1 bg-teal-500 rounded mt-2 mb-4"></div>
      <div class="text-left sm:w-3/4">
        <p class="leading-relaxed mb-4 text-gray-500 dark:text-gray-400">{{project.description}}</p>
        <a class="text-teal-500 hover:text-teal-600 inline-flex items-center" v-if="project.externalLink" :href="project.externalLink" target="_blank" ref="noreferrer noopener"><i data-feather="external-link" class="w-4 h-4 mr-1"></i>Bekijk website</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SingleProjectInfo',
  props: ['project'],
};
</script>

<style scoped></style>