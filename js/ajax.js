https://fpaniaguaformacion.github.io/datos_proyecto_final.json

document.body.onload = cargarJSON('https://fpaniaguaformacion.github.io/datos_proyecto_final.json');

function cargarJSON(url) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarRespuesta(this.responseText);
        } else if (this.readyState == 4) {
            gestionarError();
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function gestionarRespuesta(platos){

    const DATOSPLATOS = JSON.parse(platos);
    const ENTRANTES = DATOSPLATOS.Entrantes;
    const PIZZAS = DATOSPLATOS.Pizzas;
    const POSTRES = DATOSPLATOS.Postres;

    let listaEntrantes = [];
    let listaPizzas = [];
    let listaPostres = [];

    parsearListaArrays(ENTRANTES, listaEntrantes);
    parsearListaArrays(PIZZAS, listaPizzas);
    parsearListaArrays(POSTRES, listaPostres);

    rutaEntrante = document.querySelector("#entrantes");
    rutaPizza = document.querySelector("#pizza");
    crearContenido(listaEntrantes, rutaEntrante)
    crearContenido(listaPizzas, rutaPizza)
}



function parsearListaArrays(plato, lista){
    plato.forEach(menu => {
        menuPlatos = new Menu(menu.Plato.Nombre, menu.Plato.Descripcion, menu.Plato.Precio, menu.Plato.Imagen);
        lista.push(menuPlatos);
    });
}

function crearContenido(categoria, ruta){
    categoria.forEach( element => {
        let div = document.createElement("div");
        div.innerHTML = element.crearHTML();
        div.classList.add("col-12", "col-lg-3", "my-4",  "mx-4");
        ruta.appendChild(div)
    });
}

