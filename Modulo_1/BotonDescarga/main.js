// VARIABLES

// FUNCIONES
const $ = (selector) => document.querySelector(selector)

const hideElement = (selector) => $(selector).classList.add("visibility--hidden")
const showElement = (selector) => $(selector).classList.remove("visibility--hidden")

const addColor = (selector, color) => $(selector).style.color = color

const downloadMeme = () => {
    domtoimage.toBlob($(".meme")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}

const initializeProject = () => {
    // EVENTOS
    $("#download").addEventListener("click", downloadMeme)

    $("input").addEventListener("input", () => {
        // bloque de codigo
    })

    $("input").addEventListener("input", () => {
        // bloque de codigo
    })

    $("input").addEventListener("input", () => {
        // bloque de codigo
    })

    $("input").addEventListener("input", () => {
        // bloque de codigo
    })

    $("input").addEventListener("input", () => {
        // bloque de codigo
    })
}

window.addEventListener("load", initializeProject)