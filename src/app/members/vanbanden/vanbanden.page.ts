import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Response } from 'selenium-webdriver/http';
@Component({
  selector: 'app-vanbanden',
  templateUrl: './vanbanden.page.html',
  styleUrls: ['./vanbanden.page.scss'],
})
export class VanbandenPage implements OnInit {
  public danhsachVanBans:any;
 public dataquery ={CurrentPage:1,RowPerPage:10};
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    var a =  this.authService.currentUser;
    this.authService.getVanBanDen(this.dataquery).subscribe(res =>{
      debugger;
      this.danhsachVanBans = res["data"];

    });
  }
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      //console.log('Async operation has ended');
      if (this.dataquery.CurrentPage == 1)
        this.dataquery.CurrentPage  = 2;
        this.authService.getVanBanDen(this.dataquery).subscribe(res =>{
          this.danhsachVanBans.push(res["data"]);
        });
        this.dataquery.CurrentPage  = this.dataquery.CurrentPage  + 1;
      infiniteScroll.target.complete();
    }, 500);
  }
}
