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

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <!-- <ion-menu-button></ion-menu-button> -->\n        <ion-back-button text=\"\" ></ion-back-button>     \n      </ion-buttons>\n      <ion-title>Chi tiết văn bản đi</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>     \n</ion-header>\n\n<ion-content>\n    <ion-item>\n        <ion-label>\n          <div *ngIf=\"vanban.TenLoaiVanBan!=null\"><span > Loại văn bản:</span> {{vanban.TenLoaiVanBan}}<br></div>\n        </ion-label>\n      </ion-item>\n\n  <ion-item *ngIf=\"vanban.TrangThaiID!=null\">\n    <ion-label>\n      <div ><span > Trạng thái:</span> \n       \n        <span [innerHTML]=\" TrangThaiVanBan\"></span>\n        <br></div>\n    </ion-label>\n  </ion-item>\n  <ion-item *ngIf=\"vanban.TenNguoiTao!=null\">\n      <ion-label>\n        <div ><span >Người tạo:</span> {{vanban.TenNguoiTao}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.NgayTao!=null\">\n        <ion-label>\n          <div ><span >Ngày tạo:</span> {{vanban.NgayTao|date:'dd/MM/yyyy'}}<br></div>\n        </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"TrangThaiCaNhanID!=null\">\n          <ion-label>\n            <div ><span >Trạng thái cá nhân:</span> \n              <span *ngIf=\"TrangThaiCaNhanID==0\" class=\"danger\">Chưa xử lý</span>\n              <span *ngIf=\"TrangThaiCaNhanID==1\" class=\"warning\">Đang xử lý</span>\n              <span *ngIf=\"TrangThaiCaNhanID==3\" class=\"success\">Đã xử lý</span>\n            </div>\n          </ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"vanban.TenNguoiKy !=''\">\n            <ion-label>\n              <div  class=\"line-break\"><span > Người phê duyệt:</span> {{vanban.TenNguoiKy}}<br></div>\n            </ion-label>\n          </ion-item>\n  <ion-item *ngIf=\"vanban.TrichYeu !=''\">\n    <ion-label>\n      <div  class=\"line-break\"><span > Trích yếu:</span> {{vanban.TrichYeu}}<br></div>\n    </ion-label>\n  </ion-item>\n  <ion-item *ngIf=\"strNguoiNhan!=''\">\n      <ion-label>\n        <div  class=\"line-break\"><span > Người nhận:</span> {{strNguoiNhan}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"DonViNhan!=''\">\n      <ion-label>\n        <div  class=\"line-break\"><span > Đơn vị nhận:</span> {{DonViNhan}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"strNoiNhanbenNgoai!=''\">\n      <ion-label>\n        <div  class=\"line-break\"><span > Nơi nhận bên ngoài:</span> {{strNoiNhanbenNgoai}}<br></div>\n      </ion-label>\n    </ion-item>\n  <ion-item *ngIf=\"vanban.LtsDanhMucGiaTri.length>0\">\n    <ion-label >\n      <div *ngFor=\"let danhmuc of LtsAllDanhMuc\" ><span > {{danhmuc.Ten}} :</span> {{danhmuc.TenGiaTri}}<br></div>\n    </ion-label>\n  </ion-item>\n  <ion-item *ngIf=\"vanban.LtsFileAttach!=null\">\n    <ion-label>\n        <div>\n            <span > File văn bản:</span>\n            <p *ngFor=\"let file of vanban.LtsFileAttach\"><a target=\"_blank\" href=\"/{{file.FileLink}}\">{{file.Ten}}</a></p>\n          </div> \n    </ion-label>\n  </ion-item>  \n</ion-content>\n<style>\n  .default{\n    background:#c6c6c6;\n    padding:5px 5px;\n    color: #fff;\n  }\n</style>\n"

/***/ }),

/***/ "./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label div span:first-child {\n  font-weight: bold; }\n\n.line-break {\n  overflow: inherit;\n  text-overflow: inherit;\n  white-space: normal; }\n\n.success {\n  background: #45B6AF;\n  padding: 5px 5px;\n  color: #fff; }\n\n.warning {\n  background: #dfba49;\n  padding: 5px 5px;\n  color: #fff; }\n\n.danger {\n  background: #F3565D;\n  padding: 5px 5px;\n  color: #fff; }\n\n.default {\n  background: #c6c6c6;\n  padding: 5px 5px;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kdXRoYW9jaGl0aWV0L0Q6XFxDVlxcVGluaFZhblxcVmljZW1cXEFwcFxcVmljZW1Nb2JpbGVBcHAvc3JjXFxhcHBcXG1lbWJlcnNcXHZhbmJhbmR1dGhhb2NoaXRpZXRcXHZhbmJhbmR1dGhhb2NoaXRpZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWtCO0VBQ2xCLHNCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL3ZhbmJhbmR1dGhhb2NoaXRpZXQvdmFuYmFuZHV0aGFvY2hpdGlldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwgZGl2IHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubGluZS1icmVha3tcclxuICAgIG92ZXJmbG93OiBpbmhlcml0IDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQgO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9XHJcbiAgLnN1Y2Nlc3N7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM0NUI2QUY7XHJcbiAgICAgIHBhZGRpbmc6NXB4IDVweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC53YXJuaW5ne1xyXG4gICAgYmFja2dyb3VuZDojZGZiYTQ5O1xyXG4gICAgcGFkZGluZzo1cHggNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmRhbmdlcntcclxuICAgIGJhY2tncm91bmQ6I0YzNTY1RDtcclxuICAgIHBhZGRpbmc6NXB4IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5kZWZhdWx0e1xyXG4gICAgYmFja2dyb3VuZDojYzZjNmM2O1xyXG4gICAgcGFkZGluZzo1cHggNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuICAiXX0= */"

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




var VanbanduthaochitietPage = /** @class */ (function () {
    function VanbanduthaochitietPage(authService, route) {
        this.authService = authService;
        this.route = route;
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
            _this.LtsAllDanhMuc = res["LtsAllDanhMuc"];
            _this.TrangThaiCaNhanID = res["TrangThaiCaNhanID"];
            _this.strNguoiNhan = res["strNguoiNhan"];
            _this.strNoiNhanbenNgoai = res["strNoiNhanbenNgoai"];
            _this.DonViNhan = res["strDonViNhan"];
            _this.TrangThaiVanBan = res["TrangThaiVanBan"];
        });
    };
    VanbanduthaochitietPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbanduthaochitiet',
            template: __webpack_require__(/*! ./vanbanduthaochitiet.page.html */ "./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.html"),
            styles: [__webpack_require__(/*! ./vanbanduthaochitiet.page.scss */ "./src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], VanbanduthaochitietPage);
    return VanbanduthaochitietPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbanduthaochitiet-vanbanduthaochitiet-module.js.map