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
lstnguoidung:[{id:0,text:''}];

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private events: Events) { }

  ngOnInit() {
    this.congviecId = this.navParams.get('id');
    this.credentialsForm = this.formBuilder.group({
      Ten:['',[Validators.required, Validators.minLength(3)]],
      Ma:['',[]],
      NgayBatDau:['',[Validators.required]],
      HanXuLy:['',[Validators.required]],
      NoiDung:['',[]],
      DonViXuLy: ['',[]],
      NguoiXuLy: ['',[]],
      DonViPhoiHop: ['',[]],
      NguoiPhoiHop: ['',[]],
      CongViecTrangThaiItems: this.formBuilder.array([])
    });
    this.loadDonVi();
    this.loadnguoidung();
  }
  isBigEnough(element, index, array) {
      // this.selectedLst
      return (element >= 10); 
  } 

  removeChoose(lstRemove){
    // debugger;
    lstRemove.forEach((item) => { 
      this.CongViecTrangThaiItems.removeAt(
        this.CongViecTrangThaiItems.value.findIndex(c=>c.IsDauMoi == item.IsDauMoi && c.PhongBanID == item.PhongBanID && c.NguoiDungID == item.NguoiDungID)
      );
    });
  }

  addICongViecTrangThaiItems(selectedLst, isDauMoi, isDonVi){
    // debugger;
    this.CongViecTrangThaiItems = this.credentialsForm.get('CongViecTrangThaiItems') as FormArray;
    if(isDonVi){
      this.removeChoose(this.CongViecTrangThaiItems.value.filter(c=>c.IsDauMoi == isDauMoi && c.PhongBanID > 0));
    }
    else{
      this.removeChoose(this.CongViecTrangThaiItems.value.filter(c=>c.IsDauMoi == isDauMoi && c.NguoiDungID > 0)) ;
    }
    selectedLst.forEach((donviItem) => {
      var title ='',nguoiXuLy='',nguoiXulyId='',donViXuLy='',donViXuLyId='',hanXuLy=''
      title = isDonVi == true ? (isDauMoi == true? 'Đơn vị xử lý':'Đơn vị phối hợp'): (isDauMoi ==true? 'Người xử lý':'Người phối hợp')
      nguoiXulyId = isDonVi == false ?  donviItem.id: '';
      nguoiXuLy = isDonVi == false ? donviItem.text : '';
      donViXuLy =  isDonVi == true ? donviItem.Ten : '';
      donViXuLyId = isDonVi == true ? donviItem.ID : '';
      var CongViecTrangThaiItem =  this.formBuilder.group({
        Title: [title, []],
        NguoiDungText: [nguoiXuLy, []],
        NguoiDungID: [nguoiXulyId, []],
        PhongBanID: [donViXuLyId,[]],
        DonViText: [donViXuLy, []],
        IsDauMoi:  [isDauMoi, []],
        HanXuLy:   [this.credentialsForm.get('HanXuLy').value, [Validators.required]],
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
    debugger;
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

  verifyTag(str: string): boolean{
    return str !== 'ABC' && str.trim() !== '';
  }

  DonViXuLyChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    var listSelected = event.value;
    var donviItems = this.lstdonvi.filter(d=> listSelected.includes(d.ID));
    this.addICongViecTrangThaiItems(donviItems,true,true);
  }

  DonViPhoiHopChange(event: {
    component: IonicSelectableComponent,
    value: any
  })
  {
    var listSelected = event.value;
    var donviItems = this.lstdonvi.filter(d=> listSelected.includes(d.ID));
    this.addICongViecTrangThaiItems(donviItems,false,true);
  }

  NguoiXuLyChange(event: {
    component: IonicSelectableComponent,
    value: any
  })
  {
    var listSelected = event.value;
    var nguoidungItems = this.lstnguoidung.filter(d=> listSelected.includes(d.id));
    this.addICongViecTrangThaiItems(nguoidungItems,true,false);
  }

  NguoiPhoiHopChange(event: {
    component: IonicSelectableComponent,
    value: any
  })
  {
    var listSelected = event.value;
    var nguoidungItems = this.lstnguoidung.filter(d=> listSelected.includes(d.id));
    this.addICongViecTrangThaiItems(nguoidungItems,false,false);
  }

  triggerSumbit()
  {
    document.getElementById('submitForm').click(); 
  }
}
