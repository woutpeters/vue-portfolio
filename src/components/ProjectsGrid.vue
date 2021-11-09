<template>
  <section class="pt-20 sm:pt-28">
    <div class="text-center">
      <p class="text-2xl sm:text-3xl font-semibold mb-3 text-ternary-dark dark:text-gray-50">Projects Portfolio</p>
      <p class="text-gray-500 dark:text-gray-400">Overzicht met de meest recente projecten</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-4 mt-16 gap-4 xl:gap-8">
      <router-link v-for="project in paginatedProjects" :key="project.id" :to="{name:'details',params:{slug:project.slug}}" class="rounded-lg shadow cursor-pointer mb-4 sm:mb-0 bg-gray-50 dark:bg-ternary-dark">
      <div>
        <img v-if="project.image" :src="require(`@/assets/images/${project.image}`)" :alt="project.title" class="rounded-t-lg mx-auto border-none">
      </div>
      <div class="text-center px-4 py-5">
        <p class="text-xl text-ternary-dark dark:text-gray-50 font-semibold mb-2">{{ project.title }}</p>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.category }}</span>
      </div>
      </router-link>
    </div>
    <div class="mt-10 sm:mt-20 flex justify-center">
      <button v-if="showMore" @click="loadMore" class="flex items-center py-2 px-6 rounded bg-blue-500 hover:bg-blue-600 text-white text-lg">Meer projecten</button>
    </div>
  </section>
</template>

<script>
import projectList from "@/assets/data/list.json";

export default {
  name: 'Projects',
  data() { 
    return  { 
      projects: projectList,
      projectsToShow: 4,
      projectsToAdd: 4,
      showMore: true
    };  
  },
  computed: {
    paginatedProjects() {
      return this.projects.slice(0, this.projectsToShow);
    }
  },
  methods: {
    loadMore() {
      this.projectsToShow += this.projectsToAdd;
      this.showMore = this.projectsToShow < this.projects.length;
    }
  }
}
</script>

<style scoped></style>