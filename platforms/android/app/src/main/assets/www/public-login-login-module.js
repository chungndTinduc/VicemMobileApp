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

module.exports = "ion-content {\n  --background: #f1f1f1; }\n\n.container-login {\n  background: #f1f1f1 url(\"/assets/img/bgLogin.png\") no-repeat;\n  background-size: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%; }\n\n.box-login {\n  position: relative;\n  top: 10%;\n  width: 80%;\n  margin: auto;\n  border-radius: 12px;\n  background: #fff;\n  padding: 20px 20px 20px 10px;\n  box-shadow: 0px 1px 10px 1px #949393; }\n\n.btn-login {\n  border-radius: 18px;\n  border: 1px solid #c49d6b;\n  background: #985c10;\n  display: block;\n  margin: auto;\n  width: 50%;\n  position: relative;\n  bottom: -40px; }\n\nion-button, ion-button:active {\n  --background: transparent;\n  color: #fff; }\n\n.logo-box img {\n  position: relative;\n  display: block;\n  margin: 102px auto 0px; }\n\n.icon-input {\n  display: flex;\n  align-items: flex-end;\n  position: absolute;\n  padding-right: 10px;\n  bottom: 0;\n  font-size: 24px;\n  padding: 0px 0px 9px 6px;\n  min-width: 0 !important;\n  text-align: left !important; }\n\nion-input {\n  padding: 7px 0px 0px 41px !important; }\n\nion-toolbar {\n  --background: #f1f1f1;\n  color: #985c10;\n  border: none;\n  font-size: 10px;\n  font-weight: 500;\n  --border-width:0px !important; }\n\nion-toolbar ion-title {\n  border: none;\n  font-size: 10px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2xvZ2luL0Q6XFxDVlxcVGluaFZhblxcVmljZW1cXEFwcFxcVmljZW1Nb2JpbGVBcHAvc3JjXFxhcHBcXHB1YmxpY1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBRWpCO0VBRUksNERBQTREO0VBQzVELHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixvQ0FBb0MsRUFBQTs7QUFFeEM7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQixFQUFBOztBQUUzQjtFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLHFCQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZCQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG4uY29udGFpbmVyLWxvZ2lue1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogI2ZmZiB1cmwoL3NyYy9hc3NldHMvaW1nL2JnTG9naW4ucG5nKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxIHVybCgnL2Fzc2V0cy9pbWcvYmdMb2dpbi5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJveC1sb2dpbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggIzk0OTM5MztcclxufVxyXG4uYnRuLWxvZ2lue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDlkNmI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTg1YzEwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAtNDBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbixpb24tYnV0dG9uOmFjdGl2ZXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ28tYm94IGltZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMDJweCBhdXRvIDBweDtcclxufVxyXG4uaWNvbi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggOXB4IDZweDtcclxuICAgIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDBweCAwcHggNDFweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgY29sb3I6ICM5ODVjMTA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGV7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfSJdfQ== */"

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