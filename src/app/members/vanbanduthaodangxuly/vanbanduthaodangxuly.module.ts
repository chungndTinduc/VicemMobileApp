import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VanbanduthaodangxulyPage } from './vanbanduthaodangxuly.page';

const routes: Routes = [
  {
    path: '',
    component: VanbanduthaodangxulyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VanbanduthaodangxulyPage]
})
export class VanbanduthaodangxulyPageModule {}
