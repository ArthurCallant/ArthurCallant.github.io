(self["webpackChunkdokter67"] = self["webpackChunkdokter67"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _covid_covid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./covid/covid.component */ 738);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _sportgeneeskunde_sportgeneeskunde_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sportgeneeskunde/sportgeneeskunde.component */ 3693);
/* harmony import */ var _links_page_links_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./links-page/links-page.component */ 3924);
/* harmony import */ var _praktijkinfo_praktijkinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./praktijkinfo/praktijkinfo.component */ 6475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);











const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'covid', component: _covid_covid_component__WEBPACK_IMPORTED_MODULE_1__.CovidComponent },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent },
    { path: 'praktijkinfo', component: _praktijkinfo_praktijkinfo_component__WEBPACK_IMPORTED_MODULE_6__.PraktijkinfoComponent },
    { path: 'sportgeneeskunde', component: _sportgeneeskunde_sportgeneeskunde_component__WEBPACK_IMPORTED_MODULE_4__.SportgeneeskundeComponent },
    { path: 'links', component: _links_page_links_page_component__WEBPACK_IMPORTED_MODULE_5__.LinksPageComponent },
    { path: '', redirectTo: 'dokter67', pathMatch: 'full' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(appRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav/main-nav.component */ 4626);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
    constructor() {
        this.title = 'dokter67';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_0__.MainNavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _covid_covid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./covid/covid.component */ 738);
/* harmony import */ var _covid_banner_covid_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./covid-banner/covid-banner.component */ 3957);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-nav/main-nav.component */ 4626);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _parallax_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parallax.directive */ 423);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _sportgeneeskunde_sportgeneeskunde_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sportgeneeskunde/sportgeneeskunde.component */ 3693);
/* harmony import */ var _links_page_links_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./links-page/links-page.component */ 3924);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _praktijkinfo_praktijkinfo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./praktijkinfo/praktijkinfo.component */ 6475);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./news/news.component */ 3391);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 7716);




























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__.LayoutModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__.MatExpansionModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__.FlexLayoutModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _covid_covid_component__WEBPACK_IMPORTED_MODULE_4__.CovidComponent,
        _covid_banner_covid_banner_component__WEBPACK_IMPORTED_MODULE_5__.CovidBannerComponent,
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent,
        _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__.MainNavComponent,
        _parallax_directive__WEBPACK_IMPORTED_MODULE_9__.ParallaxDirective,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__.ContactComponent,
        _sportgeneeskunde_sportgeneeskunde_component__WEBPACK_IMPORTED_MODULE_12__.SportgeneeskundeComponent,
        _links_page_links_page_component__WEBPACK_IMPORTED_MODULE_13__.LinksPageComponent,
        _praktijkinfo_praktijkinfo_component__WEBPACK_IMPORTED_MODULE_14__.PraktijkinfoComponent,
        _news_news_component__WEBPACK_IMPORTED_MODULE_15__.NewsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__.LayoutModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__.MatExpansionModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__.FlexLayoutModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__.NgbModule] }); })();


/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ 3126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);



