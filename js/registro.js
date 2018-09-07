
document.querySelector("#registro").onclick = registrar;
document.querySelector("#bot-rad").onclick = mostrarPassword;

function mostrarPassword(){
    var password = document.querySelector("#password");

    return password.type === "password" ? password.type = "text" : password.type = "password";

}

function registrar() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let nombre = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("#apellidos").value;

    let edad = calcularEdad();
    validarRegistro(nombre, apellidos, password, email, edad);
}

function calcularEdad(){ 
    var nacimiento = parseInt(document.querySelector('#edad').value);
    var hoy = new Date();
    var anyoActual = hoy.getFullYear();
    edad = anyoActual - nacimiento;
    return edad;
}

function validarRegistro(nombre, apellidos, password, email, edad) {
    //Notar que en dispositivos android reales no se muestra 'swal'

    let fracaso = document.querySelector("#fallo");
    let exito = document.querySelector("#exito");
    const windowSmall = window.matchMedia("(min-width: 675px)");

    if (nombre.trim() == "" || apellidos.trim() == "" || password.trim() == "" || email.indexOf("@") == -1 || edad < 18) {
        if (windowSmall.matches){
            mensajeFracaso();
        } else{
            fracaso.innerHTML = "No se han rellenado los datos obligatorios";
            fracaso.classList.remove('ocultar');
        }

    }else {
        if (windowSmall.matches){
            mensajeExito();
        } else{
            exito.innerHTML = "No se han rellenado los datos obligatorios";
            exito.classList.remove('ocultar');
        }
}

function mensajeFracaso() {
    swal("Registro fallido", "Faltan por introducir datos obligatorios", "error");
}

function mensajeExito() {
    swal("Registro completado", "Hemos enviado un enlace de activación a su correo electrónico", "success");
}
}