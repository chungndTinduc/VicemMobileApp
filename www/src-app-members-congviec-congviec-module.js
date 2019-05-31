(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-congviec-congviec-module"],{

/***/ "./src/app/members/congviec/congviec.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/congviec/congviec.module.ts ***!
  \*****************************************************/
/*! exports provided: CongviecPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongviecPageModule", function() { return CongviecPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _congviec_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./congviec.page */ "./src/app/members/congviec/congviec.page.ts");







var routes = [
    {
        path: '',
        component: _congviec_page__WEBPACK_IMPORTED_MODULE_6__["CongviecPage"]
    }
];
var CongviecPageModule = /** @class */ (function () {
    function CongviecPageModule() {
    }
    CongviecPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_congviec_page__WEBPACK_IMPORTED_MODULE_6__["CongviecPage"]]
        })
    ], CongviecPageModule);
    return CongviecPageModule;
}());



/***/ }),

/***/ "./src/app/members/congviec/congviec.page.html":
/*!*****************************************************!*\
  !*** ./src/app/members/congviec/congviec.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Công việc</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button >\r\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab [root]=\"tab1Root\"></ion-tab>\r\n    <ion-tab [root]=\"tab2Root\"></ion-tab>\r\n    <ion-tab [root]=\"tab3Root\"></ion-tab>\r\n  </ion-tabs>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/congviec/congviec.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/members/congviec/congviec.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvY29uZ3ZpZWMvY29uZ3ZpZWMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/members/congviec/congviec.page.ts":
/*!***************************************************!*\
  !*** ./src/app/members/congviec/congviec.page.ts ***!
  \***************************************************/
/*! exports provided: CongviecPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongviecPage", function() { return CongviecPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CongviecPage = /** @class */ (function () {
    function CongviecPage() {
    }
    CongviecPage.prototype.ngOnInit = function () {
    };
    CongviecPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-congviec',
            template: __webpack_require__(/*! ./congviec.page.html */ "./src/app/members/congviec/congviec.page.html"),
            styles: [__webpack_require__(/*! ./congviec.page.scss */ "./src/app/members/congviec/congviec.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CongviecPage);
    return CongviecPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-congviec-congviec-module.js.map