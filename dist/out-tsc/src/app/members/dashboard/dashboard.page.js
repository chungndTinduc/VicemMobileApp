import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
var DashboardPage = /** @class */ (function () {
    function DashboardPage(authService) {
        this.authService = authService;
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.prototype.logout = function () {
        this.authService.logout();
    };
    DashboardPage = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.page.html',
            styleUrls: ['./dashboard.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService])
    ], DashboardPage);
    return DashboardPage;
}());
export { DashboardPage };
//# sourceMappingURL=dashboard.page.js.map