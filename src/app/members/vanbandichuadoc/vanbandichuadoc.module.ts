import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VanbandichuadocPage } from './vanbandichuadoc.page';

const routes: Routes = [
  {
    path: '',
    component: VanbandichuadocPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VanbandichuadocPage]
})
export class VanbandichuadocPageModule {}
