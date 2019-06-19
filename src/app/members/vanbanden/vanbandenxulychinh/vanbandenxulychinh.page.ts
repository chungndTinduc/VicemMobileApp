import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {VanbandenflowchartPage} from 'src/app/members/vanbanden/vanbandenflowchart/vanbandenflowchart.page'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vanbandenxulychinh',
  templateUrl: './vanbandenxulychinh.page.html',
  styleUrls: ['./vanbandenxulychinh.page.scss'],
})
export class VanbandenxulychinhPage implements OnInit {

  danhsachVanBans:any;
  total=0;
  public dataquery ={CurrentPage:1,RowPerPage:10,SearchIn:'SoKyHieu,TrichYeu',Keyword:'',TrangThaiID:0};
  constructor(private authService:AuthenticationService,public modalController: ModalController) { }


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
    this.authService.getVanBanDenXuLyChinh(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"]
    });
  }
  loadsearch(){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getVanBanDenXuLyChinh(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"];
    });
  }
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      if (this.dataquery.CurrentPage == 1)
        this.dataquery.CurrentPage  = 2;     
        if((this.dataquery.CurrentPage * this.dataquery.RowPerPage)<this.total){
        this.authService.getVanBanDenXuLyChinh(this.dataquery).subscribe(res =>{          
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
