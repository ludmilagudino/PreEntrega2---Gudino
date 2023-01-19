const productos = [
  {
    id: 1,
    nombre: "BOUQUET DE ROSAS",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//1064/gt_1643912838A02BR_a.jpg",
  },
  {
    id: 2,
    nombre: "HIGO DE ORIENTE",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//17/gt_1643912922A02HI_a.jpg",
  },
  {
    id: 3,
    nombre: "LAVANDA MENTA",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//404/gt_1621523896A02LM_b.jpg",
  },
  {
    id: 4,
    nombre: "SANDIA PEPINO",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//21/gt_1621523302A02P_b.jpg",
  },
  {
    id: 1,
    nombre: "BOUQUET DE ROSAS",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//1064/gt_1643912838A02BR_a.jpg",
  },
  {
    id: 2,
    nombre: "HIGO DE ORIENTE",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//17/gt_1643912922A02HI_a.jpg",
  },
  {
    id: 3,
    nombre: "LAVANDA MENTA",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//404/gt_1621523896A02LM_b.jpg",
  },
  {
    id: 4,
    nombre: "SANDIA PEPINO",
    precio: 920,
    img: "https://thecandleshop.com.ar/public/assets//21/gt_1621523302A02P_b.jpg",
  },
];

const nuevasFragancias = [
  {
    fragancia: "PEPINO",
    imagen: "../imagenes/nuevas fragancias/1.jpg",
  },
  {
    fragancia: "CITRUS",
    imagen: "../imagenes/nuevas fragancias/2.jpg",
  },
  {
    fragancia: "BAMBOO",
    imagen: "../imagenes/nuevas fragancias/3.jpg",
  },
  {
    fragancia: "CEDRO",
    imagen: "../imagenes/nuevas fragancias/4.jpg",
  },
  {
    fragancia: "LIMA",
    imagen: "../imagenes/nuevas fragancias/5.jpg",
  },
];


//CREACION DE CARDS NUEVAS FRAGANCIAS INDEX

const nuevas = document.getElementById("nuevasFragancias");

nuevasFragancias.forEach((frag) => {
    const { fragancia, imagen } = frag;
    if (nuevas != null){
      nuevas.innerHTML += 
      `<div class="card mt-2 fraganciasCards" style="width: 15rem;">
              <img class="card-img-top " src="${imagen}" alt="nueva fragancia">
              <div class="card-body">
              <h5 class="card-title">${fragancia}</h5>
  
              </div>
          </div>
      `;      
    }
});



//CREACION DE CARDS POR 
const contenedor = document.getElementById("contenidoTienda");

productos.forEach((prod) => {
    const { id, nombre, precio, img } = prod;
    if (contenedor != null){
    contenedor.innerHTML += 
    `<div class="card mt-5" style="width: 18rem;">
            <img class="card-img-top " src="${img}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">$ ${precio}</p>


            <button onclick="agregarProductos(${id})" class = "btn btn-primary"> Agregar al carrito</button>
            </div>
        </div>
    `;
    }
});

//AGREGAR AL CARRITO
function agregarProductos(id) {
    console.log(id);
}
