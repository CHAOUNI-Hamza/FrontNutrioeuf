<template>
  <div>
    <!-- start carousel -->
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" :style="{ 'height' : heightCarousel + 'px' }">

  <div class="carousel-inner" style="height:100%">
     <div class="carousel-captione">
          <h1>{{ titlePage }}</h1>
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
      // variable pour remplir numbre height carousel
      heightCarousel : '',
      // pour remplir contenu de ce titre
      titlePage : ''
    }
  },
  methods: {
    // funtion pour remplir le mot exact pour chaque route
    TitlePage() {
      if( this.$route.name == 'Contact' ) {
        this.titlePage = 'CONTACTS'
      } else if( this.$route.name == 'Recettes' ) {
        this.titlePage = 'RECETTES'
      } else if( this.$route.name == 'Produits' ) {
        this.titlePage = 'PRODUITS'
      } else if( this.$route.name == 'QuiSommesNous' ) {
        this.titlePage = 'QUI SOMMES NOUS'
      }
    }
    // end
  },
  mounted() {
    // pour calcule height carousel
    this.heightCarousel = (document.documentElement.clientHeight - this.$store.state.heightCarousel) / 2
    // start method Title Page
    this.TitlePage()
  }
}
</script>

<style>
/* start carousel */
.carousel-item {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background: url(https://www.dailyleader.com/wp-content/uploads/sites/18/2019/08/school-tests.jpg);
    background-size: cover;
    background-color: red;
    background-position: center;
}
.carousel-inner {
  position: relative;
}
.carousel-captione {
  position: absolute;
  z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    text-align: center;
    width: 100%;
}
.button-carousel {
    background: #256633;
    border: none;
    color: white;
    font-weight: 500;
    padding: 5px 19px;
    border-radius: 20px;
    margin-top: 50px;
}
.button-carousel span::before {
  font-family: FontAwesome;
  content: "\f105";
}
/* end carousel */
</style>
