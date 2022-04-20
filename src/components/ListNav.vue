<template>
    <nav class="list-nav" :class="isActiveList">
        <ul>
            <li @click="goRoute('homeView')" >INICIO</li>
            <li @click="goRoute('cartaView')">CARTAS</li>
            <li @click="goRoute('homeView')">RESERVAS</li>
            <li @click="goRoute('contactView')">CONTACTO</li>    
        </ul>
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
    },
    methods: {
        goRoute(rute){
            this.$emit('triggerMenu');
            this.$router.push({name: rute})
            scrollTo(0, 0)
        }
    }
}
</script>


<style scoped>

ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}

ul li{
    padding: 0.5em;
    cursor: pointer;
    margin: 0;
}

li:hover{
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
    display: none;
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
        left: 50%;
    }
}
</style>