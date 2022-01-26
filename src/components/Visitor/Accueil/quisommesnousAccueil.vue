<template>
  <div class="Qui_sommes_nous container">
    <div class="title_Qui_sommes_nous text-center">
      <h2 class="titre">QUI SOMMES NOUS</h2>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-xxl-4 col-lg-4 col-md-6 img-left" data-aos="fade-right">
        <div class="img">
          <img src="https://anoloc.fr/wp-content/uploads/2020/03/qui-sommes-nous-2.jpg" alt="photo image qui sommes nous">
        </div>
      </div>
      <div class="col-xxl-4 col-lg-4 col-md-6 difinition-right" data-aos="fade-left">
        <div class="difinition">
          <h2>Pourquoi l'utiliser ?</h2>
          <p>
            Le Lorem Ipsum est simplement du faux texte 
            employé dans la composition et la mise en page
            avant impression. Le Lorem Ipsum est le faux texte
            standard de l'imprimerie depuis les années 1500,
            quand un imprimeur anonyme assembla ensemble des
             morceaux de texte pour réaliser un livre spécimen
              de polices de texte. Il n'a pas fait que survivre
               cinq siècles, mais s'est aussi adapté à la bureautique informatique, 
          </p>
          <div class="plus_info text-left">
    <router-link :to="{ name: 'QuiSommesNous' }" class="btn button_plus_info">
      plus d'info
      <span></span>
    </router-link>
            
  </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {},
  mounted() {
  }
}
</script>

<style>
.Qui_sommes_nous .difinition {
    padding: 30px;
}
.Qui_sommes_nous .difinition p {
    line-height: 1.2;
    text-align: justify;
}
.Qui_sommes_nous {
  padding: 20px 0;
}
.Qui_sommes_nous .img {
  height: 100%;
}
.Qui_sommes_nous img {
  border-radius: 5px;
  width: 100%;
    height: 100%;
}
.Qui_sommes_nous .plus_info .button_plus_info {
    background: #256633;
    padding: 6px 22px;
    border-radius: 30px;
    color: white;
    font-size: 12px;
    align-items: center;
    justify-content: center;
}
.Qui_sommes_nous .plus_info span::before {
  font-family: FontAwesome;
  content: "\f105";
}

/* start media */
@media (max-width: 557px) {
  .Qui_sommes_nous .difinition {
    text-align: center;
}
}
/* end media */
</style>
