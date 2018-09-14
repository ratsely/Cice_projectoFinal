(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pizzas_pizzas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pizzas/pizzas.component */ "./src/app/pizzas/pizzas.component.ts");
/* harmony import */ var _postres_postres_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postres/postres.component */ "./src/app/postres/postres.component.ts");
/* harmony import */ var _entrantes_entrantes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entrantes/entrantes.component */ "./src/app/entrantes/entrantes.component.ts");
/* harmony import */ var _detalle_menu_detalle_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-menu/detalle-menu.component */ "./src/app/detalle-menu/detalle-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _pizzas_pizzas_component__WEBPACK_IMPORTED_MODULE_3__["PizzasComponent"] },
    { path: 'pizzas', component: _pizzas_pizzas_component__WEBPACK_IMPORTED_MODULE_3__["PizzasComponent"] },
    { path: 'postres', component: _postres_postres_component__WEBPACK_IMPORTED_MODULE_4__["PostresComponent"] },
    { path: 'entrantes', component: _entrantes_entrantes_component__WEBPACK_IMPORTED_MODULE_5__["EntrantesComponent"] },
    { path: 'detalle-ficha/:id', component: _detalle_menu_detalle_menu_component__WEBPACK_IMPORTED_MODULE_6__["DetalleMenuComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'proyectoCice';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _entrantes_entrantes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entrantes/entrantes.component */ "./src/app/entrantes/entrantes.component.ts");
/* harmony import */ var _pizzas_pizzas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pizzas/pizzas.component */ "./src/app/pizzas/pizzas.component.ts");
/* harmony import */ var _postres_postres_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./postres/postres.component */ "./src/app/postres/postres.component.ts");
/* harmony import */ var _detalle_menu_detalle_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detalle-menu/detalle-menu.component */ "./src/app/detalle-menu/detalle-menu.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _entrantes_entrantes_component__WEBPACK_IMPORTED_MODULE_6__["EntrantesComponent"],
                _pizzas_pizzas_component__WEBPACK_IMPORTED_MODULE_7__["PizzasComponent"],
                _postres_postres_component__WEBPACK_IMPORTED_MODULE_8__["PostresComponent"],
                _detalle_menu_detalle_menu_component__WEBPACK_IMPORTED_MODULE_9__["DetalleMenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/detalle-menu/detalle-menu.component.css":
/*!*********************************************************!*\
  !*** ./src/app/detalle-menu/detalle-menu.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".descripcion{\r\n    box-sizing: border-box;\r\n    padding-left: 15%;\r\n    background: lightgreen;\r\n}\r\n\r\n.imagen{\r\n    background: lightcoral;\r\n}"

/***/ }),

/***/ "./src/app/detalle-menu/detalle-menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/detalle-menu/detalle-menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row align-items-center justify-content-center\">\n    <div class=\"col-12 mt-3 imagen text-center\">\n      <img class=\"mb-5 pt-5\" src=\"{{menu.Plato.Imagen}}\" >\n    </div>\n    <div class=\" descripcion py-5 col-12\">\n    \n    <h4> <strong>Nombre:</strong>  {{menu.Plato.Nombre}}</h4><br>\n    <h4><strong>Descripción:</strong> {{menu.Plato.Descripcion}}</h4><br>\n    <h4><strong>Precio:</strong>  {{menu.Plato.Precio}}€</h4>\n    <h4 class=\"my-4\"><strong>Calorías:</strong>  {{menu.Plato.Calorias}} cal</h4>\n    <h4 class=\"my-4\"><strong>¿Se puede personalizar el producto?</strong>  {{menu.Plato.Personalizacion}}</h4>\n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/detalle-menu/detalle-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/detalle-menu/detalle-menu.component.ts ***!
  \********************************************************/
