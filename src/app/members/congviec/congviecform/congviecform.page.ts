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
donViXulyObj=[
  {value: 'Văn phòng', id: 1, extra: 1},
  {value: 'Phòng Công nghệ thông tin', id: 2, extra: 1},
  {value: 'Phòng tài chính', id: 3, extra: 1},
  {value: 'Ban lãnh đạo', id: 4, extra: 1}
];
nguoiXuLyObj=[
  {value: 'Hoàng Văn Dũng', id: 1, extra: 1},
  {value: 'Lê Hồng Quân', id: 2, extra: 1},
  {value: 'Đặng Văn Bổng', id: 3, extra: 1},
  {value: 'Nguyễn Thế Công', id: 4, extra: 1}
];
donViPhoiHopObj=[
  {value: 'Văn phòng', id: 1, extra: 1},
  {value: 'Phòng Công nghệ thông tin', id: 2, extra: 1},
  {value: 'Phòng tài chính', id: 3, extra: 1},
  {value: 'Ban lãnh đạo', id: 4, extra: 1}
];
nguoiPhoiHopObj=[
  {value: 'Hoàng Văn Dũng', id: 1, extra: 1},
  {value: 'Lê Hồng Quân', id: 2, extra: 1},
  {value: 'Đặng Văn Bổng', id: 3, extra: 1},
  {value: 'Nguyễn Thế Công', id: 4, extra: 1}
];
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
  }
  closePopup(){
    this.modalController.dismiss();
  }
  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe(res => {
      console.log('login thanh công.');
      this.events.publish('user:login');
    });
  }

  verifyTag(str: string): boolean{
    return str !== 'ABC' && str.trim() !== '';
  }
 
}
