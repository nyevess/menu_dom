/////////////////Recoger nombre del usuario

//Creamos variable para el boton que guarda el nombre del usuario
let boton_user = document.getElementById('boton_user')

//creamos variable para almacenar el nombre que nos pasa el usuario cen el input
let input_user = document.getElementById('input_nombre')

//creamos variable para el h5 donde queremos mostrar el nombre del usuario
let mostrar_user = document.getElementById('nombre_usuario')

//Cuando se pulse el boton nos mostrará el nombre del usuario en la linea para seleccionar lo que quiere pedir
boton_user.addEventListener('click', () =>{
    let mostrar = input_user.value
    mostrar_user.innerHTML = mostrar
})


/////////////////PLATOS

//creamos las variables para las opciones de los platos

let patata = document.getElementById('patata')
let costilla = document.getElementById('costilla')
let ensaladilla = document.getElementById('ensaladilla')
let arroz = document.getElementById('arroz')

let opcion = document.getElementById('opcion')
//creamos la variable para el boton de pedir
let btn_pedir = document.getElementById('pedir')

//creamos la variable para mostrar el nombre de usuario en el total del pedido
let pdir_user = document.getElementById('usuario_pedido')

//creamos variable para mostrar el precio del pedido

let pedido = document.getElementById('pedido')

btn_pedir.addEventListener('click', () =>{
    let user = input_user.value
    pdir_user.innerHTML = user

    let total = opcion.value
    pedido.innerHTML = total


})
