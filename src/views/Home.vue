<template>
  <main>
    <AppBanner />
    <ProjectsIntro />
    <ProjectsGrid />
  </main>
</template>

<script>
import AppBanner from '@/components/AppBanner.vue';
import ProjectsIntro from '@/components/ProjectsIntro';
import ProjectsGrid from '@/components/ProjectsGrid';

export default {
  name: 'Home',
  components: {
    AppBanner,
    ProjectsIntro,
    ProjectsGrid
  }
}
</script>

<style scoped></style>