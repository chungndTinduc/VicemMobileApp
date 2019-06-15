(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-viewfile-viewfile-module"],{

/***/ "./src/app/members/viewfile/viewfile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/viewfile/viewfile.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewfilePageModule", function() { return ViewfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewfile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewfile.page */ "./src/app/members/viewfile/viewfile.page.ts");







var routes = [
    {
        path: '',
        component: _viewfile_page__WEBPACK_IMPORTED_MODULE_6__["ViewfilePage"]
    }
];
var ViewfilePageModule = /** @class */ (function () {
    function ViewfilePageModule() {
    }
    ViewfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewfile_page__WEBPACK_IMPORTED_MODULE_6__["ViewfilePage"]]
        })
    ], ViewfilePageModule);
    return ViewfilePageModule;
}());



/***/ }),

/***/ "./src/app/members/viewfile/viewfile.page.html":
/*!*****************************************************!*\
  !*** ./src/app/members/viewfile/viewfile.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<!-- <ion-navbar>\n    <ion-title>Swipeabale Tabs</ion-title>\n\n</ion-navbar> -->\n\n<ion-toolbar>\n    <ion-segment [(ngModel)]=\"page\" color=\"dark\">\n        <ion-segment-button value=\"camera\" (click)=\"selectedTab(0)\">\n            <ion-icon name=\"camera\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"bookmark\" (click)=\"selectedTab(1)\">\n            <ion-icon name=\"bookmark\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"xxxx\" (click)=\"selectedTab(2)\">\n                <ion-icon name=\"camera\"></ion-icon>\n            </ion-segment-button>\n    </ion-segment>\n</ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/members/viewfile/viewfile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/members/viewfile/viewfile.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvdmlld2ZpbGUvdmlld2ZpbGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/members/viewfile/viewfile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/members/viewfile/viewfile.page.ts ***!
  \***************************************************/
/*! exports provided: ViewfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewfilePage", function() { return ViewfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_members_vanbanden_vanbanden_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/members/vanbanden/vanbanden.page */ "./src/app/members/vanbanden/vanbanden.page.ts");
/* harmony import */ var src_app_members_vanbanden_vanbandenchuadoc_vanbandenchuadoc_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page */ "./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page.ts");
/* harmony import */ var src_app_members_vanbanden_vanbandenchuaxuly_vanbandenchuaxuly_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page */ "./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page.ts");







// import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';
var ViewfilePage = /** @class */ (function () {
    function ViewfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = src_app_members_vanbanden_vanbanden_page__WEBPACK_IMPORTED_MODULE_3__["VanbandenPage"];
        this.tab2Root = src_app_members_vanbanden_vanbandenchuadoc_vanbandenchuadoc_page__WEBPACK_IMPORTED_MODULE_4__["VanbandenchuadocPage"];
        this.tab3Root = src_app_members_vanbanden_vanbandenchuaxuly_vanbandenchuaxuly_page__WEBPACK_IMPORTED_MODULE_5__["VanbandenchuaxulyPage"];
        this.loaded = false;
        this.tabIndex = 0;
    }
    ViewfilePage.prototype.ngOnInit = function () {
        // const options: DocumentViewerOptions = {
        //   title: 'My PDF'
        // }
        // this.document.viewDocument('assets/filepdf.PDF', 'application/pdf', options)
    };
    ViewfilePage.prototype.ionViewDidLoad = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], ViewfilePage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("IonSegment"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewfilePage.prototype, "segments", void 0);
    ViewfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewfile',
            template: __webpack_require__(/*! ./viewfile.page.html */ "./src/app/members/viewfile/viewfile.page.html"),
            styles: [__webpack_require__(/*! ./viewfile.page.scss */ "./src/app/members/viewfile/viewfile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ViewfilePage);
    return ViewfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-viewfile-viewfile-module.js.map