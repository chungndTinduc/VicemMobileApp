import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VanbandiluongluanchuyenPage } from './vanbandiluongluanchuyen.page';

const routes: Routes = [
  {
    path: '',
    component: VanbandiluongluanchuyenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VanbandiluongluanchuyenPage]
})
export class VanbandiluongluanchuyenPageModule {}
