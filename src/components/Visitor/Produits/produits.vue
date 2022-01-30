<template>
  <div class="produits">
    <!-- start choix produits -->
    <choixProduits></choixProduits>
    <!-- end choix produits -->
    <div class="container">
    
    <div class="typeproduits">
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <div class="row">
            <div  class="col-xxl-4 col-lg-4 col-md-6 col-sm-12 text-center" data-aos="fade-up">
          <div class="card" style="width: 100%">
  <img src="https://ptitgone-oeufs.fr/wp-content/uploads/2017/02/bo%C3%AEte-de-6-au-sol.jpg" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
          </div>
        </div>
        
        
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import choixProduits from '../Produits/choixProduits.vue'
export default {
    data() {
        return {
          tests: { 1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:'' }
        }
    },
    components: {
        choixProduits
    }
}
</script>
<style>
.produits .container {
  max-width: 846px;
}
.produits {
    padding: 30px 0;
}
.produits .card {
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
    border-radius: 28px;
    margin-bottom: 20px;
}
.produits .card img {
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  padding: 15px 15px 0;
}
.produits .typeproduits {
  padding: 30px 0;
}
</style>
