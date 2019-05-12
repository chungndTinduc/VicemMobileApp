import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  appPages = [
    {
      title: 'Văn bản đến',
      url: '/members/tabs/vanbanden',
      icon: 'copy'
    },
    {
      title: 'Văn bản đi',
      url: '/members/tabs/vanbandi',
      icon: 'paper-plane'
    },
    {
      title: 'Công việc',
      url: '/members/tabs/congviec',
      icon: 'clipboard'
    },
    {
      title: 'Văn bản dự thảo',
      url: '/members/tabs/vanbanduthao',
      icon: 'document'
    },
    {
      title: 'Danh ba',
      url: '/members/tabs/danhba',
      icon: 'information-circle'
    },
     {
      title: 'Lich lam viec',
      url: '/members/tabs/lichlamviec',
      icon: 'book'
    }
  ];
  loggedIn = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService:AuthenticationService,
    private router:Router,
    
  ) {
    this.initializeApp();
  }
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
