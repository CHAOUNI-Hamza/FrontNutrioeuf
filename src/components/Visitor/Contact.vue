<template>
  <div>
    
      <!-- start navbar -->
      <Navbar></Navbar>
      <!-- end navbar -->

      <!-- start CarouselGenerale -->
      <CarouselGenerale></CarouselGenerale>
      <!-- start CarouselGenerale -->

      <!-- start formulaireContact -->
      <formulaireContact></formulaireContact>
      <!-- end formulaireContact -->

      <!-- start Footer -->
      <Footer></Footer>
      <!-- end Footer -->
  </div>
</template>

<script>
import Navbar from '../Navbar'
import formulaireContact from '../Visitor/Contact/formulaireContact'
import Footer from '../footer'
import CarouselGenerale from '../carrouselGenerale'
export default {
    data() {
        return {}
    },
    components: {
  Navbar,
  Footer,
  formulaireContact,
  CarouselGenerale
}
}
</script>


<style>

</style>
