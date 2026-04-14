const productos = [
  {
    id: 1,
    nombre: "Mouse",
    categoria: "Periferico",
    precio: 50000,
    stock: 10,
    ventas: 12,
  },
  {
    id: 2,
    nombre: "Teclado",
    categoria: "Periferico",
    precio: 120000,
    stock: 5,
    ventas: 7,
  },
  {
    id: 3,
    nombre: "Monitor",
    categoria: "Pantalla",
    precio: 800000,
    stock: 2,
    ventas: 4,
  },
  {
    id: 4,
    nombre: "USB",
    categoria: "Accesorio",
    precio: 30000,
    stock: 0,
    ventas: 15,
  },
  {
    id: 5,
    nombre: "Diadema",
    categoria: "Audio",
    precio: 90000,
    stock: 8,
    ventas: 6,
  },
];

function mostrarProuctos() {
  console.table(productos);
}

function productosStockBajo(productos) {
  const stockBajo = productos.filter((productos) => productos.stock < 5);
  console.table(stockBajo);
  return stockBajo;
}

function productosAgotados(productos) {
  const agotados = productos.filter((pdt) => pdt.stock === 0); // crea array con productos agotados
  console.table(agotados);
  return agotados;
}

function preciosNombres(productos) {
  const preciosNombres = productos.map((producto) => ({
    nombre: producto.nombre,
    precio: producto.precio,
  }));
  console.log("Precios y nombres de los productos:");
  console.table(preciosNombres);
  return preciosNombres;
}
function valorTotalInventario(productos) {
  const totalInventario = productos.reduce(
    (acc, pdt) => acc + pdt.precio * pdt.stock,
    0,
  ); //se calcula el total multiplicando el precio por el stock de cada elemento
  const totalStock = productos.map((pdt) => pdt.nombre + ": " + pdt.stock);
  console.log(`Stock por producto: `);
  console.table(`${totalStock.join("\n")}`);
  console.log(`El valor total de del iventario es: ${totalInventario}`);
  return totalInventario;
}

function totalVentas(productos) {
  const totalVentas = productos.reduce((acc, pdt) => acc + pdt.ventas, 0);
  console.log(`El total de ventas es: ${totalVentas}`);
  const totalPrecioVentas = productos.reduce(
    (acc, pdt) => acc + pdt.precio * pdt.ventas,
    0,
  );
  console.log(`El total de ingresos de ventas es: ${totalPrecioVentas}`);
  return totalVentas;
}

function ordenarPorPrecio(productos){
    const ordenados =  productos.sort((a, b) => a.precio - b.precio);
    console.table(ordenados);
    return ordenados;

}


function buscarProductoPorNombre(producto){
    const resultado = productos.find(pdt => pdt.nombre.toLowerCase() === producto.toLowerCase());
     if (resultado) {
    console.table([resultado]);
  } else {
    console.log("Producto no encontrado");
  }
    return resultado;
}



function existenciaStock(productos) {
  if (productos.every((pdt) => pdt.stock > 0)) {
    console.log("Todos los productos están disponibles.");
  }
  if (productos.some((pdt) => pdt.stock === 0)) {
    const productosAgotados = productos
      .filter((pdt) => pdt.stock === 0)
      .map((pdt) => pdt.nombre);
    console.table(`Productos agotados: \n${productosAgotados.join("\n")}`);
  }
}

function clasificarPorPrecio(productos) {
  const clasificar = productos.map((pdt) => {
    switch (true) {
      case pdt.precio > 400000:
        return console.log(`${pdt.nombre} es Caro/a`);
      case pdt.precio <= 400000 && pdt.precio > 100000:
        return console.log(`${pdt.nombre} es Intermedio/a`);
      case pdt.precio <= 100000 && pdt.precio > 0:
        return console.log(`${pdt.nombre} es Barato/a`);
      default:
        return console.log("error: precio negativo o no válido");
    }
  });
  return clasificar;
}

// clasificarPorPrecio(productos);

