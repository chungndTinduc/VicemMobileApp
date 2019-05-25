import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private authService: AuthenticationService,
    public menuCtrl: MenuController) {  
    }
  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }
}
