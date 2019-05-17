import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChitietvanbandiPage } from './chitietvanbandi.page';

const routes: Routes = [
  {
    path: '',
    component: ChitietvanbandiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChitietvanbandiPage]
})
export class ChitietvanbandiPageModule {}
