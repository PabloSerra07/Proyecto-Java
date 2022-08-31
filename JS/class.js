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
// const juego1 = new nombreJuegos (1,"Super Mario","Accion",1985, "./img/Super Mario.jpg")

// const juego2 = new nombreJuegos (2,"Sonic","Aventura",1984, "./img/sonic.jpg")

// const juego3 = new nombreJuegos (3,"Contra","Shoter",1986, "./img/contra.jpg")

// const juego4 = new nombreJuegos (4,"Islander","Aventura",1987, "./img/Islander.jpg")

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

