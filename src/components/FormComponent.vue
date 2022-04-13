<template>
    <form @submit.prevent="OnSubmit(userForm)">
        <input type="text" placeholder="Nombre" v-model="userForm.nameUser">
        <input type="email" placeholder="Email" v-model="userForm.email">
        <input type="tel" placeholder="Teléfono" pattern="[0-9]{9}" v-model="userForm.phone" required>
        <textarea name="" id="" cols="22" rows="10" placeholder="Mensaje" v-model="userForm.message" required></textarea>
        <label for="input-clausula">Cláusula informativa</label>
        <span>
            <input type="checkbox" id="input-clausula" v-model="userForm.accetClausula">
            <span>Con objeto de dar cumplimiento a las obligaciones derivadas del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD),  le informa que al marcar este check, usted da su consentimiento para que sus datos personales quedan incorporados a los ficheros de datos de carácter personal de LA RONDEÑA, para la prestación de servicios por parte de la misma y prospección comercial. El Responsable del mencionado fichero es La Rondeña con email info@rondeña.com a la cual usted podrá remitir un comunicado identificado con la referencia “Protección de Datos” para el ejercicio de sus derechos de acceso, rectificación, cancelación, olvido, limitación, portabilidad y oposición.</span>
        </span>
        <button type="submit">Enviar</button>
    </form>
</template>

<script>
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
        OnSubmit(dateForm){
            console.log(dateForm)
        }
    }
}
</script>

<style scoped>

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

input,textarea{
    padding: 1em;
    font-weight: bold;
}



button{
    width: 80px;
    padding: 1em;
    margin: 1em;
    font-weight: bold;
    
}
</style>