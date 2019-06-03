(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"],{

/***/ "./src/app/public/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/public/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/public/login/login.page.html":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n    <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"container-login\">\r\n        <div class=\"logo-box\">\r\n          <img src=\"/assets/img/logo.png\"/>\r\n        </div>\r\n          <div class=\"box-login\">\r\n            <ion-item>\r\n              <!-- <ion-label position=\"floating\">Tên Đăng nhập</ion-label> -->\r\n              <ion-icon class=\"icon-input\" ios=\"ios-contact-outline\" md=\"md-contact\" item-start></ion-icon>\r\n              <ion-input  formControlName=\"userName\"  placeholder=\"Tên đăng nhập\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <!-- <ion-label position=\"floating\">Mật khẩu</ion-label> -->\r\n              <ion-icon class=\"icon-input\" ios=\"ios-key-outline\" md=\"md-key\" item-start></ion-icon>\r\n              <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Mật khẩu\"></ion-input>\r\n            </ion-item>\r\n            <ion-button class=\"btn-login\"  type=\"submit\" [disabled]=\"!credentialsForm.valid\" outline >Đăng nhập</ion-button>\r\n          </div>\r\n          \r\n      </div>\r\n      </form>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-toolbar>\r\n      <ion-title>coppyright tinducsoftware 2019</ion-title>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n"

/***/ }),

/***/ "./src/app/public/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f1f1f1; }\n\n.container-login {\n  background: #f1f1f1 url(\"/assets/img/bgLogin.png\") no-repeat;\n  background-size: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%; }\n\n.box-login {\n  position: relative;\n  top: 10%;\n  width: 80%;\n  margin: auto;\n  border-radius: 12px;\n  background: #fff;\n  padding: 20px 20px 20px 10px;\n  box-shadow: 0px 1px 10px 1px #949393; }\n\n.btn-login {\n  border-radius: 18px;\n  border: 1px solid #c49d6b;\n  background: #985c10;\n  display: block;\n  margin: auto;\n  width: 50%;\n  position: relative;\n  bottom: -40px; }\n\nion-button, ion-button:active {\n  --background: transparent;\n  color: #fff; }\n\n.logo-box img {\n  position: relative;\n  display: block;\n  margin: 102px auto 0px; }\n\n.icon-input {\n  display: flex;\n  align-items: flex-end;\n  position: absolute;\n  padding-right: 10px;\n  bottom: 0;\n  font-size: 24px;\n  padding: 0px 0px 9px 6px;\n  min-width: 0 !important;\n  text-align: left !important; }\n\nion-input {\n  padding: 7px 0px 0px 41px !important; }\n\nion-toolbar {\n  --background: #f1f1f1;\n  color: #985c10;\n  border: none;\n  font-size: 10px;\n  font-weight: 500;\n  --border-width:0px !important; }\n\nion-toolbar ion-title {\n  border: none;\n  font-size: 10px;\n  font-weight: 500; }\n\nion-title {\n  margin: auto;\n  display: block;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2xvZ2luL0U6XFxQcm9qZWN0XFxNaW5lXFxNb2JpbGVcXFZpY2VtXFxFb2ZmaWNlQXBwL3NyY1xcYXBwXFxwdWJsaWNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUVJLDREQUE0RDtFQUM1RCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsb0NBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSx5QkFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QiwyQkFBMkIsRUFBQTs7QUFFM0I7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxxQkFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw2QkFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuLmNvbnRhaW5lci1sb2dpbntcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6ICNmZmYgdXJsKC9zcmMvYXNzZXRzL2ltZy9iZ0xvZ2luLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMSB1cmwoJy9hc3NldHMvaW1nL2JnTG9naW4ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5ib3gtbG9naW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggMXB4ICM5NDkzOTM7XHJcbn1cclxuLmJ0bi1sb2dpbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5ZDZiO1xyXG4gICAgYmFja2dyb3VuZDogIzk4NWMxMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogLTQwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24saW9uLWJ1dHRvbjphY3RpdmV7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2dvLWJveCBpbWd7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTAycHggYXV0byAwcHg7XHJcbn1cclxuLmljb24taW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDlweCA2cHg7XHJcbiAgICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwcHggMHB4IDQxcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICAgIGNvbG9yOiAjOTg1YzEwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDowcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgaW9uLXRvb2xiYXIgaW9uLXRpdGxle1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/public/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/public/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(authService, formBuilder, menuCtrl) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            // email: ['', [Validators.required, Validators.email]],
            userName: [''],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    };
    LoginPage.prototype.onSubmit = function () {
        this.authService.login(this.credentialsForm.value).subscribe();
    };
    LoginPage.prototype.register = function () {
        var _this = this;
        this.authService.register(this.credentialsForm.value).subscribe(function (res) {
            // Call Login to automatically login the new user
            _this.authService.login(_this.credentialsForm.value).subscribe();
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/public/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/public/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-login-login-module.js.map