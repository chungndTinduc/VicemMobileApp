import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VanbandenflowchartPage } from './vanbandenflowchart.page';

const routes: Routes = [
  {
    path: '',
    component: VanbandenflowchartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VanbandenflowchartPage]
})
export class VanbandenflowchartPageModule {}
