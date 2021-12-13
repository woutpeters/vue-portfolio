<template>
  <section class="bg-cool-gray-50 dark:bg-blue-gray-800 py-16">
    <div class="container">
      <h2 class="text-xl sm:text-2xl text-cool-gray-600 dark:text-cool-gray-50 mb-6 font-semibold">Screenshots</h2>
      <div class="flex flex-col sm:flex-row gap-8 mb-16">
        <div class="flex w-full" v-for="(image, i) in project.screenshot" :key="i">	
          <div class="rounded-lg shadow h-96 w-full overflow-hidden">
            <img class="object-cover object-center h-full w-full" :src="require(`@/assets/images/${image.image}`)" :alt="image.title">
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
  props: ['project'],
};
</script>

<style scoped></style>