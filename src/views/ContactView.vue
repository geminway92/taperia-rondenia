<template>
    <div class="contact">
        <h1>Contacto y Ubicación</h1>
        <p>La taperia La Rondeña se encuentra en el centro de Málaga, en la Calle convaleciente, 2 </p>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.015662232908!2d-4.423965984712324!3d36.722185079964724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7be231449b5%3A0x14ba53c8a51c01d1!2sC.%20Convalecientes%2C%202%2C%2029008%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1649761766865!5m2!1ses!2ses" 
            :width="widthMap" 
            height="300" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <h2>LLÁMANOS O ESCRÍBENOS</h2>
        <p class="phone">653142058</p>
        <FormComponents/>
    </div>
        <FooterComponent/>
</template>

<script>
import {defineAsyncComponent} from 'vue'


export default {
    name: 'contactView',
    components: {
    FormComponents: defineAsyncComponent(() => import("../components/FormComponent.vue")),
    FooterComponent: defineAsyncComponent(() => import("../components/FooterComponent.vue"))
},
    data(){
        return{
            widthMap: 300
        }
    },
    methods: {
        calcWidthScreen(){
            this.widthMap = (screen.width > 400 && screen.width < 700 ? 500 :  screen.width > 700 ? 700 : 300)
        }
    },
    created(){
        this.calcWidthScreen()
    }
}
</script>

<style scoped>
h1,h2{
    text-align: center;
    margin-bottom: 0;
}

p{
    padding: 0 1em;
}

.contact{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #2b2b2b;
    color:#dfe2e4;
}

.phone{
    font-size: 20px;
    font-weight: bold;
}

</style>