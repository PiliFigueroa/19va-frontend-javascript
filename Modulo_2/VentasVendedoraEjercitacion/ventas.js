const local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
    sucursales: ["Centro", "Caballito"],
  
    ventas: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      {
        fecha: new Date(2019, 1, 4),
        nombreVendedora: "Grace",
        componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 0, 1),
        nombreVendedora: "Ada",
        componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 0, 2),
        nombreVendedora: "Grace",
        componentes: ["Monitor ASC 543", "Motherboard MZI"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 0, 10),
        nombreVendedora: "Ada",
        componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 0, 12),
        nombreVendedora: "Grace",
        componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 1, 24),
        nombreVendedora: "Sheryl",
        componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"],
        sucursal: "Caballito",
      },
      {
        fecha: new Date(2019, 1, 12),
        nombreVendedora: "Hedy",
        componentes: ["Monitor GPRS 3000", "HDD Toyiva"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 1, 1),
        nombreVendedora: "Ada",
        componentes: ["Motherboard MZI", "RAM Quinston Fury"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 1, 11),
        nombreVendedora: "Grace",
        componentes: ["Monitor ASC 543", "RAM Quinston"],
        sucursal: "Caballito",
      },
      {
        fecha: new Date(2019, 1, 15),
        nombreVendedora: "Ada",
        componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 1, 12),
        nombreVendedora: "Hedy",
        componentes: ["Motherboard ASUS 1500", "HDD Toyiva"],
        sucursal: "Caballito",
      },
      {
        fecha: new Date(2019, 1, 21),
        nombreVendedora: "Grace",
        componentes: ["Motherboard MZI", "RAM Quinston"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 1, 8),
        nombreVendedora: "Sheryl",
        componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 1, 16),
        nombreVendedora: "Sheryl",
        componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 1, 27),
        nombreVendedora: "Hedy",
        componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
        sucursal: "Caballito",
      },
      {
        fecha: new Date(2019, 1, 22),
        nombreVendedora: "Grace",
        componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 1, 5),
        nombreVendedora: "Ada",
        componentes: ["Motherboard ASUS 1500", "RAM Quinston"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 1, 1),
        nombreVendedora: "Grace",
        componentes: ["Motherboard MZI", "HDD Wezter Dishital"],
        sucursal: "Centro",
      },
      {
        fecha: new Date(2019, 1, 7),
        nombreVendedora: "Sheryl",
        componentes: ["Monitor GPRS 3000", "RAM Quinston"],
        sucursal: "Caballito",
      },
      {
        fecha: new Date(2019, 1, 14),
        nombreVendedora: "Ada",
        componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
        sucursal: "Centro",
      },
    ],
  
    precios: [
      { 
        componente: "Monitor GPRS 3000",
        precio: 200 
      },
      { componente: "Motherboard ASUS 1500", precio: 120 },
      { componente: "Monitor ASC 543", precio: 250 },
      { componente: "Motherboard ASUS 1200", precio: 100 },
      { componente: "Motherboard MZI", precio: 30 },
      { componente: "HDD Toyiva", precio: 90 },
      { componente: "HDD Wezter Dishital", precio: 75 },
      { componente: "RAM Quinston", precio: 110 },
      { componente: "RAM Quinston Fury", precio: 230 },
    ],
  };

// ### precioMaquina
// - Crear una funcion `precioMaquina(componentes)` que recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

const precioComponente = (componente) => {
    const { precios } = local
    // Recorro el array de precios de mi variable local
    for (const articulo of precios) {
        // Pregunto si el articulo que estoy recorriendo coincide con el objeto que recorro en cada vuelta, si da true, devuelvo ese precio
        if (componente === articulo.componente) {
            // El retorno me devuelve el precio de ESE componente que dio true, y finaliza la ejecucion de mi funcion
            return articulo.precio
        }
    }
}

// console.log(precioComponente("Motherboard ASUS 1500"))

