const productos = [ 
    { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000,stock: 10, ventas: 12 }, 
{ id: 2, nombre: "Teclado", categoria: "Periferico", precio:120000, stock: 5, ventas: 7 }, 
{ id: 3, nombre: "Monitor", categoria: "Pantalla", precio:800000, stock: 2, ventas: 4 }, 
{ id: 4, nombre: "USB", categoria: "Accesorio", precio:30000, stock: 0, ventas: 15 }, 
{ id: 5, nombre: "Diadema", categoria: "Audio", precio:90000, stock: 8, ventas: 6 } 
];

function valorTotalInventario(productos){
    const totalInventario = productos.reduce((acc, pdt)=> acc + (pdt.precio * pdt.stock),0);//se calcula el total multiplicando el precio por el stock de cada elemento
    const totalStock = productos.map(pdt => pdt.nombre + ": " + pdt.stock);
    console.log(`Stock por producto: `);
    console.table(`${totalStock.join("\n")}`);
    console.log(`El valor total de del iventario es: ${totalInventario}`)
    return totalInventario;
}
