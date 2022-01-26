<template>
  <div class="choixproduit" data-aos="fade-up">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <nav class="nav justify-content-center">
  <a class="nav-link active" href="#">Touts</a>
  <a class="nav-link" href="#">Fermier</a>
  <a class="nav-link" href="#">Jaune Orange</a>
  <a class="nav-link ">Simple</a>
</nav>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    components: {
        
    },
}
</script>
<style>
.choixproduit .container {
  max-width: 846px;
}
.nav {
    background: #266733;
    padding: 5px;
    border-bottom: 5px solid #e0e0e0;
    border-radius: 13px;
}
.nav .nav-link {
  color: white;
  padding: 0.5rem 3.5rem;
  border-left: 1px solid white;
}
.nav .nav-link:hover {
  color: #266733;
  background-color: white;
}
.nav .nav-link:first-of-type {
  border-left : none;
}

/* start media */
@media (max-width: 707px) {
  .nav {
    display: inline-block !important;
}
}
/* end media */
</style>
