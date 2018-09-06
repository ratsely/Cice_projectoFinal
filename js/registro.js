document.querySelector(".button").onclick = accesoHome;
$('#password').password('toggle');

    var email;

function accesoHome(){
    email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    email == password ? console.log("Correcto"):console.log("Incorrecto");
}