document.querySelector(".button").onclick = accesoHome;
// document.querySelector('input[type="checkradio"]').onclick = mostrarPassword;

function accesoHome() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    return email == password ? console.log("Correcto") : console.log("Incorrecto");
}

function mostrarPassword() {
    var password = document.querySelector("#password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}