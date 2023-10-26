// BUCLES - Loop
// for - for in - for of - while - do while - forEach

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3])

// declaracion de i que es el inicio ; condicion ; incremento
// for (let i = 0; i < 5; i++) {
//     // bloque de codigo
//     console.log("Iteracion:", i)
// }

// Incrementar el valor de una variable de forma dinamica

// let count = 0

// for (let i = 0; i < 10; i++) {
//     count += 1
//     // console.log("Iteracion:", i, count)
// }

// console.log(count)

// const $ = (selector) => document.querySelector(selector)

const students = ["Jime Taleb", "Ivana Saenz", "Jesabel Kern", "Pamela Viale", "Euge Felloni"]

// for (let i = 0; i < students.length; i++) {
//     // console.log(students[i])
//     $("#list").innerHTML += `<li>${students[i]}</li>`
// }

// for of => recorre el array y muestra el valor

// for (const student of students) {
//     // bloque de codigo
//     console.log(student)
// }

// for in => recorre el array y muestra el index

// for (const index in students) {
//     console.log(index)
// }

/*
Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:
sumarNumeros([5, 7, 10, 12, 24]) // 58
*/

// const sumar = (a, b) => a + b

const arrayNumeros = [-12, 50, 48, 23, -4, 6.7]

const sumarNumeros = (numeros) => {
    let acc = 0
    for (const numero of numeros) {
        acc += numero
    }
    return acc
}

console.log(sumarNumeros([5, 7, 10, 12, 24]))
console.log(sumarNumeros(arrayNumeros))