function combinacionesObligatorias(productos) {
//   filtrar productos disponibles por precio y ordenarlos es orden ascendente
    function ordenPrecio() {
    const ordenadosPorPrecio = [...productos]
      .filter((pdt) => pdt.stock > 0)
      .sort((a, b) => a.precio - b.precio);
    console.log(`productos ordenados por precio ascendente:`);
    console.table(ordenadosPorPrecio);
    return ordenadosPorPrecio;
  }
// identificar productos agotados y crear un mensaje de reabastecimiento
  function reabastecimiento() {
    const agotados = productosAgotados(productos);
    const reabastecimiento = agotados.map(
      (pdt) => `${pdt.nombre} está agotado, necesita reabastecimiento`,
    );
    console.log(reabastecimiento);
    return reabastecimiento;
  }
//   calcular precio de venta de stock actual
  function venderStockActual() {
    const precioStockActual = productos.reduce(
      (acc, pdt) => acc + pdt.stock * pdt.precio,
      0,
    );
    console.log(`El precio del stock actual es: ${precioStockActual} `);
    return precioStockActual;
  }
//   encontrar por medio de sort el producto más vendido
  function productoMasVendido() {
    const masVendido = [...productos].sort(
      (menor, mayor) => mayor.ventas - menor.ventas,
    );
    console.log(`el producto más vendido es: ${masVendido[0].nombre}`);//la primera ubicación del orden descendente es el producto más vendido
    return masVendido;
  }

  ordenPrecio();
  reabastecimiento();
  venderStockActual();
  productoMasVendido();
  //llamar función combinaciones, también llama todas las funciones interiores
}



function reporteObligatorio (productos){
// Esta función busca el producto con el precio más alto.

// 1. Producto más caro
function productoMasCaro() {
  const listaOrdenada = [...productos].sort((a, b) => b.precio - a.precio);
  const resultado = listaOrdenada[0];

  console.log("Producto más caro:");
  console.table([resultado]);
  return resultado;
}

// 2. Producto más barato
function productoMasBarato() {
  const listaOrdenada = [...productos].sort((a, b) => a.precio - b.precio);
  const resultado = listaOrdenada[0];

  console.log("Producto más barato:");
  console.table(resultado);
  return resultado;
}

// 3. Producto más vendido
function productoMasVendido() {
  const listaOrdenada = [...productos].sort((a, b) => b.ventas - a.ventas);
  const resultado = listaOrdenada[0];

  console.log("Producto más vendido:");
  console.table([resultado]);
  return resultado;
}

// 4. Valor total del inventario
function valorTotalInventario() {
  const resultado = productos.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.stock;
  }, 0);//Significa que reduce() empieza sumando desde 0.

  console.log("Valor total del inventario:", resultado);
  return resultado;
}

// 5. Total de unidades vendidas
function totalUnidadesVendidas() {
  const resultado = productos.reduce((acumulador, producto) => {
    return acumulador + producto.ventas;
  }, 0);//Significa que reduce() empieza sumando desde 0.

  console.log("Total de unidades vendidas:", resultado);

  return resultado;
}

// 6. Cantidad de productos agotados
function cantidadProductosAgotados() {
  const listaAgotados = productos.filter((producto) => producto.stock === 0);
  const resultado = listaAgotados.length;

  console.log("Cantidad de productos agotados:", resultado);
  return resultado;
}

// Llamado de funciones
productoMasCaro();
productoMasBarato();
productoMasVendido();
valorTotalInventario();
totalUnidadesVendidas();
cantidadProductosAgotados();
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu () {
  let opcion = ""; 

  while (opcion !== "13") {
    console.log(`
    Menú de opciones:
    1. mostrar productos
    2. productos con stock bajo
    3. productos agotados
    4. precios y nombres de los productos
    5. valor total del inventario
    6. total de ventas
    7. Ordenar productos por precio
    8. buscar producto por nombre
    9. existencia de stock
    10. clasificar productos por precio
    11. combinaciones obligatorias
    12. reporte obligatorio
    13. salir
    `);
      
    readline.question("Seleccione una opción(numero): ", (respuesta) => {

      opcion = respuesta;
      switch (opcion) {
        case "1":
          mostrarProuctos();
          break;
        case "2":
          productosStockBajo(productos);
          break;
        case "3":
          productosAgotados(productos);
          break;
        case "4":
          preciosNombres(productos);
          break;
        case "5":
          valorTotalInventario(productos);
          break;
        case "6":
          totalVentas(productos);
          break;
        case "7":
          ordenarPorPrecio(productos);
          break;
        case "8":
          readline.question("Ingrese el nombre del producto a buscar: ", (producto) => {
          buscarProductoPorNombre(producto);
          menu(); // Llamar al menú nuevamente después de ejecutar la búsqueda
        });
        return; // Salir de la función actual para evitar que el menú se ejecute dos veces debido a la pregunta anidada 
        case "9":
            existenciaStock(productos);
            break;
        case "10":
            clasificarPorPrecio(productos);
            break;
        case "11":
            combinacionesObligatorias(productos);
            break;
        case "12":
            reporteObligatorio(productos);
            break;
        case "13":
            console.log("Saliendo del programa...");
            readline.close();
            return;
        default:
          console.log("Opción no válida, por favor intente de nuevo.");            
      }
      menu(); // Llamar al menú nuevamente después de ejecutar la opción seleccionada
    });
    break;// Salir del bucle después de la primera iteración para evitar múltiples preguntas
  }
}
menu();