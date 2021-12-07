<template>
  <section class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <img src="@/assets/images/bg-header.png" class="w-screen absolute" alt="Header Backgroud">
    <div class="container py-16 flex flex-col md:flex-row md:gap-12 lg:gap-24">
      <div class="md:w-1/2 lg:w-1/3 flex flex-col md:mr-auto w-full mb-16 md:mb-0">
        <div class="w-64">
          <img src="@/assets/images/artwork/hero-about.png" class="object-cover object-center" alt="Hero about">
        </div>
        <h2 class="text-3xl sm:text-4xl text-cool-gray-600 dark:text-cool-gray-50 mb-2 font-semibold">Neem contact op!</h2>
        <p class="leading-relaxed mb-5 text-cool-gray-400">Stuur een bericht naar info@woutpeters.nl of gebruik onderstaand contact formulier:</p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-cool-gray-400">Naam</label>
          <input type="text" id="name" name="name" class="w-full bg-white dark:bg-blue-gray-600 rounded border border-cool-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-cool-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-cool-gray-400">E-mail</label>
          <input type="email" id="email" name="email" class="w-full bg-white dark:bg-blue-gray-600 rounded border border-cool-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-cool-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-cool-gray-400">Bericht</label>
          <textarea id="message" name="message" class="w-full bg-white dark:bg-blue-gray-600 rounded border border-cool-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 h-32 text-base outline-none text-cool-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button class="btn btn-primary text-lg">Verstuur</button>
        <p class="text-xs text-cool-gray-400 mt-3">Contact formulier is momenteel nog in ontwikkeling.</p>
      </div>
      <div class="md:w-1/2 lg:w-2/3 bg-cool-gray-400 rounded-lg overflow-hidden h-96 md:h-auto p-10 flex items-end justify-start relative">
        <iframe class="absolute inset-0" style="filter: grayscale(1) contrast(1.2) opacity(0.4);" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=5.183143615722657%2C51.3535591955468%2C5.636329650878907%2C51.543345864595416&amp;layer=mapnik"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped></style>