<template>
  <div>
      <!-- start navbar -->
      <Navbar></Navbar>
      <!-- end navbar -->
      <!-- start CarouselGenerale -->
      <CarouselGenerale></CarouselGenerale>
      <!-- start CarouselGenerale -->

      <!-- start recettesRecettes -->
      <recettesRecettes></recettesRecettes>
      <!-- end recettesRecettes -->

      <!-- start Footer -->
      <Footer></Footer>
      <!-- end Footer -->
  </div>
</template>

<script>
import Navbar from '../Navbar'
import recettesRecettes from '../Visitor/Recettes/recettesRecettes'
import Footer from '../footer'
import CarouselGenerale from '../carrouselGenerale'
export default {
    data() {
        return {}
    },
    components: {
  Navbar,
  Footer,
  recettesRecettes,
  CarouselGenerale
}
}
</script>


<style>

</style>
