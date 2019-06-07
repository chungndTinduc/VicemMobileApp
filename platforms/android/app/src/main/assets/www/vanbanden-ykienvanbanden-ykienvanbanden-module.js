(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vanbanden-ykienvanbanden-ykienvanbanden-module"],{

/***/ "./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.module.ts ***!
  \***************************************************************************/
/*! exports provided: YkienvanbandenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YkienvanbandenPageModule", function() { return YkienvanbandenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ykienvanbanden_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ykienvanbanden.page */ "./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.page.ts");







var routes = [
    {
        path: '',
        component: _ykienvanbanden_page__WEBPACK_IMPORTED_MODULE_6__["YkienvanbandenPage"]
    }
];
var YkienvanbandenPageModule = /** @class */ (function () {
    function YkienvanbandenPageModule() {
    }
    YkienvanbandenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ykienvanbanden_page__WEBPACK_IMPORTED_MODULE_6__["YkienvanbandenPage"]]
        })
    ], YkienvanbandenPageModule);
    return YkienvanbandenPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <!-- <ion-menu-button></ion-menu-button> -->\r\n          <ion-back-button text=\"\" ></ion-back-button>     \r\n      </ion-buttons>\r\n      <ion-title>Ý kiến văn bản đến</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button>\r\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>    \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list reorder=\"true\">\r\n    <ion-item lines=\"none\"  *ngFor=\"let objyk of lstobject\">\r\n      <ion-label>\r\n        <div  ><span > Người dùng :</span> {{objyk.TenNguoiTao}}<br></div>\r\n        <div *ngIf=\"objyk.NoiDung!=''\"><span > Nội dung :</span> {{objyk.NoiDung}}<br></div>\r\n        <div><span > Thời gian:</span> {{objyk.NgayTao | date:'dd/MM/yyyy'}}<br></div>\r\n        <div class=\"line-break\"><span >Đầu mối:</span>\r\n          {{objyk.strDonViXuLy + objyk.strNguoiXuLy!=''?(\", \"+objyk.strNguoiXuLy):''}}\r\n        </div>\r\n        <div class=\"line-break\"><span >Phối hợp:</span>\r\n          {{objyk.strDonViNhanDeBiet + objyk.strNguoiNhanDeBiet!=''?(\", \"+objyk.strNguoiNhanDeBiet):''}}\r\n        </div>\r\n        <div class=\"line-break\"><span >Xem để biết:</span>\r\n          {{objyk.strDonViXem+ objyk.strNguoiXem!=''?(\", \"+objyk.strNguoiXem):''}}\r\n        </div>\r\n      </ion-label>\r\n    </ion-item >\r\n  </ion-list>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"success\" routerLink=\"\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvdmFuYmFuZGVuL3lraWVudmFuYmFuZGVuL3lraWVudmFuYmFuZGVuLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.page.ts ***!
  \*************************************************************************/
/*! exports provided: YkienvanbandenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YkienvanbandenPage", function() { return YkienvanbandenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var YkienvanbandenPage = /** @class */ (function () {
    function YkienvanbandenPage(authService, route) {
        this.authService = authService;
        this.route = route;
        this.dataquery = { VanBanID: 0 };
        this.total = 0;
    }
    YkienvanbandenPage.prototype.ngOnInit = function () {
    };
    YkienvanbandenPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    YkienvanbandenPage.prototype.load = function () {
        var _this = this;
        this.dataquery.VanBanID = parseInt(this.route.snapshot.paramMap.get('vanbandenid'));
        this.authService.getYKienVanBanDen(this.dataquery).subscribe(function (res) {
            _this.lstobject = res["Data"];
        });
    };
    YkienvanbandenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ykienvanbanden',
            template: __webpack_require__(/*! ./ykienvanbanden.page.html */ "./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.page.html"),
            styles: [__webpack_require__(/*! ./ykienvanbanden.page.scss */ "./src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], YkienvanbandenPage);
    return YkienvanbandenPage;
}());



/***/ })

}]);
//# sourceMappingURL=vanbanden-ykienvanbanden-ykienvanbanden-module.js.map