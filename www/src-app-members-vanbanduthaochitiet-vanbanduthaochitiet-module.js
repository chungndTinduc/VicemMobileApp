(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-vanbanduthaochitiet-vanbanduthaochitiet-module"],{

/***/ "./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.module.ts ***!
  \***************************************************************************/
/*! exports provided: VanbanduthaochitietPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbanduthaochitietPageModule", function() { return VanbanduthaochitietPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vanbanduthaochitiet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanbanduthaochitiet.page */ "./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.ts");







var routes = [
    {
        path: '',
        component: _vanbanduthaochitiet_page__WEBPACK_IMPORTED_MODULE_6__["VanbanduthaochitietPage"]
    }
];
var VanbanduthaochitietPageModule = /** @class */ (function () {
    function VanbanduthaochitietPageModule() {
    }
    VanbanduthaochitietPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vanbanduthaochitiet_page__WEBPACK_IMPORTED_MODULE_6__["VanbanduthaochitietPage"]]
        })
    ], VanbanduthaochitietPageModule);
    return VanbanduthaochitietPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <!-- <ion-menu-button></ion-menu-button> -->\r\n        <ion-back-button text=\"\" ></ion-back-button>     \r\n      </ion-buttons>\r\n      <ion-title>Chi tiết văn bản dự thảo</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button>\r\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>     \r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item>\r\n        <ion-label>\r\n          <div *ngIf=\"vanban.TenLoaiVanBan!=null\"><span > Loại văn bản:</span> {{vanban.TenLoaiVanBan}}<br></div>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n  <ion-item *ngIf=\"vanban.TrangThaiID!=null\">\r\n    <ion-label>\r\n      <div ><span > Trạng thái:</span> \r\n       \r\n        <span [innerHTML]=\" TrangThaiVanBan\"></span>\r\n        <br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"vanban.TenNguoiTao!=null\">\r\n      <ion-label>\r\n        <div ><span >Người tạo:</span> {{vanban.TenNguoiTao}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"vanban.NgayTao!=null\">\r\n        <ion-label>\r\n          <div ><span >Ngày tạo:</span> {{vanban.NgayTao|date:'dd/MM/yyyy'}}<br></div>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"TrangThaiCaNhanID!=null\">\r\n          <ion-label>\r\n            <div ><span >Trạng thái cá nhân:</span> \r\n              <span *ngIf=\"TrangThaiCaNhanID==0\" class=\"danger\">Chưa xử lý</span>\r\n              <span *ngIf=\"TrangThaiCaNhanID==1\" class=\"warning\">Đang xử lý</span>\r\n              <span *ngIf=\"TrangThaiCaNhanID==3\" class=\"success\">Đã xử lý</span>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"vanban.TenNguoiKy !=''\">\r\n            <ion-label>\r\n              <div  class=\"line-break\"><span > Người phê duyệt:</span> {{vanban.TenNguoiKy}}<br></div>\r\n            </ion-label>\r\n          </ion-item>\r\n  <ion-item *ngIf=\"vanban.TrichYeu !=''\">\r\n    <ion-label>\r\n      <div  class=\"line-break\"><span > Trích yếu:</span> {{vanban.TrichYeu}}<br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"strNguoiNhan!=''\">\r\n      <ion-label>\r\n        <div  class=\"line-break\"><span > Người nhận:</span> {{strNguoiNhan}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"DonViNhan!=''\">\r\n      <ion-label>\r\n        <div  class=\"line-break\"><span > Đơn vị nhận:</span> {{DonViNhan}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"strNoiNhanbenNgoai!=''\">\r\n      <ion-label>\r\n        <div  class=\"line-break\"><span > Nơi nhận bên ngoài:</span> {{strNoiNhanbenNgoai}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n  <ion-item *ngIf=\"vanban.LtsDanhMucGiaTri.length>0\">\r\n    <ion-label >\r\n      <div *ngFor=\"let danhmuc of LtsAllDanhMuc\" ><span > {{danhmuc.Ten}} :</span> {{danhmuc.TenGiaTri}}<br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"vanban.LtsFileAttach!=null\">\r\n    <ion-label>\r\n        <div>\r\n            <span > File văn bản:</span>\r\n            <p *ngFor=\"let file of vanban.LtsFileAttach\"><a target=\"_blank\" href=\"/{{file.FileLink}}\">{{file.Ten}}</a></p>\r\n          </div> \r\n    </ion-label>\r\n  </ion-item>  \r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button>\r\n        <ion-icon name=\"hammer\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-list side=\"top\">\r\n        <ion-fab-button>\r\n          <ion-icon name=\"shuffle\" (click)=\"presentModaltrinh(vanban.ID)\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-button>\r\n          <ion-icon name=\"paper-plane\"></ion-icon></ion-fab-button>\r\n      </ion-fab-button>\r\n      </ion-fab-list> \r\n    </ion-fab> -->\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n          <ion-icon name=\"hammer\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button (click)=\"presentModaltrinh(vanban.ID)\" *ngIf=\"action.IsTrinh==true\">\r\n                <ion-icon name=\"paper-plane\"></ion-icon>\r\n              </ion-fab-button>\r\n              <ion-fab-button (click)=\"presentModalketthuc(vanban.ID)\" *ngIf=\"action.IsKetThuc==true\">\r\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                </ion-fab-button>\r\n              <ion-fab-button (click)=\"presentModalchuyenph(vanban.ID)\" *ngIf=\"action.IsPhatHanh==true\">\r\n                  <ion-icon name=\"airplane\"></ion-icon>\r\n              </ion-fab-button>\r\n              <ion-fab-button (click)=\"presentModalduyet(vanban.ID)\" *ngIf=\"action.IsDuyet==true\"><!--Duyệt văn bản-->\r\n                  <ion-icon name=\"checkbox-outline\"></ion-icon>\r\n              </ion-fab-button>\r\n              <ion-fab-button (click)=\"presentModaltuchoi(vanban.ID)\" *ngIf=\"action.IsTuChoi==true\"><!--từ chối-->\r\n                <ion-icon name=\"share-alt\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab-list> \r\n      </ion-fab>\r\n</ion-content>\r\n<style>\r\n  .default{\r\n    background:#c6c6c6;\r\n    padding:5px 5px;\r\n    color: #fff;\r\n  }\r\n</style>\r\n"

