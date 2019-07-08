import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder,FormArray  } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IonicSelectableComponent } from 'src/app/members/components/ionic-selectable/ionic-selectable.module'
@Component({
  selector: 'app-congviecform',
  templateUrl: './congviecform.page.html',
  styleUrls: ['./congviecform.page.scss'],
  providers: []
})
export class CongviecformPage implements OnInit {
congviecId = null;
credentialsForm: FormGroup;
CongViecTrangThaiItems: FormArray;
lstdonvi:[{ID:0,Ten:''}];
lstnguoidung:[{ID:0,Ten:''}];

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private events: Events) { }

  ngOnInit() {
    this.congviecId = this.navParams.get('id');

    
    this.loadDonVi();
    this.loadnguoidung();
  }


  initCongViecForm(congViecItem){
    this.credentialsForm = this.formBuilder.group({
      Ten:[congViecItem ? congViecItem.Ten : '',[Validators.required, Validators.minLength(3)]],
      Ma:[congViecItem ? congViecItem.Ma : '',[]],
      NgayBatDau:[congViecItem ? congViecItem.NgayBatDau : '',[Validators.required]],
      HanXuLy:[congViecItem ? congViecItem.HanXuLy : '',[Validators.required]],
      NoiDung:[congViecItem ? congViecItem.NoiDung : '',[]],
      DonViXuLy: [congViecItem && congViecItem.LtsDonViXuLy ? congViecItem.LtsDonViXuLy.map(c=>c.ID) : '',[]],
      NguoiXuLy: [congViecItem && congViecItem.LtsNguoiXuLy ? congViecItem.LtsNguoiXuLy.map(c=>c.ID) : '',[]],
      DonViPhoiHop: [congViecItem && congViecItem.LtsDonViPhoiHop ? congViecItem.LtsDonViPhoiHop.map(c=>c.ID) : '',[]],
      NguoiPhoiHop: [congViecItem && congViecItem.LtsNguoiPhoiHop ? congViecItem.LtsNguoiPhoiHop.map(c=>c.ID) : '',[]],
      CongViecTrangThaiItems: this.formBuilder.array([])
    });
    if(congViecItem){
      
    }
  }
  getCongViecById(congViecId){
    this.authService.getCongViec(congViecId).subscribe(res => {
          if(res["StatusCode"] == 0)
          {
            
          }  
    });
  }

  //xóa những thành phần đã chọn
  removeChoose(lstRemove){
    lstRemove.forEach((item) => { 
      this.CongViecTrangThaiItems.removeAt(
        this.CongViecTrangThaiItems.value.findIndex(c=>c.IsDauMoi == item.IsDauMoi && c.PhongBanID == item.PhongBanID && c.NguoiDungID == item.NguoiDungID)
      );
    });
  }

  addThanhPhanThamGiaItems(selectedLst, isDauMoi, isDonVi){
    this.CongViecTrangThaiItems = this.credentialsForm.get('CongViecTrangThaiItems') as FormArray;
    //xóa thành phần đã chọn trước đó
    if(isDonVi){
      this.removeChoose(this.CongViecTrangThaiItems.value.filter(c=>c.IsDauMoi == isDauMoi && c.PhongBanID > 0));
    }
    else{
      this.removeChoose(this.CongViecTrangThaiItems.value.filter(c=>c.IsDauMoi == isDauMoi && c.NguoiDungID > 0)) ;
    }
    //update thành phần mới chọn
    selectedLst.forEach((donviItem) => {
      var title ='',nguoiXuLy='',nguoiXulyId='',donViXuLy='',donViXuLyId='',hanXuLy=''
      title = isDonVi == true ? (isDauMoi == true? 'Đơn vị xử lý':'Đơn vị phối hợp'): (isDauMoi ==true? 'Người xử lý':'Người phối hợp')
      nguoiXulyId = isDonVi == false ?  donviItem.ID: '';
      nguoiXuLy = isDonVi == false ? donviItem.Ten : '';
      donViXuLy =  isDonVi == true ? donviItem.Ten : '';
      donViXuLyId = isDonVi == true ? donviItem.ID : '';
      var CongViecTrangThaiItem =  this.formBuilder.group({
        Title: [title, []],
        NguoiDungText: [nguoiXuLy, []],
        NguoiDungID: [nguoiXulyId, []],
        PhongBanID: [donViXuLyId,[]],
        DonViText: [donViXuLy, []],
        IsDauMoi:  [isDauMoi, []],
        HanXuLy:   [donviItem && donviItem.HanXuLy ? donviItem.HanXuLy : this.credentialsForm.get('HanXuLy').value, [Validators.required]],
      })
      this.CongViecTrangThaiItems.push(CongViecTrangThaiItem);
    });
  }

  loadnguoidung(){
    this.authService.getnguoiDungXuLy().subscribe(res =>{
      this.lstnguoidung = res["Data"];
    });
  }

  loadDonVi(){
    this.authService.getAllDonVi().subscribe(res =>{
      this.lstdonvi = res["Data"];
    });
  }

  closePopup(){
    this.modalController.dismiss();
  }

  onSubmit() {
    if (this.credentialsForm.dirty && this.credentialsForm.valid) {
      this.authService.postCongViec(this.credentialsForm.value).subscribe(res => {
        if(res["StatusCode"] == 0){
          this.authService.presentToastSuccess(res["Data"]);
          this.modalController.dismiss("true");
        }
      });
    }else{
      this.authService.presentToastFail('Mời bạn nhập đầy đủ thông tin');
    }
  }

  DonViXuLyChange(event: {
    component: IonicSelectableComponent,
    value: any}) 
    {
    var listSelected = event.value;
    var donviItems = this.lstdonvi.filter(d=> listSelected.includes(d.ID));
    this.addThanhPhanThamGiaItems(donviItems,true,true);
    }

  DonViPhoiHopChange(event: {
    component: IonicSelectableComponent,
    value: any})
    {
      var listSelected = event.value;
      var donviItems = this.lstdonvi.filter(d=> listSelected.includes(d.ID));
      this.addThanhPhanThamGiaItems(donviItems,false,true);
    }

  NguoiXuLyChange(event: {
    component: IonicSelectableComponent,
    value: any})
    {
      var listSelected = event.value;
      var nguoidungItems = this.lstnguoidung.filter(d=> listSelected.includes(d.ID));
      this.addThanhPhanThamGiaItems(nguoidungItems,true,false);
    }

  NguoiPhoiHopChange(event: {
    component: IonicSelectableComponent,
    value: any})
    {
      var listSelected = event.value;
      var nguoidungItems = this.lstnguoidung.filter(d=> listSelected.includes(d.ID));
      this.addThanhPhanThamGiaItems(nguoidungItems,false,false);
    }

  triggerSumbit()
    {
      document.getElementById('submitForm').click(); 
    }
}
