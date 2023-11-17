const estudiantes = [
    {
        edad: 17,
        familiar: "Salamandra",
        casa: "Hufflepuff",
        nombreCompleto: {
            nombre: "Ellis",
            apellido: "Reeves"
        },
        hechizoPreferido: "Expecto Patronum"
    },
    {
        edad: 15,
        familiar: "Salamandra",
        casa: "Gryffindor",
        nombreCompleto: {
            nombre: "Neal",
            apellido: "Spence"
        },
        hechizoPreferido: "Lumos"
    },
    {
        edad: 17,
        familiar: "Sapo",
        casa: "Slytherin",
        nombreCompleto: {
            nombre: "Lucy",
            apellido: "Talley"
        },
        hechizoPreferido: "Expelliarmus"
    },
    {
        edad: 21,
        familiar: "Lechuza",
        casa: "Slytherin",
        nombreCompleto: {
            nombre: "Gloria",
            apellido: "Woods"
        },
        hechizoPreferido: "Lumos"
    },
    {
        edad: 20,
        familiar: "Sapo",
        casa: "Gryffindor",
        nombreCompleto: {
            nombre: "Sharp",
            apellido: "Collier"
        },
        hechizoPreferido: "Lumos"
    }
]

// DESTRUCTURING => extraer propiedades de un objeto

// const person = {
//     fullname: "Pilar Figueroa",
//     age: 27,
//     favoriteDisneyMovie: "El Planeta del Tesoro"
// }

// const person2 = {
//     fullname: "Melisa Moreno",
//     age: 27,
//     favoriteDisneyMovie: "Toy Story"
// }

// console.log(person.favoriteDisneyMovie)

// const { favoriteDisneyMovie, fullname, age } = person2

// console.log(favoriteDisneyMovie)
// console.log(fullname)
// console.log(age)

// for (const estudiante of estudiantes) {
//     const { casa, familiar, edad, nombreCompleto, hechizoPreferido } = estudiante
//     const { nombre, apellido } = nombreCompleto
// }

// sugar syntax

// for (const { casa, familiar, hechizoPreferido } of estudiantes) {
//     console.log(casa)
//     console.log(familiar)
//     console.log(hechizoPreferido)
// }

// const filtrarEstudiantes = (estudiantes, casa) => {
//     const arrayFiltrado = []
//     for (const estudiante of estudiantes) {
//         if (estudiante.casa === casa) {
//             arrayFiltrado.push(estudiante)
//         }
//     }
//     return arrayFiltrado
// }

// const filtrarEstudiantes2 = (estudiantes, nombreCasa) => {
//     const arrayFiltrado = []
//     for (const estudiante of estudiantes) {
//         const { casa } = estudiante
//         if (casa === nombreCasa) {
//             arrayFiltrado.push(estudiante)
//         }
//     }
//     return arrayFiltrado
// }

// console.log(filtrarEstudiantes2(estudiantes, "Slytherin"))