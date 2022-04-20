<template>
    <form @submit.prevent="OnSubmit(userForm)">
        <input class="input-form" type="text" placeholder="Nombre" v-model="userForm.nameUser">
        <input class="input-form" type="email" placeholder="Email" v-model="userForm.email">
        <input class="input-form" type="tel" placeholder="Teléfono" pattern="[0-9]{9}" v-model="userForm.phone" required>
        <textarea class="input-form" placeholder="Mensaje" v-model="userForm.message" required></textarea>
        <label for="input-clausula">Cláusula informativa</label>
        <span>
            <input type="checkbox" id="input-clausula" v-model="userForm.accetClausula">Con objeto de dar cumplimiento a las obligaciones derivadas del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD),  le informa que al marcar este check, usted da su consentimiento para que sus datos personales quedan incorporados a los ficheros de datos de carácter personal de LA RONDEÑA, para la prestación de servicios por parte de la misma y prospección comercial. El Responsable del mencionado fichero es La Rondeña con email info@rondeña.com a la cual usted podrá remitir un comunicado identificado con la referencia “Protección de Datos” para el ejercicio de sus derechos de acceso, rectificación, cancelación, olvido, limitación, portabilidad y oposición.
        </span>
        <button type="submit">Enviar</button>
    </form>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    data(){
        return{
            userForm: {
                nameUser: '',
                email: '',
                phone: null,
                message: '',
                accetClausula: false
            }
        }
    },
    methods: {
        OnSubmit(){
    
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Mensaje enviado',
              showConfirmButton: false,
              timer: 1500
            })

            this.resetForm()

        },

        resetForm(){
            this.userForm.nameUser = ''
            this.userForm.email = ''
            this.userForm.phone = null
            this.userForm.message = ''
            this.userForm.accetClausula = false
        }
    }
}
</script>

<style scoped>
label{
    font-weight: bold;
}

textarea {
  resize: none;
  height: 100px;
}

p{
    padding: 0 1em;
}
form {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;
}

.input-form{
    width: 80%;
    padding: 1em;
    font-weight: bold;
}



button{
    width: 80px;
    padding: 1em;
    margin: 1em;
    font-weight: bold;
    
}


@media screen and (min-width: 700px) {
    .input-form{
        width: 40%;
    }
}

@media screen and (min-width: 1000px) {
    .input-form{
        width: 300px;
    }
}
</style>