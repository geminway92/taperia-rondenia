<template>
    <div class="home">
    <BannerComponent/>
        <h1>Bienvenidos a la Rondeña</h1>
        <p>Descubre la carta</p>
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
.home{
    background: #2b2b2b;
    height: 100vh;
    color:#dfe2e4;
}
</style>