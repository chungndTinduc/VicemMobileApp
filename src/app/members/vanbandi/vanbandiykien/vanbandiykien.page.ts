import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {VanbandiformykienPage} from 'src/app/members/vanbandi/vanbandiformykien/vanbandiformykien.page'

@Component({
  selector: 'app-vanbandiykien',
  templateUrl: './vanbandiykien.page.html',
  styleUrls: ['./vanbandiykien.page.scss'],
})
export class VanbandiykienPage implements OnInit {
  lstobject:any;
  LtsAllDanhMuc:any;
  public dataquery ={VanBanID:0};
  total=0;
  ID:any;
  constructor(
    private authService:AuthenticationService, private route: ActivatedRoute,public modalController: ModalController
  ) { }

  ngOnInit() {
    this.load();
  }
  load(){
    this.dataquery.VanBanID = parseInt(this.route.snapshot.paramMap.get('vanbandiid'));
    this.authService.getvanbandiykien(this.dataquery).subscribe(res =>{
      this.lstobject = res["Data"];   
    });
  }
  async presentModal(_id) {
    const modal = await this.modalController.create({
      component: VanbandiformykienPage,
      componentProps: { id: _id }
    });
    modal.onDidDismiss()
    .then((data) => {
      if(data['data']!=null){
      this.lstobject  = data['data']; 
      }
  });
    return await modal.present();
  }
}
