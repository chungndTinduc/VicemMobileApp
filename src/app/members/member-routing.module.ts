import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'tabs', loadChildren: './app-tabs/app-tabs.module#AppTabsPageModule' },
  // { path: 'vanbanden', loadChildren: './vanbanden/vanbanden.module#VanbandenPageModule' },
  // { path: 'vanbandi', loadChildren: './vanbandi/vanbandi.module#VanbandiPageModule' },
  // { path: 'congviec', loadChildren: './congviec/congviec.module#CongviecPageModule' },
  // { path: 'lichlamviec', loadChildren: './lichlamviec/lichlamviec.module#LichlamviecPageModule' },
  // { path: 'danhba', loadChildren: './danhba/danhba.module#DanhbaPageModule' },
  // { path: 'vanbanduthao', loadChildren: './vanbanduthao/vanbanduthao.module#VanbanduthaoPageModule' },
  // { path: '', loadChildren: './app-tabs/app-tabs.module#AppTabsPageModule' },
  // { path: 'members', loadChildren: './app-tabs/app-tabs.module#AppTabsPageModule' },
  {
    path: '',
    loadChildren: './app-tabs/app-tabs.module#AppTabsRoutingModule',
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [ 
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