/*! exports provided: DetalleMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleMenuComponent", function() { return DetalleMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _platos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platos.service */ "./src/app/platos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalleMenuComponent = /** @class */ (function () {
    function DetalleMenuComponent(platosService, ruta) {
        this.platosService = platosService;
        this.ruta = ruta;
    }
    DetalleMenuComponent.prototype.getMenu = function () {
        var ID = +this.ruta.snapshot.paramMap.get('id');
        this.menu = this.platosService.getMenu(ID);
    };
    DetalleMenuComponent.prototype.ngOnInit = function () {
        this.getMenu();
    };
    DetalleMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-menu',
            template: __webpack_require__(/*! ./detalle-menu.component.html */ "./src/app/detalle-menu/detalle-menu.component.html"),
            styles: [__webpack_require__(/*! ./detalle-menu.component.css */ "./src/app/detalle-menu/detalle-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_platos_service__WEBPACK_IMPORTED_MODULE_1__["PlatosService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetalleMenuComponent);
    return DetalleMenuComponent;
}());



/***/ }),

/***/ "./src/app/entrantes/entrantes.component.css":
/*!***************************************************!*\
  !*** ./src/app/entrantes/entrantes.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{\r\n    background-image: url('pizza.jpeg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}"

/***/ }),

/***/ "./src/app/entrantes/entrantes.component.html":
/*!****************************************************!*\
  !*** ./src/app/entrantes/entrantes.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-ligth\" width=\"50%\">\n  <div class=\"row\">\n    <div *ngFor=\"let menu of menus?.Entrantes\" class=\"col-sm-12 col-md-6 col-lg-6 col-xl-4 my-5 p-4\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"{{menu.Plato.Imagen}}\" alt=\"Card image cap\">\n        <div class=\"card-body text-center\">\n          <h5 class=\"card-title\">{{menu.Plato.Nombre}}</h5>\n          <p class=\"card-text precio\">Precio: {{menu.Plato.Precio}}</p>\n          <p class=\"card-text pb-4\">{{menu.Plato.Descripcion}}</p>\n          <a routerLink=\"/detalle-ficha/{{menu.Plato.id}}\"class=\"btn btn-success\">Mas información</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/entrantes/entrantes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/entrantes/entrantes.component.ts ***!
  \**************************************************/
/*! exports provided: EntrantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrantesComponent", function() { return EntrantesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _platos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platos.service */ "./src/app/platos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntrantesComponent = /** @class */ (function () {
    function EntrantesComponent(platosService) {
        this.platosService = platosService;
    }
    EntrantesComponent.prototype.getMenus = function () {
        var _this = this;
        this.platosService.getMenus().subscribe(function (data) { return _this.menus = data; });
    };
    EntrantesComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    EntrantesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entrantes',
            template: __webpack_require__(/*! ./entrantes.component.html */ "./src/app/entrantes/entrantes.component.html"),
            styles: [__webpack_require__(/*! ./entrantes.component.css */ "./src/app/entrantes/entrantes.component.css")]
        }),
        __metadata("design:paramtypes", [_platos_service__WEBPACK_IMPORTED_MODULE_1__["PlatosService"]])
    ], EntrantesComponent);
    return EntrantesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://use.fontawesome.com/releases/v5.3.1/css/all.css\";\r\n\r\na{\r\n    padding: .5em;\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\nfooter a:hover{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\nfooter i{\r\n    font-size: 1.2em;\r\n}\r\n\r\nhr{\r\n    color:white;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small p-4 bg-dark text-white\">\n  <div class=\"container-fluid text-center text-md-left\">\n      <div class=\"row\">\n          <div class=\"col-md-6 mt-md-0 mt-3\">\n              <a href=\"./contacto.html\"> <h5 class=\"text-uppercase font-weight-bold text-center\">Contacto</h5></a>\n              <p class=\"text-center\">Calle Ciudad Rodrigo, 21, 28012 Madrid</p>\n              <p class=\"text-center text-white\">+34 900 803 711</p>\n              <div class=\"col-12 text-center py-2\">\n                  <a href=\"#\"><i class=\"fab fa-youtube\"></i></a>\n                  <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n                  <a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n                  <a href=\"#\"><i class=\"fab fa-linkedin-in\"></i></a>\n              </div>\n          </div>\n          <hr>\n          <div class=\"col-md-6 mb-md-0 mb-3 py-3\">\n              <h5 class=\"text-uppercase font-weight-bold text-center\">Subscríbete a nuestra NewsLetter</h5>\n              <div class=\"col-6 m-auto py-2\">\n              <input type=\"email\" class=\"form-control\" placeholder=\"markZuckeberg@facebook.com\" size=\"25\">\n          </div>\n          <div class=\"text-center my-2\">\n              <input class=\"btn btn-lg btn-success\" value=\"Inscribirse\">\n          </div>\n          </div>\n      </div>\n  </div>\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    text-decoration: none;\r\n}\r\n\r\nnav a{\r\n    padding: .5em;\r\n    color: white;\r\n}\r\n\r\nnav a:hover, footer a:hover{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\nimg{\r\n max-width: 100%;\r\n width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"container-fluid bg-dark text-white\">\n  <div class=\"row\">\n    <div class=\"col-12 p-3 text-center\">\n          <a href=\"../home.html\"><img src=\"../../assets/logo.png\" alt=\"Logo enlace a Home\" class=\"img-fluid\"></a>\n      </div>\n      <div class=\"col-12 d-flex justify-content-center\">\n          <a routerLink=\"/entrantes\" class=\"mx-1\" href=\"#\">ENTRANTES</a>\n          <a routerLink=\"/pizzas\" class=\"mx-3\" href=\"#\">PIZZAS</a>\n          <a routerLink=\"/postres\" href=\"#\">POSTRES</a>\n        </div>\n      </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/listaPlatos.ts":
