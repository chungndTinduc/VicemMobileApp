(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-vanbanduthao-vanbanduthao-module"],{

/***/ "./src/app/members/vanbanduthao/vanbanduthao.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/members/vanbanduthao/vanbanduthao.module.ts ***!
  \*************************************************************/
/*! exports provided: VanbanduthaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbanduthaoPageModule", function() { return VanbanduthaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vanbanduthao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanbanduthao.page */ "./src/app/members/vanbanduthao/vanbanduthao.page.ts");







var routes = [
    {
        path: '',
        component: _vanbanduthao_page__WEBPACK_IMPORTED_MODULE_6__["VanbanduthaoPage"]
    }
];
var VanbanduthaoPageModule = /** @class */ (function () {
    function VanbanduthaoPageModule() {
    }
    VanbanduthaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vanbanduthao_page__WEBPACK_IMPORTED_MODULE_6__["VanbanduthaoPage"]]
        })
    ], VanbanduthaoPageModule);
    return VanbanduthaoPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbanduthao/vanbanduthao.page.html":
/*!*************************************************************!*\
  !*** ./src/app/members/vanbanduthao/vanbanduthao.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Văn bản dự thảo</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n      <ion-tab-bar>\r\n        <ion-tab-button tab=\"vanbanduthao\" class=\"tabvanbanduthao\">\r\n            <ion-icon name=\"ios-document\"></ion-icon>\r\n            <ion-label>Danh sách</ion-label>\r\n          </ion-tab-button>\r\n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaochuaxuly\" class=\"tabvanbanduthaochuaxuly\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Chưa xử lý</ion-label>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaodangxuly\" class=\"tabvanbanduthaodangxuly\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n           <ion-label>Đang xử lý</ion-label>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaodaxuly\" class=\"tabvanbanduthaodaxuly\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Đã xử lý</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n      \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar auocomplete=\"on\" id=\"keyword\" name=\"keyword\" (ionChange)=\"loadsearch()\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\r\n  <ion-list reorder=\"true\">\r\n    <ion-item *ngFor=\"let vanban of danhsachVanBans\" routerLink=\"/members/tabs/vanbanduthao/vanbanduthaochitiet/{{vanban.ID}}\">\r\n      <ion-label>\r\n        <div *ngIf=\"vanban.TenLoaiVanBan!=null\"><span > Loại văn bản :</span> {{vanban.TenLoaiVanBan}}<br></div>\r\n        <div *ngIf=\"vanban.TenNguoiTao!=null\"><span >Người tạo :</span> {{vanban.TenNguoiTao}}<br></div>\r\n        <div *ngIf=\"vanban.SoKyHieu!=null\"><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\r\n        <div *ngIf=\"vanban.TenDonViSoanThao!=''\"><span > Đơn vị soạn thảo:</span> {{vanban.TenDonViSoanThao}}<br></div>\r\n        {{vanban.TrichYeu}}\r\n      </ion-label>\r\n    </ion-item >\r\n  </ion-list>\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/vanbanduthao/vanbanduthao.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/members/vanbanduthao/vanbanduthao.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 5px 0px; }\n\nion-item ion-label span {\n  font-weight: bold; }\n\n.tabvanbanduthao {\n  color: burlywood; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kdXRoYW8vRTpcXFByb2plY3RcXE1pbmVcXE1vYmlsZVxcVmljZW1cXEVvZmZpY2VBcHAvc3JjXFxhcHBcXG1lbWJlcnNcXHZhbmJhbmR1dGhhb1xcdmFuYmFuZHV0aGFvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0csaUJBQWdCLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL3ZhbmJhbmR1dGhhby92YW5iYW5kdXRoYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nOjVweCAwcHg7XHJcbn1cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIHNwYW57XHJcbiAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG59XHJcbi50YWJ2YW5iYW5kdXRoYW97XHJcbiAgICBjb2xvcjogYnVybHl3b29kO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/members/vanbanduthao/vanbanduthao.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/members/vanbanduthao/vanbanduthao.page.ts ***!
  \***********************************************************/
/*! exports provided: VanbanduthaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbanduthaoPage", function() { return VanbanduthaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");



var VanbanduthaoPage = /** @class */ (function () {
    function VanbanduthaoPage(authService) {
        this.authService = authService;
        this.total = 0;
        this.dataquery = { CurrentPage: 1, RowPerPage: 10, SearchIn: 'SoKyHieu,TrichYeu', Keyword: '' };
    }
    VanbanduthaoPage.prototype.ngOnInit = function () {
    };
    VanbanduthaoPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    VanbanduthaoPage.prototype.load = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDuThao(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
            return true;
        });
    };
    VanbanduthaoPage.prototype.loadsearch = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDuThao(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
        });
    };
    VanbanduthaoPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.dataquery.CurrentPage == 1)
                _this.dataquery.CurrentPage = 2;
            if ((_this.dataquery.CurrentPage * _this.dataquery.RowPerPage) < _this.total) {
                _this.authService.getVanBanDuThao(_this.dataquery).subscribe(function (res) {
                    for (var j = 0; j < res["Data"].length; j++) {
                        _this.danhsachVanBans.push(res["Data"][j]);
                    }
                });
                _this.dataquery.CurrentPage = _this.dataquery.CurrentPage + 1;
            }
            infiniteScroll.target.complete();
        }, 500);
    };
    VanbanduthaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbanduthao',
            template: __webpack_require__(/*! ./vanbanduthao.page.html */ "./src/app/members/vanbanduthao/vanbanduthao.page.html"),
            styles: [__webpack_require__(/*! ./vanbanduthao.page.scss */ "./src/app/members/vanbanduthao/vanbanduthao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], VanbanduthaoPage);
    return VanbanduthaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbanduthao-vanbanduthao-module.js.map