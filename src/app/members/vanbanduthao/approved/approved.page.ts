import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Response } from 'selenium-webdriver/http';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.page.html',
  styleUrls: ['./approved.page.scss'],
})
export class ApprovedPage implements OnInit {
  public dataquery =  {VanBanID:this.navParams.get('id'),ID:this.navParams.get('id')};
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
    this.authService.postapprovedduthao(this.credentialsForm.value).subscribe(res => {
      this.closePopupupdate();
    });
  }
  async closePopup(){
   
       this.modalController.dismiss();
  } 
  async closePopupupdate(){
    this.authService.getVanBanDuThaobyID(this.dataquery).subscribe(res =>{
      this.modalController.dismiss(res["Data"]);
     });
 }

}
