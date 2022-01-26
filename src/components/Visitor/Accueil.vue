<template>
  <div>
      <!-- start navbar -->
      <Navbar></Navbar>
      <!-- end navbar --> 

      <!-- start CarouselNavbar -->
      <CarouselNavbar></CarouselNavbar>
      <!-- end CarouselNavbar -->

      <!-- start produitsAccueil -->
      <ProduitsAccueil></ProduitsAccueil>
      <!-- end produitsAccueil -->

      <!-- start CuisommesnousAccueil -->
      <QuisommesnousAccueil></QuisommesnousAccueil>
      <!-- end CuisommesnousAccueil -->

      <!-- start RecettesAccueil -->
      <RecettesAccueil></RecettesAccueil>
      <!-- end RecettesAccueil -->
      
      <!-- start Footer -->
      <Footer></Footer>
      <!-- end Footer -->
  </div>
</template>

<script>
import CarouselNavbar from './Accueil/carouselAccueil'
import ProduitsAccueil from './Accueil/produitsAccueil'
import QuisommesnousAccueil from './Accueil/quisommesnousAccueil'
import RecettesAccueil from './Accueil/recettesAccueil'
import Navbar from '../Navbar'
import Footer from '../footer'
export default {
    data() {
        return {}
    },
    components: {
  Navbar,
  CarouselNavbar,
  ProduitsAccueil,
  QuisommesnousAccueil,
  RecettesAccueil,
  Footer
}
}
</script>


<style>

</style>
