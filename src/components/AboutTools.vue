<template>
  <div class="mt-10 sm:mt-20 py-20 bg-primary-light dark:bg-ternary-dark">
    <div class="container">
      <div class="text-center mb-8">
        <p class="text-2xl sm:text-3xl font-semibold mb-3 text-ternary-dark dark:text-gray-50">Front-end stack</p>
        <p class="text-gray-500 dark:text-gray-400">Tools en scripttalen die ik gebruik voor mijn projecten</p>
      </div>
      <Carousel v-if="slider.length" :items-to-show="4" :autoplay="2000" :wrap-around="true">
        <Slide v-for="slide in slider" :key="slide">
          <div :id="slide.id" class="carousel__item w-full bg-blue-500 px-4 py-6 rounded-lg">
            <p class="leading-relaxed text-white text-sm">{{slide.name}}</p>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
  
export default defineComponent( {
  name: 'AboutTools',
  data() {
    return {
      slider:[
        {id:1, name:'HTML'},
        {id:2, name:'Bootstrap'},
        {id:3, name:'jQuery'},
        {id:4, name:'Smarty'},
        {id:5, name:'Sass'},
        {id:6, name:'Adobe XD'},
        {id:7, name:'NPM'}
      ]
    }
  },
	components: {
		Carousel,
    Slide
	},
});
</script>

<style scoped>
.carousel__slide {
  padding: 16px;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>