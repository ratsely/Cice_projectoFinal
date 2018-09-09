
$("#registro").on("click", registrar);
$("#bot-rad").on("click", mostrarPassword);

function mostrarPassword(){
    // Esta función produce un bug si el usuario accede a esta página y ya hay escrito un texto. En este ultimo caso permanece con el ultimo tipo de input modificado.
    var cambioTipo = $("#password").prop('type')=='password'?'text':'password';
    $("#password").prop('type', cambioTipo);

}

function registrar() {
    $email = $("#email").val();
    $password = $("#password").val();
    $nombre = $("#nombre").val();
    $apellidos = $("#apellidos").val();

    $edad = calcularEdad();
    validarRegistro($nombre, $apellidos, $password, $email, $edad);
}

function calcularEdad(){ 
    var nacimiento = parseInt($('#edad').val());
    var hoy = new Date();
    var anyoActual = hoy.getFullYear();
    edad = anyoActual - nacimiento;
    return edad;
}

function validarRegistro(nombre, apellidos, password, email, edad) {
    //Notar que en dispositivos android reales no se muestra 'swal', se soluciona con el método matchMedia

    const windowSmall = window.matchMedia("(min-width: 675px)");

    if (nombre.trim() == "" || apellidos.trim() == "" || password.trim() == "" || email.indexOf("@") == -1 || edad < 18) {
        if (windowSmall.matches){
            mensajeFracaso();
        } else{
            $("#fallo").text("No se han rellenado los datos obligatorios");
            $("#fallo").slideDown("slow");
        }

    }else {
        if (windowSmall.matches){
            mensajeExito();
        } else{
            $("#exito").text("El enlace de activación han sido enviado a su correo");
            $("#exito").slideDown("slow");
        }
}

function mensajeFracaso() {
    swal("Registro fallido", "Faltan por introducir datos obligatorios", "error");
}

function mensajeExito() {
    swal("Registro completado", "Hemos enviado un enlace de activación a su correo electrónico", "success");
}
}