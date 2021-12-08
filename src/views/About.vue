<template>
  <main class="bg-cool-gray-50 dark:bg-blue-gray-800">
    <img src="@/assets/images/bg-header.png" class="w-screen absolute" alt="Header Backgroud">
    <div class="container relative flex flex-col items-start py-16">
      <div class="block sm:flex sm:gap-24 lg:gap-48">
        <div class="sm:w-3/4 flex flex-col md:items-start">
          <div class="w-64">
            <img src="@/assets/images/artwork/hero-about.png" class="object-cover object-center" alt="Hero about">
          </div>
          <div class="text-left">
            <h2 class="text-3xl sm:text-4xl text-cool-gray-600 dark:text-cool-gray-50 mb-2 font-semibold">Aangenaam!</h2>
            <p class="text-cool-gray-400 mb-3 leading-relaxed">Mijn naam is Wout Peters. Van jongs af aan ben ik al bezig met techniek. Dat begon met het uit elkaar schroeven van computers en daarna weer in elkaar zetten zodat het weer werkt. Mijn passie voor techniek en het werken met computers heeft mij geleid naar de studie ICT & Media Design. Na het afronden van deze studie ben ik aan de slag gegaan als front-end developer.</p>
            <p class="text-cool-gray-400 mb-3 leading-relaxed">In mijn portfolio neem ik websites en projecten op waar ik trots op ben en die ik graag met de buitenwereld deel! Wil je meer weten, dan kom ik graag in <router-link class="dark:text-cool-gray-50 hover:underline" :to="{name: 'contact'}">contact</router-link>. Of bekijk mijn <a href="https://github.com/woutpeters" target="_blank" class="dark:text-cool-gray-50 hover:underline">Github</a> pagina.</p>
          </div>
        </div>
        <div class="w-3/4 sm:w-1/2">
          <img src="@/assets/images/profile.jpg" class="rounded-xl w-96 object-cover object-center shadow" alt="Hero image">
        </div>
      </div>
    </div>
  </main>
  <AboutTools />
</template>

<script>
import AboutTools from '@/components/AboutTools';
export default {
  name: 'About',
  components: {
		AboutTools
	},
}
</script>

<style scoped></style>