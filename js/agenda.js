$(document).ready(function(){


$('h2').html('Agenda de Contacto');


const nombre = $('.nombre').html('nombre');
const apellido = $('.apellido').html('apellido');;
const direccion = $('.direccion').html('direccion');
const telefono = $('.telefono').html('telefono');
const vinculo = $('.vinculo').html('vinculo');


const btnAgregarTareas = document.querySelector('.btn-agregar-tarea');
const listadoDeTareas = document.querySelector('.listado-tareas');

const almacenamiento = window.localStorage


btnAgregarTareas.onclick = () => {
    let contacto = {
        id: Math.random(1,50),
        nombre: nombre.value,
        apellido: apellido.value,
        direccion: direccion.value,
        telefono: telefono.value,
        vinculo: vinculo.value,

    }

 $('#form').submit(function (evento) { 
       evento.preventDefault();
       let nombre = $('#nombre').val();
    
       
   });

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


});
