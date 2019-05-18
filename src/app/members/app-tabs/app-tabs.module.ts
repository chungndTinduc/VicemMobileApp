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
      { path: 'vanbanden',   
      children: [
        {
          path: '',
          loadChildren: 'src/app/members/vanbanden/vanbanden.module#VanbandenPageModule'
        },
        {
          path: 'vanbandenchuaxuly',
          loadChildren: 'src/app/members/vanbandenchuaxuly/vanbandenchuaxuly.module#VanbandenchuaxulyPageModule'
        },
        {
          path: 'vanbandenchuadoc',
          loadChildren: 'src/app/members/vanbandenchuadoc/vanbandenchuadoc.module#VanbandenchuadocPageModule'
        },
        {
          path: 'vanbandenxulychinh',
          loadChildren: 'src/app/members/vanbandenxulychinh/vanbandenxulychinh.module#VanbandenxulychinhPageModule'
        },
        {
          path: 'chitietvanbanden/:vanbandenid',
          loadChildren: 'src/app/members/chitietvanbanden/chitietvanbanden.module#ChitietvanbandenPageModule'
        },
      ]
     },
      { path: 'vanbandi',     
       children: [
        {
          path: '',
          loadChildren:'src/app/members/vanbandi/vanbandi.module#VanbandiPageModule',
        },
        {
          path: 'vanbandichuadoc',
          loadChildren:'src/app/members/vanbandichuadoc/vanbandichuadoc.module#VanbandichuadocPageModule',
        },
        {
          path: 'chitietvanbandi/:vanbandiid',
          loadChildren:'src/app/members/chitietvanbandi/chitietvanbandi.module#ChitietvanbandiPageModule',
        },
      ]
       },
      { path: 'congviec', loadChildren: 'src/app/members/congviec/congviec.module#CongviecPageModule' },
      { path: 'lichlamviec', loadChildren: 'src/app/members/lichlamviec/lichlamviec.module#LichlamviecPageModule' },
      {
         path: 'vanbanduthao',         
         children: [
          {
            path: '',
            loadChildren:'src/app/members/vanbanduthao/vanbanduthao.module#VanbanduthaoPageModule',
          },
          {
            path: 'vanbanduthaochuaxuly',
            loadChildren: 'src/app/members/vanbanduthaochuaxuly/vanbanduthaochuaxuly.module#VanbanduthaochuaxulyPageModule',
          },
          {
            path: 'vanbanduthaodangxuly',
            loadChildren: 'src/app/members/vanbanduthaodangxuly/vanbanduthaodangxuly.module#VanbanduthaodangxulyPageModule',
          },
          {
            path: 'vanbanduthaodaxuly',
            loadChildren: 'src/app/members/vanbanduthaodaxuly/vanbanduthaodaxuly.module#VanbanduthaodaxulyPageModule',
          },
          {
            path: 'vanbanduthaochitiet/:vanbanduthaoid',
            loadChildren: 'src/app/members/vanbanduthaochitiet/vanbanduthaochitiet.module#VanbanduthaochitietPageModule',
          },
        ]
         },
      { path: 'danhba', loadChildren: 'src/app/members/danhba/danhba.module#DanhbaPageModule' },
   //   { path: 'vanbandenchuaxuly', loadChildren: './vanbandenchuaxuly/vanbandenchuaxuly.module#VanbandenchuaxulyPageModule' },
      
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
