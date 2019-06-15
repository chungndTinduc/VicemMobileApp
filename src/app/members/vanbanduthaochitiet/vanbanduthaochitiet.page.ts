import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {FormtrinhlanhdaoPage} from 'src/app/members/vanbanduthao/formtrinhlanhdao/formtrinhlanhdao.page'
import {KethucduthaoPage} from 'src/app/members/vanbanduthao/kethucduthao/kethucduthao.page'
 import {ChuyenphathanhPage} from 'src/app/members/vanbanduthao/chuyenphathanh/chuyenphathanh.page'
@Component({
  selector: 'app-vanbanduthaochitiet',
  templateUrl: './vanbanduthaochitiet.page.html',
  styleUrls: ['./vanbanduthaochitiet.page.scss',],
})
export class VanbanduthaochitietPage implements OnInit {
  vanban:any;
  LtsAllDanhMuc:any;
  TrangThaiCaNhanID:any;
  strNguoiNhan:string;
   DonViNhan:string;
  strNoiNhanbenNgoai:string;
  TrangThaiVanBan:string;
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
    this.dataquery.ID = parseInt(this.route.snapshot.paramMap.get('vanbanduthaoid'));
    this.authService.getVanBanDuThaobyID(this.dataquery).subscribe(res =>{
      this.vanban = res["Data"];
      this.LtsAllDanhMuc=res["LtsAllDanhMuc"];
      this.TrangThaiCaNhanID=res["TrangThaiCaNhanID"];
      this.strNguoiNhan=res["strNguoiNhan"];
      this.strNoiNhanbenNgoai=res["strNoiNhanbenNgoai"];
      this.DonViNhan=res["strDonViNhan"];
      this.TrangThaiVanBan=res["TrangThaiVanBan"];
      
    });
  }
  async presentModaltrinh(_id) {
    const modal = await this.modalController.create({
      component: FormtrinhlanhdaoPage,
      componentProps: { id: _id }
    });
  
    return await modal.present();
  }
  async presentModalketthuc(_id) {
    const modal = await this.modalController.create({
      component: KethucduthaoPage,
      componentProps: { id: _id }
    });
    modal.onDidDismiss()
    .then((data) => {
      if(data['data']!=null){
      this.vanban  = data['data']; 
      }
  });
    return await modal.present();
  }
  async presentModalchuyenph(_id) {
    const modal = await this.modalController.create({
      component: ChuyenphathanhPage,
      componentProps: { id: _id }
    });
    modal.onDidDismiss()
    .then((data) => {
      if(data['data']!=null){
      this.vanban  = data['data']; 
      }
  });
    return await modal.present();
  }
}
