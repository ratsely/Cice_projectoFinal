class Menu {
    constructor(Nombre, Descripcion, Precio, Imagen) {
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        this.Precio = Precio;
        this.Imagen = Imagen;
    }
    crearHTML() {
        let textoHTML = "<h3>" + this.Nombre + "</h3>" +
        "<img class=\"img-fluid my-4\" src= " + this.Imagen + ">" +
        "<h4> Precio: "  + this.Precio + "€" +
        "</h4>"+ "<h3> Descripción</h3>" +
        "<span>" + this.Descripcion + "</span>" + "<br>";

        return textoHTML;
    }
}