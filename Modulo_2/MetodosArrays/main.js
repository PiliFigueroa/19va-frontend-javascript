// const numbers = [20, -3, 17, 5, 48, -10]

// Filter => Devolver un array nuevo con aquellos elementos que cumplan con una condicion

// const positiveNumbers = numbers.filter(number => number > 0)

// console.log(positiveNumbers)

// Map => Devuelve un array nuevo con la MISMA cantidad de elementos que el array original, puedo modificar estos elementos.

// const duplicatedNumbers = numbers.map(number => number * 2)
// console.log(duplicatedNumbers)

// const scores = [25, 100, 400, 250, 125, 175]

// const bonusScore = scores.map(score => {
//     if (score >= 200) {
//         return score + 50
//     }
//     return score
// })

// console.log(bonusScore)

// Find => Devuelve el elemento que cumple con una condicion, siempre el primero que la cumpla

// const oddNumber = numbers.find(number => number % 2 !== 0)
// console.log(oddNumber)

// Some => devuelve true o false segun si encuentra que al menos un elemento cumple con una condicion

// const thereArePositiveNumbers = numbers.some(number => number > 0)
// console.log(thereArePositiveNumbers)
// console.log([-5, -10, -15].some(number => number > 0))

// Every => devuelve true si TODOS los elementos cumplen con una condicion, de lo contrario, devuelve false
// const allPositives = numbers.every(number => number > 0)
// console.log(allPositives)
// console.log([5, 10, 15].every(number => number > 0))

// Sort => modifica el array original, ordenar los elementos
// Si es un string, voy a tener que preparar un callback, los ordena alfabeticamente
// Si son numbers, voy a tener que preparar un callback, para poder ordenarlos

const fruits = ["Watermelon", "Apple", "Orange"]
const numbers = [20, -3, 17, 5, 48, -10]

// Para ordenar numericamente
// a - b ordena de menor a mayor
// b - a ordena de mayor a menor

// Para ordenar alfabeticamente
// a < b return -1, a > b return 1, sino return 0 => ordena A/Z
// a < b return 1, a > b return -1, sino return 0 => ordena Z/A

// console.log(numbers.sort((a, b) => a - b))
// console.log(numbers.sort((a, b) => b - a))

// console.log(fruits.sort((a, b) => {
//     if (a < b) {
//         return -1
//     }
//     if (a > b) {
//         return 1
//     }
//     return 0
// }))

// console.log(fruits.sort((a, b) => {
//     if (a > b) {
//         return -1
//     }
//     if (a < b) {
//         return 1
//     }
//     return 0
// }))

const users = [
    {
        name: "Juan Pablo",
        profession: "Developer",
        salary: 200000
    },
    {
        name: "Miriam Alonso",
        profession: "QA",
        salary: 180000
    },
    {
        name: "Agostina Tevez",
        profession: "Technical Leader",
        salary: 230000
    },
    {
        name: "Kevin Lobos",
        profession: "Functional Analyst",
        salary: 190000
    }
]

// Filter => devolver los users cuyo sueldo sea mayor o igual a 200mil
// const sueldosAltos = users.filter(user => user.salary >= 200000)
// console.log(sueldosAltos)

// Sort

// De menor a mayor por sueldo
// console.log(users.sort((a, b) => a.salary - b.salary))

// Por nombre alfabeticamente A/Z
// console.log(users.sort((a, b) => {
//     if (a.name < b.name) return -1
//     if (a.name > b.name) return 1
//     return 0
// }))

// reduce()

// Spread operator => ... sirve para hacer copias de otros datos

// const usersCopy = [...users]
// console.log(usersCopy)

// const persona = {
//     name: "Pilar",
//     age: 26
// }

// const personaCopia = {...persona, age: 27}
// console.log(personaCopia)

// console.log(persona)