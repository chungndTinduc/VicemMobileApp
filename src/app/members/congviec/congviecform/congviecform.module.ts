import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TagInputModule } from 'ngx-chips';
import { CongviecformPage } from './congviecform.page';
import { IonicSelectableModule } from 'ionic-selectable';
const routes: Routes = [
  {
    path: '',
    component: CongviecformPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    ReactiveFormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CongviecformPage]
})
export class CongviecformPageModule {}
