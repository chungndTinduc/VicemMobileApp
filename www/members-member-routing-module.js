(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-member-routing-module"],{

/***/ "./src/app/members/member-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/members/member-routing.module.ts ***!
  \**************************************************/
/*! exports provided: MemberRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRoutingModule", function() { return MemberRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    // { path: 'tabs', loadChildren: './app-tabs/app-tabs.module#AppTabsPageModule' },
    // { path: 'vanbanden', loadChildren: './vanbanden/vanbanden.module#VanbandenPageModule' },
    // { path: 'vanbandi', loadChildren: './vanbandi/vanbandi.module#VanbandiPageModule' },
    // { path: 'congviec', loadChildren: './congviec/congviec.module#CongviecPageModule' },
    // { path: 'lichlamviec', loadChildren: './lichlamviec/lichlamviec.module#LichlamviecPageModule' },
    // { path: 'danhba', loadChildren: './danhba/danhba.module#DanhbaPageModule' },
    // { path: 'vanbanduthao', loadChildren: './vanbanduthao/vanbanduthao.module#VanbanduthaoPageModule' },
    // { path: '', loadChildren: './app-tabs/app-tabs.module#AppTabsPageModule' },
    // { path: 'members', loadChildren: './app-tabs/app-tabs.module#AppTabsPageModule' },
    {
        path: '',
        loadChildren: './app-tabs/app-tabs.module#AppTabsRoutingModule',
    },
    { path: 'danhsach', loadChildren: './congviec/danhsach/danhsach.module#DanhsachPageModule' },
    { path: 'chuaxuly', loadChildren: './congviec/chuaxuly/chuaxuly.module#ChuaxulyPageModule' },
    { path: 'dangxuly', loadChildren: './congviec/dangxuly/dangxuly.module#DangxulyPageModule' },
    { path: 'daxuly', loadChildren: './congviec/daxuly/daxuly.module#DaxulyPageModule' },
];
var MemberRoutingModule = /** @class */ (function () {
    function MemberRoutingModule() {
    }
    MemberRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MemberRoutingModule);
    return MemberRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=members-member-routing-module.js.map