import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewfilePage } from './viewfile.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

const routes: Routes = [
  {
    path: '',
    component: ViewfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewfilePage]
})
export class ViewfilePageModule {}
