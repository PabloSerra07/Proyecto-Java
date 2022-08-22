let entrega = document.getElementById("pruebaBtn")
pruebaBtn.addEventListener("click", ()=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no puedo solucionar el error en mi buscador!!!',
        
    })})


    nombre = prompt ('Por favor introduce tu nombre:')
    
    function mostrarMensaje1() { 
        (nombre =="")? alert('No has introducido ningún nombre') : alert('Hola '+nombre + '. Bienvenido a esta página web.')
        edad = prompt ('¿Cuál es tu edad?')
        edad = Number(edad);
        (edad >20 && edad <30 )? alert ('Eres un niño.') : alert ('Eres mayor de edad.')
        }
mostrarMensaje1()

class nombreJuegos{
    constructor(id, nombre, genero, año,imagen){
        this.id = id,
        this.nombre = nombre,
        this.genero = genero,
        this.año = año
        this.imagen = imagen
    }


    mostrarJuegos(){
        console.log(`Este juego es ${this.nombre}, Genero ${this.genero}  La id del juego es ${this.id}`)
    }
}

const juego1 = new nombreJuegos (1,"Super Mario","Accion",1985, "./img/Super Mario.jpg")

const juego2 = new nombreJuegos (2,"Sonic","Aventura",1984, "./img/sonic.jpg")

const juego3 = new nombreJuegos (3,"Contra","Shoter",1986, "./img/contra.jpg")

const juego4 = new nombreJuegos (4,"Islander","Aventura",1987, "./img/Islander.jpg")

///estanteria ///
let juegos = []

/////eventos DOM////


///inicio de storag /////
if(localStorage.getItem("juegos")){
    juegos = JSON.parse(localStorage.getItem("juegos"))
}else{
    juegos.push(juego1,juego2,juego3,juego4)
    localStorage.setItem("juegos", JSON.stringify(juegos))
}

//////desestructurado de array de storage/////
const [,,a,b] = juegos
console.log(b)
console.log(a.año)


//////tarjeta//////

let tarjetaNueva = document.getElementById("juegos")
tarjetaNueva.setAttribute("class","estiloTarjetas")


function verCatalogo(){
    tarjetaNueva.innerHTML =""
    juegos.forEach((juego) =>{
    let nuevoJuego = document.createElement("div")
    nuevoJuego.innerHTML = `<section id="${juego.id}" class="card">
                                    <h2 class="tituloCard">${juego.nombre}</h2>
                                    <img class="imgCard" src="${juego.imagen}" alt="${juego.titulo}">
                                    <div class="info">
                                        <p class="generoCard">${juego.genero}</p>
                                        <p id="anioCard" class="anioCard">${juego.año}</p>
                                        <button id="btnInfoJuegos" class="btn btn-dark">Ver Mas</button>
                                    </div>
                            </section>`
tarjetaNueva.appendChild(nuevoJuego)
})
}
///////-----catalogo-----///////////
let verCatalgoBtn = document.getElementById("verCatalgoBtn")
verCatalgoBtn.addEventListener("click", verCatalogo)

function ocultarCatalogo(){
    tarjetaNueva.innerHTML =""
}

let ocultarCatalogoBtn = document.getElementById("ocultarCatalogoBtn")
ocultarCatalogoBtn.addEventListener("click", ocultarCatalogo)



///////imput////////
function guardarJuego(){
    let nombreInput = document.getElementById("nombreInput")
    let generoInput = document.getElementById("generoInput")
    let añoInput = document.getElementById("añoInput")
    let imageInput = document.getElementById("imageInput")
    let juegoCreado = new nombreJuegos(juegos.length+1, nombreInput.value, generoInput.value, añoInput.value, "img/Super Mario.jpg" )
    juegos.push(juegoCreado)
    localStorage.setItem("juegos", JSON.stringify(juegos))
    
}

//////--------------Boton Agregar--------//////////
const guardarJuegoBtn = document.getElementById("guardarJuegoBtn")
guardarJuegoBtn.addEventListener("click", guardarJuego)




/// Buscar Juegos //////
// let busquedaNueva = document.getElementById("busqueda")
// busquedaNueva.setAttribute("class","estiloTarjetas")

// function busJuego(formBox){
//     let busqueda = juegos.filter((juego)=>juego.nombre == formBox)
//     console.table(busqueda)
    
//     if(busqueda.length > 0){
        
//         juegos.forEach((juego) =>{
//         let verBusqueda = document.createElement("div")
//         verBusqueda.innerHTML = `<section id="${juego.id + "i"}" class="card">
//                                     <h2 class="tituloCard">${juego.nombre}</h2>
//                                     <img class="imgCard" src="${juego.imagen}" alt="${juego.titulo}">
//                                     <div class="info">
//                                         <p class="generoCard">${juego.genero}</p>
//                                         <p id="anioCard" class="anioCard">${juego.año}</p>
//                                         <button id="btnInfoJuegos" class="btn btn-dark">Ver Mas</button>
//                                     </div>
//                             </section>`
// busquedaNueva.appendChild(verBusqueda)

// })
// }else{
        
//         Swal.fire({
//             imageUrl: 'https://placeholder.pics/svg/300x1500',
//             imageHeight: 1500,
//             imageAlt: 'A tall image'
//         })
        
//     }
// }
//     document.getElementById("buscarForm").addEventListener("submit", function(e) {
//         let formBox = document.getElementById('inputText').value;
//         busJuego(formBox);
//     } )


