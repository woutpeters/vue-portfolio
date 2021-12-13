<template>
  <section class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <img src="@/assets/images/bg-header.png" class="w-screen absolute" alt="Header Backgroud">
    <div class="container relative flex flex-col items-center py-16 sm:py-32">
      <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6 px-14 py-12">
        <img src="@/assets/images/artwork/hero-404.svg" class="object-cover object-center" alt="Hero 404">
      </div>
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl text-cool-gray-600 dark:text-cool-gray-50 mb-3 font-semibold">Sorry, de pagina die u zoekt kan niet worden gevonden</h2>
        <p class="sm:text-xl text-cool-gray-400 mb-16 leading-relaxed">We hebben ons best gedaan, maar het lijkt erop dat deze pagina niet (meer) bestaat of misschien verhuisd is.</p>
        <div class="flex justify-center">
          <router-link class="btn btn-primary text-lg" :to="{name: 'home'}">Terug naar de homepage</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped></style>