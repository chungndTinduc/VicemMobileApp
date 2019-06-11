(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-danhba-danhba-module"],{

/***/ "./src/app/members/danhba/danhba.module.ts":
/*!*************************************************!*\
  !*** ./src/app/members/danhba/danhba.module.ts ***!
  \*************************************************/
/*! exports provided: DanhbaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhbaPageModule", function() { return DanhbaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _danhba_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./danhba.page */ "./src/app/members/danhba/danhba.page.ts");







var routes = [
    {
        path: '',
        component: _danhba_page__WEBPACK_IMPORTED_MODULE_6__["DanhbaPage"]
    }
];
var DanhbaPageModule = /** @class */ (function () {
    function DanhbaPageModule() {
    }
    DanhbaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_danhba_page__WEBPACK_IMPORTED_MODULE_6__["DanhbaPage"]]
        })
    ], DanhbaPageModule);
    return DanhbaPageModule;
}());



/***/ }),

/***/ "./src/app/members/danhba/danhba.page.html":
/*!*************************************************!*\
  !*** ./src/app/members/danhba/danhba.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Danh bạ</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button >\r\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>    \r\n</ion-header>\r\n<ion-content>\r\n<ion-searchbar auocomplete=\"on\" id=\"keyword\" name=\"keyword\" (ionChange)=\"loadsearch()\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\r\n<ion-list reorder=\"true\">\r\n  <ion-item *ngFor=\"let danhba of danhsachs\" routerLink=\"/members/tabs/danhba/chitietdanhba/{{danhba.ID}}\">\r\n        <ion-avatar item-left class=\"avatar\">\r\n            <img src=\"/assets/img/not_avata.png\">\r\n          </ion-avatar>\r\n      <ion-label>\r\n      <h3 *ngIf=\"danhba.TenHienThi!=null\" class=\"line-break\"><span ></span> {{danhba.TenHienThi}} {{danhba.TenChucVu!=null?\"-\"+danhba.TenChucVu:\"\"}} {{danhba.TenDonVi!=null?\"-\"+danhba.TenDonVi:\"\"}}<br></h3>\r\n      <p *ngIf=\"danhba.Email!=null\"><span style=\"font-weight: bold\">Email:</span> {{danhba.Email}}<br></p>\r\n      <p *ngIf=\"danhba.DienThoai!=''\"><span style=\"font-weight: bold\">Điện thoại:</span> {{danhba.DienThoai}}<br></p>\r\n      <p *ngIf=\"danhba.DiDong!=''\"><span style=\"font-weight: bold\">Di động:</span> {{danhba.DiDong}}<br></p>\r\n    </ion-label>\r\n  </ion-item >\r\n</ion-list>\r\n\r\n<ion-list reorder=\"true\" *ngIf='!danhsachs'>\r\n  <ion-item *ngFor=\"let item of fakeUsers\" class='fakeItem'>\r\n        <ion-avatar item-left class=\"avatar\">\r\n            <img src=\"/assets/img/not_avata.png\">\r\n          </ion-avatar>\r\n      <ion-label>\r\n      <h3><br></h3>\r\n      <p><br></p>\r\n      <p ><br></p>\r\n      <p ><br></p>\r\n    </ion-label>\r\n  </ion-item >\r\n</ion-list>\r\n\r\n<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/danhba/danhba.page.scss":
/*!*************************************************!*\
  !*** ./src/app/members/danhba/danhba.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin-right: 15px; }\n\n.fakeItem h2, .fakeItem h3, .fakeItem p {\n  background-color: lightgrey;\n  opacity: 0.5;\n  height: 1em;\n  margin-top: 10px; }\n\n.fakeItem h2 {\n  width: 35%; }\n\n.fakeItem h3 {\n  width: 40%; }\n\n.fakeItem p {\n  width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9kYW5oYmEvRDpcXENWXFxUaW5oVmFuXFxWaWNlbVxcQXBwXFxWaWNlbU1vYmlsZUFwcC9zcmNcXGFwcFxcbWVtYmVyc1xcZGFuaGJhXFxkYW5oYmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBRU0sMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBTHRCO0VBU00sVUFBVSxFQUFBOztBQVRoQjtFQWFNLFVBQVUsRUFBQTs7QUFiaEI7RUFpQk0sVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9kYW5oYmEvZGFuaGJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXJ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5mYWtlSXRlbSB7XHJcbiAgICBoMiwgaDMsIHAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoMiB7XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoMyB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9ICBcclxuICBcclxuICAgIHAge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/members/danhba/danhba.page.ts":
/*!***********************************************!*\
  !*** ./src/app/members/danhba/danhba.page.ts ***!
  \***********************************************/
/*! exports provided: DanhbaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhbaPage", function() { return DanhbaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");



var DanhbaPage = /** @class */ (function () {
    function DanhbaPage(authService) {
        this.authService = authService;
        this.total = 0;
        this.fakeUsers = new Array(10);
        this.dataquery = { CurrentPage: 1, RowPerPage: 10, SearchIn: 'TenHienThi,Email', Keyword: '' };
    }
    DanhbaPage.prototype.ngOnInit = function () {
    };
    DanhbaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.load();
        }, 5500);
    };
    DanhbaPage.prototype.load = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getDanhBa(this.dataquery).subscribe(function (res) {
            _this.danhsachs = res["Data"];
            _this.total = res["Total"];
            return true;
        });
    };
    DanhbaPage.prototype.loadsearch = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getDanhBa(this.dataquery).subscribe(function (res) {
            _this.danhsachs = res["Data"];
            _this.total = res["Total"];
        });
    };
    DanhbaPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.dataquery.CurrentPage == 1)
                _this.dataquery.CurrentPage = 2;
            if ((_this.dataquery.CurrentPage * _this.dataquery.RowPerPage) < _this.total) {
                _this.authService.getDanhBa(_this.dataquery).subscribe(function (res) {
                    for (var j = 0; j < res["Data"].length; j++) {
                        _this.danhsachs.push(res["Data"][j]);
                    }
                });
                _this.dataquery.CurrentPage = _this.dataquery.CurrentPage + 1;
            }
            infiniteScroll.target.complete();
        }, 500);
    };
    DanhbaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-danhba',
            template: __webpack_require__(/*! ./danhba.page.html */ "./src/app/members/danhba/danhba.page.html"),
            styles: [__webpack_require__(/*! ./danhba.page.scss */ "./src/app/members/danhba/danhba.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], DanhbaPage);
    return DanhbaPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-danhba-danhba-module.js.map