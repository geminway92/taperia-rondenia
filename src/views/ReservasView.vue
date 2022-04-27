<template>
    <div class="reservasView">
        <h1>Reservas</h1>
        <form @submit.prevent="onEventClick">
            <label for="dateReserva">Elige fecha</label>
            <input v-model="dateForm" id="dateReserva" type="date" required @change="getReserveApi">

            <div class="container-toggle-hour" @change="getReserveApi">
                <div class="toggle-hour" >
                    <input id="hour1200" type="radio" name="hour" value="12:00"  v-model="checkedHour">
                    <label for="hour1200">12:00</label>
                </div>
                <div class="toggle-hour" >
                    <input id="hour1230" type="radio" name="hour"  value="12:30"  v-model="checkedHour">
                    <label for="hour1230">12:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1300" type="radio" name="hour"  value="13:00"  v-model="checkedHour">
                    <label for="hour1300">13:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1330" type="radio" name="hour"  value="13:30"  v-model="checkedHour" >
                    <label for="hour1330">13:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1400" type="radio" name="hour"  value="14:00"  v-model="checkedHour">
                    <label for="hour1400">14:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1430" type="radio" name="hour"  value="14:30"  v-model="checkedHour">
                    <label for="hour1430">14:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1500" type="radio" name="hour"  value="15:00"  v-model="checkedHour">
                    <label for="hour1500">15:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1530" type="radio" name="hour"  value="15:30"  v-model="checkedHour">
                    <label for="hour1530">15:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1600" type="radio" name="hour"  value="16:00"  v-model="checkedHour">
                    <label for="hour1600">16:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour1630" type="radio" name="hour"  value="16:30"  v-model="checkedHour">
                    <label for="hour1630">16:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2030" type="radio" name="hour"  value="20:30"  v-model="checkedHour">
                    <label for="hour2030">20:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2100" type="radio" name="hour"  value="21:00"  v-model="checkedHour">
                    <label for="hour2100">21:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2130" type="radio" name="hour"  value="21:30"  v-model="checkedHour">
                    <label for="hour2130">21:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2200" type="radio" name="hour"  value="22:00"  v-model="checkedHour">
                    <label for="hour2200">22:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2230" type="radio" name="hour"  value="22:30"  v-model="checkedHour">
                    <label for="hour2230">22:30</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2300" type="radio" name="hour"  value="23:00"  v-model="checkedHour">
                    <label for="hour2300">23:00</label>
                </div>
                <div class="toggle-hour">
                    <input id="hour2330" type="radio" name="hour"  value="23:30"  v-model="checkedHour">
                    <label for="hour2330">23:30</label>
                </div>
            </div>
            
            <div class="container-toggle-tab">

                <div>
                    <input id="tableInterior" type="radio" name="tableInterior"  value="Interior"  v-model="checkedTable" @change="getReserveApi">
                    <label for="tableInterior">Mesa Interior</label>
                </div>
                <div>
                    <input id="tableExterior" type="radio" name="tableExterior"  value="Exterior"  v-model="checkedTable" @change="getReserveApi">
                    <label for="tableExterior">Mesa Exterior</label>
                </div>
            </div>

            <div class="available-number">
                <p><span :class="{available: tableAvailableInterior,'not-available': tableAvailableInterior === 0 }">{{this.tableAvailableInterior}}</span> Disponible Interior</p>
                <p><span :class="{available: tableAvailableExterior,'not-available': tableAvailableExterior === 0  }">{{this.tableAvailableExterior}}</span> Disponible Exterior</p>
            </div>


            <label for="nameInput">Nombre*:</label>
            <input id="nameInput" type="text" required v-model="clientForm.name">

            <label for="lastnameInput">Apellidos*:</label>
            <input id="lastnameInput" type="text" required v-model="clientForm.lastname">
            
            <label for="emailInput">Email*:</label>
            <input id="emailInput" type="email" required v-model="clientForm.email">
            
            <label for="clientInput">Comensales*:</label>
            <input id="clintInput" type="number" min="1" required v-model="clientForm.diners">
            
            <label for="phoneInput">Teléfono*:</label>
            <input id="phoneInput" type="tel" pattern="[0-9]{9}" required v-model="clientForm.phone">
            
            <label for="commentInput">Comentarios</label>
            <textarea id="commentInput"  required v-model="clientForm.comments"></textarea>

            <span class="privacity-container">
                <input type="checkbox" id="privacity-clausula" v-model="checkedPrivacity" required >
                Acepto la Cláusula de privacidad: Con objeto de dar cumplimiento a las obligaciones derivadas del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD) le informa que al marcar este check usted da su consentimiento para que sus datos personales quedan incorporados a los ficheros de datos de carácter personal de  para la prestación de servicios por parte de la misma y prospección comercial. El Responsable del mencionado fichero es LA RONDEÑA con email info@larondeña.com a la cual usted podrá remitir un comunicado identificado con la referencia Protección de Datos para el ejercicio de sus derechos de acceso rectificación cancelación olvido limitación portabilidad y oposición.
            </span>
            
            <button type="submit">Reservar</button>
        </form>
        

    </div>
    <FooterComponent/>
