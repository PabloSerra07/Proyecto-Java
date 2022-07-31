// let hola = prompt("como te llamas")
// console.log ("hola "+ hola)


// let nota = 0;
// let numero = 0;
// let promedio = 0;


// for (let i = 0; i < 3 ; i++){
//     nota = parseInt(prompt("Ingresar Notas !!"))
//     numero = numero + nota;
//     promedio = numero / 3; 
// }
// alert("La suma es " + numero)
// alert("El promerio final es " + promedio)




//Objetoas//

// const nose = {
//     dato: "algo",
//     dato1: 222,
//     dato2: 333
// }
// console.log (nose)
// console.log (nose.dato1)


//////funcion constructora
/////
// function Persona(dato, dato1, dato2){
//     this.dato = "algo",
//     this.dato1 = 222,
//     this.dato2 = 333
// }
////para cambiar un dato////
// const persona1 = new Persona
// ("algo1", 111, 444)
// console.log(persona1)


// function Participante(nombreIngresado, edad, rol){
//     this.nombre= nombreIngresado,
//     this.edad=edad,
//     this.rol=rol,
//     this.mostrarDatos = function(){
//         console.log(`El nombre es ${this.nombre}, edad: ${this.edad} y su rol es ${this.rol}`)}
//     this.ayuda = if (this.rol == "estudiante"){console.log("Bienvenido a coder")}    
// }
// const participante1 = new Participante("Franco",22,"estudiante")
// const participante2 = new Participante("Alan", 26, "tutor")
// const participante3 = new Participante("Gonza", 29, "profe")
// const participante4 = new Participante("Exe", 19, "estudiante")


///////////////////entrega de funciones////////////////////
// function suma1(num1, num2){
//     let resultadoSuma = Number(num1) +Number(num2)
//     alert(`El resultado de la suma es ${resultadoSuma}`)
// }
// function resta1(num1, num2){
//     let resultadoResta = Number(num1) - Number(num2)
//     alert(`El resultado de la resta es ${resultadoResta}`)
// }
// function multiplicacion1(num1, num2){
//     let resultadoMultip = Number(num1) * Number(num2)
//     alert(`El resultado de la suma es ${resultadoMultip}`)
// }
// function division1(num1, num2){
//     let resultadoDivision = Number(num1) / Number(num2)
//     alert(`El resultado de la suma es ${resultadoDivision}`)
// }

// let pregunta = prompt(`Decime que operacion deseas realizar? Suma, Resta, Multiplicacion o Division`)


// if (pregunta == "suma"){
//     let primNum = prompt(`Ingrese el Primer Numero!!`)
//     let segNum = prompt(`Ingrese el segundo Numero!!`)
//     suma1(primNum, segNum)
// }
// if (pregunta == "resta") {
//     let primNum = prompt(`Ingrese el Primer Numero!!`)
//     let segNum = prompt(`Ingrese el segundo Numero!!`)
//     resta1(primNum, segNum)
// }
// if (pregunta == "multiplicacion"){
//     let primNum = prompt(`Ingrese el Primer Numero!!`)
//     let segNum = prompt(`Ingrese el segundo Numero!!`)
//     multiplicacion1(primNum, segNum)
// }
// if (pregunta == "division"){
//     let primNum = prompt(`Ingrese el Primer Numero!!`)
//     let segNum = prompt(`Ingrese el segundo Numero!!`)
//     division1(primNum, segNum)
// }
// window.location.reload()


/////funciondentro de array///////////    
// function alumno01(){

//     let nombre = "Juan";
//     let edad = 15;
//     let rol = "admin";

//     return {
//         nombre,
//         edad,
//         rol
//     } 
// }// function alumno02(){

//     let nombre = "Pedro";
//     let edad = 20;
//     let rol = "user";

//     return {
//         nombre,
//         edad,
//         rol
//     }
// }

// const arrayAlumnos = [
//     alumno01(),
//     alumno02()
// ];

// console.log(arrayAlumnos);


//////////////EJEMPLO forEach///////////////////
// const productos = [
//     { nombre: "Laptop", precio: 1000 },
//     { nombre: "Mouse", precio: 50 },
//     { nombre: "Teclado", precio: 100 }
// ]

// // Acumular precios con forEach
// let acumulador = 0;
// productos.forEach((n)=>{
//     acumulador += n.precio;
// })
