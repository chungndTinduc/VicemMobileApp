import { Component,OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { AppPage } from 'e2e/src/app.po';	
import { Response } from '@angular/http';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Enum} from 'src/app/Enum';

 interface page {
  title: string,
  url:string,
  icon:string
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  page:page;
  appPages:any[] = [];
  resurl:[];
  rowpage = 1;
  keyword = " ";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService:AuthenticationService,
    private router:Router,
    private http: HttpClient,
    
  ) {
    this.initializeApp();
  }
  ngOnInit(){
    this.load();
  }
  
  load(){
       this.authService.checkToken();
       if(this.authService.currentUser!=null){
         var QuyenHan= ",0,"+this.authService.currentUser.QuyenHan+",";  
         
         if(QuyenHan.indexOf(","+Enum.Vanbanden.toString()+",")>0)     {
          var datapage={title:'Văn bản đến',icon:'copy',url:'/members/tabs/vanbanden'}
          this.appPages.push(datapage);
         }
         if(QuyenHan.indexOf(","+Enum.Vanbandi.toString()+",")>0)     {
          var datapage={title:'Văn bản đi',icon:'paper-plane',url:'/members/tabs/vanbandi'}
          this.appPages.push(datapage);
         }
         if(QuyenHan.indexOf(","+Enum.Congviec.toString()+",")>0)     {
          var datapage={title:'Công việc',icon:'clipboard',url:'/members/tabs/congviec'}
          this.appPages.push(datapage);
         }
         if(QuyenHan.indexOf(","+Enum.Congviec.toString()+",")>0)     {
          var datapage={title:'Văn bản dự thảo',icon:'document',url:'/members/tabs/vanbanduthao'}
          this.appPages.push(datapage);
         }
         var datapage={title:'Danh bạ',icon:'information-circle',url:'/members/tabs/danhba'}
         this.appPages.push(datapage);

         var datapage={title:'Lịch làm việc',icon:'book',url:'/members/tabs/lichlamviec'}
         this.appPages.push(datapage);
       }
  }
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
