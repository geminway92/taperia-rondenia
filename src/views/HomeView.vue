<template>
    <div class="home">
    <BannerComponent/>
        <div class="container-intro">
            <h1>Bienvenidos a la Rondeña</h1>
            <img src="../../public/assets/logo-taperia-rondenia.png" alt="">
            <p>Descubre la carta</p>
        </div>
    </div>
</template>

<script>
import BannerComponent from '../components/BannerComponent.vue';
export default{
    name: 'homeView',
    components: {
        BannerComponent
    }
}

</script>

<style scoped>
img{
    object-fit: cover;
    width: 100%;
}
h1{
    text-align: initial;
    padding: .5em;
}
.home{
    background: #2b2b2b;
    height: 100vh;
    color:#dfe2e4;
}

.container-intro{
    text-align: center;
}

@media screen and (min-width: 700px) {
    img{
        width: 80%;
    }
}

@media screen and (min-width: 1000px) {
    img{
        width: 60%;
    }
}
</style>