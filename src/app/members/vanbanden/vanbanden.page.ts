import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Response } from 'selenium-webdriver/http';
import {IonSlides} from '@ionic/angular';
import { CacheService } from "ionic-cache";
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';
import {VanbandenflowchartPage} from 'src/app/members/vanbanden/vanbandenflowchart/vanbandenflowchart.page'
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-vanbanden',
  templateUrl: './vanbanden.page.html',
  styleUrls: ['./vanbanden.page.scss'],
})
export class VanbandenPage implements OnInit {
@ViewChild('slides', { read: IonSlides }) slides: IonSlides;
@ViewChild("segments") segments;
 danhsachVanBans:any;
 total=0;
 page: any;
 public dataquery =
 {CurrentPage:1,RowPerPage:10,SearchIn:'SoKyHieu,TrichYeu',Keyword:''};
  constructor(private authService:AuthenticationService,private cache: CacheService,public modalController: ModalController) { }

  ngOnInit() {
  
  }
  ionViewDidEnter(){
    this.load();
  }
  onKeyPressed= function(keyEvent) {
    if (keyEvent.keyCode == 13) {
      this.load();
    }
};  
  load(){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getVanBanDen(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"];
      return true;
    });
//     let cacheKey = "vanbanden";
//     let request =  this.authService.getVanBanDen(this.dataquery).subscribe(res =>{
//        this.total=res["Total"];
//       this.danhsachVanBans= res["Data"];
     
//     });
// debugger;
//     this.danhsachVanBans= this.cache.loadFromObservable(cacheKey,request,"hhjhjhj");
//     debugger;
  }
  dorefresh(refresher){
    
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getVanBanDen(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"];
      refresher.target.complete();
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
  async presentModalluonglc(_id) {
    const modal = await this.modalController.create({
      component: VanbandenflowchartPage,
      componentProps: { id: _id }
    });
    return await modal.present();
  }
}
