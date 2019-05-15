import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    }
];
var MemberRoutingModule = /** @class */ (function () {
    function MemberRoutingModule() {
    }
    MemberRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], MemberRoutingModule);
    return MemberRoutingModule;
}());
export { MemberRoutingModule };
//# sourceMappingURL=member-routing.module.js.map