let productos = []

fetch ("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data
        cargarProductos (productos)
    })

const contenedorProductos = document.querySelector("#gridProductos");
const botonesCategorias = document.querySelectorAll(".botonCategoria");
const tituloPrincipal = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".botonShop");
const numerito = document.querySelector("#numerito");


function cargarProductos () {

    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <img class="imgProducto" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="datosProducto">
          <h3 class="productTitle">${producto.titulo}</h3>
          <p class="precio">$${producto.precio}</p>
          <button class="botonShop" id="${producto.id}">Comprar</button>
        </div>
        `;

        contenedorProductos.append(div)
    } )

    addMerch () 
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active")
    })
})

function addMerch () {
    botonesAgregar = document.querySelectorAll(".botonShop")
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", addToCart)
    })
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productosEnCarrito")

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse( productosEnCarritoLS)
  actualizarNumerito ()
} else {
    productosEnCarrito= []
}


function addToCart (e) {

    Toastify({
        text: "¡Producto agregado ♥!",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #033772, #6D0D99)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          color: "white",
          fontSize: ".75rem",
          fontWeight: "bold",
        },
        offset: {
            x: "1.5rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: "1.5rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto =>producto.id=== idBoton)
       productosEnCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }
    
    actualizarNumerito ()

    console.log("Productos en carrito:", productosEnCarrito);
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito () {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}


