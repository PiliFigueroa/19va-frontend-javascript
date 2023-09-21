// JavaScript es un lenguaje NO TIPADO

// VARIABLES
// let y const => let puede cambiar, cosnt no puede cambiar
// let firstname
// console.log(firstname) // undefined

// firstname = "Pilar"
// console.log(firstname)

// firstname = "Ruth"
// console.log(firstname)

// const lastname = undefined
// lastname = "Figueroa"

// Tipos de datos primitivos => string, number, boolean, undefined, null, NaN
// const fullname = "Pilar Figueroa"
// const age = 26
// const profession = "Developer"
// const country = "Argentina" // string
// const yearOfBirth = 1996 // number
// const haceUnExcelenteGinTonic = true // boolean
// const meGustanLasPelisDeTerror = false // boolean

// Concatenacion de variables => template literals
// console.log(`Mi nombre es ${fullname}, tengo ${age}, trabajo como ${profession} y vivo en ${country}`)

// prompt()
// const userName = prompt("Ingrese su nombre completo")
// const userAge = prompt("Ingrese su edad")
// const userProfession = prompt("Ingrese su profesion")
// const userCountry = prompt("Ingrese su pais")

// console.log(`Mi nombre es ${userName}, tengo ${userAge}, trabajo como ${userProfession} y vivo en ${userCountry}`)

// parseInt() Number() => me transforma un string a un numero
// const num = "20.7"
// console.log(Number(num))
// console.log(parseInt(num))

// Operadores aritmeticos => +, -, /, *, %
// const num1 = 20
// const num2 = null

// true = 1
// false = 0
// null = 0
// undefined = no tiene valor numerico para calculos, me devuelve NaN

// console.log(num1 + num2)

// Nomenclatura de variables => camelCase
// UPPER_SNAKE_CASE

// Funciones => un bloque de codigo que se ejecuta y es reutilizable

// """"""""forma vieja"""""""""
// function saludar() {
//     // bloque de codigo que se ejecutara
//     console.log("Hola Mundo!!")
// }

// saludar()

// Arrow Function
// const miFuncion = () => {}
// const welcome = () => {
//     // bloque de codigo que se ejecutara
//     console.log("Hello World!")
// }

// welcome()

// const sumar = () => {
//     const num1 = 20
//     const num2 = 50
//     console.log(num1 + num2)
// }

// sumar()

const saludar = (nombre) => {
    console.log(`Hola, bienvenida ${nombre}`)
}

// saludar("Pilar")

// scope => alcance de mi codigo

// const sumar = (num) => {
//     const number = 20
//     // console.log(num1 + num2)
//     return num + number
// }

// // sumar(15, 68)
// document.write(sumar(25) - 50)

// El return me permite tener el valor disponible por afuera del scope de la funcion
// El return "devuelve" ese valor

const sumar = (a, b) => {
    return a + b
}

const restar = (a, b) => {
    const resultado = a - b
    return resultado
}

// const num1 = Number(prompt("Ingrese el primer numero:"))
// const num2 = Number(prompt("Ingrese el segundo numero:"))

// console.log(sumar(num1, num2))
// console.log(restar(num1, num2))

// const calculoComplejo = sumar(num1, num2) * restar(num1, num2)
// console.log(calculoComplejo)

// Crear un programa que reciba un numero en pesos y devuelva la cantidad de dolares que representan esos pesos (al blue)

const calcularDolares = (pesos) => {
    return pesos / 738
}

// Crear un programa que reciba los lados de un rectangulo y calcule el area del rectangulo

const calcularArea = (base, altura) => {
    return base * altura
}

// Crear un programa que calcule el porcentaje de impuesto a la compra en moneda extranjera (%35)

const impuestoALaCompraExterior = (precio) => {
    const resultado = 35 * precio / 100
    return resultado
}

// Crear un programa que calcule el promedio general de tres notas que da el usuario:

// const primerNota = Number(prompt("Ingrese la primer nota"))
// const segundaNota = Number(prompt("Ingrese la segundaNota nota"))
// const terceraNota = Number(prompt("Ingrese la tercera nota"))

const calcularPromedio = () => {
    const totalNotas = primerNota + segundaNota + terceraNota
    return totalNotas / 3
}

/*
- Crear una funcion que reciba como parametros un nombre, una edad, una profesion y un pais y retorne un string con la concatenacion de los datos ingresados. Probar con varios datos varias veces para comprobar funcionamiento.
Ejemplo: Me llamo Pepa, tengo 30 anios, vivo en Colombia y soy abogada.
*/

const hola = (nombre , edad , profesion , pais) => {
    return  `Hola! mi nombre es ${nombre}, tengo ${edad} años, soy ${profesion}, y vivo en ${pais}`
}

console.log(hola("Pilar", 26, "Dev", "Argentina"))