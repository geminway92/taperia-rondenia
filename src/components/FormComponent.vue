<template>
    <form @submit.prevent="">
        <input type="text" placeholder="Nombre">
        <input type="email" placeholder="Email">
        <input type="phone" placeholder="Teléfono">
        <input type="text" placeholder="Mensaje">
        <input type="checkou">
        <label for="input-clausula">Cláusula informativa</label>
        <span>
            <input type="checkbox" id="input-clausula">
            <span>Con objeto de dar cumplimiento a las obligaciones derivadas del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD),  le informa que al marcar este check, usted da su consentimiento para que sus datos personales quedan incorporados a los ficheros de datos de carácter personal de EL TXOCO DE LUIS SALINERO, para la prestación de servicios por parte de la misma y prospección comercial. El Responsable del mencionado fichero es EL TXOCO DE LUIS SALINERO con email info@eltxocodeluissalinero.com a la cual usted podrá remitir un comunicado identificado con la referencia “Protección de Datos” para el ejercicio de sus derechos de acceso, rectificación, cancelación, olvido, limitación, portabilidad y oposición.</span>
        </span>
        <button type="submit">Enviar</button>
    </form>
</template>

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

input{
    padding: 1em;
}

button{
    width: 80px;
    padding: 1em;
}
</style>