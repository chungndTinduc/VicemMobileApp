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

<<<<<<< HEAD
module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <!-- <ion-menu-button></ion-menu-button> -->\n          <ion-back-button text=\"\" ></ion-back-button>     \n        </ion-buttons>\n        <ion-title>Chi tiết văn bản đi</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button >\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>     \n</ion-header>\n\n<ion-content>\n    <ion-item *ngIf=\"vanban.NgayBanHanh!=null\">\n      <ion-label>\n        <div ><span > Ngày ban hành:</span> {{vanban.NgayBanHanh|date:'dd/MM/yyyy'}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.SoKyHieu!=''\">\n       <ion-label>\n        <div ><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\n        </ion-label> \n      </ion-item>\n     \n    <ion-item *ngIf=\"vanban.TenLoaiVanBan!=null\">\n      <ion-label>\n        <div ><span > Loại văn bản:</span> {{vanban.TenLoaiVanBan}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.TenSoVanBan!=null\">\n      <ion-label>\n        <div ><span > Sổ văn bản:</span> {{vanban.TenSoVanBan}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.TenDonViSoanThao!=null\">\n      <ion-label>\n        <div  class=\"line-break\"><span > Đơn vị soạn thảo:</span> {{vanban.TenDonViSoanThao}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.TrichYeu !=''\">\n      <ion-label>\n        <div  class=\"line-break\"><span > Trích yếu:</span> {{vanban.TrichYeu}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.HanXuLy!=null\">\n      <ion-label>\n        <div ><span > Hạn xử lý:</span> {{vanban.HanXuLy|date:'dd/MM/yyyy'}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.LstDanhMucGiaTri.length>0\">\n      <ion-label >\n        <div *ngFor=\"let danhmuc of LtsAllDanhMuc\" ><span > {{danhmuc.Ten}} :</span> {{danhmuc.TenGiaTri}}<br></div>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"vanban.LtsFileAttach!=null\">\n      <ion-label>\n          <div>\n              <span > File văn bản:</span>\n              <p *ngFor=\"let file of vanban.LtsFileAttach\"><a target=\"_blank\" href=\"/{{file.FileLink}}\">{{file.Ten}}</a></p>\n            </div> \n      </ion-label>\n    </ion-item>  \n  </ion-content>\n  \n"
=======
module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <!-- <ion-menu-button></ion-menu-button> -->\r\n          <ion-back-button text=\"\" ></ion-back-button>     \r\n        </ion-buttons>\r\n        <ion-title>Chi tiết văn bản đi</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button >\r\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>     \r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item *ngIf=\"vanban.NgayBanHanh!=null\">\r\n      <ion-label>\r\n        <div ><span > Ngày ban hành:</span> {{vanban.NgayBanHanh|date:'dd/MM/yyyy'}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"vanban.SoKyHieu!=''\">\r\n       <ion-label>\r\n        <div ><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\r\n        </ion-label> \r\n      </ion-item>\r\n     \r\n    <ion-item *ngIf=\"vanban.TenLoaiVanBan!=null\">\r\n      <ion-label>\r\n        <div ><span > Loại văn bản:</span> {{vanban.TenLoaiVanBan}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"vanban.TenSoVanBan!=null\">\r\n      <ion-label>\r\n        <div ><span > Sổ văn bản:</span> {{vanban.TenSoVanBan}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"vanban.TenDonViSoanThao!=null\">\r\n      <ion-label>\r\n        <div  class=\"line-break\"><span > Đơn vị soạn thảo:</span> {{vanban.TenDonViSoanThao}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"vanban.TrichYeu !=''\">\r\n      <ion-label>\r\n        <div  class=\"line-break\"><span > Trích yếu:</span> {{vanban.TrichYeu}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"vanban.HanXuLy!=null\">\r\n      <ion-label>\r\n        <div ><span > Hạn xử lý:</span> {{vanban.HanXuLy|date:'dd/MM/yyyy'}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"vanban.LstDanhMucGiaTri.length>0\">\r\n      <ion-label >\r\n        <div *ngFor=\"let danhmuc of LtsAllDanhMuc\" ><span > {{danhmuc.Ten}} :</span> {{danhmuc.TenGiaTri}}<br></div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"vanban.LtsFileAttach!=null\">\r\n      <ion-label>\r\n          <div>\r\n              <span > File văn bản:</span>\r\n              <p *ngFor=\"let file of vanban.LtsFileAttach\"><a target=\"_blank\" href=\"/{{file.FileLink}}\">{{file.Ten}}</a></p>\r\n            </div> \r\n      </ion-label>\r\n    </ion-item>  \r\n  </ion-content>\r\n  \r\n"
>>>>>>> c0c083cbee8206c02680291e762026d9488b4f4a

/***/ }),

/***/ "./src/app/members/chitietvanbandi/chitietvanbandi.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/members/chitietvanbandi/chitietvanbandi.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label div span:first-child {\n  font-weight: bold; }\n\n.line-break {\n  overflow: inherit;\n  text-overflow: inherit;\n  white-space: normal; }\n\n.success {\n  background: #45B6AF;\n  padding: 5px 5px;\n  color: #fff; }\n\n.warning {\n  background: #dfba49;\n  padding: 5px 5px;\n  color: #fff; }\n\n.danger {\n  background: #F3565D;\n  padding: 5px 5px;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9jaGl0aWV0dmFuYmFuZGkvRTpcXFByb2plY3RcXE1pbmVcXE1vYmlsZVxcVmljZW1cXEVvZmZpY2VBcHAvc3JjXFxhcHBcXG1lbWJlcnNcXGNoaXRpZXR2YW5iYW5kaVxcY2hpdGlldHZhbmJhbmRpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFrQjtFQUNsQixzQkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUVmO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9jaGl0aWV0dmFuYmFuZGkvY2hpdGlldHZhbmJhbmRpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCBkaXYgc3BhbjpmaXJzdC1jaGlsZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5saW5lLWJyZWFre1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQgO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdCA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICAuc3VjY2Vzc3tcclxuICAgICAgYmFja2dyb3VuZDogIzQ1QjZBRjtcclxuICAgICAgcGFkZGluZzo1cHggNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLndhcm5pbmd7XHJcbiAgICBiYWNrZ3JvdW5kOiNkZmJhNDk7XHJcbiAgICBwYWRkaW5nOjVweCA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZGFuZ2Vye1xyXG4gICAgYmFja2dyb3VuZDojRjM1NjVEO1xyXG4gICAgcGFkZGluZzo1cHggNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuICAiXX0= */"

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