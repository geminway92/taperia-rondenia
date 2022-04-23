<template>
    <div class="home">
    <BannerComponent/>
        <div class="container-intro">
            <h1>Bienvenidos a la Rondeña</h1>
            <img src="../../public/assets/logo-taperia-rondenia.png" alt="">
            <p>Descubre la carta</p>
        </div>
        <FooterComponent/>
    </div>
</template>

<script>
import BannerComponent from '../components/BannerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default{
    name: 'homeView',
    components: {
    BannerComponent,
    FooterComponent
}
}

</script>

<style scoped>
img{
    object-fit: cover;
    width: 100%;
}

h1{
    padding: .5em; 
    color:#ef7067;
    font-size: 2.5em;
}

.home{
    background: #ffffff;
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