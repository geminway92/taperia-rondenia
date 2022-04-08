<template>
    <div class="list-nav">
        <ul v-if="toggleList">
            <li>INICIO</li>
            <li>MENU</li>
            <li>OFERTAS</li>
            <li>RESERVAS</li>
            <li>UBICACIÓN</li>
        </ul>
    </div>
</template>
<script>
export default{
    props:{
        toggleList: {
            type: Boolean
        }
    }
}
</script>


<style scoped>
ul{
    list-style-type: none;
    margin: 0;
}

ul li{
    padding: 0.5em;
}

.list-nav{
    background: #ef6962;
    color: #f2f2f2;
    width: 85%;
    align-self: flex-end;
}
</style>