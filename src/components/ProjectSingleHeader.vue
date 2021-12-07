<template>
  <section class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <img src="@/assets/images/bg-header.png" class="w-screen absolute" alt="Header Backgroud">
    <div class="container relative flex flex-col py-16">
      <div class="rounded-lg shadow h-64 sm:w-3/4 md:w-1/2 overflow-hidden">
        <img class="object-cover object-center h-full w-full" :src="require(`@/assets/images/${singleProjectHeader.image}`)" :alt="singleProjectHeader.title">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SingleProjectHeader',
  props: ['singleProjectHeader'],
};
</script>

<style scoped></style>