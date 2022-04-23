<template>
    <div class="footer">
        <div class="container-schedule">
            <h1>HORARIO</h1>
            <p>De Martes a Domingo</p>
            <p>13:30-16:30 | 20:30-00:30 </p>
        </div>
        <div class="container-contact">

        <div class="container-schedule">
            <img src="../../public/assets/svg/phone-solid.svg" alt="">
            <span>LLÁMANOS</span>
            <p>+34 653 14 20 58</p>
        </div>
        <div class="container-schedule">
            <img src="../../public/assets/svg/location-dot-solid.svg" alt="">
            <span>VISÍTANOS</span>
            <p>Calle convaleciente, 2</p>
        </div>
        <div class="container-schedule">
            <img src="../../public/assets/svg/envelope-solid.svg" alt="">
            <span>ESCRÍBENOS</span>
            <p>info@larondeña.es</p>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

img{
    height: 25px;
}
.footer{
    background: #eee6c1;
    color: #000;
    font-weight: bold;
    padding: 1em;
    display: flex;
    justify-content: space-between;
}
.container-schedule p:first-of-type,
span{
    padding: 0 .4em;
}

.container-schedule p:nth-child(3){
    color:red;
}

</style>