</template>

<script>
import {defineAsyncComponent} from 'vue'

import reserveApi from '../api/reserveApi'
import Swal from 'sweetalert2'

export default {
    name: 'reservasView',
    components:{
        FooterComponent: defineAsyncComponent(() => import('../components/FooterComponent.vue'))
    },
    data(){
        return{
            dateForm: new Date().toISOString().slice(0, 10),
            clientForm: {
                name: '',
                lastname: '',
                email: '',
                diners: 1,
                phone: '',
                comments: ''

            },
            checkedHour: "12:00",
            checkedTable: 'Interior',
            checkedPrivacity: false,
            tableAvailableInterior: 16,
            tableAvailableExterior: 9,
        }
    },
    
    methods: {
        pothDayMinAtributte(){
            const dayActual = new Date().toISOString().slice(0,10)
                
            const input = document.querySelector('#dateReserva')
            input.setAttribute('min', dayActual)
        },

        async onEventClick() {
           const isAvailableTable = this.checkTableByDinners()
           
           if(isAvailableTable){
               try{
                    await reserveApi.post('reserves.json', {dayReserve: this.dateForm, hourReserve: this.checkedHour, zoneReserve: this.checkedTable, clientReserve: this.clientForm } )
                    
                    Swal.fire({
                        title: 'Reserva Realizada',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    this.getReserveApi()

                    this.clientForm = {
                        name: '',
                        lastname: '',
                        email: '',
                        diners: 1,
                        phone: '',
                        comments: ''
                    },
                    this.checkedPrivacity = false

                }catch (error){
                    Swal.fire({
                        title: error.message,
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#ef7067'
                    })
                }
            }else{
                Swal.fire({
                    title: 'No hay mesas suficientes, prueba a otra hora',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#ef7067'
                })
            }
            
        },

        async getReserveApi(){
            const {data} = await reserveApi.get('reserves.json' )
            const dataEntries = Object.values(data)
            
            this.checkAvailebleAllZone(dataEntries)
        },

        checkTableByDinners(){
            let tableNeed = 1
            
            this.clientForm.diners > 0  && this.clientForm.diners <= 4 ? tableNeed = 1 
                :this.clientForm.diners > 4  && this.clientForm.diners <= 8 ? tableNeed = 2 
                : this.clientForm.diners > 8  && this.clientForm.diners <= 12 ?  tableNeed = 3
                : this.clientForm.diners > 12 && this.clientForm.diners <= 16 ? tableNeed = 4
                : this.clientForm.diners > 16 && this.clientForm.diners <= 20 ? tableNeed = 5
                : tableNeed = 'No Disponible'

            
            if(this.checkedTable === 'Interior'){
            
                if(tableNeed <= this.tableAvailableInterior){
                     return true;
                }else{
                     return false;
                }
            }else{
                if(tableNeed <= this.tableAvailableExterior){
                     return true
                }else{
                     return false;
                }
            }
        },

        checkAvailebleAllZone(reservesArray){
            const reserveFilterInterior = reservesArray.filter( e => e.dayReserve == this.dateForm && e.hourReserve == this.checkedHour && e.zoneReserve == 'Interior');
            const reserveFilterExterior = reservesArray.filter( e => e.dayReserve == this.dateForm && e.hourReserve == this.checkedHour && e.zoneReserve == 'Exterior');
            
            this.tableAvailableInterior = 16 -  reserveFilterInterior.length
            this.tableAvailableExterior = 9 - reserveFilterExterior.length
        },
    },

    created(){
        this.getReserveApi()
    },
    mounted(){
        this.pothDayMinAtributte()
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
        width: 80%;
        justify-content: center;
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
    left: 5px;
}

.toggle-hour input[type="radio"] {
    display: none;
}

.toggle-hour input[type="radio"]:checked + label {
    background: #eee6c1;
    color: black;
}

input[type="text"], input[type="email"], input[type="number"], input[type="tel"], textarea {
    padding: .5em;
    font-size: 1em;
}
.container-toggle-tab{
    display: flex;
    gap: 1em;
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

.available{
    background: green;
}
.not-available{
    background: rgb(221, 19, 19);
    
}
.available-number span{
    color: white;
    padding: .5em;
}
</style>