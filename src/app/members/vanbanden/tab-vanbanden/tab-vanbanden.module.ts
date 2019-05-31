import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabVanbandenPage } from './tab-vanbanden.page';

// const routes: Routes = [
//         {
//           path: 'vanbanden',
//           loadChildren: 'src/app/members/vanbanden/vanbanden.module#VanbandenPageModule',
//           component:TabVanbandenPage
//         },
//         {
//           path: 'vanbanden/vanbandenchuaxuly',
//           loadChildren: 'src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.module#VanbandenchuaxulyPageModule',
//           component:TabVanbandenPage
//         },
//         {
//           path: 'vanbanden/vanbandenchuadoc',
//           loadChildren: 'src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.module#VanbandenchuadocPageModule',
//           component:TabVanbandenPage
//         },
//         {
//           path: 'vanbanden/vanbandenxulychinh',
//           loadChildren: 'src/app/members/vanbanden/vanbandenxulychinh/vanbandenxulychinh.module#VanbandenxulychinhPageModule',
//           component:TabVanbandenPage
//         },
//         {
//           path: 'vanbanden/chitietvanbanden/:vanbandenid',
//           loadChildren: 'src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.module#ChitietvanbandenPageModule',
//           component:TabVanbandenPage
//         },
// ];
const routes: Routes = [
  {
    path: '',
    component:TabVanbandenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabVanbandenPage]
})
export class TabVanbandenPageModule {}
