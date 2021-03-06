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

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Văn bản đi</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n      <ion-tab-bar>\r\n        <ion-tab-button tab=\"vanbandi\"  class=\"tabvanbandi\">\r\n            <ion-icon name=\"ios-document\"></ion-icon>\r\n            <ion-label>Danh sách</ion-label>\r\n          </ion-tab-button>\r\n        <ion-tab-button tab=\"vanbandi/vanbandichuadoc\" class=\"tabvanbandichuadoc\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Chưa đọc</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>      \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar auocomplete=\"on\" id=\"keyword\" name=\"keyword\" (ionChange)=\"loadsearch()\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\r\n  <ion-list>\r\n      <ion-item-sliding  *ngFor=\"let vanban of danhsachVanBans\">\r\n    <ion-item routerLink=\"/members/tabs/vanbandi/chitietvanbandi/{{vanban.ID}}\">\r\n      <ion-label>\r\n        <div *ngIf=\"vanban.NgayBanHanh!=null\"><span > Ngày ban hành :</span> {{vanban.NgayBanHanh|date:'dd/MM/yyyy'}}<br></div>\r\n        <div *ngIf=\"vanban.SoKyHieu!=''\" class=\"line-break\"><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\r\n        <div *ngIf=\"vanban.TenChucVu!=''\" class=\"line-break\"><span > Người ký:</span> {{vanban.TenChucVu}}<br></div>\r\n        <div class=\"line-break\">{{vanban.TrichYeu}}</div>\r\n      </ion-label>\r\n    </ion-item >\r\n    <ion-item-options  icon-left>\r\n        <button ion-button color=\"secondary\" (click)=\"presentModalluonglc(vanban.ID)\">\r\n           <ion-icon name=\"git-network\"></ion-icon>\r\n           Luồng\r\n        </button>     \r\n     </ion-item-options>\r\n    </ion-item-sliding>     \r\n  </ion-list>\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/vanbandi/vanbandi.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/members/vanbandi/vanbandi.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 5px 0px; }\n\nion-item ion-label span {\n  font-weight: bold; }\n\n.tabvanbandi {\n  color: burlywood; }\n\n.line-break {\n  overflow: inherit;\n  text-overflow: inherit;\n  white-space: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kaS9FOlxcUHJvamVjdFxcTWluZVxcTW9iaWxlXFxWaWNlbVxcRW9mZmljZUFwcC9zcmNcXGFwcFxcbWVtYmVyc1xcdmFuYmFuZGlcXHZhbmJhbmRpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0csaUJBQWdCLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksaUJBQWtCO0VBQ2xCLHNCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvdmFuYmFuZGkvdmFuYmFuZGkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nOjVweCAwcHg7XHJcbn1cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIHNwYW57XHJcbiAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG59XHJcbi50YWJ2YW5iYW5kaXtcclxuICAgIGNvbG9yOiBidXJseXdvb2Q7XHJcbn1cclxuLmxpbmUtYnJlYWt7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdCA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0IDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfSJdfQ== */"

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
/* harmony import */ var src_app_members_vanbandi_vanbandiluongluanchuyen_vanbandiluongluanchuyen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/members/vanbandi/vanbandiluongluanchuyen/vanbandiluongluanchuyen.page */ "./src/app/members/vanbandi/vanbandiluongluanchuyen/vanbandiluongluanchuyen.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var VanbandiPage = /** @class */ (function () {
    function VanbandiPage(authService, modalController) {
        this.authService = authService;
        this.modalController = modalController;
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
    VanbandiPage.prototype.presentModalluonglc = function (_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_members_vanbandi_vanbandiluongluanchuyen_vanbandiluongluanchuyen_page__WEBPACK_IMPORTED_MODULE_3__["VanbandiluongluanchuyenPage"],
                            componentProps: { id: _id }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VanbandiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbandi',
            template: __webpack_require__(/*! ./vanbandi.page.html */ "./src/app/members/vanbandi/vanbandi.page.html"),
            styles: [__webpack_require__(/*! ./vanbandi.page.scss */ "./src/app/members/vanbandi/vanbandi.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], VanbandiPage);
    return VanbandiPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbandi-vanbandi-module.js.map