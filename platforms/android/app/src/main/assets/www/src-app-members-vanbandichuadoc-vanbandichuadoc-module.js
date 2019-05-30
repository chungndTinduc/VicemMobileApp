(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-vanbandichuadoc-vanbandichuadoc-module"],{

/***/ "./src/app/members/vanbandichuadoc/vanbandichuadoc.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/members/vanbandichuadoc/vanbandichuadoc.module.ts ***!
  \*******************************************************************/
/*! exports provided: VanbandichuadocPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandichuadocPageModule", function() { return VanbandichuadocPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vanbandichuadoc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanbandichuadoc.page */ "./src/app/members/vanbandichuadoc/vanbandichuadoc.page.ts");







var routes = [
    {
        path: '',
        component: _vanbandichuadoc_page__WEBPACK_IMPORTED_MODULE_6__["VanbandichuadocPage"]
    }
];
var VanbandichuadocPageModule = /** @class */ (function () {
    function VanbandichuadocPageModule() {
    }
    VanbandichuadocPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vanbandichuadoc_page__WEBPACK_IMPORTED_MODULE_6__["VanbandichuadocPage"]]
        })
    ], VanbandichuadocPageModule);
    return VanbandichuadocPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbandichuadoc/vanbandichuadoc.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/members/vanbandichuadoc/vanbandichuadoc.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Văn bản đi</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"presentPopover($event)\">\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-tab-bar>\n        <ion-tab-button tab=\"vanbandi\"  class=\"tabvanbandi\">\n            <ion-icon name=\"ios-document\"></ion-icon>\n            <ion-label>Danh sách</ion-label>\n          </ion-tab-button>\n        <ion-tab-button tab=\"vanbandi/vanbandichuadoc\" class=\"tabvanbandichuadoc\">\n          <ion-icon name=\"ios-document\"></ion-icon>\n          <ion-label>Chưa đọc</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>      \n</ion-header>\n\n<ion-content>\n  <ion-searchbar auocomplete=\"on\" id=\"keyword\" name=\"keyword\" (ionChange)=\"loadsearch()\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\n  <ion-list reorder=\"true\">\n    <ion-item *ngFor=\"let vanban of danhsachVanBans\" routerLink=\"/members/tabs/vanbandi/chitietvanbandi/{{vanban.ID}}\">\n      <ion-label>\n        <div *ngIf=\"vanban.NgayBanHanh!=null\"><span > Ngày ban hành :</span> {{vanban.NgayBanHanh|date:'dd/MM/yyyy'}}<br></div>\n        <div *ngIf=\"vanban.SoKyHieu!=''\" class=\"line-break\"><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\n        <div *ngIf=\"vanban.TenChucVu!=''\" class=\"line-break\"><span > Người ký:</span> {{vanban.TenChucVu}}<br></div>\n        <div class=\"line-break\">{{vanban.TrichYeu}}</div>\n      </ion-label>\n    </ion-item >\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/vanbandichuadoc/vanbandichuadoc.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/members/vanbandichuadoc/vanbandichuadoc.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 5px 0px; }\n\nion-item ion-label span {\n  font-weight: bold; }\n\n.tabvanbandichuadoc {\n  color: burlywood; }\n\n.line-break {\n  overflow: inherit;\n  text-overflow: inherit;\n  white-space: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kaWNodWFkb2MvRDpcXENWXFxUaW5oVmFuXFxWaWNlbVxcQXBwXFxWaWNlbU1vYmlsZUFwcC9zcmNcXGFwcFxcbWVtYmVyc1xcdmFuYmFuZGljaHVhZG9jXFx2YW5iYW5kaWNodWFkb2MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWUsRUFBQTs7QUFFbkI7RUFDRyxpQkFBZ0IsRUFBQTs7QUFFbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBa0I7RUFDbEIsc0JBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy92YW5iYW5kaWNodWFkb2MvdmFuYmFuZGljaHVhZG9jLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgcGFkZGluZzo1cHggMHB4O1xyXG59XHJcbmlvbi1pdGVtIGlvbi1sYWJlbCBzcGFue1xyXG4gICBmb250LXdlaWdodDpib2xkOyBcclxufVxyXG4udGFidmFuYmFuZGljaHVhZG9je1xyXG4gICAgY29sb3I6IGJ1cmx5d29vZDtcclxufVxyXG4ubGluZS1icmVha3tcclxuICAgIG92ZXJmbG93OiBpbmhlcml0IDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQgO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/members/vanbandichuadoc/vanbandichuadoc.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/members/vanbandichuadoc/vanbandichuadoc.page.ts ***!
  \*****************************************************************/
/*! exports provided: VanbandichuadocPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandichuadocPage", function() { return VanbandichuadocPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");



var VanbandichuadocPage = /** @class */ (function () {
    function VanbandichuadocPage(authService) {
        this.authService = authService;
        this.total = 0;
        this.dataquery = { CurrentPage: 1, RowPerPage: 10, SearchIn: 'SoKyHieu,TrichYeu', Keyword: '' };
    }
    VanbandichuadocPage.prototype.ngOnInit = function () {
    };
    VanbandichuadocPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    VanbandichuadocPage.prototype.load = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDichuadoc(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
            return true;
        });
    };
    VanbandichuadocPage.prototype.loadsearch = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDichuadoc(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
        });
    };
    VanbandichuadocPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.dataquery.CurrentPage == 1)
                _this.dataquery.CurrentPage = 2;
            if ((_this.dataquery.CurrentPage * _this.dataquery.RowPerPage) < _this.total) {
                _this.authService.getVanBanDichuadoc(_this.dataquery).subscribe(function (res) {
                    for (var j = 0; j < res["Data"].length; j++) {
                        _this.danhsachVanBans.push(res["Data"][j]);
                    }
                });
                _this.dataquery.CurrentPage = _this.dataquery.CurrentPage + 1;
            }
            infiniteScroll.target.complete();
        }, 500);
    };
    VanbandichuadocPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbandichuadoc',
            template: __webpack_require__(/*! ./vanbandichuadoc.page.html */ "./src/app/members/vanbandichuadoc/vanbandichuadoc.page.html"),
            styles: [__webpack_require__(/*! ./vanbandichuadoc.page.scss */ "./src/app/members/vanbandichuadoc/vanbandichuadoc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], VanbandichuadocPage);
    return VanbandichuadocPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbandichuadoc-vanbandichuadoc-module.js.map