class ContactComponent {
    constructor() { }
    ngOnInit() {
        let loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.Loader({
            apiKey: 'AIzaSyCKa2XQqdXWMSocO3XOGioqWZMTUChTSoE'
        });
        loader.load().then(() => {
            const contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Dokter67</h1>' +
                '<div id="bodyContent">' +
                '<p>Dokter Kris Vanderlinden</p><p>Stationsstraat 67</p><p>9810 Eke-Nazareth</p></div></div>';
            const infoWindow = new google.maps.InfoWindow({
                content: contentString,
            });
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 50.95909554013904, lng: 3.6353654426612474 },
                zoom: 16
            });
            const marker = new google.maps.Marker({
                position: { lat: 50.95909554013904, lng: 3.6353654426612474 },
                map: map,
                title: 'Dokter Kris Vanderlinden',
            });
            marker.addListener("click", () => {
                infoWindow.open({
                    anchor: marker,
                    map,
                    shouldFocus: false,
                });
            });
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 142, vars: 0, consts: [[1, "container-fluid"], ["id", "map", 1, "full"], [1, "container-fluid", "back-black"], [1, "rowspacer", "back-black"], [1, "row", "back-black"], [1, "col-lg-2", "colspacer", "back-black"], [1, "col-lg-2", "text-center-small", "border-top", "back-black"], [1, "col-lg-4", "border", "text-center-small"], [1, "col-lg-2", "text-center-small", "border-bottom"], ["href", "mailto:info@dokter67.be"], [1, "rowspacer"], [1, "row", "d-flex", "justify-content-center", "row-white"], [1, "text-center", "card-afspraak", "card-white"], [1, "text-center", "title-black"], [1, "row", "align-items-center", "row-2"], [1, "col-lg-8", "text-align-left"], ["href", "https://www.mtc-it4.be/patient/index.html#/appointments/day/bjNkcWkyQmFRMkpDVTRFNndleFgzRG8wSTNNVEVGMkxMdFZpeGQ2OStyYkhpeHdsYzJSRTBmazFFTzRZTzJMTw==", "target", "_blank"], [2, "font-weight", "800"], [1, "row", "d-flex", "justify-content-center", "row-black"], [1, "text-center", "card-afspraak", "card-black"], [1, "text-center", "title-yellow"], [1, "col-lg-6", "text-align-left"], [2, "font-weight", "800", "color", "rgb(248, 83, 83)"], [1, "col-lg-7", "text-align-left"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Adres");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Stationsstraat 67");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "9810 Eke-Nazareth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Openingstijden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Dag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Voormiddag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Namiddag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Ma");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Dr. Vanderlinden en Dr. Callant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Dr. Vanderlinden en Dr. Callant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Di");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Dr. Vanderlinden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Dr. Vanderlinden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Wo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Dr. Vanderlinden en Dr. Callant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Dr. Vanderlinden en Dr. Callant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Dr. Vanderlinden en Dr. Callant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Dr. Callant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Vr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Dr. Vanderlinden en Dr. Callant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Dr. Vanderlinden en Dr. Callant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Contactinformatie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "09/385.43.46");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Gelieve niet te bellen tussen 12.30u en 14.30u hetzij voor dringende zaken");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "info@dokter67.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-card-title", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Afspraken ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-card-content", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Afspraken kunnen worden gemaakt via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "www.afspraken.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "- Log in met uw account of registreer indien het de eerste keer is dat u online een afspraak maakt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "- Na toelating op de site kan u een arts selecteren");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "- Nadien kan u uw afspraak reserveren");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "- Gelieve bij de reservatie uw telefoonnummer en reden van afspraak toe te voegen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "- Gelieve 5 minuten voor uw afspraak aanwezig te zijn!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "- Gelieve 2 afspraken te maken als u met 2 personen komt!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "mat-card-title", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " Huisbezoeken ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "mat-card-content", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Huisbezoeken kan u telefonisch aanvragen op 09/385.43.46");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Gelieve huisbezoeken voor die dag aan te vragen v\u00F3\u00F3r 11.00u.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Het is mogelijk dat u na enkele seconden wordt doorgeschakeld naar het mobiele nummer van de dokter. Gelieve dus niet in te haken als u doorschakeling hoort maar eventjes te wachten tot u de dokter aan de lijn krijgt (deze doorschakeling is gratis).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "mat-card-title", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " Bereikbaarheid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "mat-card-content", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Auto: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "N60 Gent-Oudenaarde -verkeerslichten Groene Vallei te Eke- Stationsstraat halverwege tussen de kerk en het station.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Er is parkeergelegenheid aan de praktijk.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Openbaar vervoer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Er is een NMBS halte op de lijn Gent-Oudenaarde-Ronse namelijk Eke-Nazareth op < 500 meter van de praktijk.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " Bus: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Vanuit Gent Lijn 71");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Vanuit Deinze Lijn 81 of 84");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "De bushalte ligt op < 200 meter van de praktijk (tussen NMBS station en dorp Eke).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle], styles: [".full[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 25vw;\r\n}\r\n.rowspacer[_ngcontent-%COMP%] {\r\n  padding: 1%;\r\n}\r\n.border[_ngcontent-%COMP%] {\r\n  border-right-width: 1px !important;\r\n  border-left-width: 1px !important;\r\n  border-left-color: #231f20 !important;\r\n  border-left-style: solid !important;\r\n  border-right-color: #231f20 !important;\r\n  border-right-style: solid !important;\r\n  border-top: none!important;\r\n  border-bottom: none!important;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  border-collapse: separate;\r\n  border-spacing: 10px;\r\n}\r\nth[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid white;\r\n}\r\n.border-bottom[_ngcontent-%COMP%], .border-top[_ngcontent-%COMP%]{\r\n  border: none!important;\r\n}\r\n.text-center-small[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.text-align-left[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n.back-black[_ngcontent-%COMP%] {\r\n  background-color: #231f20;\r\n}\r\nh5[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #dde32e;\r\n  font-weight: 800;\r\n}\r\n.back-black[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .back-black[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n.card-black[_ngcontent-%COMP%] {\r\n  max-width: 1000px;\r\n  background-color: #231f20;\r\n  color: white;\r\n}\r\n.card-white[_ngcontent-%COMP%] {\r\n  max-width: 1000px;\r\n  background-color: white;\r\n  color: #231f20;\r\n}\r\n.title-yellow[_ngcontent-%COMP%] {\r\n  color: #dde32e;\r\n  font-weight: 800;\r\n}\r\n.title-black[_ngcontent-%COMP%] {\r\n  color:#231f20;\r\n  font-weight: 800;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  box-shadow: none!important;\r\n}\r\n.card-black[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  color:#dde32e!important;\r\n}\r\n.row-black[_ngcontent-%COMP%] {\r\n  background-color: #231f20;\r\n}\r\n.row-white[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\nmat-card-subtitle[_ngcontent-%COMP%] {\r\n  font-weight: 800;\r\n}\r\n@media screen and (max-width: 764px) {\r\n\r\n  .border[_ngcontent-%COMP%] {\r\n    border-top-width: 1px!important;\r\n    border-bottom-width: 1px!important;\r\n    border-top-color: #231f20 !important;\r\n    border-top-style: solid !important;\r\n    border-bottom-color: #231f20 !important;\r\n    border-bottom-style: solid !important;\r\n    border-right: none!important;\r\n    border-left: none!important;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .text-center-small[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .border-top[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #231f20!important;\r\n  }\r\n  .border-bottom[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #231f20!important;\r\n  }\r\n  .colspacer[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0QyxvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRTtJQUNFLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyx1Q0FBdUM7SUFDdkMscUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1QiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1dnc7XHJcbn1cclxuLnJvd3NwYWNlciB7XHJcbiAgcGFkZGluZzogMSU7XHJcbn1cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHggIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdC13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyMzFmMjAgIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6ICMyMzFmMjAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDEwcHg7XHJcbn1cclxudGgge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uYm9yZGVyLWJvdHRvbSwgLmJvcmRlci10b3B7XHJcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1jZW50ZXItc21hbGwge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi50ZXh0LWFsaWduLWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmJhY2stYmxhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzFmMjA7XHJcbn1cclxuaDUge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNkZGUzMmU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uYmFjay1ibGFjayBwLFxyXG4uYmFjay1ibGFjayB0ciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJkLWJsYWNrIHtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMxZjIwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyZC13aGl0ZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICMyMzFmMjA7XHJcbn1cclxuLnRpdGxlLXllbGxvdyB7XHJcbiAgY29sb3I6ICNkZGUzMmU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4udGl0bGUtYmxhY2sge1xyXG4gIGNvbG9yOiMyMzFmMjA7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgLyogZm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1ibGFjayBociB7XHJcbiAgY29sb3I6I2RkZTMyZSFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvdy1ibGFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMWYyMDtcclxufVxyXG4ucm93LXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjRweCkge1xyXG5cclxuICAuYm9yZGVyIHtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzIzMWYyMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyMzFmMjAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgdGFibGUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAudGV4dC1jZW50ZXItc21hbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci10b3Age1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMzFmMjAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYm9yZGVyLWJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIzMWYyMCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb2xzcGFjZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3957:
/*!********************************************************!*\
  !*** ./src/app/covid-banner/covid-banner.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CovidBannerComponent": () => (/* binding */ CovidBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const _c0 = function () { return ["../dokter67/covid"]; };
class CovidBannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
CovidBannerComponent.ɵfac = function CovidBannerComponent_Factory(t) { return new (t || CovidBannerComponent)(); };
CovidBannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CovidBannerComponent, selectors: [["app-covid-banner"]], decls: 16, vars: 2, consts: [[1, "container-fluid"], [1, "row", "align-content-center"], [1, "col"], [3, "routerLink"]], template: function CovidBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " De COVID-regels blijven van kracht! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " U draagt steeds een mond-neusmasker in de praktijk. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Heeft u klachten die te linken zijn aan een COVID-infectie of heeft u een risicocontact gehad, vermeld dit dan duidelijk als reden bij het maken van uw afspraak online. (U hoeft hiervoor niet meer telefonisch te verwittigen.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Voor meer informatie over COVID-testen klikt u ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "hier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Bedankt voor uw medewerking! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["mat-card[_ngcontent-%COMP%] {\r\n  background-color: #acf1bd;\r\n  float: right;\r\n  width: 40%;\r\n}\r\nmat-card-content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n\r\n}\r\n#covid-image[_ngcontent-%COMP%] {\r\n  margin-left: 50%;\r\n  width: 64px;\r\n  height: 64px;\r\n  width: auto;\r\n  height: auto;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right:2%;\r\n  top:0;\r\n  z-index: 99;\r\n}\r\n@media screen and (max-width: 764px) {\r\n  mat-card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  mat-card-content[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin-bottom: 3px;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdmlkLWJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsS0FBSztFQUNMLFdBQVc7QUFDYjtBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoiY292aWQtYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjZjFiZDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbiNjb3ZpZC1pbWFnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MiU7XHJcbiAgdG9wOjA7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NHB4KSB7XHJcbiAgbWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 738:
/*!******************************************!*\
  !*** ./src/app/covid/covid.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CovidComponent": () => (/* binding */ CovidComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);


class CovidComponent {
    constructor() { }
    ngOnInit() {
    }
}
CovidComponent.ɵfac = function CovidComponent_Factory(t) { return new (t || CovidComponent)(); };
CovidComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CovidComponent, selectors: [["app-covid"]], decls: 84, vars: 0, consts: [[1, "container"], [1, "row"], [1, "page-title"], ["href", "https://www.mtc-it4.be/patient/index.html#/appointments/day/bjNkcWkyQmFRMkpDVTRFNndleFgzRG8wSTNNVEVGMkxMdFZpeGQ2OStyYkhpeHdsYzJSRTBmazFFTzRZTzJMTw==", "target", "_blank"], ["href", "https://diplomatie.belgium.be/nl", "target", "_blank"], ["href", "https://mijngezondheid.be", "target", "_blank"], [2, "text-decoration", "underline"], ["href", "https://www.info-coronavirus.be/nl/", "target", "_blank"]], template: function CovidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Covid-19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " De CoViD-regels blijven van kracht! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wij verzoeken u daarom om steeds een mond-neusmasker te dragen in de praktijk en om uw handen te ontsmetten bij het binnenkomen. U vindt een alcohol dispenser dadelijk bij het binnenkomen van de praktijk!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Heeft u klachten die te linken zijn aan een CoViD-infectie of heeft u een risicocontact gehad, vermeld dit dan duidelijk als reden bij het maken van uw afspraak online. (U hoeft hiervoor niet meer telefonish te verwittigen.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tussen twee pati\u00EBnten door ontsmetten wij steeds ons materiaal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Wij verzoeken u ook om zoveel mogelijk contactloos te betalen. Dit kan u bij ons met behulp van Payconiq of met Bancontact.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bedankt voor uw medewerking!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " PCR-test/antigeen sneltest afspraak ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "U kan steeds een afspraak maken via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "afspraken.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " op de vastgelegde testmomenten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Wenst u een afspraak te maken voor een PCR-test/antigeen sneltest, gelieve dit duidelijk te vermelden bij het maken van uw afspraak alsook het vermelden van de reden waarvoor u de test nodig heeft (nl. symptomen, reizen, ...).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Richtlijnen bij reizen ten tijde van CoViD-19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "- Zoek goed op per land welke regels gelden bij het betreden van dat land. Meer informatie hierover vindt u via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "diplomatie Belgi\u00EB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "- Download de Covidsafe app op uw gsm. Zo heeft u altijd uw vaccinatie en/of testcertificaten bij de hand.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "- U kan (2x) gratis een CTP-code aan vragen via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "mijngezondheid.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ". Vink hierbij NIET de betalende code aan. Bij het maken van uw afspraak vult u deze CTP-code in. Het aanvragen van deze code is niet nodig voor een ziekenhuisopname of bij ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "terugkeer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " uit een land. Vul de verkregen CTP-code in bij de reden wanneer u een afspraak maakt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "- Maak afspraken op vastgelegde testmomenten via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "afspraken.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Symptomen & hoogrisico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Voor up-to-date informatie omtrent CoViD-19 kan u altijd terecht op de volgende website: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "www.info-coronavirus.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " De meest voorkomende symptomen: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "koorts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "droge hoest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "vermoeidheid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Ernstige symptomen: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "kortademigheid of ademhalingsproblemen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "pijn of druk op de borst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "aangetast spraak- of bewegingsvermogen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Zoek direct medische hulp als u ernstige symptomen heeft. Bel altijd eerst voordat u uw huisarts of een andere zorginstelling bezoekt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Mensen met lichte tot matige symptomen die verder gezond zijn, moeten thuis uitzieken.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Het duurt gemiddeld vijf tot zes dagen tot een besmette persoon symptomen vertoont. In sommige gevallen verschijnen de symptomen pas na veertien dagen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle], styles: ["mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%], mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  font-weight: 800;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  box-shadow: none!important;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  min-height: 100%;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  min-height: calc(100vh - 158.4px - 64px);\r\n}\r\n.page-title[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 36px;\r\n  font-weight: 800;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJjb3ZpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtdGl0bGUsIG1hdC1jYXJkLWNvbnRlbnQsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAvKiBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTguNHB4IC0gNjRweCk7XHJcbn1cclxuLnBhZ2UtdGl0bGUge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 6627);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 44, vars: 0, consts: [[1, "page-footer", "font-small", "blue", "pt-4"], [1, "container-fluid", "text-center", "text-md-left"], [1, "row"], [1, "col"], [1, "row", "mt-3"], [1, "spacer", "col-1"], [1, "col-md-3", "col-lg-4", "col-xl-3", "mx-auto", "mb-4", "align-content-center"], [2, "font-weight", "800"], ["href", "https://www.instagram.com/dokterspraktijk67/", "target", "_blank"], [1, "fab", "fa-instagram"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mb-4", "align-content-center"], [1, "height-24"], ["href", "https://www.mtc-it4.be/patient/index.html#/appointments/day/bjNkcWkyQmFRMkpDVTRFNndleFgzRG8wSTNNVEVGMkxMdFZpeGQ2OStyYkhpeHdsYzJSRTBmazFFTzRZTzJMTw==", "target", "_blank"], [1, "footer-copyright", "text-center"], [2, "font-size", "13px"], ["href", "https://github.com/ArthurCallant", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dokter67");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Stationsstraat 67 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 9810 Eke-Nazareth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Urgente hulp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 112 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 1733 (Huisartsenwachtpost) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Maak een afspraak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Een afspraak kan je maken via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "afspraken.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Website design by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Arthur Callant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: ["footer[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 100%;\r\n  padding: 100px 0 0;\r\n  background-color: #231f20;\r\n}\r\n.spacer[_ngcontent-%COMP%] {\r\n}\r\n.align-left[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  color: white;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\nh5[_ngcontent-%COMP%] {\r\n  color: #dde32e;\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  font-size: 22px;\r\n}\r\n.footer-copyright[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #393838;\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n@media screen and (max-width: 460px) {\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n  h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxvQ0FBb0M7O0FBRXRDO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDAgMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMxZjIwO1xyXG59XHJcbi5zcGFjZXIge1xyXG59XHJcbi5hbGlnbi1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICAvKiBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5oNSB7XHJcbiAgY29sb3I6ICNkZGUzMmU7XHJcbn1cclxubWF0LWljb24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5mb290ZXItY29weXJpZ2h0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzgzODtcclxuICAvKiBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "THIS IS JUST THE HEADER, NOTHING TO SEE HERE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _parallax_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parallax.directive */ 423);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news/news.component */ 3391);





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 92, vars: 1, consts: [[1, "container-fluid"], [1, "row"], ["mat-card-image", "", "src", "../../assets/images/parallax_background.jpg", "id", "banner-image", "appParallax", "", 3, "ratio"], [1, "container", "text-center", "d-flex", "justify-content-center", "align-items-center"], [1, "row", "card-1", "d-flex", "justify-content-center", "text-center", "align-items-center"], [1, "text-center", "d-flex", "align-items-center", "flex-column", "col", "bottom-align-text", "card-title-1", 2, "color", "black"], [1, "row", "text-center", "d-flex", "justify-content-center", "align-items-center", "flex-column", "bottom-align-text", "card-content-1"], ["mat-raised-button", "", 1, "mt-auto"], ["href", "https://www.mtc-it4.be/patient/index.html#/appointments/day/bjNkcWkyQmFRMkpDVTRFNndleFgzRG8wSTNNVEVGMkxMdFZpeGQ2OStyYkhpeHdsYzJSRTBmazFFTzRZTzJMTw==", "target", "_blank"], [1, "spacer"], [1, "col-lg", "card-2"], [1, "text-center", "d-flex", "align-items-center", "flex-column", "col", "card-title-2"], [1, "text-center", "d-flex", "align-items-center", "flex-column", "col", "bottom-align-text", "card-content-2"], [2, "margin-bottom", "0!important"], ["href", "mailto:info@dokter67.be"], [1, "spacer-2"], [1, "row", "d-flex", "justify-content-center", "row-1"], [1, "text-center", "card-praktijk"], [1, "text-center", "praktijk-title"], [1, "text-center", "praktijk-subtitle"], [1, "row", "align-items-center", "row-2"], [1, "col-lg-5"], ["src", "../../assets/images/dokter kris vanderlinden.jpg", "alt", "Dokter Kris Vanderlinden", 1, "img-fluid", "dokter-img"], [1, "col-lg-6", "align-items-left"], [1, "col-lg-6", "align-items-right"], ["src", "../../assets/images/dokter maxime callant.jpg", "alt", "Dokter Maxime Callant", 1, "img-fluid", "dokter-img"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Maak uw afspraak online. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Maak afspraak ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-title", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Afspraken ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-card-content", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Een afspraak maak je online via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "afspraken.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Gelieve rekening te houden met specifieke vastgelegde afspraakmogelijkheden (bijvoorbeeld 'bloedonderzoek'). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-card-title", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Bloedresultaten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-card-content", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Voor uitslagen zoals die van een bloedonderzoek stuurt u een ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " naar de praktijk via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "info@dokter67.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Hierna zal de arts u telefonisch of via e-mail op de hoogte brengen van de resultaten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "U hoeft dus zelf niet te bellen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-card-title", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Telefoon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-card-content", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Wij zijn telefonisch bereikbaar voor dringende zaken. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Voor minder dringende vragen kan je een mail sturen naar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "info@dokter67.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Op die manier wordt de telefoon vrij gehouden voor dringende oproepen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-card-title", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Voorschriften en attesten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-card-content", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Voor voorschriften en attesten wordt steeds een consultatie gepland. Deze worden dus niet meer zonder contact via e-mail verstuurd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Tijdens de consultatie wordt nagegaan of de dosis nog correct is, of er bijwerkingen optreden, of de medicatie moet aangepast worden en of deze nog wel nodig is.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "app-news");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "mat-card-title", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Ons Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "mat-card-subtitle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " Sportarts - Huisarts Kris Vanderlinden ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "mat-card-content", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Dr. Kris Vanderlinden is afgestudeerd als Huisarts aan de Universiteit Gent in 1992 en behaalde in 1993 met grote onderscheiding het aanvullende getuigschrift in de Sportgeneeskunde. Hiernaast voltooide hij ook de opleiding voor het maken van r\u00F6ntgenfoto's. Hij volgt tevens een opleiding in Musculoskeletale Echografie. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " Heden is Dr. Kris parttime bondsarts bij de nationale voetbalbond KBVB voor de A-ploeg vrouwen, The Red Flames. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Naast stagemeester is Dr. Kris ook erkend als praktijkopleider, wat betekent dat jong afgestudeerde huisartsen (haio = huisarts in opleiding) in zijn praktijk opleiding kunnen volgen. Dr. Kris volgt daarvoor zelf een specifieke bijscholing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "mat-card-subtitle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Sportarts - HAIO Maxime Callant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "mat-card-content", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " Dokter Maxime Callant studeerde af als arts in 2018 aan de UGent en behaalde het aanvullende getuigschrift in de sportgeneeskunde. In 2019 was hij aan de slag als sportarts bij Mensana in Sleidinge en als consultatiearts bij Kind & Gezin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, " Op heden voltooit hij zijn laatste periode in de opleiding huisartsgeneeskunde als HAIO in deze praktijk. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "div", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", 0.2);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardImage, _parallax_directive__WEBPACK_IMPORTED_MODULE_0__.ParallaxDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _news_news_component__WEBPACK_IMPORTED_MODULE_1__.NewsComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle], styles: ["#banner-image[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n  width: 100%;\r\n  position: fixed;\r\n  z-index: -1;\r\n}\r\n.card-1[_ngcontent-%COMP%] {\r\n  background-color: rgba(251, 250, 250, 60%)!important;\r\n  box-shadow: none!important;\r\n  max-width: 400px!important;\r\n  height: 150px;\r\n  margin-top: 10%!important;\r\n}\r\n.row[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\r\n  background-color: rgba(0,0,0,0);\r\n  box-shadow: none!important;\r\n}\r\n.card-title-1[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  margin-top: 8%!important;\r\n}\r\n.card-content-1[_ngcontent-%COMP%] {\r\n  margin-bottom: 20%!important;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  background-color: #231f20;\r\n  max-width: 150px;\r\n}\r\nbutton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #dde32e;\r\n  text-decoration: none;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #393838;\r\n}\r\n.spacer[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n}\r\n.spacer-2[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  \r\n}\r\n.card-content-2[_ngcontent-%COMP%], .card-2[_ngcontent-%COMP%] {\r\n  background-color: rgba(35,31,32,100%)!important;\r\n}\r\n.card-title-2[_ngcontent-%COMP%] {\r\n  color: #dde32e;\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 800;\r\n}\r\n.card-content-2[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n  color: white;\r\n}\r\n.card-content-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #dde32e;\r\n  background-color: #231f20;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n}\r\n.card-content-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #393838;\r\n}\r\n.card-2[_ngcontent-%COMP%] {\r\n  background-color: rgba(35,31,32,100%)!important;\r\n  border-radius: 0%!important;\r\n}\r\n.card-praktijk[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 248px;\r\n  max-height: 350px;\r\n  width: auto;\r\n  height: auto;\r\n  margin: 5rem;\r\n}\r\n.card-praktijk[_ngcontent-%COMP%]  {\r\n  max-width: 1000px;\r\n  background-color: white!important;\r\n}\r\n.praktijk-title[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 800;\r\n  font-size: 36px;\r\n}\r\n.praktijk-subtitle[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 800;\r\n  font-size: 24px;\r\n}\r\n.row-1[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n.row-2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 18px;\r\n}\r\n.row-3[_ngcontent-%COMP%] {\r\n  background-color: #231f20;\r\n}\r\nhr[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #231f20;\r\n}\r\n.card-diensten[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #dde32e;\r\n}\r\n.card-diensten[_ngcontent-%COMP%] {\r\n  max-width: 1000px;\r\n  background-color: #231f20;\r\n  color: #dde32e;\r\n}\r\n.align-items-left[_ngcontent-%COMP%] {\r\n  text-align: justify;\r\n}\r\n.align-items-right[_ngcontent-%COMP%] {\r\n  text-align: justify;\r\n}\r\n.dokter-img[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n  min-height: 426px;\r\n  width: 100%;\r\n}\r\n@media screen and (max-width: 764px) {\r\n  .align-items-right[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n  }\r\n\r\n  #banner-image[_ngcontent-%COMP%] {\r\n    object-fit: cover;\r\n    min-height: 500px;\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0Usb0RBQW9EO0VBQ3BELDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFubmVyLWltYWdlIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLmNhcmQtMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTEsIDI1MCwgMjUwLCA2MCUpIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDQwMHB4IWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwJSFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvdyBtYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC10aXRsZS0xIHtcclxuICAvKiBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi10b3A6IDglIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1jb250ZW50LTEge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwJSFpbXBvcnRhbnQ7XHJcbn1cclxuYnV0dG9uIHtcclxuICAvKiBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzFmMjA7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5idXR0b24gYSB7XHJcbiAgY29sb3I6ICNkZGUzMmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzgzODtcclxufVxyXG4uc3BhY2VyIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5zcGFjZXItMiB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cclxufVxyXG4uY2FyZC1jb250ZW50LTIsIC5jYXJkLTIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsMzEsMzIsMTAwJSkhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLXRpdGxlLTIge1xyXG4gIGNvbG9yOiAjZGRlMzJlO1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uY2FyZC1jb250ZW50LTIge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQtMiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNkZGUzMmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMWYyMDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQtMiBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzODM4O1xyXG59XHJcblxyXG4uY2FyZC0yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LDMxLDMyLDEwMCUpIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXByYWt0aWprIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAyNDhweDtcclxuICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiA1cmVtO1xyXG59XHJcbi5jYXJkLXByYWt0aWprICB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcbi5wcmFrdGlqay10aXRsZSB7XHJcbiAgLyogZm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG4ucHJha3Rpamstc3VidGl0bGUge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnJvdy0xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucm93LTIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ucm93LTMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzFmMjA7XHJcbn1cclxuaHIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjMxZjIwO1xyXG59XHJcbi5jYXJkLWRpZW5zdGVuIGhyIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZTMyZTtcclxufVxyXG4uY2FyZC1kaWVuc3RlbiB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMWYyMDtcclxuICBjb2xvcjogI2RkZTMyZTtcclxufVxyXG4uYWxpZ24taXRlbXMtbGVmdCB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uYWxpZ24taXRlbXMtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLmRva3Rlci1pbWcge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDQyNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NHB4KSB7XHJcbiAgLmFsaWduLWl0ZW1zLXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxuICAjYmFubmVyLWltYWdlIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3924:
/*!****************************************************!*\
  !*** ./src/app/links-page/links-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinksPageComponent": () => (/* binding */ LinksPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);


class LinksPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LinksPageComponent.ɵfac = function LinksPageComponent_Factory(t) { return new (t || LinksPageComponent)(); };
LinksPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinksPageComponent, selectors: [["app-links-page"]], decls: 79, vars: 0, consts: [[1, "container"], [1, "row"], [1, "page-title"], ["href", "https://www.gezondheidenwetenschap.be/", "target", "_blank"], ["href", "https://www.thuisarts.nl/", "target", "_blank"], ["href", "https://www.wanda.be/nl/", "target", "_blank"], ["href", "https://www.huisartsenkring-hsl.be/", "target", "_blank"], ["href", "https://www.slaapzorgeloos.be/", "target", "_blank"], ["href", "https://www.nvvp.net/website/patinten-informatie/aandoeningen-/verslaving", "target", "_blank"], ["href", "https://www.apotheek.be/nl/Pages/default.aspx", "target", "_blank"], ["href", "https://www.kindengezin.be", "target", "_blank"], ["href", "https://www.tele-onthaal.be/", "target", "_blank"], ["href", "https://www.sportkeuring.be/", "target", "_blank"], ["href", "https://www.veiligheid.nl/sportblessures?utm_campaign=301redirect&utm_medium=referral&utm_source=originalsource&utm_content=/voorkomblessures", "target", "_blank"], ["href", "https://www.rbfa.be/en", "target", "_blank"], ["href", "https://www.uefa.com", "target", "_blank"]], template: function LinksPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Interessante links ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Huisartsgeneeskunde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Betrouwbare info over gezondheid en ziekten: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "www.gezondheidenwetenschap.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Betrouwbare info over gezondheid en ziekten: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "thuisarts.nl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Advies Reisgeneeskunde: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "www.wanda.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Huisartsen Schelde Leie: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "www.huisartsenkring-hsl.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Slaapproblemen: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "slaapzorgeloos.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Verslaving: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "www.nvvp.net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Nuttige Contacten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Levensbedreigende urgenties: T 112");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Huisartsenwachtpost (van vrijdagavond tot maandagochtend): T 1733");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Huisartsenwachtpost (van maandagochtend tot vrijdagochtend): T 09 280 08 80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Apotheek van wacht: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "www.apotheek.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " (na 22u00 bellen via 0903 99 000)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Tandarts van wacht: T 0903 39 969");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Antigifcentrum: T 070 245 245");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Zelfmoordpreventie: T 0800 325 123 of T 02 649 95 55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Kind & gezin: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "www.kindengezin.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Teleonthaal T 106 of chat via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "https://www.tele-onthaal.be/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Sportgeneeskunde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sportmedische keuringen: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "www.sportkeuring.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Blessure preventie: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "www.veiligheid.nl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Voetbal: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "www.rbfa.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "www.uefa.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle], styles: ["mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%], mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  font-weight: 800;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  box-shadow: none!important;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  min-height: calc(100vh - 158.4px - 64px);\r\n}\r\n.page-title[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 36px;\r\n  font-weight: 800;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJsaW5rcy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC10aXRsZSwgbWF0LWNhcmQtY29udGVudCwgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTguNHB4IC0gNjRweCk7XHJcbn1cclxuLnBhZ2UtdGl0bGUge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4626:
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainNavComponent": () => (/* binding */ MainNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 8030);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 970);












