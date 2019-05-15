import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, authService, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.router = router;
        // appPages = [   
        //   {
        //     title: 'Văn bản đến',
        //     url: '/members/tabs/vanbanden',
        //     icon: 'copy'
        //   },  
        //   {
        //     title: 'Văn bản đi',
        //     url: '/members/tabs/vanbandi',
        //     icon: 'paper-plane'
        //   },
        //   {
        //     title: 'Công việc',
        //     url: '/members/tabs/congviec',
        //     icon: 'clipboard'
        //   },
        //   {
        //     title: 'Văn bản dự thảo',
        //     url: '/members/tabs/vanbanduthao',
        //     icon: 'document'
        //   },
        //   {
        //     title: 'Danh ba',
        //     url: '/members/tabs/danhba',
        //     icon: 'information-circle'
        //   },
        //    {
        //     title: 'Lich lam viec',
        //     url: '/members/tabs/lichlamviec',
        //     icon: 'book'
        //   }
        // ];
        this.loggedIn = false;
        this.initializeApp();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.load();
    };
    AppComponent.prototype.load = function () {
        if (this.authService.CurrentUser != null) {
            this.page = {
                title: "Hoàng văn đế",
                icon: "Không có gì",
                url: "xnxx"
            };
            //  this.page.url='/members/tabs/vanbanden';
            //  this.page.icon='copy';
            // this.appPages.push(this.page);
            // debugger;
        }
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.authService.authenticationState.subscribe(function (state) {
                if (state) {
                    _this.loggedIn = true;
                    _this.router.navigate(['members', 'tabs']);
                }
                else {
                    _this.router.navigate(['login']);
                }
            });
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            AuthenticationService,
            Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map