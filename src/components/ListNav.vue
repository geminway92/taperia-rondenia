<template>
    <nav class="list-nav" :class="isActiveList">
        <router-link :to="{name: 'homeView'}">INICIO</router-link>
        <router-link :to="{name: 'homeView'}">MENU</router-link>
        <router-link :to="{name: 'homeView'}">OFERTAS</router-link>
        <router-link :to="{name: 'homeView'}">RESERVAS</router-link>
        <router-link :to="{name: 'contactView'}">CONTACTO</router-link>
    </nav>
</template>
<script>
export default{
    props:{
        toggleList: {
            type: Boolean
        },
        isActiveList: {
            type: String
        }
    }
}
</script>


<style scoped>

a{
    text-decoration: none;
    color: #f2f2f2;
    padding: 0.5em;
    font-weight: bold;
}

a:hover{
    background: #3a3a3a;
}

nav{
    display: flex;
    flex-direction: column;
    
}


.list-nav{
    position: absolute;
    background: #ef6962;
    color: #f2f2f2;
    width: 85%;
    top: 60px;
    left: 100%;
    transition: all 1s;
    z-index: 1;
    
}

.active {
    animation: activeMenu 1s forwards;  
}

.none{
    animation: desactiveMenu 1s forwards;
}

@keyframes activeMenu {
    from{
        left: 100%;
    }

    to{
        left: 15%;
    }
    
}

@keyframes desactiveMenu {
    0%{
        left: 15%;
        }

    100%{
        left: 100%;
    }
    
}
</style>