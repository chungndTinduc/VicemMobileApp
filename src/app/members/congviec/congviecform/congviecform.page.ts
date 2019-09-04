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
danhMucTens:any;
congviecId = 0;
congviecchaId = 0;
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
    this.initCongViecForm(null);
    this.congviecId = this.navParams.get('id');
    this.congviecchaId = this.navParams.get('congviecchaId');
    
      this.loadDanhMucGiaTri();
      this.loadDonVi();
      this.loadnguoidung();
      if(this.congviecId)
      //khởi tạo form khi cập nhật công việc
         this.getCongViecById(this.congviecId);
      if(this.congviecchaId){

      }
  }

  initCongViecForm(congViecItem){

    this.credentialsForm = this.formBuilder.group({
      ID:['',[]],
      Ten:['',[Validators.required, Validators.minLength(3)]],
      Ma:['',[]],
      NgayBatDau:['',[Validators.required]],
      HanXuLy:['',[Validators.required]],
      NoiDung:['',[]],
      DonViXuLy: ['',[]],
      NguoiXuLy: ['',[]],
      DonViPhoiHop: ['',[]],
      NguoiPhoiHop: ['',[]],
      DanhMucGiaTriID: ['',[]],
      CongViecChaID: [this.congviecchaId,[]],
      CongViecTrangThaiItems: this.formBuilder.array([])
    });

    if(congViecItem){
      var donViXuLy = congViecItem && congViecItem.LtsDonViXuLy ? congViecItem.LtsDonViXuLy.map(c=>c.ID) : '';
      var nguoiXuLy = congViecItem && congViecItem.LtsNguoiXuLy ? congViecItem.LtsNguoiXuLy.map(c=>c.ID) : '';
      var donViPhoiHop =  congViecItem && congViecItem.LtsDonViPhoiHop ? congViecItem.LtsDonViPhoiHop.map(c=>c.ID) : '';
      var nguoiPhoiHop = congViecItem && congViecItem.LtsNguoiPhoiHop ? congViecItem.LtsNguoiPhoiHop.map(c=>c.ID) : '';
      this.credentialsForm.patchValue({
          ID: congViecItem ? congViecItem.ID : '', 
          Ten: congViecItem ? congViecItem.Ten : '', 
          Ma: congViecItem ? congViecItem.Ma : '', 
          NgayBatDau: congViecItem ? congViecItem.NgayBatDau : '', 
          HanXuLy: congViecItem ? congViecItem.HanXuLy : '', 
          NoiDung: congViecItem ? congViecItem.NoiDung : '', 
          DonViXuLy: donViXuLy, 
          NguoiXuLy: nguoiXuLy, 
          DonViPhoiHop:donViPhoiHop, 
          NguoiPhoiHop:nguoiPhoiHop ,
          DanhMucGiaTriID:congViecItem ? congViecItem.DanhMucGiaTriID : '',
          CongViecChaID:congViecItem ? congViecItem.CongViecChaID : '', 
      });
      //Danh sách đơn vị xử lý
      this.addThanhPhanThamGiaItems(congViecItem && congViecItem.LtsDonViXuLy ? congViecItem.LtsDonViXuLy:[],true,true);
      //Danh sách người xử lý
      this.addThanhPhanThamGiaItems(congViecItem && congViecItem.LtsNguoiXuLy ? congViecItem.LtsNguoiXuLy:[],true,false);
      //Danh sách Đơn vị phối hợp
      this.addThanhPhanThamGiaItems(congViecItem && congViecItem.LtsDonViPhoiHop ? congViecItem.LtsDonViPhoiHop:[],false,true);
      //Danh sách người phối hợp
      this.addThanhPhanThamGiaItems(congViecItem && congViecItem.LtsNguoiPhoiHop ? congViecItem.LtsNguoiPhoiHop:[],false,false);
    }
  }
  getCongViecById(congViecId){
    this.authService.getCongViec({Id:congViecId}).subscribe(res => {
          if(res["StatusCode"] == 0)
          {
            this.initCongViecForm(res["Data"]);
            this.checkDanhMucGiaTriByCongViec(res["Data"].LtsDanhMucGiaTri);
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
  loadDanhMucGiaTri(){
    this.authService.getAllDanhMucCongViec(null).subscribe(res =>{
      this.danhMucTens= res["Data"];
    });
  }
  closePopup(){
    this.modalController.dismiss();
  }
  // Lưu công việc
  onSubmit() {
    if ( this.credentialsForm.valid) {
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

  triggerSumbit()
  {
    document.getElementById('submitForm').click(); 
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

  

  //check change danh mục giá trị 
  danhMucGiaTriOnChange(newChoose){
    if(!newChoose)return;
    var lstDanhMucGiaTri =[];
    newChoose = newChoose.detail.value;
    this.danhMucTens.forEach(function(item,index){
          var danhmucgiatri = item.LtsDanhMucGiaTri.map(c=>c.ID);
          if(danhmucgiatri.includes(newChoose)){
            item.Selected = newChoose;
          }
          if(item.Selected)
           lstDanhMucGiaTri.push(item.Selected);
    });
    this.credentialsForm.patchValue({
      DanhMucGiaTriID:lstDanhMucGiaTri
    });
  }
  // check danh mục giá trị của công việc đã được chọn
  checkDanhMucGiaTriByCongViec(LtsDanhMucGiaTri){
    var lstDanhMucGiaTri =[];
       if(this.danhMucTens && LtsDanhMucGiaTri){
         this.danhMucTens.forEach(function(danhMucTenItem) {
             if(danhMucTenItem.LtsDanhMucGiaTri)
                 danhMucTenItem.LtsDanhMucGiaTri.forEach(function(item) {
                   if(LtsDanhMucGiaTri.filter(c=>c.ID == item.ID).length > 0){
                       danhMucTenItem.Selected = item.ID;
                       }
                   });
             if(danhMucTenItem.Selected)
               lstDanhMucGiaTri.push(danhMucTenItem.Selected);
           });
           this.credentialsForm.patchValue({
             DanhMucGiaTriID:lstDanhMucGiaTri
           });
       }
 }
}
