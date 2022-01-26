<template>
  <div>
      <!-- start navbar -->
      <nav v-bind:class="{'fixed-top': scrollPosition > 0}" id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <router-link :to="{ name: 'Accueil' }" class="navbar-brand">
          <img src="../assets/logo.svg" alt="logo nutri ,oeuf">
        </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="left navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link active-class="active" :to="{ name: 'QuiSommesNous' }" class="nav-link">QUI SOMMES NOUS ?</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" :to="{ name: 'Produits' }" class="nav-link">NOS PRODUITS</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" :to="{ name: 'Recettes' }" class="nav-link">NOS RECETTES</router-link>
        </li>
      </ul>
      <ul class="contact-nav navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link active-class="active" :to="{ name: 'Contact' }" class="nav-link contact" style="color:white">Nous Contactez</router-link>
        </li>
      </ul>
    </div>
    </div>
</nav>
<!-- end navbar -->
  </div>
  <router-view/>
</template>
<script>
export default {
  data() {
    return {
      scrollPosition: null
    }
  },
  methods: {
    // Method fixed navabar in scroll
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
    // end
  },
  mounted() {
    // function pour calculer height de carousel Accueil
    this.$store.state.heightCarousel = document.getElementById('navbar').clientHeight
    // end

    // function pour add class in nav ( scroll )
    window.addEventListener('scroll', this.updateScroll);
    // end

    }
}
</script>

<style>
/* start navbar */
/* start police */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap');
/* end police */
nav {
  
}
.left .nav-item .nav-link {
  color: black;
  position: relative;
}
.left .nav-item .nav-link::before {
    content: '';
    background: red;
    width: 30px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 1s;
}
.left .nav-item .nav-link:hover::before {
    width: 90px;
}
.navbar-light .navbar-nav .nav-link {
  font-family: 'Poppins', sans-serif;
}
.navbar-light .left .nav-link {
    margin-left: 30px;
    font-weight: bold;
}
.contact-nav .contact {
    background: #C2141B;
    padding: 2px 9px;
    border-radius: 30px;
    color: white;
}
.navbar-light .navbar-brand {
    padding: 0;
}
.navbar-light .navbar-brand img {
    width: 50%;
}

/* start media */
@media (min-width: 984px) and (max-width: 1192px) {
  .left .nav-item .nav-link {
  font-size: 14px;
}
}
/* end media */

/* end navbar */
</style>

