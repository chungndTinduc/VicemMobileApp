import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VanbanduthaochuaxulyPage } from './vanbanduthaochuaxuly.page';

const routes: Routes = [
  {
    path: '',
    component: VanbanduthaochuaxulyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VanbanduthaochuaxulyPage]
})
export class VanbanduthaochuaxulyPageModule {}
