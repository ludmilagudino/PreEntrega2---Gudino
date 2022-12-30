const shopContent = document.getElementById("contenidoTienda");
// const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML =`
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</h3>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerHTML = "comprar";
    comprar.className = "comprar"

    content.append(comprar);
    
    comprar.addEventListener("click", () =>{
        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        })
        console.log(carrito);
    })
});