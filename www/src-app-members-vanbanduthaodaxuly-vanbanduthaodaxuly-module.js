(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-vanbanduthaodaxuly-vanbanduthaodaxuly-module"],{

/***/ "./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.module.ts ***!
  \*************************************************************************/
/*! exports provided: VanbanduthaodaxulyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbanduthaodaxulyPageModule", function() { return VanbanduthaodaxulyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vanbanduthaodaxuly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanbanduthaodaxuly.page */ "./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.page.ts");







var routes = [
    {
        path: '',
        component: _vanbanduthaodaxuly_page__WEBPACK_IMPORTED_MODULE_6__["VanbanduthaodaxulyPage"]
    }
];
var VanbanduthaodaxulyPageModule = /** @class */ (function () {
    function VanbanduthaodaxulyPageModule() {
    }
    VanbanduthaodaxulyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vanbanduthaodaxuly_page__WEBPACK_IMPORTED_MODULE_6__["VanbanduthaodaxulyPage"]]
        })
    ], VanbanduthaodaxulyPageModule);
    return VanbanduthaodaxulyPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Văn bản dự thảo</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-tab-bar>\n        <ion-tab-button tab=\"vanbanduthao\" class=\"tabvanbanduthao\">\n            <ion-icon name=\"ios-document\"></ion-icon>\n            <ion-label>Danh sách</ion-label>\n          </ion-tab-button>\n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaochuaxuly\" class=\"tabvanbanduthaochuaxuly\">\n          <ion-icon name=\"ios-document\"></ion-icon>\n          <ion-label>Chưa xử lý</ion-label>\n        </ion-tab-button>\n  \n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaodangxuly\" class=\"tabvanbanduthaodangxuly\">\n          <ion-icon name=\"ios-document\"></ion-icon>\n           <ion-label>Đang xử lý</ion-label>\n        </ion-tab-button>\n  \n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaodaxuly\" class=\"tabvanbanduthaodaxuly\">\n          <ion-icon name=\"ios-document\"></ion-icon>\n          <ion-label>Đã xử lý</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n      \n</ion-header>\n\n<ion-content>\n  <ion-searchbar auocomplete=\"on\" id=\"keyword\" name=\"keyword\" (ionChange)=\"loadsearch()\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\n  <ion-list reorder=\"true\">\n    <ion-item *ngFor=\"let vanban of danhsachVanBans\" routerLink=\"/members/tabs/vanbanduthao/vanbanduthaochitiet/{{vanban.ID}}\">\n      <ion-label>\n        <div *ngIf=\"vanban.TenLoaiVanBan!=null\"><span > Loại văn bản :</span> {{vanban.TenLoaiVanBan}}<br></div>\n        <div *ngIf=\"vanban.TenNguoiTao!=null\"><span >Người tạo :</span> {{vanban.TenNguoiTao}}<br></div>\n        <div *ngIf=\"vanban.SoKyHieu!=null\"><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\n        <div *ngIf=\"vanban.TenDonViSoanThao!=''\"><span > Đơn vị soạn thảo:</span> {{vanban.TenDonViSoanThao}}<br></div>\n        {{vanban.TrichYeu}}\n      </ion-label>\n    </ion-item >\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"
