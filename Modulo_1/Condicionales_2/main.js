/* REPASO */

// Operadores relaciones
// If, ifelse
// Operadores logicos
// && ||

// const condicion = true

// Variables globales => aquella que esta suelta y accesible en el scope de todo mi proyecto
// Variables locales => solo pertenece al scope del bloque de codigo en donde se definio
// var
// scope

// if (condicion) {
//     // bloque de codigo
//     let nombre = "Pilar"
// }

// console.log(nombre)

// const age = 10

// if (age >= 18 && age <= 59) {
//     console.log("Cai en el if")
// } else if (age >= 60) {
//     console.log("Cai en el else if")
// } else {
//     console.log("Cai en el else")
// }

// const condicion = true
// const condicion2 = true

// if (condicion) {
//     if (condicion2) {

//     }
// }

// function

// console.log(sumar(20, 5))

// function sumar(a, b) {
//     return a + b
// }

// console.log(restar(10, 5))

// const restar = (a, b) => {
//     return a - b
// }

// declaracion de variables
// declaracion de funciones
// eventos

// return implicito

// pateo la pelota y metio un gol

// const sumar = (a, b) => a + b
// console.log(sumar(20, 30))

/* switch, operador ternario, regex */

// const diaDeLaSemana = parseInt(prompt("Ingrese un numero de dia correspondiente al dia de la semana"))

// switch (diaDeLaSemana) {
//     case 1:
//         console.log("Domingo")
//         break
//     case 2:
//         console.log("Lunes")
//         break
//     case 3:
//         console.log("Martes")
//         break
//     case 4:
//         console.log("Miercoles")
//         break
//     case 5:
//         console.log("Jueves")
//         break
//     case 6:
//         console.log("Viernes")
//         break
//     case 7:
//         console.log("Sabado")
//         break
//     default:
//         console.log("Dia invalido")
//         break
// }

// Operador ternario

// condicion ? pasa esto : pasa esto otro
// const esParOImpar = (numero) => numero % 2 === 0 ? "Es par" : "Es impar"

// Regex => expresiones regulares

// [aeiouAEIOU]

// constructor
// const regex = new RegExp('[aeiouAEIOU]')

// test => devuelve true si pasa el test, o false si no lo pasa

// const letra = prompt("Ingresa una letra")

// if (regex.test(letra)) {
//     console.log("Es una vocal")
// } else {
//     console.log("Es una consonante")
// }

// if (/[aeiouAEIOU]/.test("a")) {
//     console.log("Soy una vocal")
// }

// const validarPassword = (password) => {
//     if (password.length >= 8 && regex.test(password)) {
//         // envio el form
//     }
// }

// if (letra.toLowerCase() === "a" || letra.toLowerCase() === "e" || letra.toLowerCase() === "i" || letra.toLowerCase() === "o" || letra.toLowerCase() === "u") {
//     console.log("Es una vocal")
// }

/*
PRACTICA

=> ADIVINA EL NUMERO
- Crear un juego en el que se le pide al usuario adivinar un numero random del 0 al 10
- Si el usuario gana, emitir un mensaje que diga felicitaciones adivinaste. Caso contrario, lo siento perdiste.

- Ahora le subimos la dificultad. Vamos a darle al usuario tres vidas como chances de adivinar. Con cada fracaso debe restarse una vida, en caso de ganar mantener el mensaje de felicidades. Si se queda sin vidas, perdio.

*/

// recursividad

// const randomNumber = Math.round(Math.random() * 10)
// let lives = 3

// const guessTheRandomNumber = () => {
//     const chosenNumber = parseInt(prompt("Adivina el numero entre 0 y 10"))

//     if (randomNumber === chosenNumber) {
//         alert("Felicitaciones ganaste!!")
//     } else {
//         lives--
//         if (lives > 0) {
//             guessTheRandomNumber()
//         } else {
//             alert("Lo siento, perdiste")
//         }
//     }
// }

// guessTheRandomNumber()

/*
Necesitamos un programa que pida ingresar un número de partida y una cantidad, mediante los siguientes mensajes:

Ingresá un número
Ingresá una cantidad
Con esta información, el programa deberá incrementar el número cinco veces la cantidad y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento. Por ejemplo si ingresamos el 6 como número y el 1 como cantidad, debería mostrar lo siguiente:

'Incremento 1: 7'
'Incremento 2: 8'
'Incremento 3: 9'
'Incremento 4: 10'
'Incremento 5: 11'
*/

const numero = parseInt(prompt("Ingrese un numero")) // 6
const incremento = parseInt(prompt("Ingrese un incremento")) // 2

const incrementar = () => {
    alert(`Incremento 1: ${numero + incremento}`)
    alert(`Incremento 2: ${numero + (incremento*2)}`)
    alert(`Incremento 3: ${numero + (incremento*3)}`)
    alert(`Incremento 4: ${numero + (incremento*4)}`)
    alert(`Incremento 5: ${numero + (incremento*5)}`)
}