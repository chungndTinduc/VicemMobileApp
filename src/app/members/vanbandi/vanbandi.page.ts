import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {VanbandiluongluanchuyenPage} from 'src/app/members/vanbandi/vanbandiluongluanchuyen/vanbandiluongluanchuyen.page'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vanbandi',
  templateUrl: './vanbandi.page.html',
  styleUrls: ['./vanbandi.page.scss'],
})
export class VanbandiPage implements OnInit {
  danhsachVanBans:any;
  total=0;
  public dataquery ={CurrentPage:1,RowPerPage:10,SearchIn:'SoKyHieu,TrichYeu',Keyword:''};
  constructor(private authService:AuthenticationService,public modalController: ModalController) { }

  ngOnInit() {
  
  }
  ionViewDidEnter(){
    this.load();
  }
  load(){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getVanBanDi(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"];
      return true;
    });
  }
  loadsearch(){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getVanBanDi(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"];
    });
  }
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      if (this.dataquery.CurrentPage == 1)
        this.dataquery.CurrentPage  = 2;     
        if((this.dataquery.CurrentPage * this.dataquery.RowPerPage)<this.total){
        this.authService.getVanBanDi(this.dataquery).subscribe(res =>{          
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
      component: VanbandiluongluanchuyenPage,
      componentProps: { id: _id }
    });
    return await modal.present();
  }
}
