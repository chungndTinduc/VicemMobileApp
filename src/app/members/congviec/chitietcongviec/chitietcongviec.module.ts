import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChitietcongviecPage } from './chitietcongviec.page';

const routes: Routes = [
  {
    path: '',
    component: ChitietcongviecPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChitietcongviecPage]
})
export class ChitietcongviecPageModule {}
