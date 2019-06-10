import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './app-tabs/app-tabs.module#AppTabsRoutingModule',
    
  },  { path: 'vanbandenflowchart', loadChildren: './vanbanden/vanbandenflowchart/vanbandenflowchart.module#VanbandenflowchartPageModule' },
  { path: 'capnhattrangthaivb', loadChildren: './vanbanden/capnhattrangthaivb/capnhattrangthaivb.module#CapnhattrangthaivbPageModule' },
  { path: 'capnhattrangthaicanhan', loadChildren: './vanbanden/capnhattrangthaicanhan/capnhattrangthaicanhan.module#CapnhattrangthaicanhanPageModule' },



];

@NgModule({
  imports: [ 
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
