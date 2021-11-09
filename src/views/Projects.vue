<template>
  <main class="container mx-auto">
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