import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Response } from 'selenium-webdriver/http';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-kethucduthao',
  templateUrl: './kethucduthao.page.html',
  styleUrls: ['./kethucduthao.page.scss'],
})
export class KethucduthaoPage implements OnInit {
  public dataquery =  {VanBanID:this.navParams.get('id'), ID: this.navParams.get('id'), };
  public vanban:any;
  credentialsForm: FormGroup;
  constructor(private authService:AuthenticationService,private navParams: NavParams,    private formBuilder: FormBuilder,
    private modalController: ModalController) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      VanBanID: this.navParams.get('id'),  
      NoiDung:['',[ Validators.minLength(3)]], 

    });  
  }
  onSubmit() {
    this.authService.postketthucbanduthao(this.credentialsForm.value).subscribe(res => {
      this.closePopupupdate();
    });
  }
  async closePopup(){
    this.modalController.dismiss();
}
async closePopupupdate(){
  this.authService.getVanBanDuThaobyID(this.dataquery).subscribe(res =>{
    this.vanban = res["Data"];  
    this.modalController.dismiss(this.vanban);
   });
}
}