/*!********************************!*\
  !*** ./src/app/listaPlatos.ts ***!
  \********************************/
/*! exports provided: Platos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platos", function() { return Platos; });
var Platos = [
    {
        "Plato": {
            "id": 1,
            "Nombre": "Pan Ajo",
            "Descripcion": "Crujiente Pan Tostado Al Horno Con Ajo y Perejil",
            "Precio": 3,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Pan_Ajo_del.png",
            "Calorias": 350,
            "Personalizacion": "No"
        }
    },
    {
        "Plato": {
            "id": 2,
            "Nombre": "Pan Ajo Supremos",
            "Descripcion": "Crujiente Pan de Ajo con Queso Mozzarella Fundido",
            "Precio": 4,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Pan_Ajo_Supremos_del.png",
            "Calorias": 420,
            "Personalizacion": "No"
        }
    },
    {
        "Plato": {
            "id": 3,
            "Nombre": "Jalapeños",
            "Descripcion": "Pimientos Jalapeños Ligeramente Picantes Rellenos de Cremoso Queso Cheddar",
            "Precio": 5,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Jalapenos_del.png",
            "Calorias": 345,
            "Personalizacion": "No"
        }
    },
    {
        "Plato": {
            "id": 4,
            "Nombre": "Finger De Queso",
            "Descripcion": "Barritas Rellenas de Deliciosa Mozzarella Fundida",
            "Precio": 6,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Finger_De_Queso_del.png",
            "Calorias": 220,
            "Personalizacion": "No"
        }
    },
    {
        "Plato": {
            "id": 5,
            "Nombre": "Nuggets De Ultrasaurio",
            "Descripcion": "Picantes Pedazos De Ultrasaurio Rellenos De Queso Fundido",
            "Precio": 12,
            "Imagen": "https://cocineroaficionado.com/wp-content/uploads/2016/07/nuggets-pollo.jpg",
            "Calorias": 480,
            "Personalizacion": "No"
        }
    },
    {
        "Plato": {
            "id": 6,
            "Nombre": "Hawaiana",
            "Descripcion": "Salsa De Tomate, Mozzarella, Doble De Jamon York, Doble De Piña Con Extra De Mozzarella",
            "Precio": 8,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Hawaiana_del.png",
            "Calorias": 399,
            "Personalizacion": "Sí"
        }
    },
    {
        "Plato": {
            "id": 6,
            "Nombre": "Carne Lover's",
            "Descripcion": "Salsa De Tomate, Mozarella, Ternera, Pepperoni, Jamón York, Bacon.",
            "Precio": 8.5,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Carne_Lovers_del.png",
            "Calorias": 360,
            "Personalizacion": "Sí"
        }
    },
    {
        "Plato": {
            "id": 7,
            "Nombre": "Pollo Parrilla",
            "Descripcion": "Salsa De Tomate, Mozarella, Pollo A La Parrilla, Champiñones, Tomate En Dados y Maiz",
            "Precio": 7,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Pollo_Parrilla_del.png",
            "Calorias": 370,
            "Personalizacion": "Sí"
        }
    },
    {
        "Plato": {
            "id": 8,
            "Nombre": "Pepperoni Lover's",
            "Descripcion": "Salsa De Tomate, Mozarella, Pepperoni, Bacon, Cebolla, Con Extra De Pepperoni",
            "Precio": 9,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Peperoni_Lovers_del.png",
            "Calorias": 300,
            "Personalizacion": "Sí"
        }
    },
    {
        "Plato": {
            "id": 9,
            "Nombre": "Queso De Cabra",
            "Descripcion": "Salsa Cremosa, Cebolla Caramelizada y Queso De Cabra Al Horno.",
            "Precio": 10,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Queso_de_Cabra_del.png",
            "Calorias": 380,
            "Personalizacion": "Sí"
        }
    },
    {
        "Plato": {
            "id": 10,
            "Nombre": "Caribeña",
            "Descripcion": "Salsa Barbacoa, Mozzarella, Piña, Champiñones y Sabroso Pollo Parrilla.",
            "Precio": 12,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Caribena_del.png",
            "Calorias": 347,
            "Personalizacion": "Sí"
        }
    },
    {
        "Plato": {
            "id": 11,
            "Nombre": "Carbonara",
            "Descripcion": "Salsa Carbonara, Jamón York, Cebolla y Champiñones",
            "Precio": 11,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Carbonara_del.png",
            "Calorias": 440,
            "Personalizacion": "Sí"
        }
    }, {
        "Plato": {
            "id": 12,
            "Nombre": "Strawberry Cheesecake",
            "Descripcion": "Helado De Tarta De Queso y Fresa.",
            "Precio": 6,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Strawberry_Cheesecake_150_Ml_del.png",
            "Calorias": 365,
            "Personalizacion": "Sí"
        }
    },
    {
        "Plato": {
            "id": 13,
            "Nombre": "Cookie Dough",
            "Descripcion": "Helado de Vainilla Con Galleta Y Trozos De Chocolate.",
            "Precio": 6,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Cookie_Dough_150_Ml_del.png",
            "Calorias": 210,
            "Personalizacion": "Sí"
        }
    },
    {
        "Plato": {
            "id": 14,
            "Nombre": "Chunky Monkey",
            "Descripcion": "Helado De Plátano, Trozos De Chocolate y Nueces.",
            "Precio": 6,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Chunky_Monkey_150_Ml_del.png",
            "Calorias": 200,
            "Personalizacion": "No"
        }
    },
    {
        "Plato": {
            "id": 15,
            "Nombre": "Chocolate Fudge Brownie",
            "Descripcion": "Helado De Chocolate Con Trozos De Brownie.",
            "Precio": 6,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Chocolate_Fudge_Brownie_150_Ml_del.png",
            "Calorias": 320,
            "Personalizacion": "No"
        }
    },
    {
        "Plato": {
            "id": 16,
            "Nombre": "Cookie Chocolate",
            "Descripcion": "Nuestra Galleta Cookie Con Deliciosas Pepitas De Chocolate.",
            "Precio": 4,
            "Imagen": "https://www.pizzahut.es/Content/OnlineOrderingImages/Menu/Items/Cookie_Chocolate_del.png",
            "Calorias": 300,
            "Personalizacion": "No"
        }
    },
];


/***/ }),

