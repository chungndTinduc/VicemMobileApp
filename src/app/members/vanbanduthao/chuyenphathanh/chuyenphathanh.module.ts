import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChuyenphathanhPage } from './chuyenphathanh.page';

const routes: Routes = [
  {
    path: '',
    component: ChuyenphathanhPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChuyenphathanhPage]
})
export class ChuyenphathanhPageModule {}
