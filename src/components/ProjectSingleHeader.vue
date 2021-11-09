<template>
  <div class="rounded-lg shadow h-64 overflow-hidden">
    <img class="object-cover object-center h-full w-full" :src="require(`@/assets/images/${singleProjectHeader.image}`)" :alt="singleProjectHeader.title">
  </div>
</template>

<script>
export default {
  name: 'SingleProjectHeader',
  props: ['singleProjectHeader'],
};
</script>

<style scoped></style>