const _c0 = function () { return ["dokter67"]; };
const _c1 = function () { return [""]; };
const _c2 = function () { return ["/covid"]; };
const _c3 = function () { return ["/sportgeneeskunde"]; };
const _c4 = function () { return ["/praktijkinfo"]; };
const _c5 = function () { return ["/links"]; };
const _c6 = function () { return ["/contact"]; };
const _c7 = ["*"];
class MainNavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Handset)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
MainNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], ngContentSelectors: _c7, decls: 42, vars: 26, consts: [["color", "primary"], ["mat-button", "", 1, "companyName", 3, "routerLink"], ["src", "../../assets/images/dokter67 logo.png", 1, "logo"], [1, "example-spacer"], ["fxShow", "true", "fxHide.lt-md", "true"], ["mat-button", "", 3, "routerLink"], ["fxShow", "true", "fxHide.gt-sm", "true"], ["mat-icon-button", "", 3, "click"], ["fxFlexFill", "", 1, "example-container"], ["color", "primary", "fxLayout", "column", "mode", "over", "opened", "false", "fxHide.gt-sm", "true", "position", "end"], ["sidenav", ""], ["fxLayout", "column"], ["mat-button", "", 3, "routerLink", "click"], ["fxFlexFill", ""]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Covid-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Sportgeneeskunde");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Praktijkinfo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Interessante Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-sidenav-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-sidenav", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Covid-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Sportgeneeskunde");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Praktijkinfo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Interessante Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-sidenav-content", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](19, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](21, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](22, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](23, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](25, _c6));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.FlexFillDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #393838!important;\n}\n\n.mat-sidenav[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover {\n  background-color: #231f20;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%] {\n  min-height: 93vh!important;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n  min-height: 64px!important;\n  height: 64px!important;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background-color: #231f20;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-height: 64px;\n  min-height: 56px;\n  height:56px;\n  width: auto;\n}\n\n.mat-button.wrapper[_ngcontent-%COMP%] {\n  color: #dde32e;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  \n  font-family: 'Open Sans', sans-serif;\n  min-width: -webkit-min-content;\n  min-width: min-content;\n}\n\n.mat-button[_ngcontent-%COMP%]:hover {\n  background-color: #393838;\n}\n\n.companyName[_ngcontent-%COMP%]:hover {\n  background-color: #231f20;\n}\n\ndiv[_ngcontent-%COMP%] {\n  overflow: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0FBQ3JDOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLDhCQUFzQjtFQUF0QixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibWFpbi1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzODM4IWltcG9ydGFudDtcbn1cbi5tYXQtc2lkZW5hdiAubWF0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzFmMjA7XG59XG5cbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA5M3ZoIWltcG9ydGFudDtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgbWluLWhlaWdodDogNjRweCFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjRweCFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzFmMjA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5sb2dvIHtcbiAgbWF4LWhlaWdodDogNjRweDtcbiAgbWluLWhlaWdodDogNTZweDtcbiAgaGVpZ2h0OjU2cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLm1hdC1idXR0b24ud3JhcHBlciB7XG4gIGNvbG9yOiAjZGRlMzJlO1xufVxuLm1hdC1idXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xufVxuLm1hdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzODM4O1xufVxuLmNvbXBhbnlOYW1lOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMWYyMDtcbn1cbmRpdiB7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuIl19 */"] });


