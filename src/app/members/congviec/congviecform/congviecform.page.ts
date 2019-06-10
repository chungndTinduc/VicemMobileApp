import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-congviecform',
  templateUrl: './congviecform.page.html',
  styleUrls: ['./congviecform.page.scss'],
  providers: []
})
export class CongviecformPage implements OnInit {
congviecId = null;
credentialsForm: FormGroup;
lstdonvi:[];
lstnguoidung:[];

  constructor(private navParams: NavParams,
    private modalController: ModalController,   
    private formBuilder: FormBuilder,    
    private authService: AuthenticationService,
    private events: Events) { }

  ngOnInit() {
    this.congviecId = this.navParams.get('id');
    this.credentialsForm = this.formBuilder.group({
      Ten:['',[Validators.required, Validators.minLength(3)]],
      Ma:['',[Validators.required, Validators.minLength(3)]],
      NgayBatDau:['',[Validators.required]],
      NgayKetThuc:['',[Validators.required]],
      NoiDung:['',[]],
      DonViXuLy: ['',[]],
      NguoiXuLy: ['',[]],
      DonViPhoiHop: ['',[]],
      NguoiPhoiHop: ['',[]],
    });
    this.loadDonVi();
    this.loadnguoidung();
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
    this.authService.postCongViec(this.credentialsForm.value).subscribe(res => {
      if(res["StatusCode"] == 0){
        this.authService.presentToastSuccess(res["Data"]);
      }else{
        this.authService.presentToastFail("Đã có lỗi xảy ra");
      }
    
    });
  }

  verifyTag(str: string): boolean{
    return str !== 'ABC' && str.trim() !== '';
  }

 
}
