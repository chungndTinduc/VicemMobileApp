import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './app-tabs/app-tabs.module#AppTabsRoutingModule',
    
  },
  // { path: 'kethucduthao', loadChildren: './vanbanduthao/kethucduthao/kethucduthao.module#KethucduthaoPageModule' },
  // { path: 'chuyenphathanh', loadChildren: './vanbanduthao/chuyenphathanh/chuyenphathanh.module#ChuyenphathanhPageModule' },

  // { path: 'vanbandiykien', loadChildren: './vanbandi/vanbandiykien/vanbandiykien.module#VanbandiykienPageModule' },
  // { path: 'vanbandiformykien', loadChildren: './vanbandi/vanbandiformykien/vanbandiformykien.module#VanbandiformykienPageModule' },
  // { path: 'vanbandiluongluanchuyen', loadChildren: './vanbandi/vanbandiluongluanchuyen/vanbandiluongluanchuyen.module#VanbandiluongluanchuyenPageModule' },
  // { path: 'formtrinhlanhdao', loadChildren: './vanbanduthao/formtrinhlanhdao/formtrinhlanhdao.module#FormtrinhlanhdaoPageModule' },

  // { path: 'vanbandenflowchart', loadChildren: './vanbanden/vanbandenflowchart/vanbandenflowchart.module#VanbandenflowchartPageModule' },
  // { path: 'capnhattrangthaivb', loadChildren: './vanbanden/capnhattrangthaivb/capnhattrangthaivb.module#CapnhattrangthaivbPageModule' },
  // { path: 'capnhattrangthaicanhan', loadChildren: './vanbanden/capnhattrangthaicanhan/capnhattrangthaicanhan.module#CapnhattrangthaicanhanPageModule' },



];

@NgModule({
  imports: [ 
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
