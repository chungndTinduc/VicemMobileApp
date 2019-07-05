import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {ViewfilePage} from 'src/app/members/viewfile/viewfile.page'
@Component({
  selector: 'app-chitietcongviec',
  templateUrl: './chitietcongviec.page.html',
  styleUrls: ['./chitietcongviec.page.scss'],
})
export class ChitietcongviecPage implements OnInit {
  congViec={TrangThai:0,LtsDanhMucGiaTri:[]};
  danhMucTens:any;
  labelTrangThai:any;
  TienDoCongViec=0;
  ThanhPhanThamGiaCongViecs=[];
  VanBanDuThaos=[];
  YKienXuLys=[];
  ThongTinGiaHans=[];
  constructor(private authService:AuthenticationService, private route: ActivatedRoute,public modalController: ModalController) {
   }

  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.loadData();
  }
  loadData()
  {
    var congViecId  = parseInt(this.route.snapshot.paramMap.get('congviecid'));
    if(congViecId){
        this.authService.getCongViec({Id:congViecId}).subscribe(res =>{
        this.congViec = res["Data"];
        this.loadDanhMucGiaTri(this.congViec.LtsDanhMucGiaTri);
        this.tienDoCongViec(this.congViec);
      });
      this.loadThanhPhanThamGiaCongViec(congViecId);
      this.loadVanBanDuThao(congViecId);
      this.loadYKienXuLy(congViecId);
      this.loadThongTinGiaHan(congViecId);
    }
  }

  loadDanhMucGiaTri(LtsDanhMucGiaTri){
    this.authService.getAllDanhMucCongViec(null).subscribe(res =>{
       var result= res["Data"];
        if(result && LtsDanhMucGiaTri){
          var lstResult = [];
            result.forEach(function(danhMucTenItem) {
              var danhMucGiaTriItem = {Ten:'',Value:''}
                  danhMucGiaTriItem.Ten = danhMucTenItem.Ten;
                    if(danhMucTenItem.LtsDanhMucGiaTri)
                      danhMucTenItem.LtsDanhMucGiaTri.forEach(function(item) {
                          if(LtsDanhMucGiaTri.filter(c=>c.ID == item.ID).length > 0){
                            danhMucGiaTriItem.Value = item.Ten;
                          }
                      });
                  lstResult.push(danhMucGiaTriItem);
            });
            this.danhMucTens = lstResult;
        }
    });
  }
  
  tienDoCongViec(objCongViec){
    if(objCongViec.LtsTienDoCongViec && objCongViec.LtsTienDoCongViec.length > 0)
    {
      var tiendo = objCongViec.LtsTienDoCongViec[objCongViec.LtsTienDoCongViec.length -1];
      this.TienDoCongViec = tiendo > 100? 100:tiendo;
    }
  }
loadThanhPhanThamGiaCongViec(congViecId){
  this.authService.getThanPhanThamGiaCongViec({congViecId:congViecId}).subscribe(res =>{
    this.ThanhPhanThamGiaCongViecs = res["Data"];
  });
}

loadVanBanDuThao(congViecId){
  this.authService.loadVanBanDuThao({congViecId:congViecId}).subscribe(res =>{
    this.VanBanDuThaos = res["Data"];
  });
}
loadYKienXuLy(congViecId){
  this.authService.loadYKienXuLy({congViecId:congViecId}).subscribe(res =>{
    this.YKienXuLys = res["Data"];
  });
}

loadThongTinGiaHan(congViecId){
  this.authService.loadThongTinGiaHan({congViecId:congViecId}).subscribe(res =>{
    this.ThongTinGiaHans = res["Data"];
  });
}
async presentModalviewfile(_linkfile) {
    const modal = await this.modalController.create({
      component: ViewfilePage,
      componentProps: { filelink: _linkfile }
    });
    return await modal.present();
  }
}
