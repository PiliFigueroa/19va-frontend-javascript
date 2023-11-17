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

// console.log(estudiantes[0].nombreCompleto.apellido)

// for (const estudiante of estudiantes) {
//     console.log(estudiante.nombreCompleto.nombre)
// }

// const slytherins = []

// for (const estudiante of estudiantes) {
//     if (estudiante.casa === "Slytherin") {
//         slytherins.push(estudiante)
//     }
// }

// console.log(slytherins)

// const filtrarEstudiantes = (estudiantes, casa) => {
//     const arrayFiltrado = []
//     for (const estudiante of estudiantes) {
//         if (estudiante.casa === casa) {
//             arrayFiltrado.push(estudiante)
//         }
//     }
//     return arrayFiltrado
// }

// console.log(filtrarEstudiantes(estudiantes, "Slytherin").length)
// console.log(filtrarEstudiantes(estudiantes, "Gryffindor").length)
// console.log(filtrarEstudiantes(estudiantes, "Hufflepuff").length)
// console.log(filtrarEstudiantes(estudiantes, "Ravenclaw").length)