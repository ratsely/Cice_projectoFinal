document.querySelector(".button").onclick = accesoHome;
document.querySelector('#bot-rad').onclick = mostrarPassword;

// Valida el acceso a la página web sólo si coincide los valores de email y contraseña
function accesoHome() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    return email == password ? console.log("Correcto") : console.log("Incorrecto");
}

// Oculta o muestra la contraseña como texto plano
function mostrarPassword() {
    var password = document.querySelector("#password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}