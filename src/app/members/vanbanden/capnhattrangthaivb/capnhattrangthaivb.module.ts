import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CapnhattrangthaivbPage]
})
export class CapnhattrangthaivbPageModule {}
