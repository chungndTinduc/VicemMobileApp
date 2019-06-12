import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';

import { FormtrinhlanhdaoPage } from './formtrinhlanhdao.page';

const routes: Routes = [
  {
    path: '',
    component: FormtrinhlanhdaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormtrinhlanhdaoPage]
})
export class FormtrinhlanhdaoPageModule {}
