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
  },
  // { path: 'tab-vanbanden', loadChildren: './vanbanden/tab-vanbanden/tab-vanbanden.module#TabVanbandenPageModule' },

  // { path: 'vanbandenchuaxuly', loadChildren: './vanbandenchuaxuly/vanbandenchuaxuly.module#VanbandenchuaxulyPageModule' },
  // { path: 'vanbandenchuadoc', loadChildren: './vanbandenchuadoc/vanbandenchuadoc.module#VanbandenchuadocPageModule' },
  // { path: 'vanbandenxulychinh', loadChildren: './vanbandenxulychinh/vanbandenxulychinh.module#VanbandenxulychinhPageModule' },
  // { path: 'chitietvanbanden', loadChildren: './chitietvanbanden/chitietvanbanden.module#ChitietvanbandenPageModule' },
  // { path: 'chitietvanbandi', loadChildren: './chitietvanbandi/chitietvanbandi.module#ChitietvanbandiPageModule' },
  // { path: 'vanbandichuadoc', loadChildren: './vanbandichuadoc/vanbandichuadoc.module#VanbandichuadocPageModule' },
  // { path: 'vanbanduthaochuaxuly', loadChildren: './vanbanduthaochuaxuly/vanbanduthaochuaxuly.module#VanbanduthaochuaxulyPageModule' },
  // { path: 'vanbanduthaodangxuly', loadChildren: './vanbanduthaodangxuly/vanbanduthaodangxuly.module#VanbanduthaodangxulyPageModule' },
  // { path: 'vanbanduthaodaxuly', loadChildren: './vanbanduthaodaxuly/vanbanduthaodaxuly.module#VanbanduthaodaxulyPageModule' },
  // { path: 'vanbanduthaochitiet', loadChildren: './vanbanduthaochitiet/vanbanduthaochitiet.module#VanbanduthaochitietPageModule' },
  // { path: 'danhbachitiet', loadChildren: './danhbachitiet/danhbachitiet.module#DanhbachitietPageModule' },
  // { path: 'viewfile', loadChildren: './viewfile/viewfile.module#ViewfilePageModule' },



];

@NgModule({
  imports: [ 
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
