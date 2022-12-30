//SIMULADOR E-COMMERCE VELAS DE 


//Constructor de productos
class Producto {
    constructor(nombre, precio, esencia) {
        this.nombre = nombre;
        this.precio = parseInt(precio) ;
        this.esencia = esencia;
        this.disponible = true;
    }

    Vender(){
        this.disponible = false;
    }
}

const velas = [];
var cargaProductos = prompt("Ingrese nombre del producto o 'fin' para terminar la carga");

//Carga de productos mediante consola

while (cargaProductos != "fin"){
    let nombre = cargaProductos;
    let precio = parseInt(prompt("Ingrese el precio del producto: "));
    let esencia = prompt("Ingrese esencia de la vela: ");

    velas.push(new Producto(nombre, precio, esencia));

    var cargaProductos = prompt("Ingrese nombre del producto o 'fin' para terminar la carga");
    
}
//Array con productos cargados
console.log(velas);


//FILTER para filtrar por precio minimo

let precioMin = parseInt(prompt("Ingrese el precio minimo"));

let filtrados = velas.filter((producto) => producto.precio > precioMin); 

filtrados.forEach((producto) => {
    let mensaje = `
    Nombre: ${producto.nombre}
    Precio: $${producto.precio}
    Esencia: ${producto.esencia}
`;

    alert(mensaje);
});

//FILTER para encontrar producto con la esencia ingresada

let nombreEsencia = prompt("Ingrese el nombre de la esencia que desea buscar: ");
let encontrado = velas.find(item => item.esencia === nombreEsencia);

let mensaje2 = `
    Nombre: ${encontrado.nombre}
    Precio: $${encontrado.precio}
    Esencia: ${encontrado.esencia}
`;

alert(mensaje2);

//SOME para consultar disponibilidad del producto

let nombreDisp = prompt("Ingrese el nombre del producto a consultar disponibilidad: ");

if(velas.some(item => item.nombre === nombreDisp)){
    alert("El producto se encuentra disponible");
}else{
    alert("El producto no se encuentra disponible");
}








    