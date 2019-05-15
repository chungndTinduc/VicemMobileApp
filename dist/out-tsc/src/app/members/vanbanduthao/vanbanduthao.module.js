import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VanbanduthaoPage } from './vanbanduthao.page';
var routes = [
    {
        path: '',
        component: VanbanduthaoPage
    }
];
var VanbanduthaoPageModule = /** @class */ (function () {
    function VanbanduthaoPageModule() {
    }
    VanbanduthaoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [VanbanduthaoPage]
        })
    ], VanbanduthaoPageModule);
    return VanbanduthaoPageModule;
}());
export { VanbanduthaoPageModule };
//# sourceMappingURL=vanbanduthao.module.js.map