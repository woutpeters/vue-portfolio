<template>
  <section class="bg-white dark:bg-blue-gray-800 dark:bg-opacity-95">
    <div class="container py-10 sm:py-16">
      <div class="text-left">
        <h2 class="text-3xl sm:text-4xl font-semibold text-cool-gray-600 dark:text-cool-gray-50 mb-3 ">Project Portfolio</h2>
        <p class="sm:text-xl text-cool-gray-400">Overzicht met de meest recente projecten</p>
      </div>
      <transition-group name="list" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 sm:mt-16 gap-4 xl:gap-8">
        <router-link v-for="project in paginatedProjects" :key="project.id" :to="{name:'details',params:{slug:project.slug}}" class="rounded-lg shadow cursor-pointer mb-4 sm:mb-0 bg-cool-gray-50 dark:bg-blue-gray-700 flex flex-col">
          <div class="card-zoom">
            <div class="card-zoom-image" v-if="project.image" :style="{'background-image': 'url(' + require(`@/assets/images/${project.image}`) + ')'}"></div>
          </div>
          <div class="flex flex-col flex-1 items-center justify-center text-center px-4 py-8">
            <h4 class="text-xl text-cool-gray-600 dark:text-cool-gray-50 font-semibold mb-2">{{ project.title }}</h4>
            <span class="text-sm text-cool-gray-400 inline-flex items-center"><i data-feather="tag" class="w-4 h-4 mr-1"></i>{{ project.category }}</span>
          </div>
        </router-link>
      </transition-group>
      <div class="mt-10 sm:mt-16 flex justify-center">
        <button v-if="showMore" @click="loadMore" class="btn btn-primary text-lg">Meer projecten</button>
      </div>
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
  @apply relative overflow-hidden h-80 rounded-t-lg;
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