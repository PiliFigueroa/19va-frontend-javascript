// console.log("Hola mundo")
// console.log(10)

// document.write("Hola mundo")

// VARIABLES - TIPOS DE DATOS PRIMITIVOS
// string - number - undefined - null - boolean - NaN (not a number)

// let y const

// let firstname = "Pilar" // string
// let lastname = "Figueroa" // string
// let empty = "" // string
// let age = 26 // number
// let willDinner = undefined // undefined
// let test // undefined
// let hasPets = true // boolean
// let knowsHowToDrive = false // boolean
// let nulo = null // null
// let notANumber = NaN // NaN

// console.log(firstname)
// document.write(firstname)

// Concatenar

// console.log(firstname + " " + lastname)

// literal strings - template literals
// console.log(`${firstname} ${lastname}`)

// typeof - sirve para preguntar que tipo de dato es una variable, y me retorna un string
// console.log(typeof firstname)
// let tipoDe = typeof age
// console.log(typeof tipoDe)

// javascript es un lenguaje no tipado
// let firstname = "Pilar" // string
// console.log(firstname)

// firstname = "Mel"
// console.log(firstname)

// firstname = 10
// console.log(firstname)

// const
// const placeOfBirth = "Ushuaia, Tierra del Fuego"
// console.log(placeOfBirth)

// placeOfBirth = 10 // => me da error
// console.log(placeOfBirth)

// alert() - prompt() - parseInt() - Number() - confirm()
// alert("Soy un virus!")
// console.log("Me ejecute!!!")

// el confirm me va a guardar un boolean con la respuesta del usuario
// let acceptTermsAndConditions = confirm("Aceptas los terminos y condiciones?")

// propmt => abre una ventana y el usuario puede escribir algo en ella
// si el prompt no se completa, guarda un null

// const username = prompt("Ingresa tu nombre de usuario:")
// console.log(`El usuario ingresado es ${username}`)
// siempre me guarda un string
// parseInt => convierte de string a number PERO trunca si es que es con coma
// Number => convierte de string a number manteniendo la consistencia (numeros con coma)
// const age = prompt("Ingrese su edad:")
// console.log(parseInt(age))

// Operadores Aritmeticos => suma, resta, producto, division, modulo

// const number1 = "20"
// const number2 = "10"
// el operador + sirve para concatenar strings Y calculos matematicos siempre y cuando el tipo de dato sea NUMBER

// console.log(number1 + number2)
// console.log(number1 - number2)
// console.log(number1 * number2)
// console.log(number1 / number2)
// console.log(number1 % number2)

const number1 = Number(prompt("Ingrese el primer numero:"))
const number2 = Number(prompt("Ingrese el segundo numero:"))

console.log("La suma es:", number1 + number2)
console.log("La resta es:", number1 - number2)
console.log("La producto es:", number1 * number2)
const result = number1 / number2
console.log("La division es:", parseInt(result))
console.log("El resto es:", number1 % number2)