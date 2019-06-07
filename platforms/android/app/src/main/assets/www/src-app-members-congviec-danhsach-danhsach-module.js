(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-congviec-danhsach-danhsach-module"],{

/***/ "./src/app/members/congviec/danhsach/danhsach.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/congviec/danhsach/danhsach.module.ts ***!
  \**************************************************************/
/*! exports provided: DanhsachPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhsachPageModule", function() { return DanhsachPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _danhsach_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./danhsach.page */ "./src/app/members/congviec/danhsach/danhsach.page.ts");







var routes = [
    {
        path: '',
        component: _danhsach_page__WEBPACK_IMPORTED_MODULE_6__["DanhsachPage"]
    }
];
var DanhsachPageModule = /** @class */ (function () {
    function DanhsachPageModule() {
    }
    DanhsachPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_danhsach_page__WEBPACK_IMPORTED_MODULE_6__["DanhsachPage"]]
        })
    ], DanhsachPageModule);
    return DanhsachPageModule;
}());



/***/ }),

/***/ "./src/app/members/congviec/danhsach/danhsach.page.html":
/*!**************************************************************!*\
  !*** ./src/app/members/congviec/danhsach/danhsach.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Danh sách công việc</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n  <ion-tab-bar  class=\"tab-header\" slot=\"top\" selected-tab=\"congviec\">\n        <ion-tab-button tab=\"congviec\" class=\"vanbanden\" class=\"\">\n            <ion-icon ios=\"ios-document-outline\" md=\"md-document\"></ion-icon>\n            <ion-label>Danh sách</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"congviec/chuaxuly\" class=\"\">\n          <ion-icon  ios=\"ios-list-box-outline\" md=\"md-list-box\"></ion-icon>\n          <ion-label>Chưa xử lý</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"congviec/dangxuly\" class=\"\">\n          <ion-icon  ios=\"ios-git-compare\" md=\"md-git-compare\"></ion-icon>\n           <ion-label>Đang xử lý</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"congviec/daxuly\" class=\"\">\n          <ion-icon  ios=\"ios-checkmark-circle-outline\" md=\"md-checkmark-circle\"></ion-icon>\n          <ion-label>Đã xử lý</ion-label>\n        </ion-tab-button>\n  </ion-tab-bar>\n</ion-header>\n<ion-content>\n  <ion-searchbar  id=\"keyword\" name=\"keyword\" (keypress)=\"onKeyPressed($event)\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"load($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n      <!-- Multi-line sliding item with icon options on both sides -->\n      <ion-item-sliding  *ngFor=\"let congviec of danhSach\">\n        <ion-item lines=\"none\"  routerLink=\"/members/tabs/congviec/chitietcongviec/{{congviec.ID}}\" slot=\"start\">\n          <ion-label>\n            <h2>{{congviec.Ten}}</h2>\n            <p>{{congviec.NoiDung}}</p>\n            <div *ngIf=\"congviec.HanXuLy!=null\" class=\"info-item\"><span>Hạn xử lý :</span> {{congviec.HanXuLy|date:'dd/MM/yyyy'}} - <span>Người tạo:</span> Nguyễn Đức Chung</div>\n          </ion-label>\n          <!-- <ion-note slot=\"end\">\n              <span slot=\"start\">5</span>\n              <ion-icon ios=\"ios-attach\" md=\"md-attach\" slot=\"end\"></ion-icon>\n          </ion-note> -->\n        </ion-item>\n        <ion-item-options side=\"start\">\n          <ion-item-option>\n            <ion-icon slot=\"icon-only\"  ios=\"ios-exit-outline\" md=\"md-exit\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\">\n            <ion-icon slot=\"icon-only\"  ios=\"ios-trash-outline\" md=\"md-trash\"></ion-icon>\n          </ion-item-option>\n          <ion-item-option>\n            <ion-icon slot=\"icon-only\" ios=\"ios-create-outline\" md=\"md-create\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  <div *ngIf=\"danhSach==''\" style=\"text-align: center;color: #999\"><h3>Không có bản ghi nào</h3></div>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"success\" (click)=\"presentModal(null)\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/congviec/danhsach/danhsach.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/members/congviec/danhsach/danhsach.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvY29uZ3ZpZWMvZGFuaHNhY2gvZGFuaHNhY2gucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/members/congviec/danhsach/danhsach.page.ts":
/*!************************************************************!*\
  !*** ./src/app/members/congviec/danhsach/danhsach.page.ts ***!
  \************************************************************/
/*! exports provided: DanhsachPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhsachPage", function() { return DanhsachPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_members_congviec_congviecform_congviecform_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/members/congviec/congviecform/congviecform.page */ "./src/app/members/congviec/congviecform/congviecform.page.ts");





var DanhsachPage = /** @class */ (function () {
    function DanhsachPage(authService, modalController) {
        this.authService = authService;
        this.modalController = modalController;
        this.dataquery = { CurrentPage: 1, RowPerPage: 10, SearchIn: 'Ten,NoiDung', Keyword: '' };
        //load danh sách khi search
        this.onKeyPressed = function (keyEvent) {
            if (keyEvent.keyCode == 13) {
                this.load(null);
            }
        };
    }
    DanhsachPage.prototype.ngOnInit = function () {
    };
    DanhsachPage.prototype.ionViewDidEnter = function () {
        this.load(null);
    };
    //load danh sách
    DanhsachPage.prototype.load = function (refresher) {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getDanhSachCongViec(this.dataquery).subscribe(function (res) {
            _this.danhSach = res["Data"];
            _this.total = res["Total"];
            if (refresher) {
                refresher.target.complete();
            }
            return true;
        });
    };
    // load thêm danh sách 
    DanhsachPage.prototype.doInfinite = function (infiniteScroll) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.delay(300)];
                    case 1:
                        _a.sent();
                        if (this.dataquery.CurrentPage == 1)
                            this.dataquery.CurrentPage = 2;
                        if ((this.dataquery.CurrentPage * this.dataquery.RowPerPage) < this.total) {
                            this.authService.getDanhSachCongViec(this.dataquery).subscribe(function (res) {
                                for (var j = 0; j < res["Data"].length; j++) {
                                    _this.danhSach.push(res["Data"][j]);
                                }
                            });
                            this.dataquery.CurrentPage = this.dataquery.CurrentPage + 1;
                        }
                        infiniteScroll.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    DanhsachPage.prototype.presentModal = function (_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_members_congviec_congviecform_congviecform_page__WEBPACK_IMPORTED_MODULE_4__["CongviecformPage"],
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
    DanhsachPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-danhsach',
            template: __webpack_require__(/*! ./danhsach.page.html */ "./src/app/members/congviec/danhsach/danhsach.page.html"),
            styles: [__webpack_require__(/*! ./danhsach.page.scss */ "./src/app/members/congviec/danhsach/danhsach.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], DanhsachPage);
    return DanhsachPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-congviec-danhsach-danhsach-module.js.map