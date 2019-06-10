import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import {VanbandenformykienPage} from 'src/app/members/vanbanden/vanbandenformykien/vanbandenformykien.page'

@Component({
  selector: 'app-ykienvanbanden',
  templateUrl: './ykienvanbanden.page.html',
  styleUrls: ['./ykienvanbanden.page.scss'],
})
export class YkienvanbandenPage implements OnInit {

  lstobject:any;
  LtsAllDanhMuc:any;
  public dataquery ={VanBanID:0};
  total=0;
  ID:any;
  constructor(private authService:AuthenticationService, private route: ActivatedRoute,public modalController: ModalController) { }


  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.load();
  }
  // ionViewWillEnter(){
  //   this.load();
  // }
  load(){
   
    this.dataquery.VanBanID = parseInt(this.route.snapshot.paramMap.get('vanbandenid'));
    this.authService.getYKienVanBanDen(this.dataquery).subscribe(res =>{
      this.lstobject = res["Data"];   
  
    });
  }
  async presentModal(_id) {
    const modal = await this.modalController.create({
      component: VanbandenformykienPage,
      componentProps: { id: _id }
    });
    return await modal.present();
  }
}
