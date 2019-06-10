import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {CapnhattrangthaicanhanPage} from 'src/app/members/vanbanden/capnhattrangthaicanhan/capnhattrangthaicanhan.page'
import {CapnhattrangthaivbPage} from 'src/app/members/vanbanden/capnhattrangthaivb/capnhattrangthaivb.page'
import {VanbandenflowchartPage} from 'src/app/members/vanbanden/vanbandenflowchart/vanbandenflowchart.page'
@Component({
  selector: 'app-chitietvanbanden',
  templateUrl: './chitietvanbanden.page.html',
  styleUrls: ['./chitietvanbanden.page.scss'],
  
})
export class ChitietvanbandenPage implements OnInit {
  vanbanden:any;
  LtsAllDanhMuc:any;
  public dataquery ={ID:0};
  total=0;
  ID:any;
  constructor(private authService:AuthenticationService, private route: ActivatedRoute,public modalController: ModalController) { }


  ngOnInit() {
  }
  ionViewDidEnter(){
    this.load();
  }
  load(){
    this.dataquery.ID = parseInt(this.route.snapshot.paramMap.get('vanbandenid'));
    this.authService.getVanBanDenByID(this.dataquery).subscribe(res =>{
      this.vanbanden = res["Data"];
      this.LtsAllDanhMuc=res["LtsAllDanhMuc"];
    });
  }
  async presentModaltrangthaicanhan(_id) {
    const modal = await this.modalController.create({
      component: CapnhattrangthaicanhanPage,
      componentProps: { id: _id }
    });
    modal.onDidDismiss()
    .then((data) => {
      if(data['data']!=null){
      this.vanbanden  = data['data']; 
      }
  });
    return await modal.present();
  }
  async presentModaltrangthaivb(_id) {
    const modal = await this.modalController.create({
      component: CapnhattrangthaivbPage,
      componentProps: { id: _id }
    });
    modal.onDidDismiss()
    .then((data) => {
      if(data['data']!=null){
      this.vanbanden  = data['data']; 
      }
  });
    return await modal.present();
  }

  async presentModalluonglc(_id) {
    const modal = await this.modalController.create({
      component: VanbandenflowchartPage,
      componentProps: { id: _id }
    });
  
    return await modal.present();
  }
}
