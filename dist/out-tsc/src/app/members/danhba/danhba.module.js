import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DanhbaPage } from './danhba.page';
var routes = [
    {
        path: '',
        component: DanhbaPage
    }
];
var DanhbaPageModule = /** @class */ (function () {
    function DanhbaPageModule() {
    }
    DanhbaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DanhbaPage]
        })
    ], DanhbaPageModule);
    return DanhbaPageModule;
}());
export { DanhbaPageModule };
//# sourceMappingURL=danhba.module.js.map