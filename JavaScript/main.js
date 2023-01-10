const productos = [
    {
        id: 1,
        nombre: "BOUQUET DE ROSAS",
        precio: 920,
        img: "https://thecandleshop.com.ar/public/assets//1064/gt_1643912838A02BR_a.jpg"
    },
    {
        id: 2,
        nombre: "HIGO DE ORIENTE",
        precio: 920,
        img: "https://thecandleshop.com.ar/public/assets//17/gt_1643912922A02HI_a.jpg"
    },
    {
        id: 3,
        nombre: "LAVANDA MENTA",
        precio: 920,
        img: "https://thecandleshop.com.ar/public/assets//404/gt_1621523896A02LM_b.jpg"
    },
    {
        id: 4,
        nombre: "SANDIA PEPINO",
        precio: 920,
        img: "https://thecandleshop.com.ar/public/assets//21/gt_1621523302A02P_b.jpg"
    },
    {
        id: 1,
        nombre: "BOUQUET DE ROSAS",
        precio: 920,
        img: "https://thecandleshop.com.ar/public/assets//1064/gt_1643912838A02BR_a.jpg"
    },
    {
        id: 2,
        nombre: "HIGO DE ORIENTE",
        precio: 920,
        img: "https://thecandleshop.com.ar/public/assets//17/gt_1643912922A02HI_a.jpg"
    },
    {
        id: 3,
        nombre: "LAVANDA MENTA",
        precio: 920,
        img: "https://thecandleshop.com.ar/public/assets//404/gt_1621523896A02LM_b.jpg"
    },
    {
        id: 4,
        nombre: "SANDIA PEPINO",
        precio: 920,
        img: "https://thecandleshop.com.ar/public/assets//21/gt_1621523302A02P_b.jpg"
    },
];

const nuevasFragancias = [
    {
        nombre: "PEPINO",
        img: "../imagenes/nuevas fragancias/1.jpg"
    },
    {
        nombre: "CITRUS",
        img: "../imagenes/nuevas fragancias/2.jpg"
    },
    {
        nombre: "BAMBOO",
        img: "../imagenes/nuevas fragancias/3.jpg"
    },
    {
        nombre: "CEDRO",
        img: "../imagenes/nuevas fragancias/4.jpg"
    },
    {
        nombre: "LIMA",
        img: "../imagenes/nuevas fragancias/5.jpg"
    },


]

//CREACION CARRUSEL POR PRODUCTO
const carrusel = document.getElementById('containerCards');

nuevasFragancias.forEach((fragancia) => {
    const {nombre, img } = fragancia;
    carrusel.innerHTML += `
    <div class="card">
    <img class="image" src="${img}" alt="Card image cap">
        <h2 class="title">${nombre}</h2>
    </div>
`;
});







const contenedor = document.getElementById('contenidoTienda');

//CREACION DE CARDS POR PRODUCTO
productos.forEach((prod) => {
    const { id, nombre, precio, img } = prod;
    contenedor.innerHTML += `
    <div class="card mt-5" style="width: 18rem;">
  <img class="card-img-top " src="${img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">$ ${precio}</p>


    <button onclick="agregarProductos(${id})" class = "btn btn-primary"> Agregar al carrito</button>
  </div>
</div>
`;
});

//AGREGAR AL CARRITO
function agregarProductos(id){
    console.log(id);
}