import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppTabsPage } from './app-tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: AppTabsPage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      { path: 'dashboard', loadChildren: 'src/app/members/dashboard/dashboard.module#DashboardPageModule' },
      { path: 'vanbanden', loadChildren: 'src/app/members/vanbanden/vanbanden.module#VanbandenPageModule' },
      { path: 'vanbandi', loadChildren: 'src/app/members/vanbandi/vanbandi.module#VanbandiPageModule' },
      { path: 'congviec', loadChildren: 'src/app/members/congviec/congviec.module#CongviecPageModule' },
      { path: 'lichlamviec', loadChildren: 'src/app/members/lichlamviec/lichlamviec.module#LichlamviecPageModule' },
      { path: 'vanbanduthao', loadChildren: 'src/app/members/vanbanduthao/vanbanduthao.module#VanbanduthaoPageModule' },
      { path: 'danhba', loadChildren: 'src/app/members/danhba/danhba.module#DanhbaPageModule' },
      
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppTabsPage]
})
export class AppTabsRoutingModule {}
