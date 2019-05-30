(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-vanbanden-vanbandenchuadoc-vanbandenchuadoc-module"],{

/***/ "./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.module.ts ***!
  \*******************************************************************************/
/*! exports provided: VanbandenchuadocPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandenchuadocPageModule", function() { return VanbandenchuadocPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vanbandenchuadoc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanbandenchuadoc.page */ "./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page.ts");







var routes = [
    {
        path: '',
        component: _vanbandenchuadoc_page__WEBPACK_IMPORTED_MODULE_6__["VanbandenchuadocPage"]
    }
];
var VanbandenchuadocPageModule = /** @class */ (function () {
    function VanbandenchuadocPageModule() {
    }
    VanbandenchuadocPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vanbandenchuadoc_page__WEBPACK_IMPORTED_MODULE_6__["VanbandenchuadocPage"]]
        })
    ], VanbandenchuadocPageModule);
    return VanbandenchuadocPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Văn bản đến</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button>\r\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-tab-bar>\r\n        <ion-tab-button tab=\"vanbanden\" class=\"vanbanden\" class=\"tabvanbanden\">\r\n            <ion-icon name=\"ios-document\"></ion-icon>\r\n            <ion-label>Danh sách</ion-label>\r\n          </ion-tab-button>\r\n        <ion-tab-button tab=\"vanbanden/vanbandenchuaxuly\" class=\"tabvanbandenchuaxuly\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Chưa xử lý</ion-label>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button tab=\"vanbanden/vanbandenchuadoc\" class=\"tabvanbandenchuadoc\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n           <ion-label>Chưa đọc</ion-label>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button tab=\"vanbanden/vanbandenxulychinh\" class=\"tabvanbandenxulychinh\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Xử lý chính</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    \r\n</ion-header>\r\n<ion-content>\r\n<ion-searchbar auocomplete=\"on\" id=\"keyword\" name=\"keyword\" (ionChange)=\"loadsearch()\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\r\n<ion-list reorder=\"true\">\r\n  <ion-item  lines=\"none\" *ngFor=\"let vanban of danhsachVanBans\" routerLink=\"/members/tabs/vanbanden/chitietvanbanden/{{vanban.ID}}\">\r\n    <ion-label>\r\n      <div *ngIf=\"vanban.NgayDen!=null\"><span > Ngày đến :</span> {{vanban.NgayDen|date:'dd/MM/yyyy'}}<br></div>\r\n      <div *ngIf=\"vanban.SoKyHieu!=''\"><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\r\n      {{vanban.TrichYeu}}\r\n    </ion-label>\r\n  </ion-item >\r\n</ion-list>\r\n<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 5px 0px; }\n\nion-item ion-label span {\n  font-weight: bold; }\n\n.tabvanbandenchuadoc {\n  color: burlywood; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kZW4vdmFuYmFuZGVuY2h1YWRvYy9FOlxcUHJvamVjdFxcTWluZVxcTW9iaWxlXFxWaWNlbVxcRW9mZmljZUFwcC9zcmNcXGFwcFxcbWVtYmVyc1xcdmFuYmFuZGVuXFx2YW5iYW5kZW5jaHVhZG9jXFx2YW5iYW5kZW5jaHVhZG9jLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0csaUJBQWdCLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL3ZhbmJhbmRlbi92YW5iYW5kZW5jaHVhZG9jL3ZhbmJhbmRlbmNodWFkb2MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nOjVweCAwcHg7XHJcbn1cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIHNwYW57XHJcbiAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG59XHJcbi50YWJ2YW5iYW5kZW5jaHVhZG9je1xyXG4gICAgY29sb3I6IGJ1cmx5d29vZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page.ts ***!
  \*****************************************************************************/
/*! exports provided: VanbandenchuadocPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandenchuadocPage", function() { return VanbandenchuadocPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");



var VanbandenchuadocPage = /** @class */ (function () {
    function VanbandenchuadocPage(authService) {
        this.authService = authService;
        this.total = 0;
        this.dataquery = { CurrentPage: 1, RowPerPage: 10, SearchIn: 'SoKyHieu,TrichYeu', Keyword: '', TrangThaiID: 0 };
    }
    VanbandenchuadocPage.prototype.ngOnInit = function () {
    };
    VanbandenchuadocPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    VanbandenchuadocPage.prototype.load = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDenChuaDoc(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
        });
    };
    VanbandenchuadocPage.prototype.loadsearch = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDenChuaDoc(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
        });
    };
    VanbandenchuadocPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.dataquery.CurrentPage == 1)
                _this.dataquery.CurrentPage = 2;
            if ((_this.dataquery.CurrentPage * _this.dataquery.RowPerPage) < _this.total) {
                _this.authService.getVanBanDenChuaDoc(_this.dataquery).subscribe(function (res) {
                    for (var j = 0; j < res["Data"].length; j++) {
                        _this.danhsachVanBans.push(res["Data"][j]);
                    }
                });
                _this.dataquery.CurrentPage = _this.dataquery.CurrentPage + 1;
            }
            infiniteScroll.target.complete();
        }, 500);
    };
    VanbandenchuadocPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbandenchuadoc',
            template: __webpack_require__(/*! ./vanbandenchuadoc.page.html */ "./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page.html"),
            styles: [__webpack_require__(/*! ./vanbandenchuadoc.page.scss */ "./src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], VanbandenchuadocPage);
    return VanbandenchuadocPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbanden-vanbandenchuadoc-vanbandenchuadoc-module.js.map