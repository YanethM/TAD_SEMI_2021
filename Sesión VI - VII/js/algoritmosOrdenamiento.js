function algoritmoBurbujaAsc() {
    let arrayNumeros = [344, 122, 12, 46, 7, -23, 32, 3234];
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j < arrayNumeros.length - 1 - i; j++) {
            (arrayNumeros[j] > arrayNumeros[j + 1]) ? [arrayNumeros[j], arrayNumeros[j + 1]] = [arrayNumeros[j + 1], arrayNumeros[j]] : '';
        }
    }
    return arrayNumeros;
}
console.log("Algoritmo burbuja" + algoritmoBurbujaAsc());

/* 
Ordenamiento descendiente
abuelo = 1050.png
abuela=1023.png
papa = 40.png
mama = 13.png
hijo = 0.png
hija = -5.png

Ordenamiento descendiente
hija = -5.png
hijo = 0.png
mama = 13.png
papa = 40.png
abuela=1023.png
abuelo = 1050.png 

*/
function algoritmoSeleccionAsc() {
    let arrayNumeros = [344, 122, 12, 46, 7, -23, 32, 3234];
    for (let i = 0; i < arrayNumeros.length; ++i) {
        let j = elementoMenorValor = i;
        for (++j; j < arrayNumeros.length; ++j) {
            (arrayNumeros[j] < arrayNumeros[elementoMenorValor]) && (elementoMenorValor = j);
        }
        [arrayNumeros[i], arrayNumeros[elementoMenorValor]] = [arrayNumeros[elementoMenorValor], arrayNumeros[i]];
    }
    return arrayNumeros;
}
console.log("Algoritmo selección" + algoritmoSeleccionAsc());


function algoritmoInsercionAsc() {
    let arrayNumeros = [344, 122, 12, 46, 7, -23, 32, 3234];
    let j, temporal;
    for (let i = 1; i < arrayNumeros.length; i++) {
        j = i;
        temporal = arrayNumeros[i]
        while ((j > 0) && (arrayNumeros[j - 1] > temporal)) {
            arrayNumeros[j] = arrayNumeros[j - 1];
            j--;
        }
        arrayNumeros[j] = temporal;
    }
    return arrayNumeros;
}
console.log("Ordenamiento inserción" + algoritmoInsercionAsc());

function algoritmoBurbujaDsc() {
    document.getElementById("algSelected").innerHTML = "Soy la función burbuja descendente";
}

function algoritmoSeleccionDsc() {
    document.getElementById("algSelected").innerHTML = "Soy la función selección descendente";
}

function algoritmoInsercionDsc() {
    document.getElementById("algSelected").innerHTML = "Soy la función inserción descendente";
}

function showSelected() {
    /* Capturar valor de la lista desplegable de algoritmos */
    let seleccionImg = document.getElementById("imgSelect").value;
    if (seleccionImg === 1) {
        document.getElementById("grupo1").innerHTML;
    } else if (seleccionImg === 2) {
        document.getElementById("grupo2").innerHTML;
    } else
        document.getElementById("grupo3").innerHTML;
}

/* validar el algoritmo de selección de lista desplegable y checkbox */
let seleccion = document.getElementById("algoritmoSeleccionado").value;

if ((seleccion === "1") && (document.getElementById("tipoOrdAlg").checked)) {
    algoritmoBurbujaDsc();
} else if ((seleccion === "1") && (document.getElementById("tipoOrdAlg2").checked)) {
    algoritmoBurbujaAsc();
} else if ((seleccion === "2") && (document.getElementById("tipoOrdAlg").checked)) {
    algoritmoInsercionDsc();
} else if ((seleccion === "2") && (document.getElementById("tipoOrdAlg2").checked)) {
    algoritmoInsercionAsc();
} else if ((seleccion === "3") && (document.getElementById("tipoOrdAlg").checked)) {
    algoritmoSeleccionDsc();
} else if ((seleccion === "3") && (document.getElementById("tipoOrdAlg2").checked)) {
    algoritmoSeleccionAsc();
}

}

function añadirElemFinalArray() {
    let arrayFrameworks = new Array();
    arrayFrameworks.push('Laravel', 'Angular', 'Simphony');
    arrayFrameworks.push('react', 'GO', 'TS');

    console.log(arrayFrameworks);
}

function eliminarElemFinalArra() {
    let arrayFrameworks = new Array();
    arrayFrameworks.push('Laravel', 'Angular', 'Simphony', 'react', 'GO', 'TS');
    arrayFrameworks.pop();
    /* 'Laravel', 'Angular', 'Simphony', 'react', 'GO', */
    console.log("Se ha modificado el tamaño del array" + arrayFrameworks);
}

function añadirElemInicioArray() {
    let arrayFrameworks = new Array();
    arrayFrameworks.unshift('Laravel', 'Angular', 'Simphony');
    arrayFrameworks.unshift('react', 'GO', 'TS');
    console.log(arrayFrameworks);
}

function eliminarElemInicioArray() {
    let arrayFrameworks = new Array();
    arrayFrameworks.unshift('Laravel', 'Angular', 'Simphony', 'react', 'GO', 'TS');
    arrayFrameworks.shift();
    /* 'Laravel', 'Angular', 'Simphony', 'react', 'GO', */
    console.log("Se ha modificado el tamaño del array" + arrayFrameworks);
}


console.log(añadirElemFinalArray());
console.log(eliminarElemFinalArra());
console.log(añadirElemInicioArray());
console.log(eliminarElemInicioArray());