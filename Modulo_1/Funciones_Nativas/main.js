/* REPASO */

// Que tengo? Y que necesito?
// Una funcion tiene que hacer UNA SOLA COSA, y hacerla BIEN

/*
Crear una funcion que reciba como parametro un precio y devuelva el precio mas el IVA.
*/

// Que tengo? Un NUMBER
// Que necesito? Retornar un NUMBER (precio + iva)
// scope

// Como calculo el precio mas todos los impuestos?

const calcularTotalImpuestos = (precio) => {
    const totalImpuesto = calcularIva(precio) + impuestoPais(precio)
    return totalImpuesto + precio
}

const calcularIva = (precio) => {
    return 0.21 * precio
}

// codigo inalcanzable

// console.log(calcularIva(1000))

const impuestoPais = (precio) => {
    return 0.35 * precio
}

// Optimizando codigo

const calcularImpuesto = (precio, impuesto) => {
    return impuesto * precio
}

const calcularTotalImpuestos2 = (precio) => {
    const totalImpuesto = calcularImpuesto(precio, 0.21) + calcularImpuesto(precio, 0.35)
    return totalImpuesto + precio
}

// console.log(calcularTotalImpuestos2(1000))

// FUNCIONES NATIVAS

const fullname = "Pilar Figueroa"
const number = 50

// .length => saber cuantos caracteres hay en un string
// console.log(fullname.length)

// .toUpperCase() => toma un string y me devuelve el mismo string pero todo en mayuscula
// console.log(fullname.toUpperCase())

// .toLowerCase() => toma un string y me devuelve el mismo string pero todo en minuscula
// console.log(fullname.toLowerCase())

// .slice() => toma un string y me permite cortarlo a traves de la posicion de sus caracteres
// console.log(fullname.slice(6))
// Si le paso dos numeros, el primero es DESDE DONDE y el segundo es HASTA DONDE
// console.log(fullname.slice(0, 5))

// .includes() => devuelve un boolean
// console.log(fullname.includes("r"))
// console.log(fullname.includes("h"))
// case sensitive
// console.log(fullname.includes("p"))

// .indexOf() => devuelve la posicion del caracter que recibe como argumento
// console.log(fullname.indexOf(" "))

// .charAt() => devuelve el caracter que esta en la posicion que recibe como argumento
// console.log(fullname.charAt(6))

// .replace() => recibe que cosa va a reemplazar, y por que otra cosa va a ser reemplazado
// console.log(fullname.replace("Pilar", "Milagros"))

// .toString() => transforma de numero a string (inversa del Number())
// console.log(typeof number.toString())

// Objeto Math

const num = 10.4

// round => redondea al entero mas cercano
// console.log(Math.round(num))

// ceil => redondea para arriba
// console.log(Math.ceil(num))

// floor => redondea para abajo
// console.log(Math.floor(num))

// random => me devuelve un numero aleatorio entre 0 y 1
// console.log(Math.random() * 10)

// min => devuelve el numero mas bajo
// console.log(Math.min(5, 40, 98, -3, 17))

// max => devuelve el numero mas alto
// console.log(Math.max(5, 40, 98, -3, 17))

// Ejercicio practico => devolver un numero aleatorio entre 0 y 5, sin coma, es decir, redondeado.

// const randomNumber = Math.round(Math.random() * 5)
// console.log(randomNumber)

const randomNumber = (number) => {
    return Math.round(Math.random() * number)
}