<template>
  <section class="bg-cool-gray-50 dark:bg-blue-gray-800 py-16">
    <div class="container">
      <h2 class="text-xl sm:text-2xl text-cool-gray-600 dark:text-cool-gray-50 mb-6 font-semibold">Screenshots</h2>
      <div class="sm:flex gap-8 mb-16">
        <div class="flex w-full mb-4 sm:mb-0">
          <div class="rounded-lg shadow h-96 w-full overflow-hidden">
            <img class="object-cover object-center h-full w-full" :src="require(`@/assets/images/${singleProjectImages.image}`)" :alt="singleProjectImages.title">
          </div>
        </div>
        <div class="flex w-full">
          <div class="rounded-lg shadow h-96 w-full overflow-hidden">
            <img class="object-cover object-center h-full w-full" :src="require(`@/assets/images/${singleProjectImages.image}`)" :alt="singleProjectImages.title">
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <a @click="$router.go(-1)" class="btn btn-primary text-lg cursor-pointer">Ga terug</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SingleProjectImages',
  props: ['singleProjectImages'],
};
</script>

<style scoped></style>