/***/ "./src/app/pizzas/pizzas.component.css":
/*!*********************************************!*\
  !*** ./src/app/pizzas/pizzas.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pizzas/pizzas.component.html":
/*!**********************************************!*\
  !*** ./src/app/pizzas/pizzas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-ligth\" width=\"50%\">\n  <div class=\"row\">\n    <div *ngFor=\"let menu of menus?.Pizzas\" class=\"col-sm-12 col-md-6 col-lg-6 col-xl-4 my-5 p-4\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"{{menu.Plato.Imagen}}\" alt=\"Card image cap\">\n        <div class=\"card-body text-center\">\n          <h5 class=\"card-title precio\">Precio: {{menu.Plato.Nombre}}</h5>\n          <p class=\"card-text precio\">{{menu.Plato.Precio}}</p>\n          <p class=\"card-text  pb-4\">{{menu.Plato.Descripcion}}</p>\n          <a routerLink=\"/detalle-ficha/{{menu.Plato.id}}\"class=\"btn btn-success\">Mas información</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pizzas/pizzas.component.ts":
/*!********************************************!*\
  !*** ./src/app/pizzas/pizzas.component.ts ***!
  \********************************************/
/*! exports provided: PizzasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzasComponent", function() { return PizzasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _platos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platos.service */ "./src/app/platos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PizzasComponent = /** @class */ (function () {
    function PizzasComponent(platosService) {
        this.platosService = platosService;
    }
    PizzasComponent.prototype.getMenus = function () {
        var _this = this;
        this.platosService.getMenus().subscribe(function (data) { return _this.menus = data; });
    };
    PizzasComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    PizzasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pizzas',
            template: __webpack_require__(/*! ./pizzas.component.html */ "./src/app/pizzas/pizzas.component.html"),
            styles: [__webpack_require__(/*! ./pizzas.component.css */ "./src/app/pizzas/pizzas.component.css")]
        }),
        __metadata("design:paramtypes", [_platos_service__WEBPACK_IMPORTED_MODULE_1__["PlatosService"]])
    ], PizzasComponent);
    return PizzasComponent;
}());



