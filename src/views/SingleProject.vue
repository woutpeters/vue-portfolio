<template>
  <main>
    <ProjectSingleHeader :project="project" />
    <ProjectSingleInfo :project="project" />
    <ProjectSingleImages v-if="project.screenshot" :project="project" />
  </main>
</template>

<script>
import info from "@/assets/data/info";
import ProjectSingleHeader from '@/components/ProjectSingleHeader.vue';
import ProjectSingleInfo from '@/components/ProjectSingleInfo.vue';
import ProjectSingleImages from '@/components/ProjectSingleImages.vue';
import feather from 'feather-icons';

export default {
  name: 'SingleProject',
  components: {
    ProjectSingleHeader,
    ProjectSingleInfo,
    ProjectSingleImages,
  },
  props: ['slug'],
	data() {
    return {
      project: info.portfolio.filter((project) => project.slug == this.slug)[0],
    }
  },
  mounted() {
    feather.replace();
    window.scrollTo(0, 0);
  },
  updated() {
    feather.replace();
  }
}
</script>

<style scoped></style>