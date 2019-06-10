import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CapnhattrangthaivbPage } from './capnhattrangthaivb.page';

const routes: Routes = [
  {
    path: '',
    component: CapnhattrangthaivbPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CapnhattrangthaivbPage]
})
export class CapnhattrangthaivbPageModule {}
