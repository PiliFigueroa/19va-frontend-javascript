/*
### scroll

Crear un documento `html` con un `body` de 2000px de alto. Cuando se scrollea el `body`, cambiar el color de fondo cada 500px, por ejemplo:

|Scroll|Color de fondo|
| --- | --- |
| 0px - 500px | red
| 501px - 1000px | green
| 1001px - 1500px | blue
| 1501px - 2000px | orange
*/

const $ = (selector) => document.querySelector(selector)

// window.addEventListener("scroll", () => {
//     const currentPosition = window.scrollY
//     if (currentPosition <= 500) {
//         $("body").style.backgroundColor = "red"
//     } else if (currentPosition >= 501 && currentPosition <= 1000) {
//         $("body").style.backgroundColor = "green"
//     } else if (currentPosition >= 1001 && currentPosition <= 1500) {
//         $("body").style.backgroundColor = "blue"
//     } else {
//         $("body").style.backgroundColor = "orange"
//     }
// })

/*
### pin

- En un documento `html` crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto. 
- Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13". 
- El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y se clickea un nuevo número, no debe pasar nada. 
- El botón de reiniciar debe borrar todos los dígitos del elemento de texto. 
- El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.
*/

// slice

// $("#btn").addEventListener("click", () => {
//     const str = $(".paragraph").innerText
//     $(".paragraph").innerText = str.slice(0, str.length - 1)
// })

// substring

// $("#btn").addEventListener("click", () => {
//     const str = $(".paragraph").innerText
//     const strCutted = str.substring(0, str.length - 1)
//     $(".paragraph").innerText = strCutted
// })

// replace

// $("#btn").addEventListener("click", () => {
//     const str = $(".paragraph").innerText
//     $(".paragraph").innerText = str.replace(/\d$/, '')
// })

// FORMULARIOS => .value

// console.log($("#text").value)
// input

// $("#text").addEventListener("input", (e) => {
//     // $(".paragraph").innerText = e.target.value
//     $(".meme").style.backgroundImage = `url(${e.target.value})`
// })

// $("#color").addEventListener("input", (e) => {
//     $("body").style.backgroundColor = e.target.value
// })

// const allFiltersMeme = () => {
//     $(".meme").style.filter = `blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%)`
// }

// $("#blur").addEventListener("input", allFiltersMeme)
// $("#grayscale").addEventListener("input", allFiltersMeme)

// $("#reset").addEventListener("click", () => {
//     $("#blur").value = "0"
//     $("#grayscale").value = "0"
//     $(".meme").style.filter = "none"
// })

// $("#font").addEventListener("input", (e) => {
//     $("body").style.fontFamily = e.target.value
// })

// $("#number").addEventListener("input", (e) => {
//     $("body").style.fontSize = `${e.target.value}px`
// })

// $("#displayTopText").addEventListener("input", (e) => {
//     if (e.target.checked) {
//         $("p").style.display = "none"
//     } else {
//         $("p").style.display = "block"
//     }
// })

// submit
// preventDefault() => prevenir el comportamiento por defecto del elemento

// $("form").addEventListener("submit", (e) => {
//     // evito que se recargue la pagina
//     e.preventDefault()
//     // muestro la info en el div
//     $(".box").innerText = `
//         Fullname: ${$("#fullname").value}
//         Email: ${$("#email").value}
//     `
//     // reseteo los inputs para que vuelvan a estar vacios
//     $("form").reset()
// })