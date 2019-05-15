import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VanbandiPage } from './vanbandi.page';
var routes = [
    {
        path: '',
        component: VanbandiPage
    }
];
var VanbandiPageModule = /** @class */ (function () {
    function VanbandiPageModule() {
    }
    VanbandiPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [VanbandiPage]
        })
    ], VanbandiPageModule);
    return VanbandiPageModule;
}());
export { VanbandiPageModule };
//# sourceMappingURL=vanbandi.module.js.map