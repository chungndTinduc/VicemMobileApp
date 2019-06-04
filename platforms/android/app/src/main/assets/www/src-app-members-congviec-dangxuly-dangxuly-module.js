(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-congviec-dangxuly-dangxuly-module"],{

/***/ "./src/app/members/congviec/dangxuly/dangxuly.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/congviec/dangxuly/dangxuly.module.ts ***!
  \**************************************************************/
/*! exports provided: DangxulyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangxulyPageModule", function() { return DangxulyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dangxuly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dangxuly.page */ "./src/app/members/congviec/dangxuly/dangxuly.page.ts");







var routes = [
    {
        path: '',
        component: _dangxuly_page__WEBPACK_IMPORTED_MODULE_6__["DangxulyPage"]
    }
];
var DangxulyPageModule = /** @class */ (function () {
    function DangxulyPageModule() {
    }
    DangxulyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dangxuly_page__WEBPACK_IMPORTED_MODULE_6__["DangxulyPage"]]
        })
    ], DangxulyPageModule);
    return DangxulyPageModule;
}());



/***/ }),

/***/ "./src/app/members/congviec/dangxuly/dangxuly.page.html":
/*!**************************************************************!*\
  !*** ./src/app/members/congviec/dangxuly/dangxuly.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Công việc đang xử lý</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n  <ion-tab-bar  class=\"tab-header\" slot=\"top\" selected-tab=\"congviec/dangxuly\">\n        <ion-tab-button tab=\"congviec\" class=\"vanbanden\" class=\"tabvanbanden\">\n            <ion-icon  ios=\"ios-document-outline\" md=\"md-document\"></ion-icon>\n            <ion-label>Danh sách</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"congviec/chuaxuly\" class=\"tabvanbandenchuaxuly\">\n          <ion-icon  ios=\"ios-list-box-outline\" md=\"md-list-box\"></ion-icon>\n          <ion-label>Chưa xử lý</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"congviec/dangxuly\" class=\"tabvanbandenchuadoc\">\n          <ion-icon  ios=\"ios-git-compare\" md=\"md-git-compare\"></ion-icon>\n           <ion-label>Đang xử lý</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"congviec/daxuly\" class=\"tabvanbandenxulychinh\">\n          <ion-icon  ios=\"ios-checkmark-circle-outline\" md=\"md-checkmark-circle\"></ion-icon>\n          <ion-label>Đã xử lý</ion-label>\n        </ion-tab-button>\n  </ion-tab-bar>\n</ion-header>\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/congviec/dangxuly/dangxuly.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/members/congviec/dangxuly/dangxuly.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvY29uZ3ZpZWMvZGFuZ3h1bHkvZGFuZ3h1bHkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/members/congviec/dangxuly/dangxuly.page.ts":
/*!************************************************************!*\
  !*** ./src/app/members/congviec/dangxuly/dangxuly.page.ts ***!
  \************************************************************/
/*! exports provided: DangxulyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangxulyPage", function() { return DangxulyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DangxulyPage = /** @class */ (function () {
    function DangxulyPage() {
    }
    DangxulyPage.prototype.ngOnInit = function () {
    };
    DangxulyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dangxuly',
            template: __webpack_require__(/*! ./dangxuly.page.html */ "./src/app/members/congviec/dangxuly/dangxuly.page.html"),
            styles: [__webpack_require__(/*! ./dangxuly.page.scss */ "./src/app/members/congviec/dangxuly/dangxuly.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DangxulyPage);
    return DangxulyPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-congviec-dangxuly-dangxuly-module.js.map