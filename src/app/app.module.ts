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
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';
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
    AutoCompleteModule,
    TagInputModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // IonicSelectableModule,
    IonicStorageModule.forRoot(),
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
