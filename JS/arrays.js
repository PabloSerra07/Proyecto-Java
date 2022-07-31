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
        console.log(`Este juego es ${this.nombre}, Genero: ${this.genero}, y vale ${this.precio}. La id del juego es ${this.id}`)
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
    let generoIngresado = parseInt(prompt("Ingrese el genero"))
    let añoIngresado = prompt("Ingrese el año")
    let precioIngresado = parseInt(prompt("Ingrese el precio"))
    let juegoCreado = new nombreJuegos(juegos.length+1,juegoIngresado, generoIngresado, añoIngresado, precioIngresado)
    console.log(juegoCreado)
    juegos.push(juegoCreado)
}
nuevoJuego()

