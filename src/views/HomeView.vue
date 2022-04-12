<template>
    <div class="home">
    <BannerComponent/>
        <div class="container-intro">
            <h1>Bienvenidos a la Rondeña</h1>
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




</style>