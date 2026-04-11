const productos = [ 
{ id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000,stock: 10, ventas: 12 }, 
{ id: 2, nombre: "Teclado", categoria: "Periferico", precio:120000, stock: 5, ventas: 7 }, 
{ id: 3, nombre: "Monitor", categoria: "Pantalla", precio:800000, stock: 2, ventas: 4 }, 
{ id: 4, nombre: "USB", categoria: "Accesorio", precio:30000, stock: 0, ventas: 15 }, 
{ id: 5, nombre: "Diadema", categoria: "Audio", precio:90000, stock: 8, ventas: 6 } 
];

function mostrarProuctos(){
    console.table(productos)
}

function productosStockBajo(productos){
    const stockBajo = productos.filter(productos => productos.stock < 5);
    console.table(stockBajo);
    return stockBajo;
}

function productosAgotados(productos){
    const agotados = productos.filter(pdt => pdt.stock <=0);// crea array con productos agotados
    console.table(agotados);
    return agotados;
}


function preciosNombres (productos) {
    const preciosNombres = productos.map (producto => ({nombre: producto.nombre, precio: producto.precio}));
    console.log("Precios y nombres de los productos:");
    console.table(preciosNombres);
    return preciosNombres;

}
function valorTotalInventario(productos){
    const totalInventario = productos.reduce((acc, pdt)=> acc + (pdt.precio * pdt.stock),0);//se calcula el total multiplicando el precio por el stock de cada elemento
    const totalStock = productos.map(pdt => pdt.nombre + ": " + pdt.stock);
    console.log(`Stock por producto: `);
    console.table(`${totalStock.join("\n")}`);
    console.log(`El valor total de del iventario es: ${totalInventario}`);
    return totalInventario;
}

function totalVentas(productos){
    const totalVentas = productos.reduce((acc, pdt) => acc + pdt.ventas, 0);
    console.log(`El total de ventas es: ${totalVentas}`);
    const totalPrecioVentas = productos.reduce((acc, pdt) => acc + (pdt.precio * pdt.ventas), 0);
    console.log(`El total de ingresos de ventas es: ${totalPrecioVentas}`);
    return totalVentas;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function buscarProductoPorNombre(producto){
    const resultado = productos.find(pdt => pdt.nombre.toLowerCase() === producto.toLowerCase());
    console.table(resultado);
    return resultado;
}

readline.question("Ingrese el nombre del producto a buscar: ", (nombre) => {
    buscarProductoPorNombre(nombre);
    readline.close();
});

function existenciaStock(productos){
if (productos.every(pdt => pdt.stock > 0)){
 console.log("Todos los productos están disponibles.");
}
if (productos.some(pdt => pdt.stock === 0)){
    const productosAgotados = productos.filter(pdt => pdt.stock === 0).map(pdt => pdt.nombre);
    console.table(`Productos agotados: \n${productosAgotados.join("\n")}`);
}
}

function clasificarPorPrecio(productos) {
  const clasificar = productos.map((pdt) =>{
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

clasificarPorPrecio(productos);

