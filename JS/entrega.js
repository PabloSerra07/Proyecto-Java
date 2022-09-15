/////////////tarjeta//////

let tarjetaNueva = document.getElementById("juegos")
tarjetaNueva.setAttribute("class","estiloTarjetas")
busqueda.setAttribute("class","estiloTarjetas")

function verCatalogo(){
    busqueda.innerHTML = ""
    tarjetaNueva.innerHTML =""
    juegos.forEach((juego) =>{
    let nuevoJuego = document.createElement("div")
    nuevoJuego.innerHTML = `<section id="${juego.id}" class="card">
                                    <h2 class="tituloCard">${juego.nombre}</h2>
                                    <img class="imgCard" src="${juego.imagen}" alt="${juego.titulo}">
                                    <div class="info">
                                        <p class="generoCard">${juego.genero}</p>
                                        <p id="anioCard" class="anioCard">${juego.año}</p>
                                        <button id="btnInfoJuegos${juego.id}" class="btn btn-dark ">Ver Mas</button>
                                    </div>
                            </section>`
                            tarjetaNueva.appendChild(nuevoJuego)


                            let btnInfoJuegos = document.getElementById(`btnInfoJuegos${juego.id}`)
                            btnInfoJuegos.addEventListener("click", ()=>{
                                                    Swal.fire({
                                                    title: `${juego.nombre}`,
                                                    text: `${juego.info}`,
                                                    imageUrl: `${juego.imagen}`,
                                                    imageWidth: 400,
                                                    imageHeight: 200,
                                                    imageAlt: 'Custom image',
                                            
                                                    })
})
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
    let juegoCreado = new nombreJuegos(juegos.length+1, nombreInput.value, generoInput.value, añoInput.value, "./img/Super Mario.jpg" )
    juegos.push(juegoCreado)
    localStorage.setItem("juegos", JSON.stringify(juegos))
    
}

//////--------------Boton Agregar--------//////////
const guardarJuegoBtn = document.getElementById("guardarJuegoBtn")
guardarJuegoBtn.addEventListener("click", guardarJuego)




/// Buscar Juegos //////

let inputBuscar = document.getElementById("inputText")
inputBtn.addEventListener('click', (e)=>{
    //function de buscado
    e.preventDefault()
    let verJuego = juegos.filter(juegos =>(juegos.nombre.toLowerCase().includes(inputBuscar.value.toLowerCase())))
    
    if(verJuego.length == 0){
        Swal.fire(
            'El Juego NO Se Encuentra En nuestro Catalogo',
            'Vuelva a Intentar !!!',
            'warning'
        )
        }else{
            let busqueda = document.getElementById("busqueda")
            tarjetaNueva.innerHTML =""
            verJuego.forEach((juego) =>{
                let busquedaJuego = document.createElement("div")
                busquedaJuego.innerHTML = `<section id="${juego.id}" class="card">
                                    <h2 class="tituloCard">${juego.nombre}</h2>
                                    <img class="imgCard" src="${juego.imagen}" alt="${juego.titulo}">
                                    <div class="info">
                                    <p class="generoCard">${juego.genero}</p>
                                    <p id="anioCard" class="anioCard">${juego.año}</p>
                                    <button  id="btnInfoJuegos${juego.id}" class="btn btn-dark ">Ver Mas</button>
                                    </div>
                                    </section>`

                                    busqueda.appendChild(busquedaJuego)
                                    
                                    let btnInfoJuegos = document.getElementById(`btnInfoJuegos${juego.id}`)
                                    btnInfoJuegos.addEventListener("click", ()=>{
                                                    Swal.fire({
                                                    title: `${juego.nombre}`,
                                                    text: `${juego.info}`,
                                                    imageUrl: `${juego.imagen}`,
                                                    imageWidth: 400,
                                                    imageHeight: 200,
                                                    imageAlt: 'Custom image',
                                            
                                                    })
        
                                    })
            })   
        }
    
    })

    






