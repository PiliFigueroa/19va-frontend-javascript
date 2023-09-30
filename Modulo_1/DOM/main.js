// DOM => document object model

// getElementById() => me trae un unico elemento que coincida con el id
// const box = document.getElementById("box")

// getElementsByClassName() => todos los elementos que coincidan con esa
// const box2 = document.getElementsByClassName("box")

// Si escribo mal el nombre de la class, id, o tag, la variable va a guardar un NULL

// querySelector() => me trae un unico elemento que coincida con el tag, la class o el id que le mande
// const box3 = document.querySelector("#box")
// const p = document.querySelector("p")

// innerHTML innerText
// el innerText me permite acceder al texto de un nodo, y poder modificarlo
// const paragraphFirst = document.querySelector(".first")

// paragraphFirst.innerText = "Hola Mundo desde Javascript!"
// paragraphFirst.innerText += ", hola mundo desde javascript!"

// const fullname = prompt("Ingrese su nombre completo")

// const h1 = document.querySelector(".welcome")
// h1.innerText = `Hola ${fullname}, bienvenida a mi pagina!`
// h1.innerHTML = `Hola ${fullname}, bienvenida a mi pagina!`

// const div = document.querySelector("#box")
// div.innerHTML = "<p>Hola soy una caja</p>"

// const color = prompt("Ingrese un color:")

// div.style.backgroundColor = color
// div.style.borderRadius = "10px"
// paragraphFirst.style.fontFamily = "Arial"

// https://images.thedirect.com/media/article_full/rick1.jpg

// const urlImagen = prompt("Ingrese una imagen")
// const meme = document.querySelector("#meme-container")

// meme.style.backgroundImage = `url(${urlImagen})`

// classList => add() remove() toggle() contains()

// console.log(paragraphFirst.classList)
// add() => me permite agregarle a un elemento, una class

const box = document.querySelector(".box")
const secondBox = document.querySelector("#secondBox")

// const age = parseInt(prompt("Ingrese su edad:"))

// if (age >= 18) {
//     box.classList.add("red")
//     secondBox.classList.add("orange")
// }

// remove() => me permite quitar una clase de un elemento
// box.classList.remove("visibility--hidden")

// toggle() => alterna una clase, si la tiene la quita, y si no la tiene la agrega

// const cambiarTamanio = () => {
//     box.classList.toggle("box-xl")
// }

// contains() => devuelve true/false segun si el elemento contiene o no una class
// console.log(box.classList.contains("box-xl"))

// attributes
const input = document.querySelector("#password-id")
const image = document.querySelector("#image")

// setAttribute() removeAttribute() getAttribute()
// console.log(input.getAttribute("name"))
// console.log(input.setAttribute("class", "form-input"))
// console.log(input.removeAttribute("name"))

// tip and trick