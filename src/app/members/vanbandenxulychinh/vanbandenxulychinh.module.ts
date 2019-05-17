import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VanbandenxulychinhPage } from './vanbandenxulychinh.page';

const routes: Routes = [
  {
    path: '',
    component: VanbandenxulychinhPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VanbandenxulychinhPage]
})
export class VanbandenxulychinhPageModule {}
