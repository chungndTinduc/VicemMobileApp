import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { YkienvanbandenPage } from './ykienvanbanden.page';

const routes: Routes = [
  {
    path: '',
    component: YkienvanbandenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [YkienvanbandenPage]
})
export class YkienvanbandenPageModule {}
