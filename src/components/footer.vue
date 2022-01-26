<template>
<!-- start footer -->
  <div class="footer">
    <div class="maps" data-aos="fade-up">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11050.261470957426!2d6.127334!3d46.179307!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sfr!2sma!4v1639167607916!5m2!1sfr!2sma" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="media" data-aos="fade-up">
      <h2>Site de médias sociaux</h2>
      <ul>
        <li>
          <a href="#" class="logo">
            <img src="../assets/logo01.svg" alt="">
          </a>
        </li>
        <li>
          <a href="#" class="logo">
            <img src="../assets/logo02.svg" alt="">
          </a>
        </li>
        <li>
          <a href="#" class="logo">
            <img src="../assets/logo03.svg" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="bar-footer">
      <div class="row justify-content-md-center">
        <div class="col-md-12 text-center">
          <p>2020 © Matinales - Tous droits réservés. Mentions légales - Paramétres de confidentialité - Politique de cookies</p>
        </div>
      </div>
    </div>
  </div>
  <!-- end footer -->
</template>

<style>
.footer {
    padding: 30px 0 0;
}
.media {
    padding: 35px 0;
}

.footer .media h2 {
    color: #256633;
}


.footer img {
  width: 50px;
}
ul {
  
    margin-top: 0;
    margin-bottom: 1rem;
    list-style-type: none;
    overflow: hidden;
    justify-content: center;
  display: flex;
}
li {
    float: left;
}
a {
  display: block;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}
.media {
  text-align: center;
}
.bar-footer {
    background: #266733;
}
.bar-footer p {
    padding: 10px;
    color: white;
}
.bar-footer .row {
  margin: 0;
}
</style>
