<template>
  <section class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <div class="container pb-16 block sm:flex sm:justify-between sm:items-center">
      <div class="flex flex-1 flex-col items-center mb-3 sm:mb-0">
        <counter ref="counter" :startAmount="0" :endAmount="8" :duration="1" :autoinit="true" class="text-3xl sm:text-4xl font-semibold mb-3 text-cool-gray-600 dark:text-cool-gray-50" aria-label="Aantal jaar ervaring" />
        <span class="block sm:text-md text-cool-gray-400">Aantal jaar ervaring</span>
      </div>
      <div class="flex flex-1 flex-col items-center mb-3 sm:mb-0">
        <counter ref="counter" :startAmount="0" :endAmount="4" :duration="1" :autoinit="true" class="text-3xl sm:text-4xl font-semibold mb-3 text-cool-gray-600 dark:text-cool-gray-50" aria-label="Professioneel actief" />
        <span class="block sm:text-md text-cool-gray-400">Professioneel actief</span>
      </div>
      <div class="flex flex-1 flex-col items-center">
        <counter ref="counter" :startAmount="0" :endAmount="100" :duration="1" :autoinit="true" suffix="+" class="text-3xl sm:text-4xl font-semibold mb-3 text-cool-gray-600 dark:text-cool-gray-50" aria-label="Projecten afgerond" />
        <span class="block sm:text-md text-cool-gray-400">Projecten afgerond</span>
      </div>
    </div>
  </section>
</template>

<script>
import counter from 'vue3-autocounter';
export default {
  name: 'AppCounter',
  components: {
    counter,
  },
  setup() {},
}
</script>

<style scoped></style>