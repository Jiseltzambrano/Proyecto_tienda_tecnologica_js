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

