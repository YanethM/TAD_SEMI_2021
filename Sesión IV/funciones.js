/* Mostrar por consola un mensaje */
console.log("Testing 1");
console.log('Testing 2');
/* Creación de una ventana emergente */
alert('Testing 3');

/* Declaración de variables */
let nombreVariable;
const noReasignasible = true;
/* Tercer forma, NO RECOMENDABLE */
var nombreVariable1;

/* VALORES CONSTANTES -> No sufren de reasignación */
const studentName = prompt("Ingresa tu nombre");

/* VALORES NO CONSTANTES */
let nombreAsignatura = "Estructuras de datos I";
nombreAsignatura = "TAD I";
/* Mostrar mensaje en página */
document.write("Ha iniciado sesión como " + studentName + "<br>" + "A la clase de " + nombreAsignatura);

/* Imprimir en la página, por secciones */
document.getElementById("msn").innerHTML = "BIENVENIDO AL CURSO";
document.getElementById("msn1").innerHTML = "Ha iniciado sesión como " + studentName;
document.getElementById("msn2").innerHTML = "A la clase de " + nombreAsignatura;
document.getElementById("msn3").innerHTML = "Cerrando sesión"