import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChuaxulyPage } from './chuaxuly.page';

const routes: Routes = [
  {
    path: '',
    component: ChuaxulyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChuaxulyPage]
})
export class ChuaxulyPageModule {}
