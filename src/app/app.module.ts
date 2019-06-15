import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import{Utility} from 'src/app/providers/Utility';
import{CongviecformPageModule} from 'src/app/members/congviec/congviecform/congviecform.module';
import {VanbandenformykienPageModule} from 'src/app/members/vanbanden/vanbandenformykien/vanbandenformykien.module'
import {CapnhattrangthaivbPageModule} from 'src/app/members/vanbanden/capnhattrangthaivb/capnhattrangthaivb.module'
import {CapnhattrangthaicanhanPageModule} from 'src/app/members/vanbanden/capnhattrangthaicanhan/capnhattrangthaicanhan.module'
import {VanbandenflowchartPageModule} from 'src/app/members/vanbanden/vanbandenflowchart/vanbandenflowchart.module'
import {VanbandiformykienPageModule} from 'src/app/members/vanbandi/vanbandiformykien/vanbandiformykien.module'
import {VanbandiluongluanchuyenPageModule} from 'src/app/members/vanbandi/vanbandiluongluanchuyen/vanbandiluongluanchuyen.module'
import {FormtrinhlanhdaoPageModule} from 'src/app/members/vanbanduthao/formtrinhlanhdao/formtrinhlanhdao.module'
import {KethucduthaoPageModule} from 'src/app/members/vanbanduthao/kethucduthao/kethucduthao.module'
import {ChuyenphathanhPageModule} from 'src/app/members/vanbanduthao/chuyenphathanh/chuyenphathanh.module'
import {ViewfilePageModule} from 'src/app/members/viewfile/viewfile.module'
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';
import { CacheModule } from "ionic-cache";
export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['localhost:5000']
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CongviecformPageModule,
    VanbandenformykienPageModule,
    CapnhattrangthaivbPageModule,
    CapnhattrangthaicanhanPageModule,
    VanbandenflowchartPageModule,
    VanbandiformykienPageModule,
    KethucduthaoPageModule,
    VanbandiluongluanchuyenPageModule,
    FormtrinhlanhdaoPageModule,
    ChuyenphathanhPageModule,
    ViewfilePageModule,
    AutoCompleteModule,
    TagInputModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    IonicStorageModule.forRoot(),
    CacheModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      } })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Utility
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
