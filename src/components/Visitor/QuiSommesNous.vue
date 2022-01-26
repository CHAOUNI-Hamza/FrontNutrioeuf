<template>
  <div>
      <!-- start navbar -->
      <Navbar></Navbar>
      <!-- end navbar -->

      <!-- start CarouselGenerale -->
      <CarouselGenerale></CarouselGenerale>
      <!-- start CarouselGenerale -->

      <!-- start presentationQuiSommesNous -->
      <presentationQuiSommesNous></presentationQuiSommesNous>
      <!-- end presentationQuiSommesNous -->

      <!-- start ValeurQuiSommesNous -->
      <ValeurQuiSommesNous></ValeurQuiSommesNous>
      <!-- end ValeurQuiSommesNous -->

      <!-- start Footer -->
      <Footer></Footer>
      <!-- end Footer -->
  </div>
</template>

<script>
import Navbar from '../Navbar'
import presentationQuiSommesNous from '../Visitor/QuiSommesNous/presentationQuiSommesNous'
import ValeurQuiSommesNous from '../Visitor/QuiSommesNous/ValeurQuiSommesNous.vue'
import CarouselGenerale from '../carrouselGenerale'
import Footer from '../footer'
export default {
    data() {
        return {}
    },
    components: {
  Navbar,
  Footer,
  presentationQuiSommesNous,
  CarouselGenerale,
  ValeurQuiSommesNous
}
}
</script>


<style>

</style>
