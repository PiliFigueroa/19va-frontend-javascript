// ARRAYS => tipo de dato que puede almacenar varios datos dentro de si mismo

const emptyArray = []

const marcasDeAutos = ["Fiat", "Renault", "VW", "BMW"]

// console.log(marcasDeAutos[0])
// console.log(marcasDeAutos[1])
// console.log(marcasDeAutos[2])
// console.log(marcasDeAutos[3])
// console.log(marcasDeAutos[4]) // undefined porque no existe el elemento en la posicion 4

// console.log(marcasDeAutos.length) // me devuelve la cantidad de elementos del array

// marcasDeAutos[2] = "Chevrolet"
// console.log(marcasDeAutos)

// Funciones nativas de arrays

const fruits = ["Apple", "Orange", "Kiwi", "Banana"]
// console.log(fruits)
// .push() => agregar un elemento a un array y siempre lo pone al final
// fruits.push("Watermelon", "Melon")
// fruits.push("Melon")
// console.log(fruits)

// .shift() => eliminar el primer elemento del array
// fruits.shift()
// fruits.shift()
// fruits.shift()
// console.log(fruits)

// .pop() => eliminar el ultimo elemento del array
// fruits.pop()
// console.log(fruits)

// .unshift() => agrega un elemento al principio del array
// fruits.unshift("Mango")
// console.log(fruits)

// .slice() => cortar un array a partir del indice dado, y si le pasamos dos indices toma el primer argumento es DESDE (inclusive) y el segundo es HASTA (excluyente)

// const fruitsSliced = fruits.slice(1, 3)
// console.log(fruitsSliced)

// .splice() => remover o reemplazar elementos, el primer argumento es el indice del elemento que queremos reemplazar, el segundo argumento es la cantidad, y el tercer argumento es por que cosa lo reemplazo

// fruits.splice(1, 0, "Pear")
// console.log(fruits)

// .concat() => toma dos arrays y los convierte en uno solo
// const vegetables = ["Beans", "Lettuce", "Carrot", "Potato", "Onion"]
// const greenGrocery = fruits.concat(vegetables)
// console.log(greenGrocery)

// .split() => separar caracteres o elementos con otro caracter que yo indique
// const hour = "14:58"
// const arrayHours = hour.split(":")
// console.log(arrayHours[1])

// .join() => junta los elementos de un array y devuelve un string
// console.log(fruits.join()) // me junta los elementos pero me mete la coma
// console.log(fruits.join("")) // me junta los elementos sin separacion
// console.log(fruits.join(" "))

// const date = "25-10-2023"
// const dateSplited = date.split("-")
// console.log(dateSplited.join("/"))

// .sort() => va a ordernar el array alfabeticamente
// console.log(fruits.sort())