<template>
  <main class="container mx-auto">
    <div class="block sm:flex sm:gap-10">
      <div class="w-1/2 sm:w-1/4 mb-6 md:mb-0">
        <img src="@/assets/images/profile.jpg" class="rounded-xl w-96 object-cover object-center shadow" alt="Hero image">
      </div>
      <div class="sm:w-3/4 flex flex-col md:items-start text-left">
        <h1 class="sm:text-3xl text-2xl mb-3 font-semibold text-ternary-dark dark:text-gray-50">Aangenaam!</h1>
        <p class="mb-3 leading-relaxed text-gray-500 dark:text-gray-400">Mijn naam is Wout Peters. Van jongs af aan ben ik al bezig met techniek. Dat begon met het uit elkaar schroeven van computers en daarna weer in elkaar zetten zodat het weer werkt. Mijn passie voor techniek en het werken met computers heeft mij geleid naar de studie ICT & Media Design. Na het afronden van deze studie ben ik aan de slag gegaan als front-end developer.</p>
        <p class="mb-3 leading-relaxed text-gray-500 dark:text-gray-400">In mijn portfolio neem ik websites en projecten op waar ik trots op ben en die ik graag met de buitenwereld deel! Wil je meer weten, dan kom ik graag in <router-link class="text-secondary-dark dark:text-gray-50 font-medium hover:underline" :to="{name: 'contact'}">contact</router-link>. Of bekijk mijn <a href="https://github.com/woutpeters" target="_blank" class="text-secondary-dark dark:text-gray-50 font-medium hover:underline">Github</a> pagina.</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style scoped></style>