/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);







class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule
        ], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule], exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule] }); })();


/***/ }),

/***/ 3391:
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const _c0 = function () { return ["../covid"]; };
class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
NewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 38, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "text-center", "page-title"], [1, "col-lg-4", "border"], [1, "text-center", "subtitle"], [1, "row", "text-center"], [3, "routerLink"], [1, "col-lg-4"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Nieuws ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Covid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " De COVID-regels blijven van kracht! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " U draagt steeds een mond-neusmasker in de praktijk. Wij vragen u ook zo mogelijk contactloos te betalen. Dit kan met de Payconiq app of Bancontact. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Heeft u klachten die te linken zijn aan een COVID-infectie of heeft u een risicocontact gehad, vermeld dit dan duidelijk als reden bij het maken van uw afspraak online. (U hoeft hiervoor niet meer telefonisch te verwittigen.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Voor meer informatie over COVID-testen klikt u ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "hier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Bedankt voor uw medewerking! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-subtitle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Griep ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " In kader van de griepvaccinatie zullen vanaf november specifieke vaccinatiemomenten worden vastgelegd zodanig dat andere afspraakmomenten worden vrijgehouden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Gelieve deze afspraakmomenten te respecteren. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Vraag uw arts of u in aanmerking komt voor een griepvaccin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-subtitle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Werken in de straat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " De komende dagen wordt aan het wegdek gewerkt in de stationsstraat. Dit betekent dat je hinder kan ondervinden bij het bereiken van de praktijk. Hou eventueel de website in de gaten voor verdere info. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%], mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  font-weight: 800;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  box-shadow: none!important;\r\n  border-radius: 0!important;\r\n}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  padding-bottom: 2rem;\r\n  background-color: white;\r\n}\r\n.page-title[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 36px;\r\n  font-weight: 800;\r\n}\r\n.subtitle[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 800;\r\n  font-size: 24px;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n@media screen and (min-width: 764px) {\r\n  .border[_ngcontent-%COMP%] {\r\n    border-right: 1px solid black!important;\r\n    border-top: 0!important;\r\n    border-bottom: 0!important;\r\n    border-left: 0!important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFO0lBQ0UsdUNBQXVDO0lBQ3ZDLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0VBQzFCO0FBQ0YiLCJmaWxlIjoibmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtdGl0bGUsIG1hdC1jYXJkLWNvbnRlbnQsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAvKiBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucGFnZS10aXRsZSB7XHJcbiAgLyogZm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uc3VidGl0bGUge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2NHB4KSB7XHJcbiAgLmJvcmRlciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjayFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiAwIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1142:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 13, vars: 0, consts: [[1, "container"], [1, "rowspacer"], ["href", "../"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 404: Page Not Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Oops! We kunnen niet vinden wat je zoekt! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Klik ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "hier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " om terug te keren naar de home pagina en probeer het nog een keer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle], styles: ["mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%], mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  font-weight: 800;\r\n  font-size: 36px;\r\n}\r\nmat-card-subtitle[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  box-shadow: none!important;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  min-height: calc(100vh - 158.4px - 64px);\r\n}\r\n.rowspacer[_ngcontent-%COMP%] {\r\n  padding: 100px;\r\n}\r\n@media screen and (max-width: 764px) {\r\n  .rowspacer[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtdGl0bGUsIG1hdC1jYXJkLWNvbnRlbnQsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAvKiBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTU4LjRweCAtIDY0cHgpO1xyXG59XHJcbi5yb3dzcGFjZXIge1xyXG4gIHBhZGRpbmc6IDEwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjRweCkge1xyXG4gIC5yb3dzcGFjZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 423:
/*!***************************************!*\
  !*** ./src/app/parallax.directive.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallaxDirective": () => (/* binding */ ParallaxDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ParallaxDirective {
    constructor(eleRef) {
        this.eleRef = eleRef;
        this.parallaxRatio = 1;
        this.initialTop = 0;
        this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    }
    onWindowScroll(event) {
        this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
    }
}
ParallaxDirective.ɵfac = function ParallaxDirective_Factory(t) { return new (t || ParallaxDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ParallaxDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ParallaxDirective, selectors: [["", "appParallax", ""]], hostBindings: function ParallaxDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ParallaxDirective_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { parallaxRatio: ["ratio", "parallaxRatio"] } });


/***/ }),

