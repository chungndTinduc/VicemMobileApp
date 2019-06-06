import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VanbandenformykienPage } from './vanbandenformykien.page';

const routes: Routes = [
  {
    path: '',
    component: VanbandenformykienPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VanbandenformykienPage]
})
export class VanbandenformykienPageModule {}
