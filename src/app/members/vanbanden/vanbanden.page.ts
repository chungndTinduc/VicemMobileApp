import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-vanbanden',
  templateUrl: './vanbanden.page.html',
  styleUrls: ['./vanbanden.page.scss'],
})
export class VanbandenPage implements OnInit {
  public danhsachVanBans:any;
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    debugger;
    var a =  this.authService.currentUser;
    this.authService.getSpecialData().subscribe(res =>{
      this.danhsachVanBans = res["data"];
    });
  }

}
