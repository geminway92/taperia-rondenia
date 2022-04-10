<template>
    <div class="list-nav" :class="isActiveList">
        <ul>
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
        },
        isActiveList: {
            type: String
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
    position: relative;
    background: #ef6962;
    color: #f2f2f2;
    width: 85%;
    left: 100%;
    align-self: flex-end;
    transition: all 1s;
    
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
        left: 0%;
    }
    
}

@keyframes desactiveMenu {
    0%{
        left: 0%;
        }

    100%{
        left: 100%;
    }
    
}
</style>