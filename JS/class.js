class nombreJuegos{
    constructor(id, nombre, genero, año,imagen,info,){
        this.id = id,
        this.nombre = nombre,
        this.genero = genero,
        this.año = año
        this.imagen = imagen
        this.info = info
    }
}


///estanteria ///
let juegos = []


////////JSON////
fetch("juegos.json")
.then(response => response.json())
.then(data =>{
    for (let juego of data){
        let juegosNuevos = new nombreJuegos(juego.id, juego.nombre, juego.genero, juego.año, juego.imagen,juego.info)
        juegos.push(juegosNuevos)
    }
    
} )

