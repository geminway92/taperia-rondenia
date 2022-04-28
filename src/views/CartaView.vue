<template>
<div class="carta-view">

    <div class="container-card" v-for="carta in cartasArray" :key="carta">
        <table>
        <h1>{{carta.nameCarta}}</h1>
            <tr v-if="carta.nameCarta === 'A palo seco'">
                <th>Bebidas</th>
                <th>UD</th>
                <th>Botella</th>
            </tr>
            <tr v-else-if="carta.nameCarta !== 'Pá terminar'">
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
                <td v-if="carta.nameCarta !== 'Pá terminar'" class="text-center">{{food.tapa || food.UD}}€</td>
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
export default {
    name: "cartaView",
    data() {
        return {
            cartasArray: [
                { nameCarta: "El picoteo", food: [
                        { nameFood: "Rasgueo", description: "patatas fritas", tapa: 3.50, racion: 5.50  },
                        { nameFood: "Escobilla", description: "patatas deluxe", tapa: 3.50, racion: 5.95 },
                        { nameFood: "Bulerías", description: "patatas bravas", tapa: 3.50, racion: 5.95 },
                        { nameFood: "Trémolo", description: "nachos, queso rallado y guacamole", tapa: 4.50, racion: 7.50 },
                        { nameFood: "Solo", description: "aceitunas", tapa: 1.50, racion: '' }
                    ], link: "https://drive.google.com/file/d/1lRPLZ1hz1OrIbUVrvl2DHFH7UUt4yJw7/view?usp=sharing"
                },
                { nameCarta: "Lo light", food: [
                        { nameFood: "Verdial", description: "ensaladilla rusa", tapa: 2.95, racion: 4.50 },
                        { nameFood: "Malagueña", description: "ensalada malagueña", tapa: 5.50, racion: 8.95 },
                        { nameFood: "Repiqueteo", description: "ensalada césar", tapa: 4.50, racion: 7.50},
                        { nameFood: "Mariana", description: "ensalada de pipirrana", tapa: 2.50, racion: 4.50},
                        { nameFood: "Rondeña", description: "ensalada con maíz, nueces, aguacate,tomate y parmesano", tapa: 2.95, racion: 4.50},
                    ], link: "https://drive.google.com/file/d/1lRPLZ1hz1OrIbUVrvl2DHFH7UUt4yJw7/view?usp=sharing"
                },
                { nameCarta: "Lo andaluz", food: [
                        { nameFood: "Jaleo", description: "ajo blanco con coco y piña", tapa: 0.95, racion: '' },
                        { nameFood: "Pellizco", description: "croquetas de pollo", tapa: 2.50, racion: 6.50 },
                        { nameFood: "Contratiempo", description: "berenjenas con miel", tapa: 3.95, racion: 7.95 },
                        { nameFood: "Duende", description: "porra antequerana", tapa: 1.50, racion: '' },
                        { nameFood: "Mirabrás", description: "gazpacho de frambuesa", tapa: 0.50, racion: ''},
                        { nameFood: "A la flamenca", description: "bombón de sardina", tapa: 0.50, racion: '' },
                        { nameFood: "Tientos", description: "pimiento del padrón asado", tapa: 0.95, racion: 2.50},
                        { nameFood: "Fandangos", description: "boquerón en vinagre", tapa: 1.50, racion: ''},
                        { nameFood: "Amalgama", description: "salchicha encebollada", tapa: 1.50, racion: 3.95},
                        { nameFood: "Desplante", description: "lágrimas de pollo", tapa: 2.50, racion: 6.50},
                    ], link: "https://drive.google.com/file/d/1x_hmQu7zTyurej-dCpxApm6JPla_K7aQ/view?usp=sharing",
                },
                { nameCarta: "Lo español", food: [
                        { nameFood: "Cadencia", description: "alitas de pollo", tapa: 3.95, racion: 7.95},
                        { nameFood: "A compás", description: "hummus", tapa: 1.50, racion: 2.95},
                        { nameFood: "Olé", description: "tortilla de patata con cebolla", tapa: 0.95, racion: ''},
                        { nameFood: "Alma", description: "brocheta de pollo, calabacín, tomate y cebolleta", tapa: 2.95, racion: ''},
                        { nameFood: "Falseta", description: "brocheta de langostinos, tomate y cebolleta", tapa: 3, racion: ''},
                        { nameFood: "Tonás", description: "buñuelos de merluza", tapa: 1.50, racion: 5.95},
                        { nameFood: "Canastera", description: "hamburguesa de ternera o cresta picante", tapa: 1.50, racion: ''},
                        { nameFood: "Liviana", description: "rollito de salmón y queso crema", tapa: 2.50, racion: ''},
                        { nameFood: "Remate", description: "calamar frito", tapa: 4.50, racion: 10.95},
                        { nameFood: "Redoble", description: "pincho de chistorra", tapa: 1.95, racion: ''},
                    ], link: "https://drive.google.com/file/d/1x_hmQu7zTyurej-dCpxApm6JPla_K7aQ/view?usp=sharing",
                },
                { nameCarta: "Te lo recomiendo", food: [
                        { nameFood: "Ida y vuelta", description: "pastela marroquí", tapa: 1.95, racion: ''},
                        { nameFood: "Abanico", description: "tacos de cochinita pibil", tapa: 2.95, racion: ''},
                        { nameFood: "Bastón", description: "uvas de queso de cabra", tapa: 4.50, racion: ''},
                        { nameFood: "Capote", description: "turrón salado", tapa: 2.50, racion: ''},
                        { nameFood: "Ayeo", description: "tartar de salchichón y miel de caña", tapa: 5, racion: 8.50},
                        { nameFood: "Soniquete", description: "caramelo de rabo de toro", tapa: 5.50, racion: ''},
                    ], link: "https://drive.google.com/file/d/1_hjqkK3NBDiTXsjvtzScI8nye40RNYIP/view?usp=sharing"
                },
                { nameCarta: "Pa´ terminar", food: [
                        { nameFood: "Rumba", description: "tarta de queso", racion: 1.95},
                        { nameFood: "Toque", description: "coulant de chocolate y grosella", racion: 4.50},
                        { nameFood: "Pulso", description: "mousse de mango", racion: 5.95},
                        { nameFood: "Melisma", description: "arroz con leche", racion: 1.50},
                    ], link: "https://drive.google.com/file/d/1_hjqkK3NBDiTXsjvtzScI8nye40RNYIP/view?usp=sharing"
                },
                { nameCarta: "A palo seco", food: [
                        { nameFood: "Agua", UD: 1.50},
                        { nameFood: "Refrescos", UD: 1.80},
                        { nameFood: "Redbul" , UD: 2.50},
                        { nameFood: "Vino tinto Rioja" , UD: 8.50, bottle: 67.50},
                        { nameFood: "Vino tinto Ribiera del Duero \"Protos\"" , UD: 15, bottle: 120},
                        { nameFood: "Vino blanco Verdejo \"Protos\"" , UD: 4.50, bottle: 35.50},
                        { nameFood: "Vino Albariño Eidosea" , UD: 7.95, bottle: 60.50},
                        { nameFood: "San Miguel" , UD: 2.50},
                        { nameFood: "Victoria" , UD: 2.50},
                        { nameFood: "Alhambra verde 1995" , UD: 2.95},
                        { nameFood: "Café e infusiones" , UD: 1.80},
                        { nameFood: "Baileys" , UD: 4},
                        { nameFood: "Combinados" , UD: 'Desde 5.95'},
                    ], link: "https://drive.google.com/file/d/16DIiI8ej8L4OhOh09noeUIGeNqh9DqxK/view?usp=sharing"
                },
            ]
        };
    },
    components: { FooterComponent },
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