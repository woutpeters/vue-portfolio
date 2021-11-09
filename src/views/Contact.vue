<template>
  <main class="relative">
    <div class="absolute inset-0 bg-gray-300 pointer-events-none">
      <iframe style="filter: grayscale(1) contrast(1.2) opacity(0.4);" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=5.183143615722657%2C51.3535591955468%2C5.636329650878907%2C51.543345864595416&amp;layer=mapnik"></iframe>
    </div>
    <div class="container py-24 mx-auto flex">
      <div class="lg:w-1/3 md:w-1/2 bg-white dark:bg-ternary-dark rounded-lg shadow p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 class="text-ternary-dark dark:text-gray-50 text-lg mb-1 font-bold">Neem contact op!</h2>
        <p class="leading-relaxed mb-5 text-gray-500 dark:text-gray-400">Stuur een bericht naar info@woutpeters.nl of gebruik onderstaand contact formulier:</p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-400">E-mail</label>
          <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-400">Bericht</label>
          <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Verstuur</button>
        <p class="text-xs text-gray-400 mt-3">Contact formulier is momenteel nog in ontwikkeling.</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style scoped></style>