/***/ }),

/***/ "./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label div span:first-child {\n  font-weight: bold; }\n\n.line-break {\n  overflow: inherit;\n  text-overflow: inherit;\n  white-space: normal; }\n\n.success {\n  background: #45B6AF;\n  padding: 5px 5px;\n  color: #fff; }\n\n.warning {\n  background: #dfba49;\n  padding: 5px 5px;\n  color: #fff; }\n\n.danger {\n  background: #F3565D;\n  padding: 5px 5px;\n  color: #fff; }\n\n.default {\n  background: #c6c6c6;\n  padding: 5px 5px;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kdXRoYW9jaGl0aWV0L0U6XFxQcm9qZWN0XFxNaW5lXFxNb2JpbGVcXFZpY2VtXFxFb2ZmaWNlQXBwL3NyY1xcYXBwXFxtZW1iZXJzXFx2YW5iYW5kdXRoYW9jaGl0aWV0XFx2YW5iYW5kdXRoYW9jaGl0aWV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFrQjtFQUNsQixzQkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUVmO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy92YW5iYW5kdXRoYW9jaGl0aWV0L3ZhbmJhbmR1dGhhb2NoaXRpZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIGRpdiBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmxpbmUtYnJlYWt7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdCA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0IDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG4gIC5zdWNjZXNze1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNDVCNkFGO1xyXG4gICAgICBwYWRkaW5nOjVweCA1cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAud2FybmluZ3tcclxuICAgIGJhY2tncm91bmQ6I2RmYmE0OTtcclxuICAgIHBhZGRpbmc6NXB4IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5kYW5nZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNGMzU2NUQ7XHJcbiAgICBwYWRkaW5nOjVweCA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZGVmYXVsdHtcclxuICAgIGJhY2tncm91bmQ6I2M2YzZjNjtcclxuICAgIHBhZGRpbmc6NXB4IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.ts ***!
  \*************************************************************************/
