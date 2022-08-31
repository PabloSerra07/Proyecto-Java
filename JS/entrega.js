///inicio de storag /////
// if(localStorage.getItem("juegos")){
//     juegos = JSON.parse(localStorage.getItem("juegos"))
// }else{
//     juegos.push(juego1,juego2,juego3,juego4)
//     localStorage.setItem("juegos", JSON.stringify(juegos))
// }




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

let inputBuscar = document.getElementById("inputText")
inputBtn.addEventListener('click', (e)=>{
    //function de buscado
    e.preventDefault()
    // console.log("click");
    // console.log(inputBuscar.value.toLowerCase());
    let verJuego = juegos.filter(juegos =>(juegos.nombre.toLowerCase() == inputBuscar.value.toLowerCase()))
    console.log(verJuego);
    if(verJuego.length == 0){
        Swal.fire(
            'El Juego NO Se Encuentra En nuestro Catalogo',
            'Vuelva a Intentar !!!',
            'warning'
        )
        }else{
            
        let busqueda = document.getElementById("busqueda") 
        busqueda.innerText = verJuego[0].nombre

    }
})







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


////BTN INFO DE JUEGOS/////

// let btnInfoJuegos = document.getElementById("btnInfoJuegos")
// btnInfoJuegos.addEventListener("click",()=>{ 

// })

