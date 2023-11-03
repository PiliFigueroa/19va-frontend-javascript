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