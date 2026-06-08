function verificar(){

    let nombre =
        document.getElementById("nombre").value;

    let apellido =
        document.getElementById("apellido").value;

    let carrera =
        document.getElementById("carrera").value;

    let correo =
        document.getElementById("correo").value;

    if(nombre == "" || apellido == "" ||  carrera == "" ||  correo == "")
    {
        document.getElementById("mensaje").innerHTML =
        " Debe llenar todos los campos";

        document.getElementById("mensaje").style.color =
        "red";
    }
    else
    {
        document.getElementById("mensaje").innerHTML =
        " Registro enviado correctamente";

        document.getElementById("mensaje").style.color =
        "green";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("carrera").value = "";
        document.getElementById("correo").value = "";
    }
}