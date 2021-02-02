function capturaNombreUsuario() {
    let nombreUser = document.getElementById("user_name").value;
    document.getElementById("ver").innerHTML = "Ha iniciado sesión como: " + nombreUser;

    let apellidoUser = document.getElementById("user_lastname").value;
    document.getElementById("ver1").innerHTML = "Apellido " + apellidoUser;
}