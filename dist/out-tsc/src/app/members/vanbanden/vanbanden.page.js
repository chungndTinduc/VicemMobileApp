import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
var VanbandenPage = /** @class */ (function () {
    function VanbandenPage(authService) {
        this.authService = authService;
    }
    VanbandenPage.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        var a = this.authService.currentUser;
        this.authService.getSpecialData().subscribe(function (res) {
            _this.danhsachVanBans = res["data"];
        });
    };
    VanbandenPage = tslib_1.__decorate([
        Component({
            selector: 'app-vanbanden',
            templateUrl: './vanbanden.page.html',
            styleUrls: ['./vanbanden.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService])
    ], VanbandenPage);
    return VanbandenPage;
}());
export { VanbandenPage };
//# sourceMappingURL=vanbanden.page.js.map