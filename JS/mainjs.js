//CLASE 14 ASINCRONIA
//la function setTimeout 
//recibe dos parámetros
// setTimeout(()=>{
//     console.log("Bienvenidos/as a Coder")

// },500)

// console.log("Buenas noches")
// let time = 0
// for(let letra of "hola"){
//     time+=1000
//     setTimeout(()=>{
//         console.log(letra)
//     },time)
// }
// let i = 0
// const intervalo = setInterval(()=>{
//     i++
//     console.log("Tic " + i)
//     if(i == 5){
//         clearInterval(intervalo)
//         console.log("Fin del tic tac")
//     }
// },1000)

// for(let letra of "mundo"){
//     setTimeout(()=>{
//         console.log(letra)
//     },1000)
// }

class Tutor {
    constructor(id, nombre, apellido, sueldo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido
    }
}

const tutor1 = new Tutor(1, "Nicolas", "Torosoni")
const tutor2 = new Tutor(2, "Luciana", "Garro")
const tutor3 = new Tutor(3, "Alan", "Sinicco")
const tutor4 = new Tutor(4, "Jean Paul", "Baladi")

const tutores =[tutor1, tutor2,tutor3,tutor4]

function consultarPromesa(valor){
    return new Promise((res, rej)=>{
        if(valor == true){
            res(tutores)
        }
        rej("Fue rechazada la promesa")
        

    })
}
consultarPromesa(false)
.then(prom => console.log(prom))
.catch(error => console.error(error))
.finally(()=>console.log(`Promesa/consulta finalizada`))
//Array productos en carrito operador OR -- Optimización
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || []


//Elementos DOM 
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador
let divProductos = document.getElementById("productos")
let inputBuscar = document.getElementById("buscador") 
let btnBuscar = document.getElementById("btnBuscar")

//Funciones 
 


function mostrarCatalogo(array){
    divProductos.innerHTML = ""
    array.forEach((libro)=>{
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<div id="${libro.id}" class="card" style="width: 18rem;">
                                        <img class="card-img-top alturaCardFotos" src="${libro.imagen}" alt="${libro.titulo} de ${libro.autor}">
                                        <div class="card-body">
                                            <h5 class="card-title">${libro.titulo}</h5>
                                            <p class="precioCard ${libro.precio <= 2000 ? "ofertaColor" : "precioComun"} ">Precio: ${libro.precio}</p>
                                            <button id="agregarBtn${libro.id}" class="btn btn-outline-success">Agregar al carrito</button>
                                        </div>
                                    </div>`
        divProductos.appendChild(nuevoProducto)
        //código btnAgregar
        let btnAgregar = document.getElementById(`agregarBtn${libro.id}`)
        //invocar agregarAlCarrito
        btnAgregar.addEventListener("click", () =>{
            agregarAlCarrito(libro)
            
        })
        })
    }

function agregarAlCarrito(libro){
        console.log(`El libro ${libro.titulo} del autor ${libro.autor} ha sido agregado. N° identificación libro: ${libro.id}`)
        
        let libroAgregado = productosEnCarrito.find((elem) => (elem.id == libro.id))
        console.log(libroAgregado)
        console.log(productosEnCarrito);
        if (libroAgregado == undefined){
            productosEnCarrito.push(libro)
            console.log(productosEnCarrito);
            //Cargar al storage
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))        
            Swal.fire({
                title: "Ha agregado el producto",
                text: `El libro ${libro.titulo} de ${libro.autor} ha sido agregado`,
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
                confirmButtonText:"Entendido",
            })
        }else{
            console.log(`El libro ${libro.titulo} ya se encuentra en el carrito`)
            Swal.fire({
                        title: "Producto ya agregado",
                        text: `El libro ${libro.titulo} de ${libro.autor} ya se encuentra en el carrito`,
                        icon: "info",
                        timer:4000,
                        confirmButtonText:"Aceptar",
                        confirmButtonColor: 'green',
                        
                    })
        }       
}

function cargarProductosCarrito(productosDelStorage) {

    modalBody.innerHTML = " "  
    productosDelStorage.forEach((productoCarrito) => {
        
        modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.titulo}">
                <div class="card-body">
                        <h4 class="card-title">${productoCarrito.titulo}</h4>
                    
                        <p class="card-text">$${productoCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
    `
      
})

productosDelStorage.forEach((productoCarrito, indice)=>{
        //capturamos el boton sin usar variable y adjuntamos evento
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener('click', () => {
            //Cartel emergente:
            Toastify({
                text: `${productoCarrito.titulo} ha sido eliminado`,
                duration: 2500,
                gravity: "bottom",
                position: "left",
                style:{
                    background: "linear-gradient(to right, #00b09b, #96c92d)",
                    color: "white", 
                }
                
                }).showToast();
            //Dentro del evento:
            console.log(`Producto ${productoCarrito.titulo} eliminado`)
            //Eliminamos del DOM
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            console.log(cardProducto);
            cardProducto.remove()

            //Eliminamos del array compras
            productosEnCarrito.splice(indice, 1)
            console.log(productosEnCarrito)
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
            //Vuelvo a imprimir
            cargarProductosCarrito(productosEnCarrito)
        })  

})
//Function del total
compraTotal(...productosDelStorage)
}

