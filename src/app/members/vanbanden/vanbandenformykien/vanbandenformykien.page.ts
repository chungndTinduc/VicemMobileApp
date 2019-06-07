import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder,ReactiveFormsModule  } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicSelectableComponent } from 'src/app/members/components/ionic-selectable/ionic-selectable.module'

@Component({
  selector: 'app-vanbandenformykien',
  templateUrl: './vanbandenformykien.page.html',
  styleUrls: ['./vanbandenformykien.page.scss'],
})
export class VanbandenformykienPage implements OnInit {
  credentialsForm: FormGroup;
  lstdonvi:any;
  donvi:{ID:0,Ten:''};
  donviph:{ID:0,Ten:''};
  donvixem:{ID:0,Ten:''};
  lstnguoidung:any;
  nguoidung:any;
  tags = ['Ionic', 'Angular', 'TypeScript'];
  constructor(  private navParams: NavParams,
    private modalController: ModalController,   
    private formBuilder: FormBuilder,    
    private authService: AuthenticationService,
    private events: Events
    ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      NoiDung:['',[ Validators.minLength(3)]],   
      strLtsDonViDauMoi:[''],  
      strLtsDonViPhoiHop:[''], 
      strLtsDonViXem:[''], 
      strLtsNguoiDungDauMoi:[''],
      strLtsNguoiDungPhoiHop:[''],
      strLtsNguoiDungNhan:[''],
      strHanXuLy:['']
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
  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe(res => {
      console.log('login thanh công.');
      this.events.publish('user:login');
    });
  }
  portChangeDonvi(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value[0].ID);
  }
  closePopup(){
    this.modalController.dismiss();
  }
}
