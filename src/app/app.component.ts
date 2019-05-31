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
  appPages:any[] = [];
  resurl:[];
  rowpage = 1;
  keyword = " ";
  TenHienThi:string;
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
        this.TenHienThi=this.authService.currentUser.TenHienThi;
        //  if(QuyenHan.indexOf(","+Enum.Vanbanden.toString()+",")>0)     {
          
          if(this.authService.currentUser.QuyenHanEnum.Vanbanden){
          var datapage={title:'Văn bản đến',icon:'md-copy',iconIos:'ios-copy-outline',url:'/members/tabs/viewfile',color:'success'}
          this.appPages.push(datapage);
         }
         if(this.authService.currentUser.QuyenHanEnum.vanbandi)     {
          var datapage={title:'Văn bản đi',icon:'md-paper-plane',iconIos:'ios-paper-plane-outline',url:'/members/tabs/vanbandi',color:'secondary'}
          this.appPages.push(datapage);
         }
         if(this.authService.currentUser.QuyenHanEnum.Congviec)     {
          var datapage={title:'Công việc',icon:'md-clipboard',iconIos:'ios-clipboard-outline',url:'/members/tabs/congviec',color:'tertiary'}
          this.appPages.push(datapage);
         }
         if(this.authService.currentUser.QuyenHanEnum.Vanbandusthao)     {
          var datapage={title:'Văn bản dự thảo',icon:'md-document',iconIos:'ios-document-outline',url:'/members/tabs/vanbanduthao',color:'success'}
          this.appPages.push(datapage);
         }
         var datapage={title:'Danh bạ',icon:'md-bookmarks',iconIos:'ios-bookmarks-outline',url:'/members/tabs/danhba',color:'danger'}
         this.appPages.push(datapage);

         var datapage={title:'Lịch làm việc',icon:'md-calendar',iconIos:'ios-calendar-outline',url:'/members/tabs/lichlamviec',color:'primary'}
         this.appPages.push(datapage);
         var datapage={title:'xem file',icon:'md-book',iconIos:'ios-book-outline',url:'/members/tabs/viewfile',color:'medium'}
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
