(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vanbandi-vanbandiykien-vanbandiykien-module"],{

/***/ "./src/app/members/vanbandi/vanbandiykien/vanbandiykien.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/members/vanbandi/vanbandiykien/vanbandiykien.module.ts ***!
  \************************************************************************/
/*! exports provided: VanbandiykienPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandiykienPageModule", function() { return VanbandiykienPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vanbandiykien_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanbandiykien.page */ "./src/app/members/vanbandi/vanbandiykien/vanbandiykien.page.ts");







var routes = [
    {
        path: '',
        component: _vanbandiykien_page__WEBPACK_IMPORTED_MODULE_6__["VanbandiykienPage"]
    }
];
var VanbandiykienPageModule = /** @class */ (function () {
    function VanbandiykienPageModule() {
    }
    VanbandiykienPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vanbandiykien_page__WEBPACK_IMPORTED_MODULE_6__["VanbandiykienPage"]]
        })
    ], VanbandiykienPageModule);
    return VanbandiykienPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbandi/vanbandiykien/vanbandiykien.page.html":
/*!************************************************************************!*\
  !*** ./src/app/members/vanbandi/vanbandiykien/vanbandiykien.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n\n        <ion-back-button text=\"\" ></ion-back-button>     \n      </ion-buttons>\n      <ion-title>ý kiến văn bản đi</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button >\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>     \n</ion-header>\n\n<ion-content>\n  <ion-list reorder=\"true\">\n    <ion-item lines=\"none\"  *ngFor=\"let objyk of lstobject\">\n      <ion-label>\n        <div  ><span > Người dùng :</span> {{objyk.TenNguoiTao}}<br></div>\n        <div *ngIf=\"objyk.NoiDung!=''\"><span > Nội dung :</span> {{objyk.NoiDung}}<br></div>\n        <div><span > Thời gian:</span> {{objyk.NgayTao | date:'dd/MM/yyyy'}}<br></div>\n        <div class=\"line-break\"><span >Đầu mối:</span>\n          {{objyk.strDonViXuLy }}{{objyk.strNguoiXuLy!=''?(\", \"+objyk.strNguoiXuLy):''}}\n        </div>\n        <div class=\"line-break\"><span >Phối hợp:</span>\n          {{objyk.strDonViNhanDeBiet}} {{objyk.strNguoiNhanDeBiet!=''?(\", \"+objyk.strNguoiNhanDeBiet):''}}\n        </div>\n        <div class=\"line-break\"><span >Xem để biết:</span>\n          {{objyk.strDonViXem}} {{objyk.strNguoiXem!=''?(\", \"+objyk.strNguoiXem):''}}\n        </div>\n        <div><span >Hạn xử lý:</span> {{objyk.HanXuLy | date:'dd/MM/yyyy'}}<br></div>\n      </ion-label>\n    </ion-item >\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" (click)=\"presentModal(dataquery.VanBanID)\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/vanbandi/vanbandiykien/vanbandiykien.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/members/vanbandi/vanbandiykien/vanbandiykien.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvdmFuYmFuZGkvdmFuYmFuZGl5a2llbi92YW5iYW5kaXlraWVuLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/members/vanbandi/vanbandiykien/vanbandiykien.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/members/vanbandi/vanbandiykien/vanbandiykien.page.ts ***!
  \**********************************************************************/
/*! exports provided: VanbandiykienPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandiykienPage", function() { return VanbandiykienPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_members_vanbandi_vanbandiformykien_vanbandiformykien_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/members/vanbandi/vanbandiformykien/vanbandiformykien.page */ "./src/app/members/vanbandi/vanbandiformykien/vanbandiformykien.page.ts");






var VanbandiykienPage = /** @class */ (function () {
    function VanbandiykienPage(authService, route, modalController) {
        this.authService = authService;
        this.route = route;
        this.modalController = modalController;
        this.dataquery = { VanBanID: 0 };
        this.total = 0;
    }
    VanbandiykienPage.prototype.ngOnInit = function () {
        this.load();
    };
    VanbandiykienPage.prototype.load = function () {
        var _this = this;
        this.dataquery.VanBanID = parseInt(this.route.snapshot.paramMap.get('vanbandiid'));
        this.authService.getvanbandiykien(this.dataquery).subscribe(function (res) {
            _this.lstobject = res["Data"];
        });
    };
    VanbandiykienPage.prototype.presentModal = function (_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_members_vanbandi_vanbandiformykien_vanbandiformykien_page__WEBPACK_IMPORTED_MODULE_5__["VanbandiformykienPage"],
                            componentProps: { id: _id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data['data'] != null) {
                                _this.lstobject = data['data'];
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VanbandiykienPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbandiykien',
            template: __webpack_require__(/*! ./vanbandiykien.page.html */ "./src/app/members/vanbandi/vanbandiykien/vanbandiykien.page.html"),
            styles: [__webpack_require__(/*! ./vanbandiykien.page.scss */ "./src/app/members/vanbandi/vanbandiykien/vanbandiykien.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], VanbandiykienPage);
    return VanbandiykienPage;
}());



/***/ })

}]);
//# sourceMappingURL=vanbandi-vanbandiykien-vanbandiykien-module.js.map