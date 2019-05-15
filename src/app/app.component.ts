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
  appPages:any;
  resurl:any;
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
    // if(this.authService.currentUser!=null){
     // var url = "http://localhost:8088/api/Test/getVanBanpaging?rowpage=" + this.rowpage +"&keyword=" + this.keyword;;
      // var data1 = [{name : "sampleName",title:"xx"}];
      // this.http.get(url).subscribe((data :[]) => {       
      //   for (var j = 0; j < data.length; j++) {
      //   //  this.resurl.push(data[j])
      //   }
      // });


      //  this.page.url='/members/tabs/vanbanden';
      //  this.page.icon='copy';
     
      // this.appPages.push(this.page);
      // debugger;
    // }
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