/***/ }),

/***/ "./src/app/platos.service.ts":
/*!***********************************!*\
  !*** ./src/app/platos.service.ts ***!
  \***********************************/
/*! exports provided: PlatosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatosService", function() { return PlatosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _listaPlatos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listaPlatos */ "./src/app/listaPlatos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlatosService = /** @class */ (function () {
    function PlatosService(http) {
        this.http = http;
        this.url = "./assets/categorias.json";
    }
    PlatosService.prototype.getMenus = function () {
        return this.http.get(this.url);
    };
    PlatosService.prototype.getMenu = function (id) {
        return _listaPlatos__WEBPACK_IMPORTED_MODULE_2__["Platos"].find(function (menu) { return menu.Plato.id == id; });
    };
    PlatosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlatosService);
    return PlatosService;
}());



/***/ }),

/***/ "./src/app/postres/postres.component.css":
/*!***********************************************!*\
  !*** ./src/app/postres/postres.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/postres/postres.component.html":
/*!************************************************!*\
  !*** ./src/app/postres/postres.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-ligth\" width=\"50%\">\n  <div class=\"row\">\n    <div *ngFor=\"let menu of menus?.Postres\" class=\"col-sm-12 col-md-6 col-lg-6 col-xl-4 my-5 p-4\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"{{menu.Plato.Imagen}}\" alt=\"Card image cap\">\n        <div class=\"card-body text-center\">\n          <h5 class=\"card-title\">{{menu.Plato.Nombre}}</h5>\n          <p class=\"card-text precio\">Precio: {{menu.Plato.Precio}}</p>\n          <p class=\"card-text  pb-4\">{{menu.Plato.Descripcion}}</p>\n          <a routerLink=\"/detalle-ficha/{{menu.Plato.id}}\"class=\"btn btn-success\">Mas información</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/postres/postres.component.ts":
/*!**********************************************!*\
  !*** ./src/app/postres/postres.component.ts ***!
  \**********************************************/
/*! exports provided: PostresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostresComponent", function() { return PostresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _platos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platos.service */ "./src/app/platos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostresComponent = /** @class */ (function () {
    function PostresComponent(platosService) {
        this.platosService = platosService;
    }
    PostresComponent.prototype.getMenus = function () {
        var _this = this;
        this.platosService.getMenus().subscribe(function (data) { return _this.menus = data; });
    };
    PostresComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    PostresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postres',
            template: __webpack_require__(/*! ./postres.component.html */ "./src/app/postres/postres.component.html"),
            styles: [__webpack_require__(/*! ./postres.component.css */ "./src/app/postres/postres.component.css")]
        }),
        __metadata("design:paramtypes", [_platos_service__WEBPACK_IMPORTED_MODULE_1__["PlatosService"]])
    ], PostresComponent);
    return PostresComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Alex\Proyecto Final\proyectoCice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map