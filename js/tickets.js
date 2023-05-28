let ticket = 200
let estudiante= 0.8
let trainee= 0.5
let junior= 0.15


function guardarComprador () {

    const valueNombre = getValue ('nombre');
    const valueApellido = getValue ('apellido');
    const valueEmail = getValue ('email');
    const valueCantidad = getValue ('cantidad');
    const valueCategoria = getValue ('categoria');

const comprador = {
    nombre: valueNombre,
    apellido: valueApellido,
    email: valueEmail,
    cantidad:valueCantidad,
    categoria:valueCategoria,

};

guardarDatos('comprador',comprador) ;

}

function getValue (id) {
    return document.getElementById(id).value;
}

function guardarDatos (nombre,dato){
    localStorage.setItem(nombre,JSON.stringify(dato));
}

const apuntadorAresumen = document.getElementById ('resumen');

apuntadorAresumen.addEventListener('click',guardarComprador);

const precio = document.getElementById("precio");

function descuento () {
    const precioDescuento = (ticket- (ticket * Number(getValue('categoria'))))*getValue('cantidad');


    precio.innerText = precioDescuento
}

apuntadorAresumen.addEventListener('click',descuento);




const apuntadorAborrar = document.getElementById ("borrar");

apuntadorAborrar.addEventListener('click',borradDatos)

function borradDatos () {

    precio.innerText = 0;

}