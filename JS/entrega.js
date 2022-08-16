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




// ///// Buscar Juegos //////
// let inputForm = document.getElementById("inputBtn")
// let buscarJuego = document.getElementById("buscarBtn")
// buscarJuego.addEventListener("click", ()=>{console.log(`${inputForm.value}`)} )



//     let ingNombre = prompt(`Ingrese el Nombre del Juego`)
//     let busqueda = juegos.filter((juego)=>juego.nombre == ingNombre)
  
    
    
    
//     if(busqueda == false){
//         prompt(`Su Juego NO se encuentra en Nuestro Catalogo!!`)
//     }else{

//     }


//     buscarJuego.addEventListener("click",busquedaPorNombre)
    
 
// function busquedaPorNombre(){}