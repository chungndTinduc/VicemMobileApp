import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Response } from 'selenium-webdriver/http';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-formtrinhlanhdao',
  templateUrl: './formtrinhlanhdao.page.html',
  styleUrls: ['./formtrinhlanhdao.page.scss'],
})
export class FormtrinhlanhdaoPage implements OnInit {
  public dataquery =  {VanBanID:this.navParams.get('id'),};
public LstLanhDao:any;
public LstLanhDaolienquan:any;
public LstPhongban:any;
credentialsForm: FormGroup;
myDate: String = new Date().toISOString();
lanhdao:any;
lanhdaolq:any;
donvi:any;
  constructor(private authService:AuthenticationService,private navParams: NavParams,    private formBuilder: FormBuilder,
    private modalController: ModalController) { }

  ngOnInit() {
    this.load();
    this.credentialsForm = this.formBuilder.group({
      VanBanID: this.navParams.get('id'),
      strNoiDung:['',[ Validators.minLength(3)]],   
      LanhDaoTrinhID:[],  
      strPhongBanLienQuan:[], 
      NoiDung:[], 
      NgayTrinh:[],
    });  
  }
  load(){
    this.authService.getlanhdaotrinhduthao(this.dataquery).subscribe(res =>{
      this.LstLanhDao = res["Data"];
      this.LstLanhDaolienquan=res["LstNguoiDung"];
      this.LstPhongban=res["LstDonVi"]
      return true;
    });
  }
  onSubmit() {
    this.authService.postTrinhvanbanduthao(this.credentialsForm.value).subscribe(res => {
      this.closePopup();
    });
  }
  async closePopup(){
   
       this.modalController.dismiss();
  }


}
