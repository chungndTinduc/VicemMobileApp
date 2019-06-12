import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {VanbandiluongluanchuyenPage} from 'src/app/members/vanbandi/vanbandiluongluanchuyen/vanbandiluongluanchuyen.page'

@Component({
  selector: 'app-chitietvanbandi',
  templateUrl: './chitietvanbandi.page.html',
  styleUrls: ['./chitietvanbandi.page.scss'],
})
export class ChitietvanbandiPage implements OnInit {

  vanban:any;
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
    this.dataquery.ID = parseInt(this.route.snapshot.paramMap.get('vanbandiid'));
    this.authService.getVanBanDiByID(this.dataquery).subscribe(res =>{
      this.vanban = res["Data"];
      this.LtsAllDanhMuc=res["LtsAllDanhMuc"];
    });
  }
  async presentModalluonglc(_id) {
    const modal = await this.modalController.create({
      component: VanbandiluongluanchuyenPage,
      componentProps: { id: _id }
    });
  
    return await modal.present();
  }
}
