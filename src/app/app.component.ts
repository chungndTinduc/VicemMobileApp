import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { AppPage } from 'e2e/src/app.po';
//import {Utiliti}  from './Utiliti';
export interface page {
  title: string,
  url:string,
  icon:string,
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})



export class AppComponent {
  page:page;
  appPages:Array<{title: string, url: string,icon:string}>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService:AuthenticationService,
    private router:Router,

    
  ) {
    this.initializeApp();
  }
  ngOnInit(){
    this.load();
  }
  
  load(){
    if(this.authService.CurrentUser!=null){  
       this.page.title='sss';
       debugger;
       this.page.url='/members/tabs/vanbanden';
       this.page.icon='copy';
     
      // this.appPages.push(this.page);
      debugger;
    }
  }
  // appPages = [   
  //   {
  //     title: 'Văn bản đến',
  //     url: '/members/tabs/vanbanden',
  //     icon: 'copy'
  //   },  
  //   {
  //     title: 'Văn bản đi',
  //     url: '/members/tabs/vanbandi',
  //     icon: 'paper-plane'
  //   },
  //   {
  //     title: 'Công việc',
  //     url: '/members/tabs/congviec',
  //     icon: 'clipboard'
  //   },
  //   {
  //     title: 'Văn bản dự thảo',
  //     url: '/members/tabs/vanbanduthao',
  //     icon: 'document'
  //   },
  //   {
  //     title: 'Danh ba',
  //     url: '/members/tabs/danhba',
  //     icon: 'information-circle'
  //   },
  //    {
  //     title: 'Lich lam viec',
  //     url: '/members/tabs/lichlamviec',
  //     icon: 'book'
  //   }
  // ];
  loggedIn = false;

 logout(){
 this.authService.logout();
 }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        if (state) {
          this.loggedIn =true;
          this.router.navigate(['members', 'tabs']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
}
