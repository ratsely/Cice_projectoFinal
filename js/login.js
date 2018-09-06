document.querySelector(".button").onclick = accesoHome;
document.querySelector('#bot-rad').onclick = mostrarPassword;

// Valida el acceso a la página web sólo si coincide los valores de email y contraseña
// Si es valido: redigirir a la pagina principal; si no: anunciar error
function accesoHome() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var errorValidacion = document.querySelector("#error");

    return email == password && email != "" ? window.location.href="home.html" : errorValidacion.classList.toggle("ocultar");
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