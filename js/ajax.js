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
    rutaPostre = document.querySelector("#postres");
    crearContenido(listaEntrantes, rutaEntrante);
    crearContenido(listaPizzas, rutaPizza);
    crearContenido(listaPostres, rutaPostre);
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
        let nuevoInput = document.createElement("button");
			nuevoInput.classList.add("btn","btn-success", "my-2");
            nuevoInput.setAttribute("value","comprar");
            nuevoInput.innerHTML = "Poner en la cesta";
            nuevoInput.setAttribute("onclick","comprar(\""+element.Nombre+"\", \""+element.Precio+"\")");
        ruta.appendChild(div);
        div.appendChild(nuevoInput);
    });
}

// Lista de la compra

let cesta = [];    
let precioTotal = 0;
function comprar(producto, precio){
    cesta.push(producto + " de " + precio + "€");
    precioTotal = precioTotal + Number(precio);
    
    let listaProductos = document.createElement("div");     
    cesta.forEach(producto => {

        listaProductos.textContent = producto;
        document.querySelector("#listaCompra").appendChild(listaProductos);
    });
    document.querySelector("#Precio").textContent = precioTotal + "€";
}

function verCompra(){
    document.querySelector("#listaCompra").classList.toggle("ocultar");
    document.querySelector("#Precio").classList.toggle("ocultar");
    document.querySelector("#btn-comprar").classList.toggle("ocultar");
}

// Botones de menu

function verMenu(menu){
    document.querySelector(menu).classList.toggle("ocultar");
}