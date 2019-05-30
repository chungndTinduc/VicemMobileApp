(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-vanbanden-vanbandenchuaxuly-vanbandenchuaxuly-module"],{

/***/ "./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.module.ts ***!
  \*********************************************************************************/
/*! exports provided: VanbandenchuaxulyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandenchuaxulyPageModule", function() { return VanbandenchuaxulyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vanbandenchuaxuly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanbandenchuaxuly.page */ "./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page.ts");







var routes = [
    {
        path: '',
        component: _vanbandenchuaxuly_page__WEBPACK_IMPORTED_MODULE_6__["VanbandenchuaxulyPage"]
    }
];
var VanbandenchuaxulyPageModule = /** @class */ (function () {
    function VanbandenchuaxulyPageModule() {
    }
    VanbandenchuaxulyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vanbandenchuaxuly_page__WEBPACK_IMPORTED_MODULE_6__["VanbandenchuaxulyPage"]]
        })
    ], VanbandenchuaxulyPageModule);
    return VanbandenchuaxulyPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Văn bản đến</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"presentPopover($event)\">\r\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n      <ion-tab-bar>\r\n        <ion-tab-button tab=\"vanbanden\" class=\"vanbanden\" class=\"tabvanbanden\">\r\n            <ion-icon name=\"ios-document\"></ion-icon>\r\n            <ion-label>Danh sách</ion-label>\r\n          </ion-tab-button>\r\n        <ion-tab-button tab=\"vanbanden/vanbandenchuaxuly\" class=\"tabvanbandenchuaxuly\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Chưa xử lý</ion-label>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button tab=\"vanbanden/vanbandenchuadoc\" class=\"tabvanbandenchuadoc\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n           <ion-label>Chưa đọc</ion-label>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button tab=\"vanbanden/vanbandenxulychinh\" class=\"tabvanbandenxulychinh\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Xử lý chính</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n      \r\n</ion-header>\r\n<ion-content>\r\n  <ion-searchbar auocomplete=\"on\" id=\"keyword\" name=\"keyword\" (ionChange)=\"loadsearch()\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\r\n  <ion-list reorder=\"true\">\r\n    <ion-item  lines=\"none\" *ngFor=\"let vanban of danhsachVanBans\" routerLink=\"/members/tabs/vanbanden/chitietvanbanden/{{vanban.ID}}\">\r\n      <ion-label>\r\n        <div *ngIf=\"vanban.NgayDen!=null\"><span > Ngày đến :</span> {{vanban.NgayDen|date:'dd/MM/yyyy'}}<br></div>\r\n        <div *ngIf=\"vanban.SoKyHieu!=''\"><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\r\n        {{vanban.TrichYeu}}\r\n      </ion-label>\r\n    </ion-item >\r\n  </ion-list>\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 5px 0px; }\n\nion-item ion-label span {\n  font-weight: bold; }\n\n.tabvanbandenchuaxuly {\n  color: burlywood; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kZW4vdmFuYmFuZGVuY2h1YXh1bHkvRDpcXENWXFxUaW5oVmFuXFxWaWNlbVxcQXBwXFxWaWNlbU1vYmlsZUFwcC9zcmNcXGFwcFxcbWVtYmVyc1xcdmFuYmFuZGVuXFx2YW5iYW5kZW5jaHVheHVseVxcdmFuYmFuZGVuY2h1YXh1bHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWUsRUFBQTs7QUFFbkI7RUFDRyxpQkFBZ0IsRUFBQTs7QUFFbkI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvdmFuYmFuZGVuL3ZhbmJhbmRlbmNodWF4dWx5L3ZhbmJhbmRlbmNodWF4dWx5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgcGFkZGluZzo1cHggMHB4O1xyXG59XHJcbmlvbi1pdGVtIGlvbi1sYWJlbCBzcGFue1xyXG4gICBmb250LXdlaWdodDpib2xkOyBcclxufVxyXG4udGFidmFuYmFuZGVuY2h1YXh1bHl7XHJcbiAgICBjb2xvcjogYnVybHl3b29kO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page.ts ***!
  \*******************************************************************************/
/*! exports provided: VanbandenchuaxulyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandenchuaxulyPage", function() { return VanbandenchuaxulyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");



var VanbandenchuaxulyPage = /** @class */ (function () {
    function VanbandenchuaxulyPage(authService) {
        this.authService = authService;
        this.total = 0;
        this.dataquery = { CurrentPage: 1, RowPerPage: 10, SearchIn: 'SoKyHieu,TrichYeu', Keyword: '', TrangThaiID: 0 };
    }
    VanbandenchuaxulyPage.prototype.ngOnInit = function () {
    };
    VanbandenchuaxulyPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    VanbandenchuaxulyPage.prototype.load = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDenChuaXuLy(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
        });
    };
    VanbandenchuaxulyPage.prototype.loadsearch = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDenChuaXuLy(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
        });
    };
    VanbandenchuaxulyPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.dataquery.CurrentPage == 1)
                _this.dataquery.CurrentPage = 2;
            if ((_this.dataquery.CurrentPage * _this.dataquery.RowPerPage) < _this.total) {
                _this.authService.getVanBanDenChuaXuLy(_this.dataquery).subscribe(function (res) {
                    for (var j = 0; j < res["Data"].length; j++) {
                        _this.danhsachVanBans.push(res["Data"][j]);
                    }
                });
                _this.dataquery.CurrentPage = _this.dataquery.CurrentPage + 1;
            }
            infiniteScroll.target.complete();
        }, 500);
    };
    VanbandenchuaxulyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbandenchuaxuly',
            template: __webpack_require__(/*! ./vanbandenchuaxuly.page.html */ "./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page.html"),
            styles: [__webpack_require__(/*! ./vanbandenchuaxuly.page.scss */ "./src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], VanbandenchuaxulyPage);
    return VanbandenchuaxulyPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbanden-vanbandenchuaxuly-vanbandenchuaxuly-module.js.map