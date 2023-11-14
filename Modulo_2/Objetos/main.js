// OBJETOS => Es un tipo de dato {} (llaves)

// PARTE 1

// 1A => Sintaxis y creacion, acceso a propiedades con notacion de punto
// key: value
// key, property, propiedad, clave

// const obj = {}

const person = {
    fullname: "Pilar Figueroa",
    profession: "Technical Referent",
    age: 27,
    hasExperience: true,
    languages: ["HTML", "CSS", "Javascript", "React", "Twig", "PHP", "Python"]
}

// console.log(person.fullname)
// console.log(person.profession)
// console.log(person.age)
// console.log(person.hasExperience)
// console.log(person.languages[3])

// Agregar propiedades a un objeto existente

// person.pets = ["Morena", "Poroto"]
// console.log(person)

// Eliminando propiedades
// delete person.hasExperience
// console.log(person)

// Modificando propiedades
// person.fullname = "Rocio Chaparro"
// console.log(person)

// console.log(person.sisters)

// 1B => Funciones dentro de objetos

// const books = {
//     titles: [],
//     addBook: (titleName) => books.titles.push(titleName)
// }

// books.addBook("Harry Potter")
// books.addBook("The Lord of the Rings")
// books.addBook("The Hunger Games")
// books.addBook("Memorias de Idhun")
// console.log(books.titles)

// PARTE 2 => Acceso a propiedades con notacion de corchete
// Objetos dinamicos

// const key = "fullname"
// console.log(person[key])

// const arr = ["a", "b", "c"]
// arr[0]

// console.log(person["pets"])

// PARTE 3 => Object.keys - Object.values = Object.entries

// Object.keys => recibe un objeto y me devuelve un array con las keys de ese objeto
const keys = Object.keys(person)
// console.log(keys)

// Object.values => recibe un objeto y me devuelve un array con los values del objeto
// const values = Object.values(person)
// console.log(values)

// Object.entries => recibe un objeto y me devuelve un array multidimensional en el que cada array tiene en la posicion 0 la key, y en la posicion 1 el value
// const entries = Object.entries(person)
// console.log(entries)

/*
- no puedo usar el for of en objetos porque los objetos no son iterables
- el for in recorre las keys de mi objeto
- la key es un string
- la notacion de corchete recibe justamente un string y esto me permite traer el valor que corresponda
- la notacion de punto siempre va a buscar la propiedad con el nombre especifico (el nombre literal)
- la notacion de corchete me permite dinamizarlo
*/

// recorriendo las propiedades del objeto
// for (const key in person) {
//     console.log(person[key])
// }

// recorriendo un array con las propiedades del objeto obtenido desde el object.keys
// for (const key of Object.keys(person)) {
//     console.log(person[key])
// }

// PARTE 4 => Array de objetos

const teachers = [
    {
        fullname: "Pilar Figueroa",
        profession: "Technical Referent",
        age: 27,
        zodiacSign: "Escorpio"
    },
    {
        fullname: "Melisa Moreno",
        profession: "Escribania",
        age: 27,
        zodiacSign: "Libra"
    },
    {
        fullname: "Rocio Chaparro",
        profession: "Developer",
        age: 32,
        zodiacSign: "Aries"
    }
]

const students = [
    {
        fullname: "Pilar Figueroa",
        profession: "Technical Referent",
        age: 30,
        zodiacSign: "Escorpio"
    },
    {
        fullname: "Melisa Moreno",
        profession: "Escribania",
        age: 31,
        zodiacSign: "Libra"
    },
    {
        fullname: "Rocio Chaparro",
        profession: "Developer",
        age: 22,
        zodiacSign: "Aries"
    }
]

// console.log(users) // array
// console.log(users[0]) // objeto
// console.log(users[0].fullname) // el valor (string) Pilar Figueroa

// for (const user of users) {
//     console.log(user.fullname)
// }

// Promedio de las edades

// let acc = 0
// for (const user of users) {
//     acc += user.age
// }
// const promedio = acc / users.length
// console.log(promedio) // 28.666666

// const getAverage = (arrayUsers) => {
//     let acc = 0
//     for (const user of arrayUsers) {
//         acc += user.age
//     }
//     return acc / arrayUsers.length
// }

// console.log(getAverage(teachers))
// console.log(getAverage(students))

// Mostrar toda esta informacion en una tabla

// const $ = (selector) => document.querySelector(selector)

// const renderTable = (users) => {
//     for (const user of users) {
//         $("#table").innerHTML += `
//             <tr>
//                 <td>${user.fullname}</td>
//                 <td>${user.profession}</td>
//                 <td>${user.age}</td>
//                 <td>${user.zodiacSign}</td>
//             </tr>
//         `
//     }
// }

// renderTable(teachers)