//Transformamos la function con spread y reduce
function compraTotal(...productosTotal) {
    acumulador = 0;

    acumulador = productosTotal.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio
    },0)
    
    console.log(acumulador)
    
    //Reemplazar con ternario
    acumulador > 0 ? parrafoCompra.innerHTML = `Importe de su compra es ${acumulador}`: parrafoCompra.innerHTML = `<p>No hay productos en el carrito</p>`
   
   
}
function finalizarCompra(){
    Swal.fire({
        title: 'Está seguro de realizar la compra',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
    }).then((result) => {
        let DateTime = luxon.DateTime
        const dt = DateTime.now()
        
        let fecha = `Siendo las ${dt.toLocaleString(DateTime.TIME_SIMPLE)} del ${dt.toLocaleString(DateTime.DATE_FULL)}`
    if (result.isConfirmed) {
        Swal.fire({
            title: 'Compra realizada',
            icon: 'success',
            confirmButtonColor: 'green',
            text: `Muchas gracias por su compra ha adquirido nuestros productos. `,
            footer: `<p>${fecha} nos comprometemos que en el plazo de 48hs nos comunicaremos con usted</p>`
        })
        //Ahora pusimos el código dentro del THEN para que se ejecute en caso de que result sea confirmado. 
        productosEnCarrito = []
        localStorage.removeItem('carrito')
        //Mostramos total
        console.log(`El total de su compra es ${acumulador}`)
        //Volvemos a cargar el modal con el array vacío por lo que quedará sin nada
        cargarProductosCarrito(productosEnCarrito)
        }
        else{
            Swal.fire({
                title: 'Compra no realizada',
                icon: 'info',
                text: `La compra no ha sido realizada! Atención sus productos siguen en el carrito :D`,
                confirmButtonColor: 'green',
                timer:3500
            })
        }
    })}
//Eventos 
botonCarrito.addEventListener('click', () => {
    cargarProductosCarrito(productosEnCarrito)
})
botonFinalizarCompra.addEventListener('click',()=>{
    finalizarCompra()
})
btnBuscar.addEventListener('click', ()=>{
    //function de buscado
    event.preventDefault()
    console.log("click");
    console.log(inputBuscar.value.toLowerCase());
    let tituloBuscado = estanteria.filter(libro =>(libro.titulo.toLowerCase() == inputBuscar.value.toLowerCase()))
    console.log(tituloBuscado);
    if(tituloBuscado.length == 0){
        console.log(`No hay coincidencia`);
        mostrarCatalogo(estanteria)
    }else{
        mostrarCatalogo(tituloBuscado)

    }
})
//Código
let divLoader = document.getElementById("loader")

const loading = setTimeout(()=>{
    //chau divLoader
    divLoader.remove()
    //llamar tarjetas
    mostrarCatalogo(estanteria)
},2000)












