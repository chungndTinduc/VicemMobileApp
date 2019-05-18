import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VanbanduthaochitietPage } from './vanbanduthaochitiet.page';

const routes: Routes = [
  {
    path: '',
    component: VanbanduthaochitietPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VanbanduthaochitietPage]
})
export class VanbanduthaochitietPageModule {}
