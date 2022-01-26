<template>
  <div>
    <!-- start carousel -->
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" :style="{ 'height' : heightCarousel + 'px' }">

  <div class="carousel-inner" style="height:100%">
     <div class="carousel-captione">
        <img src="../../../assets/logo.svg" alt="logo_carousel" data-aos="flip-down">
        <h1>Qualité -  Dévouement  - Humanité</h1>
        <router-link :to="{ name: 'Accueil' }">
        <button class="button-carousel">plus d'info <span></span></button>
        </router-link>
      </div>
    <div class="carousel-item active" data-bs-interval="10000">
    </div>
    <div class="carousel-item" data-bs-interval="10000">
    </div>
   
  </div>
  <!--<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>-->
</div>
    <!-- end carousel -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      heightCarousel : ''
    }
  },
  methods: {},
  mounted() {
    if( document.documentElement.clientWidth < 1049 ) {
      this.heightCarousel =  ( document.documentElement.clientHeight - this.$store.state.heightCarousel ) / 2
    } else {
      this.heightCarousel = document.documentElement.clientHeight - this.$store.state.heightCarousel
    }
  }
}
</script>

<style>
/* start carousel */
.carousel .carousel-item {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background: url(https://www.dailyleader.com/wp-content/uploads/sites/18/2019/08/school-tests.jpg);
    background-size: cover;
    background-color: red;
    background-position: center;
}
.carousel .carousel-inner {
  position: relative;
}
.carousel .carousel-captione {
  position: absolute;
  z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    text-align: center;
    width: 100%;
}
.carousel .carousel-captione img {
  width: 50%;
}
.carousel .carousel-captione h1 {
  text-shadow: 1px 2px 3px #000;
    color: #fcc509;
    font-size: 4em;
}
.carousel .button-carousel {
    background: #256633;
    border: none;
    color: white;
    font-weight: 500;
    padding: 5px 19px;
    border-radius: 20px;
    margin-top: 50px;
}
.carousel .button-carousel span::before {
  font-family: FontAwesome;
  content: "\f105";
}

/* start media */
@media (max-width: 979px) {
  .carousel .carousel-captione h1 {
    font-size: 3em;
}
}
@media (max-width: 707px) {
  .carousel .carousel-captione h1 {
    font-size: 2em;
}
}
/* end media */


/* end carousel */
</style>
