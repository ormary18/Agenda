
const nombre = document.querySelector('.nombre');
const apellido = document.querySelector('.apellido');
const direccion = document.querySelector('.direccion');
const telefono = document.querySelector('.telefono');
const vinculo = document.querySelector('.vinculo');

const btnAgregarTareas = document.querySelector('.btn-agregar-tarea');
const listadoDeTareas = document.querySelector('.listado-tareas');

const almacenamiento = window.localStorage

btnAgregarTareas.onclick = () => {
    let contacto = {
        nombre: nombre.value,
        apellido: apellido.value,
        direccion: direccion.value,
        telefono: telefono.value,
        vinculo: vinculo.value,

    }
    const almacenarContacto = (almacenamiento, contacto) => {
        almacenamiento.setItem(contacto.id, JSON.stringify(contacto))
        window.location.href = '/'
    }

    almacenarContacto(almacenamiento, contacto);


    const ingresarContacto = (almacenamiento) => {
        let password = Object.keys(almacenamiento)

        for (password of password) {
            let contacto = JSON.parse(almacenamiento.getItem(password))
            crearUnContacto(parentNode, contacto, almacenamiento)
        }

    }




}
