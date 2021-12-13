<template>
  <main>
    <section class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <img src="@/assets/images/bg-header.png" class="w-screen absolute" alt="Header Backgroud">
      <div class="container relative flex flex-col items-start py-16">
        <div class="w-64 max-w-full px-8 py-6">
          <img src="@/assets/images/artwork/hero-project.svg" class="object-cover object-center" alt="Hero projects">
        </div>
        <div class="text-left">
          <h2 class="text-3xl sm:text-4xl text-cool-gray-600 dark:text-cool-gray-50 mb-2 font-semibold">Project Portfolio</h2>
          <p class="sm:text-xl text-cool-gray-400 leading-relaxed">Overzicht met de meest recente projecten</p>
        </div>
      </div>
    </section>
    <ProjectsGrid />
  </main>
</template>

<script>
import ProjectsGrid from '@/components/ProjectsGrid';
import feather from 'feather-icons';

export default {
  name: 'Projects',
  components: {
    ProjectsGrid
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
}
</script>

<style scoped></style>