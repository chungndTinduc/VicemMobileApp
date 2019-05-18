import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VanbanduthaodaxulyPage } from './vanbanduthaodaxuly.page';

const routes: Routes = [
  {
    path: '',
    component: VanbanduthaodaxulyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VanbanduthaodaxulyPage]
})
export class VanbanduthaodaxulyPageModule {}