/***/ 6475:
/*!********************************************************!*\
  !*** ./src/app/praktijkinfo/praktijkinfo.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PraktijkinfoComponent": () => (/* binding */ PraktijkinfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 3738);




function PraktijkinfoComponent_ngb_carousel_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PraktijkinfoComponent_ngb_carousel_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PraktijkinfoComponent_ngb_carousel_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PraktijkinfoComponent_ngb_carousel_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.images[3], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PraktijkinfoComponent_ngb_carousel_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.images[4], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PraktijkinfoComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PraktijkinfoComponent_ngb_carousel_2_ng_template_1_Template, 2, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PraktijkinfoComponent_ngb_carousel_2_ng_template_2_Template, 2, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PraktijkinfoComponent_ngb_carousel_2_ng_template_3_Template, 2, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PraktijkinfoComponent_ngb_carousel_2_ng_template_4_Template, 2, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PraktijkinfoComponent_ngb_carousel_2_ng_template_5_Template, 2, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 4000)("showNavigationIndicators", ctx_r0.showNavigationIndicators);
} }
class PraktijkinfoComponent {
    constructor(config) {
        this.images = [1, 4, 2, 3, 12].map((n) => `../assets/images/${n}.jpg`);
        this.showNavigationIndicators = true;
        config.showNavigationIndicators = true;
    }
    ngOnInit() {
    }
}
PraktijkinfoComponent.ɵfac = function PraktijkinfoComponent_Factory(t) { return new (t || PraktijkinfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCarouselConfig)); };
PraktijkinfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PraktijkinfoComponent, selectors: [["app-praktijkinfo"]], decls: 76, vars: 1, consts: [[1, "container"], [1, "spacer"], [3, "interval", "showNavigationIndicators", 4, "ngIf"], [1, "row"], [1, "col-lg-6"], [2, "font-size", "16px", "font-weight", "bold"], [3, "interval", "showNavigationIndicators"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Dokterspraktijk Dokter67", 3, "src"], ["alt", "Dokter Kris Vanderlinden en Dokter Maxime Callant", 3, "src"], ["alt", "Doktersruimte Dokter67", 3, "src"], ["alt", "Wachtzaal Dokter67", 3, "src"], ["alt", "Echografie bij Dokter67", 3, "src"]], template: function PraktijkinfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PraktijkinfoComponent_ngb_carousel_2_Template, 6, 2, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Algemene huisartsgeneeskunde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Algemene ziekte- en gezondheidsproblemen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Acute zorgen en EHBO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Opvolging van chronische ziekte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Controleren en aanpassen bloeddruk- of hartmedicatie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Preoperatief- en verzekeringsonderzoek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Vaccinatie en preventie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sportgeneeskunde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Blessurebehandeling en -preventie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Inspanningstest (fietsproef) met lactaatmeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sportmedische keuring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Technische handelingen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Bloedafname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Urine- en stoelgangstalen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Elektrocardiogram (ECG)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "R\u00F6ntgenopnamen (RX) en echografie (opm: enkel voor bewegingsstelsel)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Oorprop verwijderen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cardiovasculaire fietsproef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Kleine chirurgische ingrepen - Wondhechting/verwijderen van hechtingen - Wondzorg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Cryotherapie en behandeling van wratten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Gipsen: zowel aanleggen als afhalen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Injecties ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Biopunctuur/Mesotherapie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Intra-articulaire injecties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Cortisone\u00EFnfiltratie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Hyalonzuurinfiltratie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Platelet Rich Plasma (PRP)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Breng bij raadplegingen steeds uw identiteitskaart (eID) mee. Dit moet minstens jaarlijks ingelezen worden om het medisch dossier (administratie, GMD, SUMEHR, ...) up to date te houden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbSlide], styles: ["mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%], mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  font-weight: 800;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  box-shadow: none!important;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  min-height: 100%;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  min-height: calc(100vh - 158.4px - 64px);\r\n}\r\n.spacer[_ngcontent-%COMP%] {\r\n  padding: 0.5rem;\r\n}\r\nngb-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n  max-height: 600px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByYWt0aWpraW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoicHJha3RpamtpbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC10aXRsZSwgbWF0LWNhcmQtY29udGVudCwgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE1OC40cHggLSA2NHB4KTtcclxufVxyXG4uc3BhY2VyIHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxubmdiLWNhcm91c2VsIGltZyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3693:
/*!****************************************************************!*\
  !*** ./src/app/sportgeneeskunde/sportgeneeskunde.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportgeneeskundeComponent": () => (/* binding */ SportgeneeskundeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);


class SportgeneeskundeComponent {
    constructor() {
        this.images = [11, 12, 13].map((n) => `../assets/images/${n}.jpg`);
    }
    ngOnInit() {
    }
}
SportgeneeskundeComponent.ɵfac = function SportgeneeskundeComponent_Factory(t) { return new (t || SportgeneeskundeComponent)(); };
SportgeneeskundeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SportgeneeskundeComponent, selectors: [["app-sportgeneeskunde"]], decls: 70, vars: 0, consts: [[1, "container"], [1, "row"], [1, "page-title"], [1, "col-lg-6"], ["href", "https://www.mtc-it4.be/patient/index.html#/appointments/day/bjNkcWkyQmFRMkpDVTRFNndleFgzRG8wSTNNVEVGMkxMdFZpeGQ2OStyYkhpeHdsYzJSRTBmazFFTzRZTzJMTw==", "target", "_blank"], [1, "col-lg-3"], ["src", "../../assets/images/14.jpg", "width", "400px", "alt", "Inspanningsproef met lactaatmeting"], ["src", "../../assets/images/11.jpg", "alt", "Echografie Dokter67", 1, "img-small"], ["href", "https://www.sportkeuring.be/", "target", "_blank"]], template: function SportgeneeskundeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sportgeneeskunde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dokter Kris Vanderlinden en dokter Maxime Callant zijn gespecialiseerd in sportgeneeskunde. U kan in de praktijk terecht voor sportgerelateerde letsels, een inspanningsproef en sportmedische keuring. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Dokter Vanderlinden is tevens verbonden aan de KBVB als bondsarts bij de vrouwenvoetbalploeg \u201CThe Red Flames\u201D. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Inspanningsproef met lactaatmeting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Met een fietsonderzoek kan op een accurate manier het conditieniveau bepaald worden. Op de fiets worden toenemende wattages getrapt terwijl het hartritme en de bloeddruk worden gemonitord. Dankzij de lactaatmetingen worden specifieke trainingszones afgebakend. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Praktisch:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " U reserveert online een afspraak via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "afspraken.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " voor de voorbereiding van de inspanningsproef. Er wordt een anamnese afgenomen en u wordt klinisch onderzocht. Indien een tegenaanwijzing voor een inspanningsproef wordt gevonden, wordt u verwezen voor specialistisch nazicht. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Een afspraak wordt gemaakt voor de inspanningsproef. Vergeet zeker geen sportkleren mee te nemen! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Tijdens de fietsproef wordt regelmatig het lactaat gemeten en zal gevraagd worden hoe lastig de proef wordt ervaren, en of er klachten optreden ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " U krijgt de gelegenheid zich te douchen na de proef indien gewenst. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Er wordt een nieuwe afspraak vastgelegd om de ge\u00EFnterpreteerde resultaten te bespreken. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Echografie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Via echografie kunnen op een niet-invasieve manier de spieren en pezen in beeld gebracht worden. Indien echografie gewenst is, maak hiervoor een afspraak online bij dokter Vanderlinden via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "afspraken.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " en vermeldt dit in de reden van afspraak. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sportmedische keuringen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Voor de meeste sporten is een toelatingsattest van een arts nodig. U kan hier terecht voor een sportonderzoek en medische keuring. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Praktisch:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Vul de vragenlijst in op ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "www.sportkeuring.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " en stuur deze door naar dokter Kris Vanderlinden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Maak een afspraak online via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "afspraken.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " en vermeldt dat het om een sportmedische keuring gaat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Vergeet niet de nodige administratieve documenten mee te nemen naar de praktijk. Deze worden meestal door de specifieke federatie naar de sporter gestuurd. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: ["mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%], mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  font-weight: 800;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  box-shadow: none!important;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  min-height: 100%;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  min-height: calc(100vh - 158.4px - 64px);\r\n}\r\n.page-title[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 36px;\r\n  font-weight: 800;\r\n}\r\n.spacer[_ngcontent-%COMP%] {\r\n  padding: 0.5rem;\r\n}\r\nngb-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n  max-height: 600px;\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n.img-small[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  width: 90vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3J0Z2VuZWVza3VuZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2IiLCJmaWxlIjoic3BvcnRnZW5lZXNrdW5kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtdGl0bGUsIG1hdC1jYXJkLWNvbnRlbnQsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAvKiBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTguNHB4IC0gNjRweCk7XHJcbn1cclxuLnBhZ2UtdGl0bGUge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLnNwYWNlciB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbm5nYi1jYXJvdXNlbCBpbWcge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1nLXNtYWxsIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file was autogenerated by dynamically running setEnv.ts and using dotenv for managing API key secrecy
const environment = {
    production: false,
    GOOGLE_MAPS_API_KEY: 'AIzaSyCKa2XQqdXWMSocO3XOGioqWZMTUChTSoE'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map