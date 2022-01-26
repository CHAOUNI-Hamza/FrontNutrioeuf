<template>
  <div class="recettes_accueil container">
    <div class="title text-center">
      <h2 class="titre">LES RECETTES</h2>
    </div>
    <div class="row justify-content-md-center">
        <div 
        data-aos="flip-left"
        v-for="(item, index) in items" 
        v-bind:class="[{ 'col-xxl-5 col-lg-5 col-md-6': index%2 == 0 }, 'col-xxl-3 col-lg-3 col-md-4']"
        class="left">

        <div class="img">
          <img src="https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Baked-Eggs-Extraordinaire-CMS.jpg" alt="photo image qui sommes nous" width="100%">
        </div>
      </div>
    </div>

    <div class="plus_info text-center">
      <router-link :to="{ name: 'Recettes' }">
    <button class="btn button_plus_info">
      plus d'info
      <span></span>
    </button>
      </router-link>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colmd5: "col-md-5",
      colmd3: "col-md-3",
      items: [
      { message: 'Foo' },
      { message: 'Bar' },
      { message: 'Bar' },
      { message: 'Bar' },
      { message: 'Bar' }
    ]
    }
  }
}
</script>
<style>
.recettes_accueil .img {
  height: 162px;
} 
.recettes_accueil img {
  height: 100%;
  width: 100%;
  border-radius: 25px;
}

.recettes_accueil {
    padding: 30px 0;
}
.recettes_accueil .left {
  margin-bottom: 20px;
}
.recettes_accueil .right {
  margin-bottom: 20px;
}

.recettes_accueil .plus_info .button_plus_info {
    background: #256633;
    padding: 6px 22px;
    border-radius: 30px;
    color: white;
    font-size: 12px;
    align-items: center;
    justify-content: center;
}
.recettes_accueil .plus_info span::before {
  font-family: FontAwesome;
  content: "\f105";
}
</style>