=======
module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Văn bản dự thảo</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n      <ion-tab-bar>\r\n        <ion-tab-button tab=\"vanbanduthao\" class=\"tabvanbanduthao\">\r\n            <ion-icon name=\"ios-document\"></ion-icon>\r\n            <ion-label>Danh sách</ion-label>\r\n          </ion-tab-button>\r\n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaochuaxuly\" class=\"tabvanbanduthaochuaxuly\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Chưa xử lý</ion-label>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaodangxuly\" class=\"tabvanbanduthaodangxuly\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n           <ion-label>Đang xử lý</ion-label>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button tab=\"vanbanduthao/vanbanduthaodaxuly\" class=\"tabvanbanduthaodaxuly\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Đã xử lý</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n      \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar auocomplete=\"on\" id=\"keyword\" name=\"keyword\" (ionChange)=\"loadsearch()\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\r\n  <ion-list reorder=\"true\">\r\n    <ion-item *ngFor=\"let vanban of danhsachVanBans\" routerLink=\"/members/tabs/vanbanduthao/vanbanduthaochitiet/{{vanban.ID}}\">\r\n      <ion-label>\r\n        <div *ngIf=\"vanban.TenLoaiVanBan!=null\"><span > Loại văn bản :</span> {{vanban.TenLoaiVanBan}}<br></div>\r\n        <div *ngIf=\"vanban.TenNguoiTao!=null\"><span >Người tạo :</span> {{vanban.TenNguoiTao}}<br></div>\r\n        <div *ngIf=\"vanban.SoKyHieu!=null\"><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\r\n        <div *ngIf=\"vanban.TenDonViSoanThao!=''\"><span > Đơn vị soạn thảo:</span> {{vanban.TenDonViSoanThao}}<br></div>\r\n        {{vanban.TrichYeu}}\r\n      </ion-label>\r\n    </ion-item >\r\n  </ion-list>\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"
>>>>>>> c0c083cbee8206c02680291e762026d9488b4f4a

/***/ }),

/***/ "./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 5px 0px; }\n\nion-item ion-label span {\n  font-weight: bold; }\n\n.tabvanbanduthaodaxuly {\n  color: burlywood; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kdXRoYW9kYXh1bHkvRTpcXFByb2plY3RcXE1pbmVcXE1vYmlsZVxcVmljZW1cXEVvZmZpY2VBcHAvc3JjXFxhcHBcXG1lbWJlcnNcXHZhbmJhbmR1dGhhb2RheHVseVxcdmFuYmFuZHV0aGFvZGF4dWx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0csaUJBQWdCLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL3ZhbmJhbmR1dGhhb2RheHVseS92YW5iYW5kdXRoYW9kYXh1bHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nOjVweCAwcHg7XHJcbn1cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIHNwYW57XHJcbiAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG59XHJcbi50YWJ2YW5iYW5kdXRoYW9kYXh1bHl7XHJcbiAgICBjb2xvcjogYnVybHl3b29kO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.page.ts ***!
  \***********************************************************************/
/*! exports provided: VanbanduthaodaxulyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbanduthaodaxulyPage", function() { return VanbanduthaodaxulyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");



var VanbanduthaodaxulyPage = /** @class */ (function () {
    function VanbanduthaodaxulyPage(authService) {
        this.authService = authService;
        this.total = 0;
        this.dataquery = { CurrentPage: 1, RowPerPage: 10, SearchIn: 'SoKyHieu,TrichYeu', Keyword: '' };
    }
    VanbanduthaodaxulyPage.prototype.ngOnInit = function () {
    };
    VanbanduthaodaxulyPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    VanbanduthaodaxulyPage.prototype.load = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDuThaoDaXuLy(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
            return true;
        });
    };
    VanbanduthaodaxulyPage.prototype.loadsearch = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDuThaoDaXuLy(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
        });
    };
    VanbanduthaodaxulyPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.dataquery.CurrentPage == 1)
                _this.dataquery.CurrentPage = 2;
            if ((_this.dataquery.CurrentPage * _this.dataquery.RowPerPage) < _this.total) {
                _this.authService.getVanBanDuThaoDaXuLy(_this.dataquery).subscribe(function (res) {
                    for (var j = 0; j < res["Data"].length; j++) {
                        _this.danhsachVanBans.push(res["Data"][j]);
                    }
                });
                _this.dataquery.CurrentPage = _this.dataquery.CurrentPage + 1;
            }
            infiniteScroll.target.complete();
        }, 500);
    };
    VanbanduthaodaxulyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbanduthaodaxuly',
            template: __webpack_require__(/*! ./vanbanduthaodaxuly.page.html */ "./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.page.html"),
            styles: [__webpack_require__(/*! ./vanbanduthaodaxuly.page.scss */ "./src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], VanbanduthaodaxulyPage);
    return VanbanduthaodaxulyPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbanduthaodaxuly-vanbanduthaodaxuly-module.js.map