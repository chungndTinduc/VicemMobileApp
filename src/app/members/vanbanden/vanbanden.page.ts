import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Response } from 'selenium-webdriver/http';
@Component({
  selector: 'app-vanbanden',
  templateUrl: './vanbanden.page.html',
  styleUrls: ['./vanbanden.page.scss'],
})
export class VanbandenPage implements OnInit {
 danhsachVanBans:any;
 total=0;
 public dataquery ={CurrentPage:1,RowPerPage:10,SearchIn:'SoKyHieu,TrichYeu',Keyword:''};
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  
  }
  ionViewDidEnter(){
    this.load();
  }
  load(){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getVanBanDen(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"]
    });
  }
  loadsearch(){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getVanBanDen(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"];
    });
  }
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      if (this.dataquery.CurrentPage == 1)
        this.dataquery.CurrentPage  = 2;     
        if((this.dataquery.CurrentPage * this.dataquery.RowPerPage)<this.total){
        this.authService.getVanBanDen(this.dataquery).subscribe(res =>{          
          for (var j = 0; j < res["Data"].length; j++) {
            this.danhsachVanBans.push(res["Data"][j])
          }
        });
        this.dataquery.CurrentPage  = this.dataquery.CurrentPage  + 1;
      }
      infiniteScroll.target.complete();
    }, 500);
  }
}
