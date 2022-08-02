//////catalogo de Juegos//////////

class nombreJuegos{
    constructor(id,nombre, genero, año, precio){
        this.id = id,
        this.nombre = nombre,
        this.genero = genero,
        this.año = año,
        this.precio = precio
    }


    mostrarJuegos(){
        console.log(`Este juego es ${this.nombre}, Genero ${this.genero} y vale ${this.precio} La id del juego es ${this.id}`)
    }
}

const juego1 = new nombreJuegos (1,"Super Mario","Accion",1985,10 )
const juego2 = new nombreJuegos (2,"","","", )
const juego3 = new nombreJuegos (3,"","","", )
const juego4 = new nombreJuegos (4,"","","", )

const juegos = [juego1,juego2,juego3,juego4] 
juegos.forEach((game)=>game.mostrarJuegos())


///////// Ingresar Juegos nuevos ///////////////////
function nuevoJuego(){
    let juegoIngresado = prompt("Ingrese el Juego")
    let generoIngresado = prompt("Ingrese el genero")
    let añoIngresado = parseInt(prompt("Ingrese el año"))
    let precioIngresado = parseInt(prompt("Ingrese el precio"))
    let juegoCreado = new nombreJuegos(juegos.length+1,juegoIngresado, generoIngresado, añoIngresado, precioIngresado)
    console.log(juegoCreado)
    juegos.push(juegoCreado)
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

///////////Catalogo////////////
function verCatalogo(){
    alert(`Catalogo de Juegos: "Ver en Consola"`)
    for(let game of juegos){
        game.mostrarJuegos()
    }
}

/////////Menu//////////
function preguntarOpciones(){
    let opcion = parseInt(prompt(`Opciónes:
                        1 - Ver catálogo de Juegos
                        2 - Agregar Juego 
                        3 - Buscar por nombre:
                        0 - Para salir
                        `))
    menu(opcion)
}    
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias, por visitar nuestera plataforma Gamer!!!`)
        break    
        case 1:
            verCatalogo()

      	break 
   	    case 2: 
            nuevoJuego()
      	break 
   	    case 3: 
            busquedaPorNombre()
      	
      	break 
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }
}
preguntarOpciones()