(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-chitietvanbandi-chitietvanbandi-module"],{

/***/ "./src/app/members/chitietvanbandi/chitietvanbandi.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/members/chitietvanbandi/chitietvanbandi.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChitietvanbandiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitietvanbandiPageModule", function() { return ChitietvanbandiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chitietvanbandi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chitietvanbandi.page */ "./src/app/members/chitietvanbandi/chitietvanbandi.page.ts");







var routes = [
    {
        path: '',
        component: _chitietvanbandi_page__WEBPACK_IMPORTED_MODULE_6__["ChitietvanbandiPage"]
    }
];
var ChitietvanbandiPageModule = /** @class */ (function () {
    function ChitietvanbandiPageModule() {
    }
    ChitietvanbandiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chitietvanbandi_page__WEBPACK_IMPORTED_MODULE_6__["ChitietvanbandiPage"]]
        })
    ], ChitietvanbandiPageModule);
    return ChitietvanbandiPageModule;
}());



/***/ }),

/***/ "./src/app/members/chitietvanbandi/chitietvanbandi.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/members/chitietvanbandi/chitietvanbandi.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n \n          <ion-back-button text=\"\" ></ion-back-button>     \n        </ion-buttons>\n        <ion-title>Chi tiết văn bản đi</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button >\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>     \n</ion-header>\n\n<ion-content>\n    <ion-item *ngIf=\"vanban.NgayBanHanh!=null\">\n      <ion-label>\n        <div ><span > Ngày ban hành:</span> {{vanban.NgayBanHanh|date:'dd/MM/yyyy'}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.SoKyHieu!=''\">\n       <ion-label>\n        <div ><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\n        </ion-label> \n      </ion-item>\n     \n    <ion-item *ngIf=\"vanban.TenLoaiVanBan!=null\">\n      <ion-label>\n        <div ><span > Loại văn bản:</span> {{vanban.TenLoaiVanBan}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.TenSoVanBan!=null\">\n      <ion-label>\n        <div ><span > Sổ văn bản:</span> {{vanban.TenSoVanBan}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.TenDonViSoanThao!=null\">\n      <ion-label>\n        <div  class=\"line-break\"><span > Đơn vị soạn thảo:</span> {{vanban.TenDonViSoanThao}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.TrichYeu !=''\">\n      <ion-label>\n        <div  class=\"line-break\"><span > Trích yếu:</span> {{vanban.TrichYeu}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.HanXuLy!=null\">\n      <ion-label>\n        <div ><span > Hạn xử lý:</span> {{vanban.HanXuLy|date:'dd/MM/yyyy'}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.LstDanhMucGiaTri.length>0\">\n      <ion-label >\n        <div *ngFor=\"let danhmuc of LtsAllDanhMuc\" ><span > {{danhmuc.Ten}} :</span> {{danhmuc.TenGiaTri}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.LtsFileAttach!=null\">\n      <ion-label>\n          <div>\n              <span > File văn bản:</span>\n              <p *ngFor=\"let file of vanban.LtsFileAttach\"><a target=\"_blank\" href=\"/{{file.FileLink}}\">{{file.Ten}}</a></p>\n            </div> \n      </ion-label>\n    </ion-item>  \n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"success\"  routerLink=\"/members/tabs/vanbandi/vanbandiykien/{{vanban.ID}}\" title=\"Chuyển xử lý\">\n        <ion-icon name=\"paper-plane\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/members/chitietvanbandi/chitietvanbandi.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/members/chitietvanbandi/chitietvanbandi.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label div span:first-child {\n  font-weight: bold; }\n\n.line-break {\n  overflow: inherit;\n  text-overflow: inherit;\n  white-space: normal; }\n\n.success {\n  background: #45B6AF;\n  padding: 5px 5px;\n  color: #fff; }\n\n.warning {\n  background: #dfba49;\n  padding: 5px 5px;\n  color: #fff; }\n\n.danger {\n  background: #F3565D;\n  padding: 5px 5px;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9jaGl0aWV0dmFuYmFuZGkvRDpcXENWXFxUaW5oVmFuXFxWaWNlbVxcQXBwXFxWaWNlbU1vYmlsZUFwcC9zcmNcXGFwcFxcbWVtYmVyc1xcY2hpdGlldHZhbmJhbmRpXFxjaGl0aWV0dmFuYmFuZGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWtCO0VBQ2xCLHNCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2NoaXRpZXR2YW5iYW5kaS9jaGl0aWV0dmFuYmFuZGkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIGRpdiBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmxpbmUtYnJlYWt7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdCA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0IDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG4gIC5zdWNjZXNze1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNDVCNkFGO1xyXG4gICAgICBwYWRkaW5nOjVweCA1cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAud2FybmluZ3tcclxuICAgIGJhY2tncm91bmQ6I2RmYmE0OTtcclxuICAgIHBhZGRpbmc6NXB4IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5kYW5nZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNGMzU2NUQ7XHJcbiAgICBwYWRkaW5nOjVweCA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/members/chitietvanbandi/chitietvanbandi.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/members/chitietvanbandi/chitietvanbandi.page.ts ***!
  \*****************************************************************/
/*! exports provided: ChitietvanbandiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitietvanbandiPage", function() { return ChitietvanbandiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ChitietvanbandiPage = /** @class */ (function () {
    function ChitietvanbandiPage(authService, route) {
        this.authService = authService;
        this.route = route;
        this.dataquery = { ID: 0 };
        this.total = 0;
    }
    ChitietvanbandiPage.prototype.ngOnInit = function () {
    };
    ChitietvanbandiPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    ChitietvanbandiPage.prototype.load = function () {
        var _this = this;
        this.dataquery.ID = parseInt(this.route.snapshot.paramMap.get('vanbandiid'));
        this.authService.getVanBanDiByID(this.dataquery).subscribe(function (res) {
            _this.vanban = res["Data"];
            _this.LtsAllDanhMuc = res["LtsAllDanhMuc"];
        });
    };
    ChitietvanbandiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chitietvanbandi',
            template: __webpack_require__(/*! ./chitietvanbandi.page.html */ "./src/app/members/chitietvanbandi/chitietvanbandi.page.html"),
            styles: [__webpack_require__(/*! ./chitietvanbandi.page.scss */ "./src/app/members/chitietvanbandi/chitietvanbandi.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ChitietvanbandiPage);
    return ChitietvanbandiPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-chitietvanbandi-chitietvanbandi-module.js.map