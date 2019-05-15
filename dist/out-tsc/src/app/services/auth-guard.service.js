import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authSevice) {
        this.authSevice = authSevice;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.authSevice.isAuthenticated();
    };
    AuthGuardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService])
    ], AuthGuardService);
    return AuthGuardService;
}());
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map