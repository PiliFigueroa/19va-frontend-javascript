// REPASO OBJETOS

/*
- Declaran con {}
- key: value - clave: valor - propiedad: valor
*/

const artist = {
    firstname: "Taylor",
    lastname: "Swift",
    age: 33
}

const artist2 = {
    firstname: "Demi",
    lastname: "Lovato",
    age: 31
}

// console.log(artist.firstname)
// console.log(artist["firstname"])

artist.quantityAlbums = 10

// console.log(artist)

// artist.age = 23

// console.log(artist)

// for (const key in artist) {
//     console.log(artist[key])
// }

// Object.keys - Object.values

// console.log(Object.keys(artist))
// console.log(Object.values(artist))

const $ = (selector) => document.querySelector(selector)

// for (const value of Object.values(artist)) {
//     $("#list").innerHTML += `<li>${value}</li>`
// }

// for (const key in artist) {
//     $("#list").innerHTML += `<li>${artist[key]}</li>`
// }

const showFullname = (object) => {
    return `${object.firstname} ${object.lastname}`
}

// console.log(showFullname(artist))
// console.log(showFullname(artist2))

const ageInTheFuture = (object, years) => {
    return object.age + years
}

// console.log(ageInTheFuture(artist, 10))
// console.log(ageInTheFuture(artist2, 10))

/*
### 01 - sobre mi

- Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
- El objeto tiene que tener 3 propiedades: nombre, apellido, edad
- Mostrar en consola el objeto sobreMi
*/

// const sobreMi = {
//     nombre: "Pilar",
//     apellido: "Figueroa",
//     edad: 27
// }

// console.log(sobreMi)

/*
### 02 - presentar

- Crear una variable llamada user, a la que le vamos a asignar un objeto.
- El objeto tiene que tener 3 propiedades: fullname, email, age
- Mostrar en consola el objeto user
- Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"
*/

// const user = {
//     fullname: "Pilar Figueroa",
//     email: "pilarfigueroa.dev@gmail.com",
//     age: 27
// }

// console.log(user)
// console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años`)

/*
### 03 - cancion

- Tenemos un objeto en la variable `song` con diferentes propiedades que representan una canción de spotify.
- Queremos crear un nuevo objeto, guardandolo en la variable `cancion`, a partir de las propiedades del objeto que tenemos en `song`
- El nuevo objeto tiene que tener las propiedades **titulo**, **banda**, y **duracion** (en segundos, ya que en el objeto original `song` está en milisegundos)

*/

// const song = {
//   title: "Rock and Roll",
//   bandName: "Led Zeppelin",
//   duration: 166000,
//   album: "Led Zeppelin IV",
// };

// const cancion = {
//   titulo: song.title,
//   banda: song.bandName,
//   duracion: song.duration / 1000
// };

// console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }