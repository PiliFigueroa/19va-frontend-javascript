const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// document.querySelectorAll(selector)

// const p = document.querySelectorAll("p")

// for (const nodo of p) {
//     nodo.innerText = "Hola"
// }

// for (const btn of $$(".btn")) {
//     btn.addEventListener("click", () => {
//         const dataColor = btn.getAttribute("data-color")
//         $(".caja").style.backgroundColor = dataColor
//     })
// }

// const deleteButtonSongName = $$(".delete-button-songs-list") //devuelve un nodeList(coleccion de nodos del DOM) de la lista node.por cada(boton ...hace esto....)
// deleteButtonSongName.forEach(boton => {
//     const funcionDeleteBtn = (e) => { //*la funcion dice "che, el boton que llegue por e"
//         const locatedButton = e.target; //*localizame al q especificamente hizo q se active el addEventListener
//         locatedButton.parentElement.remove(); //*ese q lo activo, eliminale el elemento padre (el boton estaria dentro de un elemento LI, es ese quien es el padre por lo que se eliminaria el li)
//         console.log(`Se elimino el boton con el id ${e.target.id}`)
//     }
//     boton.addEventListener("click", (e)=> funcionDeleteBtn(e)) //*btn escuche el evento click, ejecuta la funcion delete btn (e = a cda btn individualmente)
// })

// for (const btn of deleteButtonSongName) {
//     btn.addEventListener("click", (e) => {
//         e.target.parentElement.remove()
//     })
// }

/*
### 📈 Total de gastos

Crear un programa que muestre:

- un input de números
- un botón que diga `Agregar gasto/ganancia`
- una lista `ul`
- un elemento `p`

Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista y el elemento `p`.

Para actualizar la lista se debe:

- borrar todo lo que contenga
- recorrer el array y por cada ítem
- insertar un ítem de lista `li` con el valor del ítem del array

El elemento `p` se actualiza con el total de la suma de los valores del array.
*/

// inicializo array vacio
const operations = []

const addOperation = () => {
    const valueInput = $("#input-number").valueAsNumber
    operations.push(valueInput)
}

const totalBalance = (operations) => {
    let acc = 0
    for (const operation of operations) {
        acc += operation
    }
    return acc
}

const generateList = (operations) => {
    $("#list").innerHTML = ""
    for (const operation of operations) {
        $("#list").innerHTML += `<li>${operation}</li>`
    }
}

$("#add-operation").addEventListener("click", (e) => {
    e.preventDefault()
    addOperation()
    generateList(operations)
    $("#total-cash").innerText = totalBalance(operations)
})

// $("#add-operation").addEventListener("click", (e) => {
//     e.preventDefault()
//     // guardo el valor numerico del input
//     const valueInput = $("#input-number").valueAsNumber
//     // pusheo el dato ingresado a mi array
//     operations.push(valueInput)
//     // reset del input
//     $("#input-number").value = ""

//     // vaciar el <ul> constantemente para que no se repitan los valores
//     $("#list").innerHTML = ""

//     // preparo un acumulador para hacer el calculo de las operaciones
//     let acc = 0

//     // itero por las operaciones
//     for (const operation of operations) {
//         // agrego el li a la lista con la operacion
//         $("#list").innerHTML += `<li>${operation}</li>`
//         // agrego el valor a mi acumulador
//         acc += operation
//     }

//     // muestro el balance total
//     $("#total-cash").innerText = `$${acc}`
// })