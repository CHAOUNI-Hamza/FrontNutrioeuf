<template>
<div class="nosvaleurs">
    <div class="container">
        <div class="presentation">
            <div class="title text-center">
                <h2 class="titre">NOS VALEURS</h2>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-6 contenu" data-aos="zoom-in">
                            <div class="img">
                        <img src="https://www.letsgrowup.ch/files/1597936681--609.jpg" alt="" width="100%">
                        
                    </div>
                    <div class="text">
                            <h3>TEST</h3>
                        </div>
                        </div>
                        <div class="col-md-6 contenu" data-aos="zoom-in">
                            <div class="img">
                        <img src="https://parachutecarriere.com/wp-content/uploads/2017/12/La-place-des-valeurs-au-travail-1.jpg" alt="" width="100%">
                    </div>
                    <div class="text">
                            <h3>TEST</h3>
                        </div>
                        </div>
                        <div class="col-md-6 contenu" data-aos="zoom-in">
                            <div class="img">
                        <img src="https://www.letsgrowup.ch/files/1597936681--609.jpg" alt="" width="100%">
                    </div>
                    <div class="text">
                            <h3>TEST</h3>
                        </div>
                        </div>
                        <div class="col-md-6 contenu" data-aos="zoom-in">
                            <div class="img">
                        <img src="https://parachutecarriere.com/wp-content/uploads/2017/12/La-place-des-valeurs-au-travail-1.jpg" alt="" width="100%">
                    </div>
                    <div class="text">
                            <h3>TEST</h3>
                        </div>
                        </div>
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
.nosvaleurs {
    padding: 42px 0;
}
.nosvaleurs .left img {
    width: 70%;
}

.nosvaleurs .left,
.nosvaleurs .right {
    padding: 35px 0;
}
.nosvaleurs .right .question p {
    line-height: 1.2;
    text-align: justify;
}
.nosvaleurs .contenu {
    padding: 0;
    margin: 0;
    position: relative;
    
}
.nosvaleurs .contenu .text {
    position:absolute; 
    top:30%; 
    left:50%; 
    transform:translate(-50%, -50%); 
    width:50%;
    opacity: 0;
    transition: 1s; 
}
.nosvaleurs .contenu .text h3 {
    text-align: center;
    background: #256633;
    color: white;
}
.nosvaleurs .contenu:hover .text {
    top:50%; 
    opacity: 1; 
}
.nosvaleurs .contenu .img img {
    transition: 1s; 
}
.nosvaleurs .contenu:hover .img img { 
    opacity: 0.5; 
}

</style>