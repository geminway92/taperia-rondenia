<template>
<div class="carta-view">

    <div class="container-card" v-for="carta in mainArr" :key="carta">
        <table>
        <h1>{{carta.nameCarta}}</h1>
            <tr v-if="carta.nameCarta === 'A palo seco'">
                <th>Bebidas</th>
                <th>UD</th>
                <th>Botella</th>
            </tr>
            <tr v-else-if="carta.nameCarta !== 'Pa´ terminar'">
                <th>Platos</th>
                <th>Tapa</th>
                <th>Ración</th>
    
            </tr>
            
            <tr v-else>
                <th>Platos</th>
                <th>Porción</th>
            </tr>
            <tr v-for="food in carta.food" :key="food">
                <td><span>{{food.nameFood}}</span> {{food.description}}</td>
                <td v-if="carta.nameCarta !== 'Pa´ terminar'" class="text-center">{{food.tapa || food.UD}}€</td>
                <td v-if="food.racion || food.bottle"  class="text-center">{{food.racion || food.bottle}}€</td>
            </tr>
        </table>
        <div class="link-pdf">
            <a :href="carta.link" target="_blank">Descargar la Carta con alérgenos</a>
        </div>
    </div>

</div>
    <FooterComponent/>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue"
import mainDataJSON from '/public/assets/data/mainData.json';
export default {
    name: "cartaView",
    components: { FooterComponent },
    data(){
        return{
            mainArr: mainDataJSON
      }
    },
    created(){
        scrollTo(0,0)
    }
}
</script>

<style scoped>
 @font-face {
     font-family: 'Ms Madi';
     src: 
     url(../../public/assets/fonts/MsMadi-Regular.ttf);
 }

 @font-face {
     font-family: 'Indie Flower';
     src: 
     url(../../public/assets/fonts/IndieFlower-Regular.ttf);
 }
table{
    padding: 0 10px;
    margin: .5em;
}
table h1{
    font-family: 'Ms Madi', cursive;
}

th{
    border-bottom: solid black 2px;
    font-family: 'Ms Madi', cursive;
     font-family: 'Indie Flower', cursive;
    font-size: 1.5em;
}

td{
    font-family: 'Indie Flower', cursive;
    padding-right: 10px;
}

.carta-view{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    margin: 1em 0;
}

.container-card{
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: dashed #ef6962 5px;
    width: 90%;
    border-radius: 10px;
    height: min-content;
}

.container-card span{
    color: #ef6962;
    font-weight: bold;
    font-size: 18px;
}

.link-pdf{
    display: flex;
    font-weight: bold;
    justify-content: center;
    margin-bottom: 10px;
}

.link-pdf a{
    text-decoration: none;
    background: #ef6962;
    color: #292929;
    padding: .5em 1em;
    border-radius: 10px;
}

.link-pdf a:hover{
 background: pink;
}

.text-center{
    text-align: center;
    font-weight: bold;
}
@media screen and (min-width: 800px) {
    .container-card{
        width: 60%;
    }
}




</style>