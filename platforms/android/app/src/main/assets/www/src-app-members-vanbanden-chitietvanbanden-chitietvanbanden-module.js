(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-vanbanden-chitietvanbanden-chitietvanbanden-module"],{

/***/ "./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ChitietvanbandenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitietvanbandenPageModule", function() { return ChitietvanbandenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chitietvanbanden_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chitietvanbanden.page */ "./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.page.ts");







var routes = [
    {
        path: '',
        component: _chitietvanbanden_page__WEBPACK_IMPORTED_MODULE_6__["ChitietvanbandenPage"]
    }
];
var ChitietvanbandenPageModule = /** @class */ (function () {
    function ChitietvanbandenPageModule() {
    }
    ChitietvanbandenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chitietvanbanden_page__WEBPACK_IMPORTED_MODULE_6__["ChitietvanbandenPage"]]
        })
    ], ChitietvanbandenPageModule);
    return ChitietvanbandenPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <!-- <ion-menu-button></ion-menu-button> -->\r\n          <ion-back-button text=\"\" ></ion-back-button>     \r\n      </ion-buttons>\r\n      <ion-title>Chi tiết văn bản đến</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button>\r\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>    \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item *ngIf=\"vanbanden.NgayDen!=null\">\r\n    <ion-label>\r\n      <div ><span > Ngày đến:</span> {{vanbanden.NgayDen|date:'dd/MM/yyyy'}}<br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"vanbanden.SoKyHieu!=''\">\r\n     <ion-label>\r\n      <div ><span > Số ký hiệu:</span> {{vanbanden.SoKyHieu}}<br></div>\r\n      </ion-label> \r\n    </ion-item>\r\n    <ion-item *ngIf=\"vanbanden.NgayBanHanh!=null\">\r\n    <ion-label>\r\n      <div ><span > Ngày văn bản:</span> {{vanbanden.NgayBanHanh|date:'dd/MM/yyyy'}}<br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      <div *ngIf=\"vanbanden.TenLoaiVanBan!=null\"><span > Loại văn bản:</span> {{vanbanden.TenLoaiVanBan}}<br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"vanbanden.TenSoVanBan!=null\">\r\n    <ion-label>\r\n      <div ><span > Sổ văn bản:</span> {{vanbanden.TenSoVanBan}}<br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"vanbanden.CoQuanBanHanhText!=null\">\r\n    <ion-label>\r\n      <div  class=\"line-break\"><span > Cơ quan ban hành:</span> {{vanbanden.CoQuanBanHanhText}}<br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"vanbanden.TrichYeu !=''\">\r\n    <ion-label>\r\n      <div  class=\"line-break\"><span > Trích yếu:</span> {{vanbanden.TrichYeu}}<br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"vanbanden.HanXuLy!=null\">\r\n    <ion-label>\r\n      <div ><span > Hạn xử lý:</span> {{vanbanden.HanXuLy|date:'dd/MM/yyyy'}}<br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      <div *ngFor=\"let danhmuc of LtsAllDanhMuc\" ><span > {{danhmuc.Ten}} :</span> {{danhmuc.TenGiaTri}}<br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      <div><span > Trạng thái văn bản:</span>\r\n        <span *ngIf=\"vanbanden.IsXuLy==null\" class=\"danger\">Chưa xử lý</span>\r\n        <span *ngIf=\"vanbanden.IsXuLy==true\" class=\"success\">Đã xử lý</span>\r\n        <span *ngIf=\"vanbanden.IsXuLy==false\" class=\"warning\">Đang xử lý</span>\r\n        <br></div>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      <div>\r\n      <span > Trạng thái người dùng:</span>\r\n        <span *ngIf=\"vanbanden.TrangThaiVBID==0\" class=\"danger\">Chưa xử lý</span>\r\n        <span *ngIf=\"vanbanden.TrangThaiVBID==3\" class=\"success\">Đã xử lý</span>\r\n        <span *ngIf=\"vanbanden.TrangThaiVBID==1\" class=\"warning\">Đang xử lý</span>\r\n        <br></div> \r\n    </ion-label>\r\n  </ion-item> \r\n  <ion-item *ngIf=\"vanbanden.LtsFileAttach!=null\">\r\n    <ion-label>\r\n        <div>\r\n            <span > File văn bản:</span>\r\n            <p *ngFor=\"let file of vanbanden.LtsFileAttach\"><a target=\"_blank\" href=\"/{{file.FileLink}}\">{{file.Ten}}</a></p>\r\n          </div> \r\n    </ion-label>\r\n  </ion-item>  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label div span:first-child {\n  font-weight: bold; }\n\n.line-break {\n  overflow: inherit;\n  text-overflow: inherit;\n  white-space: normal; }\n\n.success {\n  background: #45B6AF;\n  padding: 5px 5px;\n  color: #fff; }\n\n.warning {\n  background: #dfba49;\n  padding: 5px 5px;\n  color: #fff; }\n\n.danger {\n  background: #F3565D;\n  padding: 5px 5px;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kZW4vY2hpdGlldHZhbmJhbmRlbi9FOlxcUHJvamVjdFxcTWluZVxcTW9iaWxlXFxWaWNlbVxcRW9mZmljZUFwcC9zcmNcXGFwcFxcbWVtYmVyc1xcdmFuYmFuZGVuXFxjaGl0aWV0dmFuYmFuZGVuXFxjaGl0aWV0dmFuYmFuZGVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFrQjtFQUNsQixzQkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUVmO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy92YW5iYW5kZW4vY2hpdGlldHZhbmJhbmRlbi9jaGl0aWV0dmFuYmFuZGVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCBkaXYgc3BhbjpmaXJzdC1jaGlsZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5saW5lLWJyZWFre1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQgO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdCA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICAuc3VjY2Vzc3tcclxuICAgICAgYmFja2dyb3VuZDogIzQ1QjZBRjtcclxuICAgICAgcGFkZGluZzo1cHggNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLndhcm5pbmd7XHJcbiAgICBiYWNrZ3JvdW5kOiNkZmJhNDk7XHJcbiAgICBwYWRkaW5nOjVweCA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZGFuZ2Vye1xyXG4gICAgYmFja2dyb3VuZDojRjM1NjVEO1xyXG4gICAgcGFkZGluZzo1cHggNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ChitietvanbandenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitietvanbandenPage", function() { return ChitietvanbandenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ChitietvanbandenPage = /** @class */ (function () {
    function ChitietvanbandenPage(authService, route) {
        this.authService = authService;
        this.route = route;
        this.dataquery = { ID: 0 };
        this.total = 0;
    }
    ChitietvanbandenPage.prototype.ngOnInit = function () {
    };
    ChitietvanbandenPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    ChitietvanbandenPage.prototype.load = function () {
        var _this = this;
        this.dataquery.ID = parseInt(this.route.snapshot.paramMap.get('vanbandenid'));
        this.authService.getVanBanDenByID(this.dataquery).subscribe(function (res) {
            _this.vanbanden = res["Data"];
            _this.LtsAllDanhMuc = res["LtsAllDanhMuc"];
        });
    };
    ChitietvanbandenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chitietvanbanden',
            template: __webpack_require__(/*! ./chitietvanbanden.page.html */ "./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.page.html"),
            styles: [__webpack_require__(/*! ./chitietvanbanden.page.scss */ "./src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ChitietvanbandenPage);
    return ChitietvanbandenPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbanden-chitietvanbanden-chitietvanbanden-module.js.map