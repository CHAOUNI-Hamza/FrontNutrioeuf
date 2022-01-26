<template>
  <div>
      <!-- start navbar -->
      <Navbar></Navbar>
      <!-- end navbar -->

      <!-- start CarouselGenerale -->
      <CarouselGenerale></CarouselGenerale>
      <!-- start CarouselGenerale -->

      <!-- start produits -->
      <produits></produits>
      <!-- end produits -->

      <!-- start Footer -->
      <Footer></Footer>
      <!-- end Footer -->
  </div>
</template>

<script>
import Navbar from '../Navbar'
import produits from '../Visitor/Produits/produits'
import Footer from '../footer'
import CarouselGenerale from '../carrouselGenerale'
export default {
    data() {
        return {}
    },
    components: {
  Navbar,
  Footer,
  produits,
  CarouselGenerale
}
}
</script>


<style>

</style>
