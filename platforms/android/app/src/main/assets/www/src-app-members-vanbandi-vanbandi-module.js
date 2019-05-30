(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-vanbandi-vanbandi-module"],{

/***/ "./src/app/members/vanbandi/vanbandi.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/vanbandi/vanbandi.module.ts ***!
  \*****************************************************/
/*! exports provided: VanbandiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandiPageModule", function() { return VanbandiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vanbandi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanbandi.page */ "./src/app/members/vanbandi/vanbandi.page.ts");







var routes = [
    {
        path: '',
        component: _vanbandi_page__WEBPACK_IMPORTED_MODULE_6__["VanbandiPage"]
    }
];
var VanbandiPageModule = /** @class */ (function () {
    function VanbandiPageModule() {
    }
    VanbandiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vanbandi_page__WEBPACK_IMPORTED_MODULE_6__["VanbandiPage"]]
        })
    ], VanbandiPageModule);
    return VanbandiPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbandi/vanbandi.page.html":
/*!*****************************************************!*\
  !*** ./src/app/members/vanbandi/vanbandi.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Văn bản đi</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"presentPopover($event)\">\r\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n      <ion-tab-bar>\r\n        <ion-tab-button tab=\"vanbandi\"  class=\"tabvanbandi\">\r\n            <ion-icon name=\"ios-document\"></ion-icon>\r\n            <ion-label>Danh sách</ion-label>\r\n          </ion-tab-button>\r\n        <ion-tab-button tab=\"vanbandi/vanbandichuadoc\" class=\"tabvanbandichuadoc\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Chưa đọc</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>      \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar auocomplete=\"on\" id=\"keyword\" name=\"keyword\" (ionChange)=\"loadsearch()\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\r\n  <ion-list reorder=\"true\">\r\n    <ion-item lines=\"none\" *ngFor=\"let vanban of danhsachVanBans\" routerLink=\"/members/tabs/vanbandi/chitietvanbandi/{{vanban.ID}}\">\r\n      <ion-label>\r\n        <div *ngIf=\"vanban.NgayBanHanh!=null\"><span > Ngày ban hành :</span> {{vanban.NgayBanHanh|date:'dd/MM/yyyy'}}<br></div>\r\n        <div *ngIf=\"vanban.SoKyHieu!=''\" class=\"line-break\"><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\r\n        <div *ngIf=\"vanban.TenChucVu!=''\" class=\"line-break\"><span > Người ký:</span> {{vanban.TenChucVu}}<br></div>\r\n        <div class=\"line-break\">{{vanban.TrichYeu}}</div>\r\n      </ion-label>\r\n    </ion-item >\r\n  </ion-list>\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/vanbandi/vanbandi.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/members/vanbandi/vanbandi.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 5px 0px; }\n\nion-item ion-label span {\n  font-weight: bold; }\n\n.tabvanbandi {\n  color: burlywood; }\n\n.line-break {\n  overflow: inherit;\n  text-overflow: inherit;\n  white-space: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kaS9EOlxcQ1ZcXFRpbmhWYW5cXFZpY2VtXFxBcHBcXFZpY2VtTW9iaWxlQXBwL3NyY1xcYXBwXFxtZW1iZXJzXFx2YW5iYW5kaVxcdmFuYmFuZGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWUsRUFBQTs7QUFFbkI7RUFDRyxpQkFBZ0IsRUFBQTs7QUFFbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBa0I7RUFDbEIsc0JBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy92YW5iYW5kaS92YW5iYW5kaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIHBhZGRpbmc6NXB4IDBweDtcclxufVxyXG5pb24taXRlbSBpb24tbGFiZWwgc3BhbntcclxuICAgZm9udC13ZWlnaHQ6Ym9sZDsgXHJcbn1cclxuLnRhYnZhbmJhbmRpe1xyXG4gICAgY29sb3I6IGJ1cmx5d29vZDtcclxufVxyXG4ubGluZS1icmVha3tcclxuICAgIG92ZXJmbG93OiBpbmhlcml0IDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQgO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/members/vanbandi/vanbandi.page.ts":
/*!***************************************************!*\
  !*** ./src/app/members/vanbandi/vanbandi.page.ts ***!
  \***************************************************/
/*! exports provided: VanbandiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandiPage", function() { return VanbandiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");



var VanbandiPage = /** @class */ (function () {
    function VanbandiPage(authService) {
        this.authService = authService;
        this.total = 0;
        this.dataquery = { CurrentPage: 1, RowPerPage: 10, SearchIn: 'SoKyHieu,TrichYeu', Keyword: '' };
    }
    VanbandiPage.prototype.ngOnInit = function () {
    };
    VanbandiPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    VanbandiPage.prototype.load = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDi(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
            return true;
        });
    };
    VanbandiPage.prototype.loadsearch = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDi(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
        });
    };
    VanbandiPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.dataquery.CurrentPage == 1)
                _this.dataquery.CurrentPage = 2;
            if ((_this.dataquery.CurrentPage * _this.dataquery.RowPerPage) < _this.total) {
                _this.authService.getVanBanDi(_this.dataquery).subscribe(function (res) {
                    for (var j = 0; j < res["Data"].length; j++) {
                        _this.danhsachVanBans.push(res["Data"][j]);
                    }
                });
                _this.dataquery.CurrentPage = _this.dataquery.CurrentPage + 1;
            }
            infiniteScroll.target.complete();
        }, 500);
    };
    VanbandiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbandi',
            template: __webpack_require__(/*! ./vanbandi.page.html */ "./src/app/members/vanbandi/vanbandi.page.html"),
            styles: [__webpack_require__(/*! ./vanbandi.page.scss */ "./src/app/members/vanbandi/vanbandi.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], VanbandiPage);
    return VanbandiPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbandi-vanbandi-module.js.map