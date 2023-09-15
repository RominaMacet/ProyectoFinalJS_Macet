/* //C A R R I T O  D E  C O M P R A S.

//OBJETOS Y ARREGLOS:
class BoxMaker {
  constructor(nombre, precio, numero) {
    this.nombre = nombre;
    this.precio = precio;
    this.numero = numero;
  }
}

const caja1 = new BoxMaker("Chocolate Negro Simple", 700, 1);
const caja2 = new BoxMaker("Chocolate con Leche", 900, 2);
const caja3 = new BoxMaker("Chocolate Semi-amargo", 900, 3);
const caja4 = new BoxMaker("Chocolate Aireado", 700, 4);
const caja5 = new BoxMaker("Chocolate Negro con Maní", 900, 5);
const caja6 = new BoxMaker("Chocolate Negro con Pistaccio", 900, 6);
const caja7 = new BoxMaker("Chocolate Negro con relleno de Crema Marroc", 1000, 7);
const caja8 = new BoxMaker("Chocolate Negro relleno de Dulce de Leche", 800, 8);
const caja9 = new BoxMaker("Chocolate Blanco Simple", 600, 9);
const caja10 = new BoxMaker("Chocolate Blanco relleno de Crema Oreo", 1000, 10);

const merch = [caja1, caja2, caja3, caja4, caja5, caja6, caja7, caja8, caja9, caja10];

//FUNCIONES:
let cart = [];

//Función para mostrar la mercadería.
function mostrarMercaderia() {
  let mensajeProductos = "Productos disponibles:\n";
  for (let i = 0; i < merch.length; i++) {
    mensajeProductos += (i + 1) + ". " + merch[i].nombre + " - $" + merch[i].precio + "\n";
  }
  alert(mensajeProductos);
}

//Función para agregar productos al carrito.
function addToCart(producto) {
  cart.push(producto);
  alert(producto.nombre + " ha sido agregado al carrito.");
}

//Función para quitar productos al carrito.
function removeFromCart(numeroProducto) {
  if (numeroProducto >= 0 && numeroProducto < cart.length) {
    let productoASacar = cart[numeroProducto];
    cart.splice(numeroProducto, 1);
    alert(productoASacar.nombre + " ha sido sacado del carrito.");
  } else {
    alert("Respuesta inválida.");
  }
}

//Función para el carrito.
function carritoDeCompras() {
  alert("♥ ¡Bienvenido a Babooshka! ♥ Te invitamos a conocer nuestros productos.");

  mostrarMercaderia();

  let deseaComprar = prompt("¿Te gustaría comprar algo? Si / No.").toLowerCase();

  while (deseaComprar !== "si" && deseaComprar !== "no") {
    alert("Perdón, no te entendimos. Ingresa si o no.");
    deseaComprar = prompt("¿Te gustaría comprar algo? Si / No.").toLowerCase();
  }

  if (deseaComprar === "si") {
    let deseaAgregarMas = "si";

    while (deseaAgregarMas === "si") {
      mostrarMercaderia();
      let numeroProducto = parseInt(prompt("Ingresa el número del producto que te gustaría comprar.")) - 1;

      if (numeroProducto >= 0 && numeroProducto < merch.length) {
        addToCart(merch[numeroProducto]);
      } else {
        alert("Respuesta inválida.");
      }

      deseaAgregarMas = prompt("¿Deseas agregar otro producto al carrito? Si / No.").toLowerCase();
    }

    if (cart.length > 0) {
      let deseaSacar = prompt("¿Deseas sacar algo del carrito? Si / No.").toLowerCase();

      if (deseaSacar === "si") {
        let mensajeCarrito = "Productos en el carrito:\n";

        for (let i = 0; i < cart.length; i++) {
          mensajeCarrito += (i + 1) + ". " + cart[i].nombre + " - $" + cart[i].precio + "\n";
        }

        alert(mensajeCarrito);

        let numeroProductoSacar = parseInt(prompt("Ingresa el número del producto que deseas sacar del carrito:")) - 1;
        removeFromCart(numeroProductoSacar);
      }

      let total = 0;

      for (let i = 0; i < cart.length; i++) {
        total += cart[i].precio;
      }

      alert("Total de la compra: $" + total.toFixed(2));
    } else {
      alert("Gracias por visitarnos ¡Que tengas un hermoso día! ♥");
    }
  } else {
    alert("¡Te esperamos pronto! Que tengas un hermoso día ♥.");
  }
}

carritoDeCompras() 


// D E T A L L E  D E  C H O C O L A T E S.

alert ("A continuación, te mostramos una breve descripción de cada uno de nuestros chocolates ♥.")

//OBJETOS Y ARREGLOS:
class BoxMaker2 {
  constructor(nombre, descripcion, numero) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.numero = numero;
  }
}

const box1 = new BoxMaker2("Chocolate Negro Simple", "Delicioso chocolate negro con intenso sabor.", 1);
const box2 = new BoxMaker2("Chocolate con Leche", "Suave chocolate con leche que te encantará.", 2);
const box3 = new BoxMaker2("Chocolate Semi-amargo", "El equilibrio perfecto entre dulzura y amargura.", 3);
const box4 = new BoxMaker2("Chocolate Aireado", "Textura ligera y sabor exquisito en cada bocado.", 4);
const box5 = new BoxMaker2("Chocolate Negro con Maní", "Combina el crunch del maní con el sabor intenso del chocolate negro.", 5);

const showMerch = [box1, box2, box3, box4, box5];

//FUNCIONES:
function elegirChocolateConRecomendaciones(arrChocolates, seleccionarChocolate) {
  function showChocolates() {
    let mensajeChocolates = "Chocolates disponibles:\n";

    for (let i = 0; i < arrChocolates.length; i++) {
      mensajeChocolates = mensajeChocolates.concat((i + 1) + ". " + arrChocolates[i].nombre + "\n");
    }
    alert(mensajeChocolates);
  }

  showChocolates();

  seleccionarChocolate(arrChocolates);
}

function seleccionarChocolate(arrChocolates) {
  let numeroChocolateElegido;
  let respuestaValida = false;

  while (!respuestaValida) {
    numeroChocolateElegido = parseInt(prompt("Elige un chocolate ingresando el número correspondiente:")) - 1;

    if (numeroChocolateElegido >= 0 && numeroChocolateElegido < arrChocolates.length) {
      respuestaValida = true;
    } else {
      alert("Número inválido. Por favor, elige un número válido.");
    }
  }

  let chocolateElegido = arrChocolates[numeroChocolateElegido];

  let mensajeDetalles = "Detalles del chocolate:\n";
  mensajeDetalles = mensajeDetalles.concat("Nombre: " + chocolateElegido.nombre + "\n");
  mensajeDetalles = mensajeDetalles.concat("Descripción: " + chocolateElegido.descripcion + "\n");

  let recomendaciones = arrChocolates.filter(choco => choco.numero !== chocolateElegido.numero);

  let mensajeRecomendaciones = "Recomendaciones adicionales:\n";
  for (let i = 0; i < 2; i++) {
    mensajeRecomendaciones = mensajeRecomendaciones.concat((i + 1) + ". " + recomendaciones[i].nombre + "\n");
  }

  alert(mensajeDetalles + "\n\n" + mensajeRecomendaciones);
}


elegirChocolateConRecomendaciones(showMerch, seleccionarChocolate);

alert ("¡Nos vemos pronto! ♥ ♥") */