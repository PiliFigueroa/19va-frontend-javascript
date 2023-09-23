// sugar syntax

// let number = 0

// const contador = () => {
//     number++
//     console.log(number)
// }

// contador()
// contador()
// contador()
// contador()
// contador()

// CONDICIONALES => estructuras de codigo que me van permitir ejecutar algo si una condicion dada se cumple, y tambien ejecutar algo si no se cumple

/*
Segun una condicion... pasa esto. Sino... pasa lo otro.
*/

// if, if else, switch, operador ternario
// operadores logicos

// if (condicion) {
//     // bloque de codigo que se ejecutara si mi condicion se cumple
// }

// Operadores de comparacion
// Comparar un dato contra otro y eso nos puede devolver true o false y usarlo en los condicionales

/*
== igualdad
=== igualdad estricta
!= distinto de
!== distinto estricto
< menor que
> mayor que
<= menor o igual
>= mayor o igual
! negacion
*/

const number1 = 20
const number2 = 50
const number3 = "20"
const boolean = true

// console.log(number1 == number2) // false
// console.log(number1 == number3) // true
// console.log(number1 === number3) // false
// console.log(number1 != number3) // false
// console.log(number1 !== number3) // true
// console.log(number1 < number2) // true
// console.log(number1 > number2) // false
// console.log(number1 < number3) // false
// console.log(number1 > number2) // false
// console.log(number1 <= number2) // true
// console.log(number1 >= number2) // false
// console.log(number1 <= number3) // true
// console.log("Hola" === "hola") // false
// console.log(!boolean) // false
// console.log(!!boolean) // true

// const age = 14

// if (age >= 18) {
//     console.log("Podes tomar alcohol")
// }

// if (age >= 16) {
//     console.log("Ya podes votar")
// } else {
//     // lo que sucede si mi condicion no se cumple
//     console.log("Todavia no cumpliste la edad necesaria")
// }

// const yearOfBirth = 1996

// if (yearOfBirth <= 1993) {
//     console.log("Soy millenial")
// } else if (yearOfBirth >= 1994) {
//     console.log("Soy centenial")
// } else {
//     console.log("No se de que generacion sos")
// }

// const fullname = prompt("Como te llamas?")

// if (fullname.toLowerCase() === "pedro") {
//     console.log("Hola Pedro!")
// }

// valores truthy o falsy
// valor de referencia

// const fullname = "Pilar" // true
// const empty = "" // false
// const zero = 0 // false
// const one = 1 // true
// const negative = -5 // true
// const nulo = null // false
// const indefinido = undefined // false
// const notANumber = NaN // false
// const verdadero = true // true
// const falso = false // false

// if (verdadero) {
//     console.log("Cai en el IF")
// } else {
//     console.log("Cai en el ELSE")
// }

/*
- Crear un programa que calcule la suma de dos numeros, valide el resultado
y retorne verdadero si el resultado es positivo, o retorne falso si el
 resultado es negativo
*/

const esSumaMayorQueCero = (a, b) => {
    const resultado = a + b
    if (resultado > 0) {
        return true
    } else {
        return false
    }
}

// Optimizando codigo
const esSumaMayorQueCero2 = (a, b) => {
    const resultado = a + b
    if (resultado > 0) {
        return true
    }
    return false
}

// Optimizando codigo
const esSumaMayorQueCero3 = (a, b) => {
    const resultado = a + b
    return resultado > 0
}

// console.log(esSumaMayorQueCero(-20, 40))
// console.log(esSumaMayorQueCero(-20, -40))

/*
- Crear un programa que reciba un numero y devuelva true si es par, y false si es impar
*/

const esPar = (number) => {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

// console.log(esPar(7))
// console.log(esPar(4))

/*
- Crear un programa que reciba una contrasena y valide si su longitud es mayor o igual a 8 caracteres.

Si no es mayor, solicitar que ingrese de nuevo la contrasena
*/

// Recursividad

// const userPassword = prompt("Ingrese su contraseña:")

// const validatePassword = (password) => {
//     if (password.length >= 8) {
//         return true
//     } else {
//         let secondPassword = prompt("Contraseña invalida, ingrese nuevamente:")
//         validatePassword(secondPassword)
//     }
// }

// console.log(validatePassword(userPassword))

// Operadores logicos
// && (and)
// || (or)

// && => pregunta si TODAS mis condiciones son verdaderas

// const age = 18
// const sabeConducir = true

// if (age >= 18 && sabeConducir) {
//     console.log("Podes sacar la licencia")
// } else {
//     console.log("Todavia no podes")
// }

// || => con que al menos una de mis condiciones se cumpla, ya da verdadero
// => el unico caso en el que no se cumple, es que todas las condiciones sean falsas

// const age = 16
// const vaAcompaniado = false

// if (age >= 18 || vaAcompaniado) {
//     console.log("Podes ver la peli de terror")
// } else {
//     console.log("Todavia no podes")
// }