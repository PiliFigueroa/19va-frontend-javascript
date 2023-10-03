// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

// HH <= 23
// mm <= 59

// slice() split()

// const esHoraValida = (hora) => {
//     const HH = Number(hora.slice(0, 2))
//     const mm = Number(hora.slice(3))

//     return HH <= 23 && mm <= 59
// }

// const esHoraValida = (hora) => {
//     const HHmm = hora.split(":")
//     return HHmm[0] <= 23 && HHmm[1] <= 59
// }

// console.log(esHoraValida('12:23')) // true
// console.log(esHoraValida('12:65')) // false
// console.log(esHoraValida('28:05')) // false
// console.log(esHoraValida('00:00')) // true

/*
### progreso

Crear una barra de progreso con dos `div`s anidados. Hacer un programa que al iniciarse pregunte mediante un `prompt` por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)
*/

// const porcentaje = prompt("Ingrese el porcentaje de progreso:")
// const progressBar = document.querySelector(".progress")

// progressBar.style.width = porcentaje

/*
imagen

Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:
*/

// 200 - 500 - 800

// const tamanio = prompt("Ingrese chica, mediana o grande")

// const imagen = document.querySelector(".image")

// if (tamanio === "chica") {
//     imagen.style.width = "200px"
// } else if (tamanio === "mediana") {
//     imagen.style.width = "500px"
// } else if (tamanio === "grande") {
//     imagen.style.width = "800px"
// } else {
//     alert("Tamaño invalido")
// }

/*
### card

Hacer un programa que al iniciarse pregunte mediante `prompt`s por 
- un título
- una url de una imagen 
- una url a un artículo 

Utilizar esos datos para completar en el `html` una card que tenga 
- una imagen, con la url de la imagen ingresada // src
- un título, con el texto del título ingresado // innerText
- un link que diga `Leer más`, con la url al artículo ingresado // href

Dar algunos estilos mínimos a la card:
- centrarla con respecto a la pantalla
- agregarle un borde
- agregarle un sombreado
- cambiarle la tipografía
- cambiarle los tamaños de fuente
- cambiarle los colores por defecto
*/

// url imagen => https://www.infobae.com/new-resizer/Z8GSH-u2S9HCdXTY9oVxztR1VII=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/RLYRP6WVKRMD3N6VMGCW5JNW24.jpg
// url articulo => https://www.infobae.com/deportes/2023/10/02/el-mensaje-de-edinson-cavani-luego-de-la-dura-derrota-boca-ante-river/

// const titulo = document.querySelector("h1")
// const imagen = document.querySelector("img")
// const link = document.querySelector("a")

// const texto = prompt("Ingrese un titulo")
// const urlImagen = prompt("Ingrese una url de una imagen")
// const urlArticulo = prompt("Ingrese una url de un articulo")

// titulo.innerText = texto
// imagen.src = urlImagen
// link.href = urlArticulo

// FIN DEL REPASO Y EJERCITACION

// TRICK
// const $ = (selector) => document.querySelector(selector)
// $("h1").innerText = texto
// $("img").src = urlImagen
// $("a").href = urlArticulo

const welcome = (fullname) => console.log(`Hola ${fullname}`)

// EVENTOS

const $ = (selector) => document.querySelector(selector)

// addEventListener(tipoDeEvento, callback)
/*
tipoDeEvento => accion (click, scroll, keyboard, mouseover, mouseout)
callback => funcion pasada por parametro a otra funcion
*/

// $(".welcome").addEventListener("click", welcome)

// $(".welcome").addEventListener("click", () => {
//     // bloque de codigo que se va a ejecutar cuando el usuario de click en mi boton
//     alert("Me ejecute por tu click!!")
// })

// $(".welcome").addEventListener("click", () => {
//     welcome("Pilar")
// })

// $(".welcome").addEventListener("click", () => {
//     $(".box").style.backgroundColor = "red"
// })

// $(".box").addEventListener("mouseover", () => {
//     $(".box").style.backgroundColor = "green"
// })

// $(".box").addEventListener("mouseout", () => {
//     $(".box").style.backgroundColor = "red"
// })

// $("body").addEventListener("mousemove", () => {
//     console.log("El mouse se esta moviendo")
// })

// funciones puras

let count = 1
const stock = 10

const increase = () => {
    if (count < stock) {
        count += 1
    }
}

const decrease = () => {
    if (count > 1) {
        count -= 1
    }
}

$(".count").innerText = count

$(".decrease").addEventListener("click", () => {
    decrease()
    $(".count").innerText = count
    if (count < 10) {
        $(".increase").removeAttribute("disabled")
        $(".increase").classList.remove("disabled")
    }
})

$(".increase").addEventListener("click", () => {
    increase()
    $(".count").innerText = count
    if (count === 10) {
        $(".increase").setAttribute("disabled", true)
        $(".increase").classList.add("disabled")
    }
})