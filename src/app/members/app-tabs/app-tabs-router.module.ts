import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppTabsPage } from './app-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AppTabsPage,
    children: [
      {
        path: '',
        redirectTo: 'congviec',
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
          loadChildren: 'src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.module#VanbandenchuaxulyPageModule'
        },
        {
          path: 'vanbandenchuadoc',
          loadChildren: 'src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.module#VanbandenchuadocPageModule'
        },
        {
          path: 'vanbandenxulychinh',
          loadChildren: 'src/app/members/vanbanden/vanbandenxulychinh/vanbandenxulychinh.module#VanbandenxulychinhPageModule'
        },
        {
          path: 'chitietvanbanden/:vanbandenid',
          loadChildren: 'src/app/members/vanbanden/chitietvanbanden/chitietvanbanden.module#ChitietvanbandenPageModule'
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
      { 
        path: 'congviec',         
        children: [
        {
          path: '',
          loadChildren:'src/app/members/congviec/danhsach/danhsach.module#DanhsachPageModule',
        },
        {
          path: 'chuaxuly',
          loadChildren: 'src/app/members/congviec/chuaxuly/chuaxuly.module#ChuaxulyPageModule',
        },
        {
          path: 'dangxuly',
          loadChildren: 'src/app/members/congviec/dangxuly/dangxuly.module#DangxulyPageModule',
        },
        {
          path: 'daxuly',
          loadChildren: 'src/app/members/congviec/daxuly/daxuly.module#DaxulyPageModule',
        }
       ] 
     },
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
      { path: 'viewfile', loadChildren: 'src/app/members/viewfile/viewfile.module#ViewfilePageModule' },
   //   { path: 'vanbandenchuaxuly', loadChildren: './vanbandenchuaxuly/vanbandenchuaxuly.module#VanbandenchuaxulyPageModule' },
      
    ]}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppTabsRouterModule { }
