/* CARRITO */
let productosEnCarrito = localStorage.getItem("productosEnCarrito");
productosEnCarrito= JSON.parse(productosEnCarrito)

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");
const contenedorCarritoComprado = document.querySelector("#cartFin");
let botonesEliminar = document.querySelectorAll(".carritoProductoEliminar")
const botonVaciar = document.querySelector(".carritoActionEmpty")
const contenedorTotal = document.querySelector("#total")
const botonComprar = document.querySelector("#carritoActionBuy")


function cargarProductosCarrito () {

    if (productosEnCarrito && productosEnCarrito.length > 0) {
        

        contenedorCarritoVacio.classList.add("disabled")  
        contenedorCarritoProductos.classList.remove ("disabled")  
        contenedorCarritoAcciones.classList.remove("disabled")
        contenedorCarritoComprado.classList.add("disabled")
    
        contenedorCarritoProductos.innerHTML= " "
    
        productosEnCarrito.forEach(producto=> {
    
            const div = document.createElement("div")
            div.classList.add("carritoProducto")
            div.innerHTML= `
                <img class="imgCart" src=".${producto.imagen}" alt="${producto.titulo}">
                <div class="carritoProductoTitulo">
                    <small>Título</small>
                    <h3 class="h3Carrito">${producto.titulo}</h3>
                </div>
                <div class="carritoProductoCantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carritoProductoPrecio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carritoProductoSubtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carritoProductoEliminar" id= ${producto.id}><i class="bi bi-trash3-fill"></i></button>
            `
    
            contenedorCarritoProductos.append(div)
        })
    
    } else {
        contenedorCarritoVacio.classList.remove("disabled")  
        contenedorCarritoProductos.classList.add ("disabled")  
        contenedorCarritoAcciones.classList.add("disabled")
        contenedorCarritoComprado.classList.add("disabled")
    }
    deleteMerch ()
}

cargarProductosCarrito ()
actualizarTotal ()

/* Botones Delete Item */   

function deleteMerch () {
    botonesEliminar = document.querySelectorAll(".carritoProductoEliminar")
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
    actualizarTotal ()
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "¡Producto eliminado ♥!",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #EEE942, #6D0D99)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          color: "black",
          fontSize: ".75rem",
        },
        offset: {
            x: "1.5rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: "1.5rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();
    const idBoton = e.currentTarget.id;

    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    if (index !== -1) {
        productosEnCarrito.splice(index, 1); // Corrected line
        cargarProductosCarrito();

        localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
    }
}

botonVaciar.addEventListener("click", vaciarCarrito)

function vaciarCarrito () {

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        iconHtml: '<i class="bi bi-heartbreak-fill"></i>',
        html: `Se eliminarán ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} producto/s.` ,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:'Si',
        cancelButtonText:'No',
      }) .then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0
            localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito ()
        } 
      })
}

function actualizarTotal () {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0 )
    total.innerText = `$${totalCalculado}`;
}

actualizarTotal ()


botonComprar.addEventListener("click", comprarCarrito)

function comprarCarrito() {
    
    productosEnCarrito.length = 0
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled")  
    contenedorCarritoProductos.classList.add ("disabled")  
    contenedorCarritoAcciones.classList.add("disabled")
    contenedorCarritoComprado.classList.remove("disabled")
}

