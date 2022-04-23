<template>
<div class="carta-view">

    <div class="container-card" v-for="carta in cartasArray" :key="carta">
        <h1>{{carta.nameCarta}}</h1>
        <ul v-for="food in carta.food" :key="food">
            <li><span>{{food.nameFood}}</span> {{food.description}}</li>
        </ul>
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
                        { nameFood: "Rasgueo", description: "patatas fritas" },
                        { nameFood: "Escobilla", description: "patatas deluxe" },
                        { nameFood: "Bulerías", description: "patatas bravas" },
                        { nameFood: "Trémolo", description: "nachos, queso rallado y guacamole" },
                        { nameFood: "Solo", description: "aceitunas" }
                    ], link: "https://drive.google.com/file/d/1lRPLZ1hz1OrIbUVrvl2DHFH7UUt4yJw7/view?usp=sharing"
                },
                { nameCarta: "Lo light", food: [
                        { nameFood: "Verdial", description: "ensaladilla rusa" },
                        { nameFood: "Malagueña", description: "ensalada malagueña" },
                        { nameFood: "Repiqueteo", description: "ensalada césar" },
                        { nameFood: "Mariana", description: "ensalada de pipirrana " },
                        { nameFood: "Rondeña", description: "ensalada con maíz, nueces, aguacate,tomate y parmesano" },
                    ], link: "https://drive.google.com/file/d/1lRPLZ1hz1OrIbUVrvl2DHFH7UUt4yJw7/view?usp=sharing"
                },
                { nameCarta: "Lo andaluz", food: [
                        { nameFood: "Jaleo", description: "ajo blanco con coco y piña" },
                        { nameFood: "Pellizco", description: "croquetas de pollo" },
                        { nameFood: "Contratiempo", description: "berenjenas con miel" },
                        { nameFood: "Duende", description: "porra antequerana" },
                        { nameFood: "Mirabrás", description: "gazpacho de frambuesa" },
                        { nameFood: "A la flamenca", description: "bombón de sardina" },
                        { nameFood: "Tientos", description: "pimiento del padrón asado" },
                        { nameFood: "Fandangos", description: "boquerón en vinagre" },
                        { nameFood: "Amalgama", description: "salchicha encebollada" },
                        { nameFood: "Desplante", description: "lágrimas de pollo" },
                    ], link: "https://drive.google.com/file/d/1x_hmQu7zTyurej-dCpxApm6JPla_K7aQ/view?usp=sharing",
                },
                { nameCarta: "Lo español", food: [
                        { nameFood: "Cadencia", description: "alitas de pollo" },
                        { nameFood: "A compás", description: "hummus" },
                        { nameFood: "Olé", description: "tortilla de patata con cebolla" },
                        { nameFood: "Alma", description: "brocheta de pollo, calabacín, tomate y cebolleta" },
                        { nameFood: "Falseta", description: "brocheta de langostinos, tomate y cebolleta" },
                        { nameFood: "Tonás", description: "buñuelos de merluza" },
                        { nameFood: "Canastera", description: "hamburguesa de ternera o cresta picante" },
                        { nameFood: "Liviana", description: "rollito de salmón y queso crema" },
                        { nameFood: "Remate", description: "calamar frito" },
                        { nameFood: "Redoble", description: "pincho de chistorra" },
                    ], link: "https://drive.google.com/file/d/1x_hmQu7zTyurej-dCpxApm6JPla_K7aQ/view?usp=sharing",
                },
                { nameCarta: "Te lo recomiendo", food: [
                        { nameFood: "Ida y vuelta", description: "pastela marroquí" },
                        { nameFood: "Abanico", description: "tacos de cochinita pibil" },
                        { nameFood: "Bastón", description: "uvas de queso de cabra" },
                        { nameFood: "Capote", description: "turrón salado" },
                        { nameFood: "Ayeo", description: "tartar de salchichón y miel de caña" },
                        { nameFood: "Soniquete", description: "caramelo de rabo de toro" },
                    ], link: "https://drive.google.com/file/d/1_hjqkK3NBDiTXsjvtzScI8nye40RNYIP/view?usp=sharing"
                },
                { nameCarta: "Pá terminar", food: [
                        { nameFood: "Rumba", description: "tarta de queso" },
                        { nameFood: "Toque", description: "coulant de chocolate y grosella" },
                        { nameFood: "Pulso", description: "mousse de mango" },
                        { nameFood: "Melisma", description: "arroz con leche" },
                    ], link: "https://drive.google.com/file/d/1_hjqkK3NBDiTXsjvtzScI8nye40RNYIP/view?usp=sharing"
                },
                { nameCarta: "A palo seco", food: [
                        { nameFood: "Agua" },
                        { nameFood: "Refrescos" },
                        { nameFood: "Redbul" },
                        { nameFood: "Vino tinto Rioja" },
                        { nameFood: "Vino tinto Ribiera del Duero \"Protos\"" },
                        { nameFood: "Vino blanco Verdejo \"Protos\"" },
                        { nameFood: "Vino Albariño Eidosea" },
                        { nameFood: "San Miguel" },
                        { nameFood: "Victoria" },
                        { nameFood: "Alhambra verde 1995" },
                        { nameFood: "Café e infusiones" },
                        { nameFood: "Baileys" },
                        { nameFood: "Combinados" },
                    ], link: "https://drive.google.com/file/d/16DIiI8ej8L4OhOh09noeUIGeNqh9DqxK/view?usp=sharing"
                },
            ]
        };
    },
    components: { FooterComponent }
}
</script>

<style scoped>
ul{
    list-style: none;
    padding: 0 10px;
}
.carta-view{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    margin: 1em 0;
}


.container-card{
    background: #ffffff;
    width: 90%;
    border-radius: 10px;
    height: min-content;
}

.container-card h1{
    padding: 10px;
}

.container-card li span{
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

@media screen and (min-width: 800px) {
    .container-card{
        width: 60%;
    }
}

</style>