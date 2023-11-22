const local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
    sucursales: ["Centro", "Caballito"],
  
    ventas: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      {
        fecha: new Date(2019, 1, 4),
        nombreVendedora: "Grace",
        componentes: ["Monitor GPRS 3000", "Monitor GPRS 3000"],
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

// const precioComponente = (componente) => {
//     const { precios } = local
//     // Recorro el array de precios de mi variable local
//     for (const articulo of precios) {
//         // Pregunto si el articulo que estoy recorriendo coincide con el objeto que recorro en cada vuelta, si da true, devuelvo ese precio
//         if (componente === articulo.componente) {
//             // El retorno me devuelve el precio de ESE componente que dio true, y finaliza la ejecucion de mi funcion
//             return articulo.precio
//         }
//     }
// }

// console.log(precioComponente("Motherboard ASUS 1500"))

// const precioMaquina = (componentes) => {
//     let precioTotal = 0
//     // Recorro el array de componentes que recibo de argumento
//     for (const componente of componentes) {
//         // Sumo y acumulo lo que me devuelve mi funcion auxiliar => recibe el nombre del componente que estoy recorriendo (string)
//         precioTotal += precioComponente(componente)
//     }
//     return precioTotal
// }

// console.log(precioMaquina(["Motherboard ASUS 1500", "RAM Quinston"])) // 230
// console.log(precioMaquina(["RAM Quinston Fury", "Monitor GPRS 3000"]))

// ### cantidadVentasComponente
// - Crear una funcion `cantidadVentasComponente(componente)` que recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

// const cantidadVentasComponente = (componente) => {
//     const { ventas } = local
//     let acc = 0
//     for (const venta of ventas) {
//         for (const articulo of venta.componentes) {
//             if (articulo === componente) {
//                 acc += 1
//             }
//         }
//     }
//     return acc
// }

// console.log(cantidadVentasComponente("Monitor GPRS 3000"))
// console.log(cantidadVentasComponente("Motherboard ASUS 1500"))