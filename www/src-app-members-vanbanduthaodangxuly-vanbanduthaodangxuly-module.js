(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-vanbanduthaodangxuly-vanbanduthaodangxuly-module"],{

/***/ "./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.module.ts ***!
  \*****************************************************************************/
/*! exports provided: VanbanduthaodangxulyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbanduthaodangxulyPageModule", function() { return VanbanduthaodangxulyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vanbanduthaodangxuly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanbanduthaodangxuly.page */ "./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.page.ts");







var routes = [
    {
        path: '',
        component: _vanbanduthaodangxuly_page__WEBPACK_IMPORTED_MODULE_6__["VanbanduthaodangxulyPage"]
    }
];
var VanbanduthaodangxulyPageModule = /** @class */ (function () {
    function VanbanduthaodangxulyPageModule() {
    }
    VanbanduthaodangxulyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vanbanduthaodangxuly_page__WEBPACK_IMPORTED_MODULE_6__["VanbanduthaodangxulyPage"]]
        })
    ], VanbanduthaodangxulyPageModule);
    return VanbanduthaodangxulyPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Văn bản dự thảo</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"presentPopover($event)\">\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-tab-bar>\n        <ion-tab-button tab=\"vanbanduthao\" class=\"tabvanbanduthao\">\n            <ion-icon name=\"ios-document\"></ion-icon>\n            <ion-label>Danh sách</ion-label>\n          </ion-tab-button>\n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaochuaxuly\" class=\"tabvanbanduthaochuaxuly\">\n          <ion-icon name=\"ios-document\"></ion-icon>\n          <ion-label>Chưa xử lý</ion-label>\n        </ion-tab-button>\n  \n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaodangxuly\" class=\"tabvanbanduthaodangxuly\">\n          <ion-icon name=\"ios-document\"></ion-icon>\n           <ion-label>Đang xử lý</ion-label>\n        </ion-tab-button>\n  \n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaodaxuly\" class=\"tabvanbanduthaodaxuly\">\n          <ion-icon name=\"ios-document\"></ion-icon>\n          <ion-label>Đã xử lý</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n      \n</ion-header>\n\n<ion-content>\n  <ion-searchbar auocomplete=\"on\" id=\"keyword\" name=\"keyword\" (ionChange)=\"loadsearch()\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\n  <ion-list reorder=\"true\">\n    <ion-item *ngFor=\"let vanban of danhsachVanBans\" routerLink=\"/members/tabs/vanbanduthao/vanbanduthaochitiet/{{vanban.ID}}\">\n      <ion-label>\n        <div *ngIf=\"vanban.TenLoaiVanBan!=null\"><span > Loại văn bản :</span> {{vanban.TenLoaiVanBan}}<br></div>\n        <div *ngIf=\"vanban.TenNguoiTao!=null\"><span >Người tạo :</span> {{vanban.TenNguoiTao}}<br></div>\n        <div *ngIf=\"vanban.SoKyHieu!=null\"><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\n        <div *ngIf=\"vanban.TenDonViSoanThao!=''\"><span > Đơn vị soạn thảo:</span> {{vanban.TenDonViSoanThao}}<br></div>\n        {{vanban.TrichYeu}}\n      </ion-label>\n    </ion-item >\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 5px 0px; }\n\nion-item ion-label span {\n  font-weight: bold; }\n\n.tabvanbanduthaodangxuly {\n  color: burlywood; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kdXRoYW9kYW5neHVseS9EOlxcQ1ZcXFRpbmhWYW5cXFZpY2VtXFxBcHBcXFZpY2VtTW9iaWxlQXBwL3NyY1xcYXBwXFxtZW1iZXJzXFx2YW5iYW5kdXRoYW9kYW5neHVseVxcdmFuYmFuZHV0aGFvZGFuZ3h1bHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWUsRUFBQTs7QUFFbkI7RUFDRyxpQkFBZ0IsRUFBQTs7QUFFbkI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvdmFuYmFuZHV0aGFvZGFuZ3h1bHkvdmFuYmFuZHV0aGFvZGFuZ3h1bHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nOjVweCAwcHg7XHJcbn1cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIHNwYW57XHJcbiAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG59XHJcbi50YWJ2YW5iYW5kdXRoYW9kYW5neHVseXtcclxuICAgIGNvbG9yOiBidXJseXdvb2Q7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.page.ts ***!
  \***************************************************************************/
/*! exports provided: VanbanduthaodangxulyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbanduthaodangxulyPage", function() { return VanbanduthaodangxulyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");



var VanbanduthaodangxulyPage = /** @class */ (function () {
    function VanbanduthaodangxulyPage(authService) {
        this.authService = authService;
        this.total = 0;
        this.dataquery = { CurrentPage: 1, RowPerPage: 10, SearchIn: 'SoKyHieu,TrichYeu', Keyword: '' };
    }
    VanbanduthaodangxulyPage.prototype.ngOnInit = function () {
    };
    VanbanduthaodangxulyPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    VanbanduthaodangxulyPage.prototype.load = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDuThaoDangXuLy(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
            return true;
        });
    };
    VanbanduthaodangxulyPage.prototype.loadsearch = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDuThaoDangXuLy(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
        });
    };
    VanbanduthaodangxulyPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.dataquery.CurrentPage == 1)
                _this.dataquery.CurrentPage = 2;
            if ((_this.dataquery.CurrentPage * _this.dataquery.RowPerPage) < _this.total) {
                _this.authService.getVanBanDuThaoDangXuLy(_this.dataquery).subscribe(function (res) {
                    for (var j = 0; j < res["Data"].length; j++) {
                        _this.danhsachVanBans.push(res["Data"][j]);
                    }
                });
                _this.dataquery.CurrentPage = _this.dataquery.CurrentPage + 1;
            }
            infiniteScroll.target.complete();
        }, 500);
    };
    VanbanduthaodangxulyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbanduthaodangxuly',
            template: __webpack_require__(/*! ./vanbanduthaodangxuly.page.html */ "./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.page.html"),
            styles: [__webpack_require__(/*! ./vanbanduthaodangxuly.page.scss */ "./src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], VanbanduthaodangxulyPage);
    return VanbanduthaodangxulyPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbanduthaodangxuly-vanbanduthaodangxuly-module.js.map