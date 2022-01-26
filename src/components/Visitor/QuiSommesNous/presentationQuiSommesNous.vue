<template>
<div class="quisommesnous">
    <div class="container">
        <div class="presentation">
            <div class="title text-center">
                <h2 class="titre">PRESENTATION</h2>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12 left" data-aos="fade-right">
                    <div class="img text-center">
                        <img src="../../../assets/quisommesnous/logo-01.svg" alt="">
                    </div>
                </div>
                 <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12 right" data-aos="fade-left"> 
                     <div class="question">
                         <h3>Pourquoi l'utiliser ?</h3>
                         <p>Le Lorem Ipsum est simplement du faux texte
                             employé dans la composition et la mise en page
                             avant impression. Le Lorem Ipsum est le faux texte
                             standard de l'imprimerie depuis les années 1500
                             Le Lorem Ipsum est simplement du faux texte
                             employé dans la composition et la mise en page
                             avant impression. Le Lorem Ipsum est le faux texte
                             standard de l'imprimerie depuis les années 1500
                             Le Lorem Ipsum est simplement du faux texte
                             employé dans la composition et la mise en page
                             avant impression. Le Lorem Ipsum est le faux texte
                             standard de l'imprimerie depuis les années 1500
                         </p>
                     </div>
                 </div>
            </div>
        </div>
        <div class="novaleur"></div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style>
.quisommesnous {
    padding: 42px 0;
}
.quisommesnous .left img {
    width: 70%;
}
.quisommesnous .right .question p {
    line-height: 1.2;
    text-align: justify;
}

/* start media */
@media (max-width: 760px) {
.quisommesnous .right {
    margin-top: 40px;
    text-align: center;
}
}
/* end media */
</style>