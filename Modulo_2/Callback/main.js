// const $ = (selector) => document.querySelector(selector)

// una funcion tiene hacer una sola cosa y hacerla bien
// ejecutamos todos los cambios de DOM en un unico evento sin repetir, el siguiente codigo es un ejemplo del error cometido en el generador de memes:

// $("div").addEventListener("click", () => {
//     // cambia el color del texto
// })

// $("div").addEventListener("click", () => {
//     // cambia el color del fondo
// })

/* CALLBACKS */

// setTimeout(callback, tiempo)

// const saludar = () => console.log("Hola")

// setTimeout(saludar, 2000)

/*
* Crear una función `map` que acepte un array y un callback y que: 
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
    - obtenga el resultado
    - lo pushee a un nuevo array
    - devuelva el array final con el resultado de cada una de las llamadas al callback. 
*/

// const numeros = [1, 2, 3]

// const duplicar = (x) => x * 2
// const triplicar = (x) => x * 3

// const map = (array, callback) => {
//     const nuevoArray = []
//     for (const elemento of array) {
//         const elementoModificado = callback(elemento)
//         nuevoArray.push(elementoModificado)
//     }
//     return nuevoArray
// }

// console.log(map(numeros, duplicar))
// console.log(map(numeros, triplicar))

/*
Crear una función filter que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
si dicho callback devuelve true, pushea el elemento a un nuevo array
devuelva el array final con los elementos que pasaron el "filtro".
*/

const numeros = [10, 2, -3, 40, -33, 50]
const esPositivo = (x) => x > 0
const multiploDe10 = (x) => x % 10 === 0

const filter = (array, callback) => {
    // declaro mi array inicial
    const nuevoArray = []
    // itero por el array que recibo por argumento
    for (const elemento of array) {
        // ejecuto el callback pasandole el elemento que estoy iterando
        if (callback(elemento)) {
            // si se cumple mi condicion, pusheo ese elemento al array inicial
            nuevoArray.push(elemento)
        }
    }
    // retorno el array filtrado
    return nuevoArray
}

console.log(filter(numeros, esPositivo))
console.log(filter(numeros, multiploDe10))