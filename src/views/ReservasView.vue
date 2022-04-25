<template>
    <div class="reservasView">
        <h1>Reservas</h1>
        <form @submit.prevent="onEventClick">
            <label for="dateReserva">Elige fecha</label>
            <input v-model="dateForm" id="dateReserva" type="date" required>

            <div >
                <input id="hour1330" type="radio" name="hour" checked>
                <label for="hour1330">13:30</label>
            </div>
            <div>
                <input id="hour1400" type="radio" name="hour">
                <label for="hour1400">14:00</label>
            </div>
            <div>
                <input id="hour1430" type="radio" name="hour">
                <label for="hour1430">14:30</label>
            </div>
            <div>
                <input id="hour1500" type="radio" name="hour">
                <label for="hour1500">15:00</label>
            </div>
            <div>
                <input id="hour1530" type="radio" name="hour">
                <label for="hour1530">15:30</label>
            </div>
            <div>
                <input id="hour1600" type="radio" name="hour">
                <label for="hour1600">16:00</label>
            </div>
            <div>
                <input id="hour1630" type="radio" name="hour">
                <label for="hour1630">16:30</label>
            </div>
            <div>
                <input id="hour2030" type="radio" name="hour">
                <label for="hour2030">20:30</label>
            </div>
            <div>
                <input id="hour2100" type="radio" name="hour">
                <label for="hour2100">21:00</label>
            </div>
            <div>
                <input id="hour2130" type="radio" name="hour">
                <label for="hour2130">21:30</label>
            </div>
            <div>
                <input id="hour2200" type="radio" name="hour">
                <label for="hour2200">22:00</label>
            </div>
            <div>
                <input id="hour2230" type="radio" name="hour">
                <label for="hour2230">22:30</label>
            </div>
            <div>
                <input id="hour0000" type="radio" name="hour">
                <label for="hour0000">00:00</label>
            </div>
            <div>
                <input id="hour0030" type="radio" name="hour">
                <label for="hour0030">00:30</label>
            </div>

            <label for="nameInput">Nombre*:</label>
            <input id="nameInput" type="text" >
            <label for="lastnameInput">Apellidos*:</label>
            <input form="lastnameInput" type="text">
            <label for="emailInput">Email*:</label>
            <input form="emailInput" type="email">
            <label for="clientInput">Comensales*:</label>
            <input form="clintInput" type="number" min="1">
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
</template>

<script>
import reserveApi from '../api/reserveApi'

export default {
    name: 'reservasView',
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
    /* padding: 1em 0 .5em; */
}
label{
    color: white;
    text-align: center;
    font-size: 1em;
    font-weight: bold;
    /* padding: 1em 0 .5em; */
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.privacity-container{
    width: 80%;
    color:white;
}

textarea {
  resize: none;
  height: 100px;
}

.available-number{
    background: pink;
    display: flex;
    justify-content: center;
    gap: 10px;

}
.available-number span{
    background: green;
    color: white;
    padding: .5em;
}


</style>