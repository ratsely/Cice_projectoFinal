$(".button").on("click", accesoHome);
$('#bot-rad').on("click", mostrarPassword);

// Valida el acceso a la página web sólo si coincide los valores de email y contraseña
// Si es valido: redigirir a la pagina principal; si no: anunciar error
function accesoHome() {
    if($("#email").val() == $("#password").val() && $("#email").val() != "" ){
        if( $("#email").val().indexOf("@") == -1){
            return $("#errorMail").slideDown("slow");
        }
        window.location.href="home.html";
    } else{
        return $("#error").slideDown("slow");    
    }

    // return email == password && email != "" ? window.location.href="home.html" : errorValidacion.classList.toggle("ocultar");
}

// Oculta o muestra la contraseña como texto plano
function mostrarPassword() {
    var cambioTipo = $("#password").prop('type')=='password'?'text':'password';
    $("#password").prop('type', cambioTipo);
}