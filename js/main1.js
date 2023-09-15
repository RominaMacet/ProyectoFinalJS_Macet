/* VARIABLES */

/* let nombre = prompt("Bienvenido, ingrese su nombre, por favor:").toLowerCase()
alert (`¡Hola, ${nombre}! ♥`) */

/* CONDICIONAL */

/* let idioma = prompt ("Tu idioma es:").toLowerCase()

if (idioma ==="español") {
    alert ("¡Esperamos que encuentres lo que estás buscando!")
} else if (idioma === "english") {
    alert("We hope you find what you're looking for!")
} else if (idioma ==="deutsch") {
    alert("Wir hoffen dass Sie finden was Sie suchen!")
} else if (idioma ==="français") {
    alert("¡Nous espérons que vous trouverez ce que vous cherchez!")
} else if (idioma === "russky") {
    alert("Мы надеемся, что вы найдете то, что ищете!")
} else if (idioma === "português") {
    alert("¡Esperamos que encontre o que procura!")
} else {
    alert("Idioma no encontrado")
} */

/* CICLOS */
/* 
for (let i=1;i>=1;i++) {
    alert(`Felicidades, eres el cliente n° ${i}`)
    if (i==1) {
        break
    }
} */

/*  FUNCIÓN */

/* let precioBombones = 500
let precioAlfajores = 300
let rta = prompt("PROMO: sólo por hoy, te llevás una caja de bombones más una de alfajores con 10% OFF en el precio final ¿Querés aprovechar?").toLowerCase()
let mensaje = "¡Que tengas un hermoso día!"

function precioFinal (precioBombones, precioAlfajores, rta) {
    switch (rta) {
        case "si":
            return  (precioBombones + precioAlfajores) - (precioBombones + precioAlfajores)* 0.1 
            break

        default:
            return 0
            break
    }
}

if (rta === "si") {
    let precioTotal = precioFinal (precioBombones, precioAlfajores, rta);
    alert("El precio final de tu compra es de $" + precioTotal);
} else {
    alert ("Te esperamos para tu próxima compra ♥.")
}

alert (mensaje)
 */