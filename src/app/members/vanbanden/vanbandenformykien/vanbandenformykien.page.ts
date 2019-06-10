import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder,ReactiveFormsModule  } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicSelectableComponent } from 'src/app/members/components/ionic-selectable/ionic-selectable.module'
import { ActivatedRoute } from '@angular/router';
import {YkienvanbandenPage} from 'src/app/members/vanbanden/ykienvanbanden/ykienvanbanden.page'

@Component({
  selector: 'app-vanbandenformykien',
  templateUrl: './vanbandenformykien.page.html',
  styleUrls: ['./vanbandenformykien.page.scss'],
})
export class VanbandenformykienPage implements OnInit {
  public dataquery ={VanBanID:0};
  credentialsForm: FormGroup;
  lstdonvi:any;
  donvi:{ID:0,Ten:''};
  donviph:{ID:0,Ten:''};
  donvixem:{ID:0,Ten:''};
  lstnguoidung:any;
  nguoidung:any;
  nguoidungph:any;
  nguoidungxem:any;
  VanBanID:Number
  lstdata:any
  tags = ['Ionic', 'Angular', 'TypeScript'];
  constructor(  private navParams: NavParams,
    private modalController: ModalController,   
    private formBuilder: FormBuilder,    
    private authService: AuthenticationService,
    private events: Events,
    private route: ActivatedRoute,
    //private YkienvanbandenPage: YkienvanbandenPage
    ) { 
    }
    private YkienvanbandenPage: YkienvanbandenPage
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      VanBanID: this.navParams.get('id'),
      strNoiDung:['',[ Validators.minLength(3)]],   
      strLtsDonViDauMoi:[],  
      strLtsDonViPhoiHop:[], 
      strLtsDonViXem:[], 
      strLtsNguoiDungDauMoi:[],
      strLtsNguoiDungPhoiHop:[],
      strLtsNguoiDungNhan:[],
      strHanXuLy:[],
    });  
    
    this.loadDonVi();
    this.loadnguoidung();
    this.dataquery.VanBanID=this.navParams.get('id');
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
    this.authService.postVanBanDenykien(this.credentialsForm.value).subscribe(res => {
      this.closePopupupdate();
    });
  }
  portChangeDonvi(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value[0].ID);
  }
  async closePopup(){
   
       this.modalController.dismiss();
  }

  async closePopupupdate(){
    this.authService.getYKienVanBanDen(this.dataquery).subscribe(res =>{
      this.lstdata = res["Data"];  
      this.modalController.dismiss(this.lstdata);
     });
 }
}
