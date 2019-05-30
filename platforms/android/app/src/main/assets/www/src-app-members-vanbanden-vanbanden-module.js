(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-vanbanden-vanbanden-module"],{

/***/ "./src/app/members/vanbanden/vanbanden.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/members/vanbanden/vanbanden.module.ts ***!
  \*******************************************************/
/*! exports provided: VanbandenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandenPageModule", function() { return VanbandenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vanbanden_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanbanden.page */ "./src/app/members/vanbanden/vanbanden.page.ts");







var routes = [
    {
        path: '',
        component: _vanbanden_page__WEBPACK_IMPORTED_MODULE_6__["VanbandenPage"]
    }
];
var VanbandenPageModule = /** @class */ (function () {
    function VanbandenPageModule() {
    }
    VanbandenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vanbanden_page__WEBPACK_IMPORTED_MODULE_6__["VanbandenPage"]]
        })
    ], VanbandenPageModule);
    return VanbandenPageModule;
}());



/***/ }),

/***/ "./src/app/members/vanbanden/vanbanden.page.html":
/*!*******************************************************!*\
  !*** ./src/app/members/vanbanden/vanbanden.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Văn bản đến</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"presentPopover($event)\">\r\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n      <ion-tab-bar>\r\n        <ion-tab-button tab=\"vanbanden\" class=\"vanbanden\" class=\"tabvanbanden\">\r\n            <ion-icon name=\"ios-document\"></ion-icon>\r\n            <ion-label>Danh sách</ion-label>\r\n          </ion-tab-button>\r\n        <ion-tab-button tab=\"vanbanden/vanbandenchuaxuly\" class=\"tabvanbandenchuaxuly\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Chưa xử lý</ion-label>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button tab=\"vanbanden/vanbandenchuadoc\" class=\"tabvanbandenchuadoc\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n           <ion-label>Chưa đọc</ion-label>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button tab=\"vanbanden/vanbandenxulychinh\" class=\"tabvanbandenxulychinh\">\r\n          <ion-icon name=\"ios-document\"></ion-icon>\r\n          <ion-label>Xử lý chính</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-searchbar  id=\"keyword\" name=\"keyword\" (keypress)=\"onKeyPressed($event)\" [(ngModel)]=\"dataquery.Keyword\"></ion-searchbar>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"dorefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list reorder=\"true\">\r\n    <ion-item lines=\"none\"  *ngFor=\"let vanban of danhsachVanBans\" routerLink=\"/members/tabs/vanbanden/chitietvanbanden/{{vanban.ID}}\">\r\n      <ion-label>\r\n        <div *ngIf=\"vanban.NgayDen!=null\"><span > Ngày đến :</span> {{vanban.NgayDen|date:'dd/MM/yyyy'}}<br></div>\r\n        <div *ngIf=\"vanban.SoKyHieu!=''\"><span > Số ký hiệu:</span> {{vanban.SoKyHieu}}<br></div>\r\n        <div class=\"line-break\">{{vanban.TrichYeu}}</div>\r\n      </ion-label>\r\n    </ion-item >\r\n  </ion-list>\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/vanbanden/vanbanden.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/members/vanbanden/vanbanden.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 5px 0px; }\n\nion-item ion-label span {\n  font-weight: bold; }\n\n.tabvanbanden {\n  color: burlywood; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy92YW5iYW5kZW4vRDpcXENWXFxUaW5oVmFuXFxWaWNlbVxcQXBwXFxWaWNlbU1vYmlsZUFwcC9zcmNcXGFwcFxcbWVtYmVyc1xcdmFuYmFuZGVuXFx2YW5iYW5kZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWUsRUFBQTs7QUFFbkI7RUFDRyxpQkFBZ0IsRUFBQTs7QUFFbkI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvdmFuYmFuZGVuL3ZhbmJhbmRlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIHBhZGRpbmc6NXB4IDBweDtcclxufVxyXG5pb24taXRlbSBpb24tbGFiZWwgc3BhbntcclxuICAgZm9udC13ZWlnaHQ6Ym9sZDsgXHJcbn1cclxuLnRhYnZhbmJhbmRlbntcclxuICAgIGNvbG9yOiBidXJseXdvb2Q7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/members/vanbanden/vanbanden.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/vanbanden/vanbanden.page.ts ***!
  \*****************************************************/
