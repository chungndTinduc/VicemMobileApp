import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalController } from '@ionic/angular';
import {CongviecformPage} from 'src/app/members/congviec/congviecform/congviecform.page'
@Component({
  selector: 'app-danhsach',
  templateUrl: './danhsach.page.html',
  styleUrls: ['./danhsach.page.scss'],
})
export class DanhsachPage implements OnInit {
  danhSach:any;
  total:0;
  pageIndex:any;
  CurrentUser={};
  public dataquery = {CurrentPage:1,RowPerPage:10,SearchIn:'Ten,NoiDung',Keyword:''};

  constructor(private authService:AuthenticationService,public modalController: ModalController) { }

ngOnInit() {
    if(this.authService.currentUser!=null){
      this.CurrentUser = this.authService.currentUser
    }
  }

ionViewDidEnter(){
     this.load(null);
  }
  
//load danh sách
load(refresher){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getDanhSachCongViec(this.dataquery).subscribe(res =>{
      this.danhSach = res["Data"];
      this.total=res["Total"];
      if(refresher){
        refresher.target.complete();
      }
      return true;
    });
  }
// load thêm danh sách 
async doInfinite(infiniteScroll) {
    await this.authService.delay(300);
    if (this.dataquery.CurrentPage == 1)
        this.dataquery.CurrentPage  = 2;     
        if((this.dataquery.CurrentPage * this.dataquery.RowPerPage)<this.total){
        this.authService.getDanhSachCongViec(this.dataquery).subscribe(res =>{          
          for (var j = 0; j < res["Data"].length; j++) {
            this.danhSach.push(res["Data"][j])
          }
        });
        this.dataquery.CurrentPage  = this.dataquery.CurrentPage  + 1;
      }
      infiniteScroll.target.complete();
  }

  //load danh sách khi search
  onKeyPressed= function(keyEvent) {
    if (keyEvent.keyCode == 13) {
      this.load(null);
    }
  };

async presentModal(_id) {
    const modal = await this.modalController.create({
      component: CongviecformPage,
      componentProps: { id: _id }
    });

    modal.onDidDismiss()
    .then((data) => {
      if(data['data']!= null){
        this.load(null);
      }
    });
    return await modal.present();
  }

  deleteCongViec(congviecId){
    this.authService.showConfirm('Bạn có muốn xóa công việc này?').then((confirm) => {
      if(confirm.data){
        this.authService.xoaCongViec({congViecId:congviecId}).subscribe(res =>{     
            if(res["StatusCode"]==0)
                if(res["Data"]==1){
                  this.authService.presentToastSuccess('Xóa bản ghi thành công');
                  this.load(null);
                  return;
                }
            this.authService.presentToastFail('Đã có lỗi xảy ra.');
        });
      }
    })
  }

  async presentModalGiaoViecTiep(_id) {
    const modal = await this.modalController.create({
      component: CongviecformPage,
      componentProps: { congviecchaId: _id }
    });

    modal.onDidDismiss()
    .then((data) => {
      if(data['data']!= null){
        this.load(null);
      }
    });
    return await modal.present();
  }


}
