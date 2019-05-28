import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChitietvanbandenPage } from './chitietvanbanden.page';

const routes: Routes = [
  {
    path: '',
    component: ChitietvanbandenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChitietvanbandenPage]
})
export class ChitietvanbandenPageModule {}
