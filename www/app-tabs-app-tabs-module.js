(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-tabs-app-tabs-module"],{

/***/ "./src/app/members/app-tabs/app-tabs.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/app-tabs/app-tabs.module.ts ***!
  \*****************************************************/
/*! exports provided: AppTabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTabsRoutingModule", function() { return AppTabsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-tabs.page */ "./src/app/members/app-tabs/app-tabs.page.ts");







var routes = [
    {
        path: 'tabs',
        component: _app_tabs_page__WEBPACK_IMPORTED_MODULE_6__["AppTabsPage"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            { path: 'dashboard', loadChildren: 'src/app/members/dashboard/dashboard.module#DashboardPageModule' },
            { path: 'vanbanden',
                children: [
                    {
                        path: '',
                        loadChildren: 'src/app/members/vanbanden/vanbanden.module#VanbandenPageModule'
                    },
                    {
                        path: 'vanbandenchuaxuly',
                        loadChildren: 'src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.module#VanbandenchuaxulyPageModule'
                    },
                    {
                        path: 'vanbandenchuadoc',
                        loadChildren: 'src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.module#VanbandenchuadocPageModule'
                    },
                    {
                        path: 'vanbandenxulychinh',
                        loadChildren: 'src/app/members/vanbanden/vanbandenxulychinh/vanbandenxulychinh.module#VanbandenxulychinhPageModule'
                    },
                    {
                        path: 'chitietvanbanden/:vanbandenid',
                        loadChildren: 'src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.module#ChitietvanbandenPageModule'
                    },
                ]
            },
            { path: 'vanbandi',
                children: [
                    {
                        path: '',
                        loadChildren: 'src/app/members/vanbandi/vanbandi.module#VanbandiPageModule',
                    },
                    {
                        path: 'vanbandichuadoc',
                        loadChildren: 'src/app/members/vanbandichuadoc/vanbandichuadoc.module#VanbandichuadocPageModule',
                    },
                    {
                        path: 'chitietvanbandi/:vanbandiid',
                        loadChildren: 'src/app/members/chitietvanbandi/chitietvanbandi.module#ChitietvanbandiPageModule',
                    },
                ]
            },
            { path: 'congviec', loadChildren: 'src/app/members/congviec/congviec.module#CongviecPageModule' },
            { path: 'lichlamviec', loadChildren: 'src/app/members/lichlamviec/lichlamviec.module#LichlamviecPageModule' },
            {
                path: 'vanbanduthao',
                children: [
                    {
                        path: '',
                        loadChildren: 'src/app/members/vanbanduthao/vanbanduthao.module#VanbanduthaoPageModule',
                    },
                    {
                        path: 'vanbanduthaochuaxuly',
                        loadChildren: 'src/app/members/vanbanduthaochuaxuly/vanbanduthaochuaxuly.module#VanbanduthaochuaxulyPageModule',
                    },
                    {
                        path: 'vanbanduthaodangxuly',
                        loadChildren: 'src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.module#VanbanduthaodangxulyPageModule',
                    },
                    {
                        path: 'vanbanduthaodaxuly',
                        loadChildren: 'src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.module#VanbanduthaodaxulyPageModule',
                    },
                    {
                        path: 'vanbanduthaochitiet/:vanbanduthaoid',
                        loadChildren: 'src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.module#VanbanduthaochitietPageModule',
                    },
                ]
            },
            { path: 'danhba', loadChildren: 'src/app/members/danhba/danhba.module#DanhbaPageModule' },
            { path: 'viewfile', loadChildren: 'src/app/members/viewfile/viewfile.module#ViewfilePageModule' },
        ]
    }
];
var AppTabsRoutingModule = /** @class */ (function () {
    function AppTabsRoutingModule() {
    }
    AppTabsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_app_tabs_page__WEBPACK_IMPORTED_MODULE_6__["AppTabsPage"]]
        })
    ], AppTabsRoutingModule);
    return AppTabsRoutingModule;
}());



/***/ }),

/***/ "./src/app/members/app-tabs/app-tabs.page.html":
/*!*****************************************************!*\
  !*** ./src/app/members/app-tabs/app-tabs.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button tab=\"dashboard\">\r\n          <ion-icon ios=\"ios-home-outline\" md=\"md-home\"></ion-icon>\r\n          <ion-label>Trang chủ</ion-label>\r\n        </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"vanbanden\">\r\n        <ion-icon  ios=\"ios-copy-outline\" md=\"md-copy\"></ion-icon>\r\n      <ion-label>Văn bản đến</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"vanbandi\">\r\n      <ion-icon ios=\"ios-paper-plane-outline\" md=\"md-paper-plane\"></ion-icon>\r\n      <ion-label>Văn bản đi</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"congviec\">\r\n        <ion-icon ios=\"ios-clipboard-outline\" md=\"md-clipboard\"></ion-icon>\r\n      <ion-label>Công việc</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"lichlamviec\">\r\n        <ion-icon ios=\"ios-calendar-outline\" md=\"md-calendar\"></ion-icon>\r\n      <ion-label>Lich làm việc</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/members/app-tabs/app-tabs.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/members/app-tabs/app-tabs.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvYXBwLXRhYnMvYXBwLXRhYnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/members/app-tabs/app-tabs.page.ts":
/*!***************************************************!*\
  !*** ./src/app/members/app-tabs/app-tabs.page.ts ***!
  \***************************************************/
/*! exports provided: AppTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTabsPage", function() { return AppTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppTabsPage = /** @class */ (function () {
    function AppTabsPage() {
    }
    AppTabsPage.prototype.ngOnInit = function () {
    };
    AppTabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-tabs',
            template: __webpack_require__(/*! ./app-tabs.page.html */ "./src/app/members/app-tabs/app-tabs.page.html"),
            styles: [__webpack_require__(/*! ./app-tabs.page.scss */ "./src/app/members/app-tabs/app-tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppTabsPage);
    return AppTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-tabs-app-tabs-module.js.map