/*! exports provided: VanbandenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanbandenPage", function() { return VanbandenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var VanbandenPage = /** @class */ (function () {
    function VanbandenPage(authService) {
        this.authService = authService;
        this.total = 0;
        this.dataquery = { CurrentPage: 1, RowPerPage: 10, SearchIn: 'SoKyHieu,TrichYeu', Keyword: '' };
        this.onKeyPressed = function (keyEvent) {
            if (keyEvent.keyCode == 13) {
                this.load();
            }
        };
    }
    VanbandenPage.prototype.ngOnInit = function () {
    };
    VanbandenPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    // On segment click
    VanbandenPage.prototype.selectedTab = function (index) {
        this.slides.slideTo(index);
        console.log("selectedTab", index);
    };
    // On slide changed
    VanbandenPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        var slides_count = this.segments.nativeElement.childElementCount;
        this.page = currentIndex.toString();
        if (this.page >= slides_count)
            this.page = (slides_count - 1).toString();
        console.log("slides_count", slides_count);
        console.log("this.page", this.page);
        this.centerScroll();
    };
    // Center current scroll
    VanbandenPage.prototype.centerScroll = function () {
        if (!this.segments || !this.segments.nativeElement)
            return;
        var sizeLeft = this.sizeLeft();
        var sizeCurrent = this.segments.nativeElement.children[this.page].clientWidth;
        var result = sizeLeft - (window.innerWidth / 2) + (sizeCurrent / 2);
        result = (result > 0) ? result : 0;
        this.smoothScrollTo(result);
    };
    VanbandenPage.prototype.sizeLeft = function () {
        var size = 0;
        for (var i = 0; i < this.page; i++) {
            size += this.segments.nativeElement.children[i].clientWidth;
        }
        return size;
    };
    // Animate scroll
    VanbandenPage.prototype.smoothScrollTo = function (endX) {
        var _this = this;
        var startTime = new Date().getTime();
        var startX = this.segments.nativeElement.scrollLeft;
        var distanceX = endX - startX;
        var duration = 400;
        var timer = setInterval(function () {
            var time = new Date().getTime() - startTime;
            var newX = _this.easeInOutQuart(time, startX, distanceX, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            _this.segments.nativeElement.scrollLeft = newX;
        }, 1000 / 60); // 60 fps
    };
    VanbandenPage.prototype.easeInOutQuart = function (time, from, distance, duration) {
        if ((time /= duration / 2) < 1)
            return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
    VanbandenPage.prototype.load = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDen(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
            return true;
        });
    };
    VanbandenPage.prototype.dorefresh = function (refresher) {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDen(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
            refresher.target.complete();
        });
    };
    VanbandenPage.prototype.loadsearch = function () {
        var _this = this;
        this.dataquery.RowPerPage = 10;
        this.dataquery.CurrentPage = 1;
        this.authService.getVanBanDen(this.dataquery).subscribe(function (res) {
            _this.danhsachVanBans = res["Data"];
            _this.total = res["Total"];
        });
    };
    VanbandenPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.dataquery.CurrentPage == 1)
                _this.dataquery.CurrentPage = 2;
            if ((_this.dataquery.CurrentPage * _this.dataquery.RowPerPage) < _this.total) {
                _this.authService.getVanBanDen(_this.dataquery).subscribe(function (res) {
                    for (var j = 0; j < res["Data"].length; j++) {
                        _this.danhsachVanBans.push(res["Data"][j]);
                    }
                });
                _this.dataquery.CurrentPage = _this.dataquery.CurrentPage + 1;
            }
            infiniteScroll.target.complete();
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], VanbandenPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("segments"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VanbandenPage.prototype, "segments", void 0);
    VanbandenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanbanden',
            template: __webpack_require__(/*! ./vanbanden.page.html */ "./src/app/members/vanbanden/vanbanden.page.html"),
            styles: [__webpack_require__(/*! ./vanbanden.page.scss */ "./src/app/members/vanbanden/vanbanden.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], VanbandenPage);
    return VanbandenPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-members-vanbanden-vanbanden-module.js.map