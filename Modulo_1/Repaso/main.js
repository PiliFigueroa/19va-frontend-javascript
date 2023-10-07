/*
let y const => son formas de declarar variables

let => permite que el valor cambie a lo largo del tiempo
const => es constante, no puede cambiar

*/

// let count = 0
// console.log(count)
// count++
// console.log(count)

// const PI = 3.1416
// console.log(PI)
// PI = 1.618
// console.log(PI)

// let fullname
// console.log(fullname)
// fullname = "Mel"
// console.log(fullname)

// const profession => las variables con const tienen que ser inicializadas

// const fullname = "Pilar Figueroa"
// const age = 26
// const profession = "Developer"
// const worksRemotely = false

// condicion ? pasa esto : pasa esto otro

// const office = worksRemotely ? "remota" : "on site"

// const p = document.querySelector("p")

// p.innerHTML = `Hola mundo! Soy ${fullname} tengo ${age} trabajo de ${profession} y la metodologia de trabajo es <span class="${worksRemotely ? "red" : "blue"}">${office}</span>`

// truthy => string (al menos un caracter), numbers (cualquiera menos el 0), true
// falsy => 0, null, false, NaN, undefined

/*
=== igualdad estricta
!= distinto de
> mayor
< menor
>= mayor o igual
<= menor o igual
! negacion
*/

// Funciones
// arrow function => es una funcion del tipo flecha guardada en una variable
// Es un bloque de codigo que se define y se puede ejecutar todas las veces que querramos, es decir, es reutilizable
// Hacer una sola cosa, y hacerla BIEN
// Debe haber un retorno => tener el valor disponible por fuera del scope de la funcion y ademas CORTA la ejecucion de la misma

// const number1 = 10
// const number2 = 20

// const sumar = (a, b) => a + b

// console.log(sumar(number1, number2))

// Capitalizar
// Crear una funcion que reciba un string y retorne el mismo string con la primer letra capitalizada

// toUpperCase()

// const capitalizar = (str) => {
//     const primerLetra = str.slice(0, 1).toUpperCase()
//     return primerLetra + str.slice(1)
// }

// console.log(capitalizar("hola mundo"))

// DOM => document object model

// querySelector
// const h1 = document.querySelector("h1")
// const p = document.querySelector(".paragraph")
// const btn = document.querySelector("#btn")

const $ = (selector) => document.querySelector(selector)

// $("h1")
// $(".paragraph")
// $("#btn")

// innerText - innerHTML
// $("h1").innerText = "Esta es una clase de repaso"
// $("h1").innerText += " Bienvenidas"
// $("p").innerHTML += "<a href='https://www.google.com' target='_blank' class=''>Esto es un link</a> "

// .style - classList add() remove() toggle()
// $("#btn").style.borderRadius = "10px"
// $(".paragraph").style.backgroundColor = "#000"
// $(".paragraph").style.color = "#fff"

// $(".paragraph").classList.add("blue")

// attributes - setAttribute(atributo, valor) - removeAttribute(atributo) - getAttribute(atributo)
// $("h1").setAttribute("aria-label", "Es un titulo")
// $(".paragraph").removeAttribute("class")

// Eventos => acciones que hace el usuario
// addEventListener(tipoDeAccion, callback)

// $("h1").addEventListener("click", () => {
//     // bloque de codigo
//     // $("h1").style.fontSize = "50px"
//     $("h1").classList.toggle("font-xl")
// })

// $(".paragraph").addEventListener("click", () => {
//     $(".paragraph").style.color = "blue"
// })

// window

// window.addEventListener("keypress", (e) => {
//     console.log(e)
//     if (e.key === "Enter") {
//         // ejecuta algo
//     }
// })

/*
### playlist

Crear un documento `html` con un título que diga `Mis canciones favoritas` y una lista desordenada. Pedir mediante `prompt`s por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada 
*/

// const song1 = prompt("Ingresa una cancion")
// const song2 = prompt("Ingresa una cancion")
// const song3 = prompt("Ingresa una cancion")
// const song4 = prompt("Ingresa una cancion")
// const song5 = prompt("Ingresa una cancion")

// $("ul").innerHTML += `
//     <li>${song1}</li>
//     <li>${song2}</li>
//     <li>${song3}</li>
//     <li>${song4}</li>
//     <li>${song5}</li>
// `

/*
### contador

Crear un documento `html` que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.
*/

// $("#subOne").addEventListener("click", () => {
//     // Guardo el valor actual del h1 que es mi contador
//     const currentValue = $(".count").innerText
//     // Calculo la resta segun el boton que corresponde
//     const result = currentValue - 1
//     // Actualizo el valor de mi contador en pantalla
//     $(".count").innerText = result
// })

// $("#addOne").addEventListener("click", () => {
//     const currentValue = parseInt($(".count").innerText)
//     const result = currentValue + 1
//     $(".count").innerText = result
// })

// $("#subFive").addEventListener("click", () => {
//     const currentValue = parseInt($(".count").innerText)
//     const result = currentValue - 5
//     $(".count").innerText = result
// })

// $("#addFive").addEventListener("click", () => {
//     const currentValue = parseInt($(".count").innerText)
//     const result = currentValue + 5
//     $(".count").innerText = result
// })

/*
### adivinanza

Crear un documento `html` con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.
*/

// const responderAdivinanza = (str) => $("span").innerText = str

// $("#firstAnswer").addEventListener("click", () => {
//     responderAdivinanza("¡Le erraste!")
//     $("#firstAnswer").classList.add("incorrect")
//     $("#secondAnswer").classList.add("correct")
//     $("#thirdAnswer").classList.add("incorrect")
// })

// $("#secondAnswer").addEventListener("click", () => {
//     responderAdivinanza("¡Correcto!")
//     $("#secondAnswer").classList.add("correct")
// })

// $("#thirdAnswer").addEventListener("click", () => {
//     responderAdivinanza("¡Le erraste!")
//     $("#firstAnswer").classList.add("incorrect")
//     $("#secondAnswer").classList.add("correct")
//     $("#thirdAnswer").classList.add("incorrect")
// })

// const welcome = () => console.log("Hola Pili")

// $("#firstAnswer").addEventListener("click", welcome)