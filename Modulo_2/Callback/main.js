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

// const numeros = [10, 2, -3, 40, -33, 50]
// const esPositivo = (x) => x > 0
// const multiploDe10 = (x) => x % 10 === 0

// const filter = (array, callback) => {
//     // declaro mi array inicial
//     const nuevoArray = []
//     // itero por el array que recibo por argumento
//     for (const elemento of array) {
//         // ejecuto el callback pasandole el elemento que estoy iterando
//         if (callback(elemento)) {
//             // si se cumple mi condicion, pusheo ese elemento al array inicial
//             nuevoArray.push(elemento)
//         }
//     }
//     // retorno el array filtrado
//     return nuevoArray
// }

// console.log(filter(numeros, esPositivo))
// console.log(filter(numeros, multiploDe10))

// ## dropWhile

// * Crear una función `dropWhile` que acepte un array y un callback y que: 
//     - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
//     - devuelva un array con los elementos *a partir* del primer callback que devolvió `false`

// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da `false` *por primera vez* agrega todos los elementos restantes a partir de dicho elemento inclusive)

// ```javascript
// const numeros = [40, 33, 50, 8, 2, 3, 20]
// const multiploDe10 = x => x % 10 === 0
// dropWhile(numeros, multiploDe10) // [8, 2, 3, 20]
// ```

// const dropWhile = (array, callback) => {
//     let nuevoArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (!callback(array[i])) {
//             const todosLosDemas = array.slice(i)
//             nuevoArray = todosLosDemas
//             return nuevoArray
//         }
//     }
// }

// console.log(dropWhile(numeros, multiploDe10))

/*
🔍 Buscador

Crear un programa que muestre:

    un input de texto
    una lista ul

El programa debe tener como datos un array con strings con distintas palabras, y al inicializarse la lista debe mostrar las palabras del array como ítems de lista.

Al escribir en el input, se debe actualizar la lista para mostrar aquellas palabras que contengan como substring lo ingresado, ignorando mayúsculas y minúsuculas. Es decir, si se busca script y JavaScript es un string dentro del array, se debe mostrar.

Para actualizar la lista se debe:

    borrar todo lo que contenga
    recorrer el array y por cada ítem
    insertar un ítem de lista li con el valor del ítem del array

Cuando el input no tienen ningún valor ingresado, la lista debe mostrar todos los ítems del array.

TIP: vas a necesitar dos arrays, uno para todas las palabras y otro para los resultados de búsqueda.
*/

// const $ = (selector) => document.querySelector(selector)

// const students = ["Jime Taleb", "Ivana Saenz", "Jesabel Kern", "Pamela Viale", "Euge Felloni"]

// for (const student of students) {
//     $("#list").innerHTML += `<li>${student}</li>`
// }

// $("#input-text").addEventListener("input", (e) => {
//     $("#list").innerHTML = ""
//     for (const student of students) {
//         if (student.toLowerCase().includes(e.target.value)) {
//             $("#list").innerHTML += `<li>${student}</li>`
//         }
//     }
// })