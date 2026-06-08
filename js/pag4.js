function convertir(){

    let numero =
        document.getElementById("numero").value;

    let baseOrigen =
        parseInt(
            document.getElementById("baseOrigen").value
        );

    let baseDestino =
        parseInt(
            document.getElementById("baseDestino").value
        );

    if(numero == "")
    {
        document.getElementById("resultado2").innerHTML =
        " Ingrese un número";

        return;
    }

    try
    {
        let decimal =
            parseInt(numero, baseOrigen);

        if(isNaN(decimal))
        {
            throw "error";
        }

        let resultado2 =
            decimal.toString(baseDestino).toUpperCase();

        document.getElementById("resultado2").innerHTML =
        numero +
        " (Base " + baseOrigen + ") = " +
        resultado2 +
        " (Base " + baseDestino + ")";
        document.getElementById("numero").value=" ";
    }
    catch(error)
    {
        document.getElementById("resultado2").innerHTML =
        "Ingrese un numero valido para la conversion";
    }
}