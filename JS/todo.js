//////catalogo de Juegos//////////

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

// const juegos = [juego1,juego2,juego3,juego4] 
// juegos.forEach((game)=>game.mostrarJuegos())

let tarjetaNueva = document.getElementById("juegos")
tarjetaNueva.setAttribute("class","estiloTarjetas")

function verCatalogo(){
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


/////Buscar juego por nombre//////////
function busquedaPorNombre(){
    let ingNombre = prompt(`Ingrese el Nombre del Juego`)
    let busqueda = juegos.filter((juego)=>juego.nombre == ingNombre)
    console.log(busqueda)
    if(busqueda == false){
        console.log(`Su Juego NO se encuentra en Nuestro Catalogo!!`)
    }
}


/////---------Imput-----------///////
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

///////-----catalogo-----///////////
let verCatalgoBtn = document.getElementById("verCatalgoBtn")
verCatalgoBtn.addEventListener("click", verCatalogo)

/////////Menu//////////
// function preguntarOpciones(){
    //     let opcion = parseInt(prompt(`Opciónes:
    //                         1 - Ver catálogo de Juegos
    //                         2 - Agregar Juego 
    //                         3 - Buscar por nombre:
    //                         0 - Para salir
    //                         `))
    //     menu(opcion)
    // }    
    // function menu(opcionSeleccionada){
        //     switch(opcionSeleccionada){
            //         case 0:
            //             salir = true
            //             alert(`Gracias, por visitar nuestera plataforma Gamer!!!`)
            //         break    
            //         case 1:
            //             verCatalogo()
            
            //       	break 
            //    	    case 2: 
            //             nuevoJuego()
            //       	break 
            //    	    case 3: 
            //             busquedaPorNombre()
            
            //       	break 
            //    	    default: 
            //       	alert(`Ingrese una opción correcta`)
            //     }
            // }
            // preguntarOpciones()
            
            ///////------Plantilla-------////////
            
            // let divJuegos = document.getElementById("juegos")
            
            // juegos.forEach((juegos)=>{ 
                //     let juegoNuevo = document.createElement("div")
                //     juegoNuevo.innerHTML = `<section id="${juegos.id}" class="card">
                //                                 <h2 class="tituloCard">${juegos.nombre}</h2>
                //                                 <img class="imgCard" src="${juegos.imagen}" alt="${juegos.titulo}">
                //                                 <div class="info">
                //                                     <p class="generoCard">${juegos.genero}</p>
                //                                     <p id="anioCard" class="anioCard">${juegos.año}</p>
                //                                 </div>
                //                             </section>`
                
                //     document.body.append(juegoNuevo) 
                // })
                
                ///////////Catalogo////////////
                // function verCatalogo(){
                    //         for(let game of juegos){
                        //         game.mostrarJuegos()
                        //     }
                        // }
                        
                        ///////// Ingresar Juegos nuevos ///////////////////
                        // function nuevoJuego(){
                        //     let juegoIngresado = prompt("Ingrese el Juego")
                        //     let generoIngresado = prompt("Ingrese el genero")
                        //     let añoIngresado = parseInt(prompt("Ingrese el año"))
                        //     let juegoCreado = new nombreJuegos(juegos.length+1,juegoIngresado, generoIngresado, añoIngresado)
                        //     console.log(juegoCreado)
                        //     juegos.push(juegoCreado)
                        // }
                
                