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
  public dataquery = {CurrentPage:1,RowPerPage:10,SearchIn:'Ten,NoiDung',Keyword:''};

  constructor(private authService:AuthenticationService,public modalController: ModalController) { }

  ngOnInit() {
  
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
    return await modal.present();
  }
}
