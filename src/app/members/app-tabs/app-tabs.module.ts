import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppTabsPage } from './app-tabs.page';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { AppTabsRouterModule } from './app-tabs-router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppTabsRouterModule,
    DirectivesModule
  ],
  declarations: [AppTabsPage]
})
export class AppTabsRoutingModule {}