const precioMaquina = (componentes) => {
    let precioTotal = 0
    // Recorro el array de componentes que recibo de argumento
    for (const componente of componentes) {
        // Sumo y acumulo lo que me devuelve mi funcion auxiliar => recibe el nombre del componente que estoy recorriendo (string)
        precioTotal += precioComponente(componente)
    }
    return precioTotal
}

// console.log(precioMaquina(["Motherboard ASUS 1500", "RAM Quinston"])) // 230
// console.log(precioMaquina(["RAM Quinston Fury", "Monitor GPRS 3000"]))

// ### cantidadVentasComponente
// - Crear una funcion `cantidadVentasComponente(componente)` que recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

const cantidadVentasComponente = (componente) => {
    const { ventas } = local
    let acc = 0
    for (const venta of ventas) {
        for (const articulo of venta.componentes) {
            if (articulo === componente) {
                acc += 1
            }
        }
    }
    return acc
}

// console.log(cantidadVentasComponente("Monitor GPRS 3000"))
// console.log(cantidadVentasComponente("Motherboard ASUS 1500"))

// ### componenteMasVendido
// - Crear una funcion `componenteMasVendido()`, devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función `cantidadVentasComponente`.

/*
 const componentesVendidos = {
  "Monitor 3000": 6,
  "RAM Quinston": 3
 }
*/

// ### vendedoraDelMes
// - Crear una funcion `vendedoraDelMes(mes, anio)`, se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

/*
const ventasPorVendedora = {
  Grace: 1400,
  Ada: 1500,
  Sheryl: 2100,
  Hedy: 1900
}
*/

const vendedoraDelMes = (mes, anio) => {
  // Le restamos 1 al mes para que coincida con lo que me retorna el metodo getMonth()
  mes--
  const { ventas, vendedoras } = local
  // Filtramos TODAS las ventas, por la fecha que tenemos en los parametros
  const filtradoPorFecha = ventas.filter(venta => venta.fecha.getMonth() === mes && venta.fecha.getFullYear() === anio)
  // Inicializamos un objeto vacio para poder procesar la informacion y crear un dato auxiliar en donde cada key sea la vendedora y su value el total vendido en ese mes
  const ventasFiltradas = {}
  // Recorremos las vendedoras para poder filtrar por vendedora y calcular el total vendido
  for (const vendedora of vendedoras) {
    let acc = 0
    // Filtramos por vendedora
    const ventasPorVendedora = filtradoPorFecha.filter(venta => venta.nombreVendedora === vendedora)
    // Recorremos el array filtrado
    for (const venta of ventasPorVendedora) {
      // Acumulamos lo que se vendio en esa venta
      acc += precioMaquina(venta.componentes)
    }
    // Creamos la propiedad con el nombre de la vendedora y el value con el total vendido
    ventasFiltradas[vendedora] = acc
  }

  // Inicializamos variables para comparar datos
  let mejorVenta = 0
  let mejorVendedora = ""
  // Recorremos el objeto y guardamos la mayor venta y la mejor vendedora
  for (const key in ventasFiltradas) {
    if (ventasFiltradas[key] > mejorVenta) {
      mejorVenta = ventasFiltradas[key]
      mejorVendedora = key
    }
  }
  return mejorVendedora
}

console.log(vendedoraDelMes(1, 2019))
// console.log(vendedoraDelMes(2, 2019))

// Solucion de Laura
// const mayor = (vendedora) =>{
//   let mayor = 0, nombreVendedora = ""
//   for (const venta in vendedora) {
//       if (vendedora[venta] > mayor){
//           mayor = vendedora[venta]
//           nombreVendedora = venta
//       }
//   }
//   return nombreVendedora
// }

// const vendedoraDelMes2 = (mes, anio) =>{
//   let vendedoraMes = {}
//   for (const {fecha, nombreVendedora, componentes} of local.ventas) {
//       if ( (fecha.getMonth() === mes-1) && (fecha.getFullYear() === anio) ){
//           const importeVenta = precioMaquina(componentes)
//           if (!vendedoraMes[nombreVendedora]) {
//               vendedoraMes[nombreVendedora] = 0
//           }
//           vendedoraMes[nombreVendedora] += importeVenta
//       }
//   }
//   return mayor(vendedoraMes)
// }