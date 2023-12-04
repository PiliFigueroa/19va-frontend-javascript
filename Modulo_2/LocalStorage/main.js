// LocalStorage

// JSON.stringify
// const person = {
//     fullname: "Pilar Figueroa"
// }

// console.log(person)
// console.log(JSON.stringify(person))

// JSON.parse

// getItem setItem removeItem

// const personParseado = JSON.stringify(person)

// setItem(key, dato)
// localStorage.setItem("person", personParseado)

// const personRecovered = JSON.parse(localStorage.getItem("person"))

// localStorage.removeItem("person")

const $ = (selector) => document.querySelector(selector)

const dark = {
    mode: "dark"
}

const light = {
    mode: "light"
}

// Inicia mi aplicacion, me traigo lo que sea que haya guardado en el localstorage
const lsTheme = JSON.parse(localStorage.getItem("theme"))

// Si no hay nada, me trae un null y el siguiente if no se ejecuta
// Por el contrario, si me trae informacion, setteo el atributo del body con lo que me trae
if (lsTheme) {
    $("body").setAttribute("data-theme", lsTheme.mode)
}

// En la funcion del cambio de modo agrego las lineas del ls para sincronizar y que el dato guardado en el ls coincida con la seleccion del usuario a traves del boton
const changeMode = () => {
    const currentTheme = $("body").getAttribute("data-theme")
    if (currentTheme) {
        $("body").removeAttribute("data-theme")
        // Agrego/Cambio el dato guardado a dark
        localStorage.setItem("theme", JSON.stringify(dark))
    } else {
        // Agrego/Cambio el dato guardado a light
        $("body").setAttribute("data-theme", "light")
        localStorage.setItem("theme", JSON.stringify(light))
    }
}

$("#change-mode").addEventListener("click", changeMode)