import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VanbandenchuadocPage } from './vanbandenchuadoc.page';
const routes: Routes = [
  {
    path: '',
    component: VanbandenchuadocPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VanbandenchuadocPage]
})
export class VanbandenchuadocPageModule {}
