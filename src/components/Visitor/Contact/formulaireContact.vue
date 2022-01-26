<template>
  <div>
    
    <div class="contact container-fluid">
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-9 left" data-aos="fade-right">
          <div class="form">
            <div class="title">
              <h2>Contactez nous</h2>
            </div>
            <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Nom et Prénom</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput2">Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="">
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea3">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
  </div>
  <button class="button-message">ENVOYER</button>
</form>
          </div>
        </div>
        <div class="col-xxl-3 col-lg-3 col-md-5 col-sm-9 right" data-aos="fade-left">
          <div>
            <div class="row">
            <div class="col-md-12 text-center">
              <div class="info">
                <div class="logo">
                  <img src="../../../assets/contact/local.png" alt="">
                </div>
                <div class="des">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</div>
              </div>
            </div>
            <div class="col-md-12 text-center">
              <div class="info">
                <div class="logo">
                  <img src="../../../assets/contact/tel.png" alt="">
                </div>
                <div class="des">
                  +212 06 00 00 00<br>
                  +212 07 00 00 00
                </div>
              </div>
            </div>
            <div class="col-md-12 text-center">
              <div class="info">
                <div class="logo">
                  <img src="../../../assets/contact/email.png" alt="">
                </div>
                <div class="des">contact@ovocorp.ma</div>
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
  
export default {
  
  data() {
    return {
    }
  },
  methods: {},
  mounted() {
  },
  components: {
    
  }
}
</script>
<style>
.contact {
    padding: 52px 0px;
}
.contact .left, .contact .right {
    padding: 22px;
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
    margin-left: 21px;
    border-left: 5px solid #256633;
    border-right: 5px solid #256633;
    border-radius: 9px;

}
.contact .form-group {
    margin-bottom: 12px;
}
.contact .button-message {
    background: #256633;
    border: none;
    color: white;
    font-weight: 500;
    padding: 5px 19px;
    border-radius: 20px;
}
.contact .title h2 {
    color: #256633;
    font-weight: bold;
}
.contact img, svg {
    vertical-align: middle;
    width: 53px;
    margin-bottom: 12px;
}
.contact .info .des {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px
}
.contact .info {
    margin-bottom: 15px;
}
.contact label {
  margin-bottom: 10px;
  font-weight: 500;
    font-size: 16px;
    line-height: 22px
}

/* start media */
@media (max-width: 754px) {
  .contact .left {
    margin-bottom: 55px;
  }
  .contact .left, .contact .right {
    margin-left: 0px;
}
}
/* end media */
</style>
