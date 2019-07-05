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

module.exports = "ion-content {\n  --background: #f1f1f1; }\n\n.container-login {\n  background: #f1f1f1 url(\"/assets/img/bgLogin.png\") no-repeat;\n  background-size: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%; }\n\n.box-login {\n  position: relative;\n  top: 10%;\n  width: 80%;\n  margin: auto;\n  border-radius: 12px;\n  background: #fff;\n  padding: 20px 20px 20px 10px;\n  box-shadow: 0px 1px 10px 1px #949393; }\n\n.btn-login {\n  border-radius: 18px;\n  border: 1px solid #c49d6b;\n  background: #985c10;\n  display: block;\n  margin: auto;\n  width: 50%;\n  position: relative;\n  bottom: -40px; }\n\nion-button, ion-button:active {\n  --background: transparent;\n  color: #fff; }\n\n.logo-box img {\n  position: relative;\n  display: block;\n  margin: 102px auto 0px; }\n\n.icon-input {\n  display: flex;\n  align-items: flex-end;\n  position: absolute;\n  padding-right: 10px;\n  bottom: 0;\n  font-size: 24px;\n  padding: 0px 0px 9px 6px;\n  min-width: 0 !important;\n  text-align: left !important; }\n\nion-input {\n  padding: 7px 0px 0px 41px !important; }\n\nion-toolbar {\n  text-align: center;\n  --background: #f1f1f1;\n  color: #985c10;\n  border: none;\n  font-size: 10px;\n  font-weight: 500;\n  --border-width:0px !important; }\n\nion-toolbar ion-title {\n  border: none;\n  font-size: 10px;\n  font-weight: 500; }\n\nion-title {\n  margin: auto;\n  display: block;\n  padding: 10px; }\n\n.footer-md:before {\n  background: transparent !important; }\n\n.button-native {\n  box-shadow: none !important; }\n\nbutton {\n  box-shadow: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2xvZ2luL0U6XFxQcm9qZWN0XFxNaW5lXFxNb2JpbGVcXFZpY2VtXFxFb2ZmaWNlQXBwL3NyY1xcYXBwXFxwdWJsaWNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUVJLDREQUE0RDtFQUM1RCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsb0NBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSx5QkFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QiwyQkFBMkIsRUFBQTs7QUFFM0I7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxrQkFBa0I7RUFDbEIscUJBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNkJBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYSxFQUFBOztBQUVqQjtFQUNJLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcbi5jb250YWluZXItbG9naW57XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAjZmZmIHVybCgvc3JjL2Fzc2V0cy9pbWcvYmdMb2dpbi5wbmcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjEgdXJsKCcvYXNzZXRzL2ltZy9iZ0xvZ2luLnBuZycpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uYm94LWxvZ2lue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCAjOTQ5MzkzO1xyXG59XHJcbi5idG4tbG9naW57XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0OWQ2YjtcclxuICAgIGJhY2tncm91bmQ6ICM5ODVjMTA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IC00MHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uLGlvbi1idXR0b246YWN0aXZle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9nby1ib3ggaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwMnB4IGF1dG8gMHB4O1xyXG59XHJcbi5pY29uLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDBweCA5cHggNnB4O1xyXG4gICAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMHB4IDBweCA0MXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgY29sb3I6ICM5ODVjMTA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGV7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1tZDpiZWZvcmV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5idXR0b24tbmF0aXZle1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9Il19 */"

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
    function LoginPage(events, authService, formBuilder, menuCtrl) {
        this.events = events;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.credentialsForm.value).subscribe(function (res) {
            console.log('login thanh công.');
            _this.events.publish('user:login');
        });
    };
    LoginPage.prototype.register = function () {
        var _this = this;
        this.authService.register(this.credentialsForm.value).subscribe(function (res) {
            _this.authService.login(_this.credentialsForm.value).subscribe();
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/public/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/public/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-login-login-module.js.map