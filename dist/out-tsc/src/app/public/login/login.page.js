import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Validators, FormBuilder } from '@angular/forms';
var LoginPage = /** @class */ (function () {
    function LoginPage(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            // email: ['', [Validators.required, Validators.email]],
            userName: [''],
            password: ['', [Validators.required, Validators.minLength(6)]]
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
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService, FormBuilder])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map