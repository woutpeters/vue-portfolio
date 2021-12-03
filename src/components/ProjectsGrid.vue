<template>
  <section class="pt-20 sm:pt-28">
    <div class="text-center">
      <p class="text-2xl sm:text-3xl font-semibold mb-3 text-ternary-dark dark:text-gray-50">Project Portfolio</p>
      <p class="text-gray-500 dark:text-gray-400">Overzicht met de meest recente projecten</p>
    </div>
    <transition-group name="list" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16 gap-4 xl:gap-8">
      <router-link v-for="project in paginatedProjects" :key="project.id" :to="{name:'details',params:{slug:project.slug}}" class="rounded-lg shadow cursor-pointer mb-4 sm:mb-0 bg-gray-50 dark:bg-ternary-dark flex flex-col">
        <div class="card-zoom">
          <div class="card-zoom-image" v-if="project.image" :style="{'background-image': 'url(' + require(`@/assets/images/${project.image}`) + ')'}"></div>
        </div>
        <div class="flex flex-col flex-1 items-center justify-center text-center px-4 py-5">
          <p class="text-xl text-ternary-dark dark:text-gray-50 font-semibold mb-2">{{ project.title }}</p>
          <span class="text-sm bg-white dark:bg-secondary-dark text-gray-500 rounded p-1 inline-flex items-center"><i data-feather="tag" class="w-4 h-4 mr-1"></i>{{ project.category }}</span>
        </div>
      </router-link>
    </transition-group>
    <div class="mt-10 sm:mt-20 flex justify-center">
      <button v-if="showMore" @click="loadMore" class="flex items-center py-2 px-6 rounded bg-blue-600 hover:bg-blue-700 text-white text-lg transition-colors">Meer projecten</button>
    </div>
  </section>
</template>

<script>
import feather from 'feather-icons';
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
.card-zoom {
  @apply relative overflow-hidden h-64 rounded-t-lg;
  will-change: transform;
}
.card-zoom-image {
  @apply absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover;
}
.card-zoom:hover .card-zoom-image {
  @apply scale-125;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}
</style>