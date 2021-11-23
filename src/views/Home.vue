<template>
  <main class="container">
    <AppBanner />
    <ProjectsGrid />
  </main>
</template>

<script>
import AppBanner from '@/components/AppBanner.vue'
import ProjectsGrid from '@/components/ProjectsGrid';

export default {
  name: 'Home',
  components: {
    AppBanner,
    ProjectsGrid
  }
}
</script>

<style scoped></style>