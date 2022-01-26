<template>
  <div class="container produit_accueil" data-aos="fade-up">
    <div class="title_produit_accueil">
      <h2>
        <span>Produits</span>
        
      </h2>
    </div>
    <Carousel :items-to-show="4" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <img src="https://ptitgone-oeufs.fr/wp-content/uploads/2017/02/bo%C3%AEte-de-6-au-sol.jpg" alt="">
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  <div class="plus_info">
    <router-link :to="{ name: 'Produits' }">
    <button class="btn button_plus_info">
      plus d'info
      <span></span>
    </button>
    </router-link>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<style>
.produit_accueil {
    padding: 40px 0;
}
.title_produit_accueil {
    text-align: center;
}
.carousel__item {
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.produit_accueil .plus_info {
  text-align: center;
}
.title_produit_accueil {
    margin-bottom: 34px;
}
.title_produit_accueil span {
    background: #256633;
    padding: 6px 32px;
    border-radius: 30px;
    color: white;
    font-size: 19px;
    align-items: center;
    justify-content: center;
}

.plus_info .button_plus_info {
    background: #256633;
    padding: 6px 22px;
    border-radius: 30px;
    color: white;
    font-size: 12px;
    align-items: center;
    justify-content: center;
}
.plus_info span::before {
  font-family: FontAwesome;
  content: "\f105";
}

.carousel__item img {
    padding: 3px;
    border-radius: 8px;
    width: 100%;
}
.carousel__icon {
  margin-top: 10px !important;
}
</style>