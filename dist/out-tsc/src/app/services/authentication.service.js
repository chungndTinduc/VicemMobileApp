import * as tslib_1 from "tslib";
import { Injectable, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
var TOKEN_KEY = 'auth-token';
var CURRENT_USER = 'current-user';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(storage, plt, http, helper, alertController, loadingController) {
        var _this = this;
        this.storage = storage;
        this.plt = plt;
        this.http = http;
        this.helper = helper;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.url = environment.url;
        this.user = [];
        this.CurrentUser = [];
        this.authenticationState = new BehaviorSubject(false);
        this.plt.ready().then(function () {
            _this.checkToken();
        });
    }
    //các hàm đăng ký service
    AuthenticationService.prototype.getSpecialData = function () {
        return this.get('api/nguoidung/test', null);
    };
    //các hàm đăng ký service
    AuthenticationService.prototype.getVanBanDen = function () {
        return this.get('api/vanbanden/test', null);
    };
    //các hàm đăng ký service
    AuthenticationService.prototype.postVanBanDen = function (data) {
        return this.post('api/vanbanden/test', data);
    };
    // hàm base authen
    AuthenticationService.prototype.checkToken = function () {
        var token = localStorage.getItem(TOKEN_KEY);
        var user = localStorage.getItem(CURRENT_USER);
        if (token && user) {
            var decoded = this.helper.decodeToken(token);
            var isExpired = this.helper.isTokenExpired(token);
            if (!isExpired) {
                this.user = decoded;
                this.authenticationState.next(true);
                var obj = JSON.parse(localStorage.getItem(CURRENT_USER));
                this.currentUser = obj;
            }
            else {
                localStorage.removeItem(TOKEN_KEY);
                localStorage.removeItem(CURRENT_USER);
            }
        }
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_KEY) !== null ? localStorage.getItem(TOKEN_KEY) : '';
    };
    AuthenticationService.prototype.register = function (credentials) {
        var _this = this;
        return this.http.post(this.url + "/api/register", credentials).pipe(catchError(function (e) {
            _this.showAlert(e.error.msg);
            throw new Error(e);
        }));
    };
    AuthenticationService.prototype.login = function (credentials) {
        var _this = this;
        return this.http.post(this.url + "api/NguoiDung/Login", credentials)
            .pipe(tap(function (res) {
            if (res['Token'] == "") {
                return _this.showAlert(res['Message']);
            }
            debugger;
            localStorage.setItem(TOKEN_KEY, res['Token']);
            localStorage.setItem(CURRENT_USER, res['Data']);
            _this.user = _this.helper.decodeToken(res['Token']);
            _this.CurrentUser = res['Data'];
            _this.authenticationState.next(true);
        }), catchError(function (e) {
            debugger;
            _this.showAlert("Lỗi mẹ rồi");
            throw new Error(e);
        }));
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(CURRENT_USER);
        this.authenticationState.next(false);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.authenticationState.value;
    };
    AuthenticationService.prototype.showAlert = function (msg) {
        var alert = this.alertController.create({
            message: msg,
            header: 'Thông báo',
            buttons: ['OK']
        });
        alert.then(function (alert) { return alert.present(); });
    };
    AuthenticationService.prototype.post = function (api, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: null,
                            duration: 5000,
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, new Observable(function (observer) {
                                var token = _this.getToken();
                                var headers = new HttpHeaders();
                                headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', token);
                                _this.http.post((api.indexOf('http') > -1 ? '' : _this.url) + api, data, { headers: headers }).subscribe(function (res) {
                                    observer.next(res);
                                    observer.complete();
                                }, function (err) {
                                    if (err.status === 403) {
                                        _this.logout();
                                    }
                                    observer.next({
                                        StatusCode: 1,
                                        Err: err
                                    });
                                    observer.complete();
                                }, function () { return loading.dismiss(); });
                            })];
                }
            });
        });
    };
    AuthenticationService.prototype.get = function (api, data) {
        var _this = this;
        this.presentLoadingWithOptions();
        return new Observable(function (observer) {
            var token = _this.getToken();
            var headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', token);
            _this.http.get((api.indexOf('http') > -1 ? '' : _this.url) + api, { params: data, headers: headers }).subscribe(function (res) {
                observer.next(res);
                observer.complete();
            }, function (err) {
                if (err.status === 403) {
                    _this.logout();
                }
                observer.next({
                    StatusCode: 1,
                    Err: err
                });
                observer.complete();
            }, function () { return _this.loading.dismiss(); });
        });
    };
    AuthenticationService.prototype.presentLoadingWithOptions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                spinner: null,
                                duration: 5000,
                                message: 'Please wait...',
                                translucent: true,
                                cssClass: 'custom-class custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        NgModule({
            imports: [
                HttpModule,
                HttpClient
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [Storage,
            Platform,
            HttpClient, JwtHelperService,
            AlertController,
            LoadingController])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map