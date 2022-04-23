<template>
    <div class="home">
    <BannerComponent/>
        <div class="container-intro">
            <h1>Bienvenidos a la Rondeña</h1>
            <img src="../../public/assets/logo-taperia-rondenia.png" alt="">
            <h2>Síguenos en nuestras redes: @taperialarondena</h2>
            <iframe  title="Instagram La Rondeña" width="320" height="440" src="https://www.instagram.com/tv/CclnLg7A-BR/embed" allowtransparency="true" scrolling="no" frameborder="0"></iframe>
            <router-link class="link-carta" :to="{name: 'cartaView'}" >Descubre la carta</router-link>
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
    },

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

h2{
    font-size: 1.2em;
}

.home{
    background: #ffffff;
}

.container-intro{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.link-carta{
    text-decoration: none;
    background: #ef7067;
    padding: .5em;
    border-radius: 10px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    margin: 1em;
}

.link-carta:hover{
    background: #eee6c1;
    border:#ef7067 dashed 5px;
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