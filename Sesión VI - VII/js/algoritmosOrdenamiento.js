function algoritmoBurbuja() {
    alert("Soy la función burbuja");
}

function algoritmoSeleccion() {
    alert("Soy la función selección");
}

function algoritmoInsercion() {
    alert("Soy la función inserción");
}

function showSelected() {
    let seleccion = document.getElementById("algoritmoSeleccionado").value;
    document.getElementById("algSelected").innerHTML = seleccion;
    /* Para obtener el texto que ve el usuario */
    let selected_name = document.getElementById("algoritmoSeleccionado");
    let opcion = selected_name.options[selected_name.selectedIndex].text;
    alert(opcion);
    if (seleccion === "1")
        algoritmoBurbuja();
    else if (seleccion === "2")
        algoritmoInsercion();
    else
        algoritmoSeleccion();

}