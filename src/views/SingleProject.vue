<template>
  <main class="lg:w-4/6 container">
    <ProjectSingleHeader :singleProjectHeader="project" />
    <ProjectSingleInfo :singleProjectInfo="project" />
  </main>
</template>

<script>
import projectList from "@/assets/data/list.json";
import ProjectSingleHeader from '@/components/ProjectSingleHeader.vue';
import ProjectSingleInfo from '@/components/ProjectSingleInfo.vue';
import feather from 'feather-icons';

export default {
  name: 'SingleProject',
  components: {
    ProjectSingleHeader,
    ProjectSingleInfo,
  },
  props: ['slug'],
	data() {
    return {
      project: projectList.filter((project) => project.slug == this.slug)[0],
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

<style scoped></style>