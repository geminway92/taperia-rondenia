<template>
    <div class="reservasView">
        <h1>Reservas</h1>
        <form @submit.prevent="onEventClick">
            <label for="dateReserva">Elige fecha</label>
            <input v-model="dateForm" id="dateReserva" type="date" required>

            <div class="container-toggle-hour">
                <div class="toggle-hour" >
                    <input id="hour1200" type="radio" name="hour" checked>
                    <label for="hour1200">12:00</label>
                </div>
                <div class="toggle-hour" >
                    <input id="hour1230" type="radio" name="hour" >
                    <label for="hour1230">12:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1300" type="radio" name="hour" >
                    <label for="hour1300">13:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1330" type="radio" name="hour" >
                    <label for="hour1330">13:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1400" type="radio" name="hour">
                    <label for="hour1400">14:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1430" type="radio" name="hour">
                    <label for="hour1430">14:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1500" type="radio" name="hour">
                    <label for="hour1500">15:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1530" type="radio" name="hour">
                    <label for="hour1530">15:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1600" type="radio" name="hour">
                    <label for="hour1600">16:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1630" type="radio" name="hour">
                    <label for="hour1630">16:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2030" type="radio" name="hour">
                    <label for="hour2030">20:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2100" type="radio" name="hour">
                    <label for="hour2100">21:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2130" type="radio" name="hour">
                    <label for="hour2130">21:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2200" type="radio" name="hour">
                    <label for="hour2200">22:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2230" type="radio" name="hour">
                    <label for="hour2230">22:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour0000" type="radio" name="hour">
                    <label for="hour0000">00:00</label>
                </div>
            </div>

            <label for="nameInput">Nombre*:</label>
            <input id="nameInput" type="text" required>
            <label for="lastnameInput">Apellidos*:</label>
            <input form="lastnameInput" type="text">
            <label for="emailInput">Email*:</label>
            <input form="emailInput" type="email" required>
            <label for="clientInput">Comensales*:</label>
            <input form="clintInput" type="number" min="1" required>
            <label for="phoneInput">Teléfono*:</label>
            <input class="phoneInput" type="tel" pattern="[0-9]{9}" required>
            <label for="commentInput">Comentarios</label>
            <textarea id="commentInput"  required></textarea>

            <span class="privacity-container">
                <input type="checkbox" id="privacity-clausula" >
                Acepto la Cláusula de privacidad: Con objeto de dar cumplimiento a las obligaciones derivadas del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD) le informa que al marcar este check usted da su consentimiento para que sus datos personales quedan incorporados a los ficheros de datos de carácter personal de  para la prestación de servicios por parte de la misma y prospección comercial. El Responsable del mencionado fichero es LA RONDEÑA con email info@larondeña.com a la cual usted podrá remitir un comunicado identificado con la referencia Protección de Datos para el ejercicio de sus derechos de acceso rectificación cancelación olvido limitación portabilidad y oposición.
            </span>
            
            <button type="submit">Reservar</button>
        </form>
        <div class="available-number">
            
            <p><span>{{this.tableAvailableInterior}}</span> Disponible Interior</p>
            <p><span>{{this.tableAvailableExterior}}</span> Disponible Exterior</p>
        </div>

    </div>
    <FooterComponent/>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import reserveApi from '../api/reserveApi'

export default {
    name: 'reservasView',
    components:{
        FooterComponent
    },
    data(){
        return{
            dateForm: new Date().toISOString().slice(0, 10),
            tableAvailableInterior: 16,
            tableAvailableExterior: 9,
            tableAvailableDaySelect: 0
        }
    },
    
    methods: {
         async onEventClick() {
            try{
                const {data} = await reserveApi.post('reserves.json', {prueba: this.dateForm} )
                console.log(data)

            }catch (error){
                console.log(error)
            }
        },

        checkAvaibableTable(){
            
        }
    },
    created(){

    }
}
</script>

<style scoped>

h1{
    color: white;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
}
label{
    color: white;
    font-size: 1em;
    font-weight: bold;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
}

button{
    padding: 1em;
    background: #dfe2e4;
    color:black;
    margin: 1em;
    font-weight: bold;
    -webkit-appearance: none;
    border-radius: 10px;
}

button:active{
    background: #ffffff;
}

#dateReserva{
    padding: .5em;
    font-size: 1.2em;
    
}
.container-toggle-hour{
        display: flex;
        width: 70%;
        flex-wrap: wrap;
    }

.toggle-hour{
    display: flex;
    margin: 5px;
    align-items: center;
    
}
.toggle-hour label {
    cursor: pointer;
    padding: .5em;
    background: #ef7067;
    border-radius: 5px;
}

.toggle-hour label:hover {
    background: #9c6b67;
    position: relative;
    left: 10px;
}

.toggle-hour input[type="radio"] {
    display: none;
}

input[type="radio"]:checked + label {
    background: #eee6c1;
    color: black;
}

input[type="text"], input[type="email"], input[type="number"], input[type="tel"], textarea {
    padding: .5em;
    font-size: 1em;
}
.privacity-container{
    width: 80%;
    color:white;
    text-align: justify;
}

textarea {
    resize: none;
    height: 100px;
    font-size: 1.2em;
}

.available-number{
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

}

.available-number span{
    background: green;
    color: white;
    padding: .5em;
}

</style>