/*! exports provided: VanbanduthaochitietPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbanduthaochitietPage", function() { return VanbanduthaochitietPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_members_vanbanduthao_formtrinhlanhdao_formtrinhlanhdao_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/members/vanbanduthao/formtrinhlanhdao/formtrinhlanhdao.page */ "./src/app/members/vanbanduthao/formtrinhlanhdao/formtrinhlanhdao.page.ts");
/* harmony import */ var src_app_members_vanbanduthao_kethucduthao_kethucduthao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/members/vanbanduthao/kethucduthao/kethucduthao.page */ "./src/app/members/vanbanduthao/kethucduthao/kethucduthao.page.ts");
/* harmony import */ var src_app_members_vanbanduthao_chuyenphathanh_chuyenphathanh_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/members/vanbanduthao/chuyenphathanh/chuyenphathanh.page */ "./src/app/members/vanbanduthao/chuyenphathanh/chuyenphathanh.page.ts");
/* harmony import */ var src_app_members_vanbanduthao_approved_approved_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/members/vanbanduthao/approved/approved.page */ "./src/app/members/vanbanduthao/approved/approved.page.ts");
/* harmony import */ var src_app_members_vanbanduthao_reject_reject_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/members/vanbanduthao/reject/reject.page */ "./src/app/members/vanbanduthao/reject/reject.page.ts");










var VanbanduthaochitietPage = /** @class */ (function () {
    function VanbanduthaochitietPage(authService, route, modalController) {
        this.authService = authService;
        this.route = route;
        this.modalController = modalController;
        this.dataquery = { ID: 0 };
        this.total = 0;
    }
    VanbanduthaochitietPage.prototype.ngOnInit = function () {
    };
    VanbanduthaochitietPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    VanbanduthaochitietPage.prototype.load = function () {
        var _this = this;
        this.dataquery.ID = parseInt(this.route.snapshot.paramMap.get('vanbanduthaoid'));
        this.authService.getVanBanDuThaobyID(this.dataquery).subscribe(function (res) {
            _this.vanban = res["Data"];
            _this.action = res["action"];
            _this.LtsAllDanhMuc = res["LtsAllDanhMuc"];
            _this.TrangThaiCaNhanID = res["TrangThaiCaNhanID"];
            _this.strNguoiNhan = res["strNguoiNhan"];
            _this.strNoiNhanbenNgoai = res["strNoiNhanbenNgoai"];
            _this.DonViNhan = res["strDonViNhan"];
            _this.TrangThaiVanBan = res["TrangThaiVanBan"];
        });
    };
    VanbanduthaochitietPage.prototype.presentModaltrinh = function (_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_members_vanbanduthao_formtrinhlanhdao_formtrinhlanhdao_page__WEBPACK_IMPORTED_MODULE_5__["FormtrinhlanhdaoPage"],
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
    VanbanduthaochitietPage.prototype.presentModalketthuc = function (_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_members_vanbanduthao_kethucduthao_kethucduthao_page__WEBPACK_IMPORTED_MODULE_6__["KethucduthaoPage"],
                            componentProps: { id: _id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data['data'] != null) {
                                _this.vanban = data['data'];
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VanbanduthaochitietPage.prototype.presentModalchuyenph = function (_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_members_vanbanduthao_chuyenphathanh_chuyenphathanh_page__WEBPACK_IMPORTED_MODULE_7__["ChuyenphathanhPage"],
                            componentProps: { id: _id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data['data'] != null) {
                                _this.vanban = data['data'];
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VanbanduthaochitietPage.prototype.presentModalduyet = function (_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_members_vanbanduthao_approved_approved_page__WEBPACK_IMPORTED_MODULE_8__["ApprovedPage"],
                            componentProps: { id: _id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data['data'] != null) {
                                _this.vanban = data['data'];
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VanbanduthaochitietPage.prototype.presentModaltuchoi = function (_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_members_vanbanduthao_reject_reject_page__WEBPACK_IMPORTED_MODULE_9__["RejectPage"],
                            componentProps: { id: _id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data['data'] != null) {
                                _this.vanban = data['data'];
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VanbanduthaochitietPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbanduthaochitiet',
            template: __webpack_require__(/*! ./vanbanduthaochitiet.page.html */ "./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.html"),
            styles: [__webpack_require__(/*! ./vanbanduthaochitiet.page.scss */ "./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], VanbanduthaochitietPage);
    return VanbanduthaochitietPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbanduthaochitiet-vanbanduthaochitiet-module.js.map