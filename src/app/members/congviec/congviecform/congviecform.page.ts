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
lstnguoidung:[{ID:0,text:''}];

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
      NgayKetThuc:['',[Validators.required]],
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

  addICongViecTrangThaiItems(title,nguoiXuLy,nguoiXulyId,donViXuLy,donViXuLyId,isDauMoi,hanXuLy){
    var CongViecTrangThaiItem =  this.formBuilder.group({
      Title: [title, []],
      NguoiDungText: [nguoiXuLy, []],
      NguoiDungID: [nguoiXulyId, []],
      DonViID: [donViXuLyId,[]],
      DonViText: [donViXuLy, []],
      IsDauMoi:  [isDauMoi, []],
      HanXuLy:   [hanXuLy, [Validators.required]],
    })
    this.CongViecTrangThaiItems = this.credentialsForm.get('CongViecTrangThaiItems') as FormArray;
    this.CongViecTrangThaiItems.push(CongViecTrangThaiItem);
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
    if(donviItems){
      donviItems.forEach( (donviItem) => {
        this.addICongViecTrangThaiItems('Đơn vị xử lý','','',donviItem.Ten,donviItem.ID,1,'');
    });
    }

   

  }

  DonViPhoiHopChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) 
  {
    console.log('Don vi phoi hop', event.value.join(","));
  }
 
  NguoiXuLyChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) 
  {
    console.log('nguoi xu ly', event.value.join(","));
  }
  
  NguoiPhoiHopChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) 
  {
    console.log('nguoi phoi hop', event.value.join(","));
  }
  triggerSumbit() 
  {
    document.getElementById('submitForm').click(); // doesn't work
  }
}
