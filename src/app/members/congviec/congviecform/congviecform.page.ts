import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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
  @ViewChild('hiddenButton') hiddenButton:ElementRef;
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
      }
    
    });
  }

  verifyTag(str: string): boolean{
    return str !== 'ABC' && str.trim() !== '';
  }

  DonViXuLyChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('don vi xu ly', event.value.join(","));
  }

  DonViPhoiHopChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('Don vi phoi hop', event.value.join(","));
  }
 
  NguoiXuLyChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('nguoi xu ly', event.value.join(","));
  }
  
  NguoiPhoiHopChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('nguoi phoi hop', event.value.join(","));
  }

  
  triggerSumbit() {
    document.getElementById('submitForm').click(); // doesn't work
}
}
