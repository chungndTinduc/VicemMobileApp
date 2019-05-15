import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CongviecPage } from './congviec.page';
var routes = [
    {
        path: '',
        component: CongviecPage
    }
];
var CongviecPageModule = /** @class */ (function () {
    function CongviecPageModule() {
    }
    CongviecPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CongviecPage]
        })
    ], CongviecPageModule);
    return CongviecPageModule;
}());
export { CongviecPageModule };
//# sourceMappingURL=congviec.module.js.map