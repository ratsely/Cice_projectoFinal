# Proyecto final de curso de desarrollo web en CICE

## Introducción

Este proyecto consiste en crear una página web de una pizzería ficticia escrita en dos partes: bootstrap/Jquery/Javascript y otra en Angular 6. 

La primera pantalla es un login, en la cual si se accede correctamente permite visitar la página principal (TIP: *El email y la contraseña son las mismas*); en caso contrario, saltará un error. Se le permite al usuario registrarse, si desea aunque, por motivos obvios, no se realiza en esta demo.

### ¿Qué está hecho?

La pantalla de login (que será el index.html al acabar de probar cada pagina por separado) permite el acceso a Registro, ambos completamente funcionales y adaptativos a diferentes pantallas. Si se emplea el mismo usuario y contraseña se accede a Home y a Contáctanos. En Pedidos está añadida la funcionalidad (no integrada aún) de añadir elementos básicos a la lista de la compra.

Productos está realizado en Angular pero no integrado todavía, en el que se puede acceder a la lista pormenorizada de cada ficha.

Se ha añadido del mismo modo dos versiones de las funciones de Javascript -en versión JS y Jquery- para su posterior evaluación, a pesar de que se priorizará en el uso de Javascript original antes que su librería.

### Lista de Tareas

- Poner completa funcionalidad a la Cesta de la compra.
-Integrar web de Angular con la web principal
- Mejorar la accesibilidad globalmente: elementos ARIA, reducción de imagenes
-Crear lista de error en caso de que el servidor no funcione
